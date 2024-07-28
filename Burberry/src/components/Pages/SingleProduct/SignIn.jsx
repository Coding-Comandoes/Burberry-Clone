import React, { useState, useEffect } from 'react';
import './signin.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Burberry from '../components/Burberry.png';

export default function SignIn() {
  const [user, setUser] = useState([]);

  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const [open, setOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

  async function getData() {
    try {
      let res = await fetch("http://localhost:3000/user", {
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      let data = await res.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  async function pushData() {
    // Proceed with creating the new user
    let obj = {
      id: Date.now() + Math.random(),
      country,
      gender,
      firstName,
      lastName,
      email,
      password,
      phone,
      signinEmail,
      signinPassword
    };
  
    let res = await fetch('http://localhost:3000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });
  
    let data = await res.json();
    console.log(data);
    console.log(obj);
    setUser(prevUser => [...prevUser, data]);
    //alert("User Data added successfully!!"); //link to home page
    setSuccessDialogOpen(true);
  }

  useEffect(() => {
    getData()
  }, [])

  const countries = [
    "Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "China", "Colombia", "Denmark", "Egypt",
    "Finland", "France", "Germany", "Greece", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Japan", "Jordan", "Kenya", "Lebanon", "Malaysia", "Mexico", "Morocco", "Nepal", "Netherlands",
    "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Russia",
    "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Thailand", "Turkey", "United Arab Emirates",
    "United Kingdom", "United States", "Vietnam"
  ];

  const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
      width: '90%',
      maxHeight: '90%',
    },
  }));

  const handleSigninEmailChange = (event) => {
    setSigninEmail(event.target.value);
  };

  const handleSigninPasswordChange = (event) => {
    setSigninPassword(event.target.value);
  };

  // Validation for Sign-In Button
  const validateForm = () => {
    let errors = {};
    if (!signinEmail) {
      errors.signinEmail = "Please enter your email";
    }
    if (!signinPassword) {
      errors.signinPassword = "Please enter your password";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSigninSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      let userFound = false;
      for (let i = 0; i < user.length; i++) {
        if (user[i].email === signinEmail && user[i].password === signinPassword) {
          userFound = true;
          alert("User signed in successfully!!");
          break;
        }
      }
      if (!userFound) {
        alert("Your email and/or password were not recognised");
      }
    }
  };

  // Validation for Create-An-Account Button
  const validCreate = () => {
    let errors = {};
    // Check if the email already exists
    //The some method in JavaScript is an array method that tests whether at least one element passes the test . It returns a boolean value: true if at least one element passes the test, and false otherwise.
    const emailExists = user.some((u) => u.email === email);

    if (!firstName) {
      errors.firstName = "Please enter your first name.";
    }
    if (!lastName) {
      errors.lastName = "Please enter your last name.";
    }
    if (!email) {
      errors.email = "Please enter your email.";
    } else if (emailExists) {
      errors.email = "Email already exists. Please use a different email.";
    }
    if (!country) {
      errors.country = "Please select your country.";
    }
    if (!gender) {
      errors.gender = "Please select your gender.";
    }
    if (!password) {
      errors.password = "Please enter a password.";
    }
    if (!phone) {
      errors.phone = "Please enter your phone number.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitDetails = () => {
    if (validCreate()) {
      pushData();
    } else {
      alert("Please complete all the required fields correctly !");
    }
  };

  const [content, setContent] = useState(true);
  const toggleDiv = () => {
    setContent(!content);
  };

  return (
    <div className="mainDiv">
      <div className="signin">
        <h3>Sign In</h3>
        <h4>Sign in to access your account</h4>
        <TextField
          id="signin-email-input"
          label="Your email*"
          variant="standard"
          sx={{ width: '90%' }}
          name="signinEmail"
          value={signinEmail}
          onChange={handleSigninEmailChange}
          error={!!formErrors.signinEmail}
          helperText={formErrors.signinEmail}
        />
        <br />
        <br />
        <TextField
          id="signin-password-input"
          label="Password*"
          type="password"
          autoComplete="current-password"
          variant="standard"
          sx={{ width: '90%' }}
          name="signinPassword"
          value={signinPassword}
          onChange={handleSigninPasswordChange}
          error={!!formErrors.signinPassword}
          helperText={formErrors.signinPassword}
        />
        <br />
        <br />
        <button className="signin-button" onClick={handleSigninSubmit}>Sign In</button>
        <br />
        <a href="#" className="forgot-password" onClick={handleClickOpen}>Forgotten your password?</a>
        <div className="dialog">
          <StyledDialog
            maxWidth="70%"
            maxHeight="90%"
            open={open}
            onClose={handleClose}
          >
            <div className="dialog-content" >
              <div className="image" >
                <img src={Burberry} alt="Burberry Logo" width="100%" height="100%" />
              </div>
              <div className="textpage" >
                <DialogTitle>Reset Password</DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent>
                  <DialogContentText>
                    Enter your email and we will send details on how to reset your password.
                  </DialogContentText>
                  <br />
                  <br />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="reset-password"
                    label="Registered Email Address*"
                    type="email"
                    fullWidth
                    variant="standard"
                    helperText="Please enter a valid email."
                  />
                </DialogContent>
                <DialogActions>
                  <Button id="reset" onClick={handleClose}>Send Password Reset Link</Button>
                </DialogActions>
              </div>
            </div>
          </StyledDialog>
        </div>
      </div>

      <div className="register-info">
      {content ? (
       <div>
      <h3>New to Burberry?</h3>
      <p>
        Creating an account is easy. By registering, you will be able to:
        <ul>
          <li>Check out faster with your saved details</li>
          <li>Track your orders and make returns</li>
          <li>Manage your profile and preferences</li>
        </ul>
      </p>
      <button className="create-account-button" onClick={toggleDiv}>Create an account</button>
    </div>

      ) : (
        <div>
      <h3><strong>New to Burberry?</strong></h3>
        <FormControl variant="standard" sx={{ width: '100%' }}>
          <InputLabel name="country" id="country-select-label">Country*</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Country*"
            error={!!formErrors.country}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl>
          <FormLabel name="gender" id="gender-select-label">Gender*</FormLabel>
          <RadioGroup
            aria-labelledby="gender-select-label"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <tbody>
              <tr>
                <td><FormControlLabel value="Mr" control={<Radio />} label="Mr" /></td>
                <td><FormControlLabel value="Ms" control={<Radio />} label="Ms" /></td>
              </tr>
              <tr>
                <td><FormControlLabel value="Mrs" control={<Radio />} label="Mrs" /></td>
                <td><FormControlLabel value="Miss" control={<Radio />} label="Miss" /></td>
              </tr>
            </tbody>
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <TextField
          id="first-name-input"
          label="First name*"
          variant="standard"
          sx={{ width: '100%' }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={!!formErrors.firstName}
          helperText={formErrors.firstName}
        />
        <br />
        <br />
        <TextField
          id="last-name-input"
          label="Last name*"
          variant="standard"
          sx={{ width: '100%' }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={!!formErrors.lastName}
          helperText={formErrors.lastName}
        />
        <br />
        <br />
        <TextField
          id="email-input"
          label="Your email*"
          variant="standard"
          sx={{ width: '100%' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <br />
        <br />
        <TextField
          id="password-input"
          label="Create Password*"
          type="password"
          autoComplete="current-password"
          variant="standard"
          sx={{ width: '100%' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!formErrors.password}
          helperText={formErrors.password}
        />
        <br />
        <ul>
          <li>Minimum 8 characters.</li>
          <li>At least one number, one lowercase, one uppercase, and a special character.</li>
          <li>Must not be your username.</li>
          <li>Your password cannot be an email address.</li>
        </ul>
        <br />
        <PhoneInput
          id="phone"
          placeholder="Enter phone number*"
          value={phone}
          onChange={handlePhoneChange}
          error={!!formErrors.phone}
        />
        <br />
        <div className="checkbox">
          <Checkbox {...label} />
          <p>Subscribe to receive email updates about Burberry products, services and events. When you subscribe, you confirm you have read Burberry's Privacy Policy. You may opt out at any time by using the unsubscribe link in the emails. You provide your personal information voluntarily and Burberry can only send you updates with your consent.</p>
        </div>
        <p id="para">Your personal information will be managed by Burberry Limited, with its company address at Horseferry House, Horseferry Road, London SW1P 2AW and may be stored outside your country of residence (including in the U.K., Europe, and USA). Burberry uses your personal information to offer enhanced customer service tailored to your preferences and may share your personal information with Burberry group companies and third parties who support Burberry in providing products and services to you on Burberry’s behalf. By continuing, you confirm you have read our Privacy Policy and, where consent is required under local laws, you agree to the use of your personal information as described in our Privacy Policy, including in relation to the transfer and storage of your personal information outside your country of residence.
        </p>
        <br />
        <button className="create-account" onClick={submitDetails}>Create an account</button>
        <StyledDialog
         maxWidth="70%"
         maxHeight="90%"
         open={successDialogOpen}
        onClose={handleSuccessDialogClose}
        >
     <div className="dialog-content" >
       <div className="image">
         <img src={Burberry} alt="Burberry Logo" />
       </div>
      <div className="textpage" >
        <DialogTitle><h3>Almost there !</h3><br></br>
         <h2>Hello {firstName}, welcome to Burberry!</h2>
         </DialogTitle>
         <IconButton
           aria-label="close"
           onClick={handleSuccessDialogClose}
           sx={{
             position: 'absolute',
            right: 8,
             top: 8,
             color: (theme) => theme.palette.grey[500],
          }}
         >
           <CloseIcon />
         </IconButton>
         <DialogContent>
           <DialogContentText>
           Thank you for signing up. One last step: we've sent an email to your inbox.<br></br>
           Please check your email to verify your address.
         </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button id="reset" onClick={handleSuccessDialogClose}>Continue Shopping</Button>
         </DialogActions>
      </div>
     </div>
     </StyledDialog>
     </div>   
     // from country to para all are kept in one div as the 2nd ternary condition
     
      )}

      {/*   ')' is for the condition and '}' if for the ternary operator */}
        
    </div> {/*register-info div close*/}
    </div> //main Div Close
  )
}
