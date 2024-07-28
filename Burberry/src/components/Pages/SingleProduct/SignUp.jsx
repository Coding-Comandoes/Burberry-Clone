import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio'; // Import Radio
import RadioGroup from '@mui/material/RadioGroup'; // Import RadioGroup
import Image2 from '../components/Image2.png';
import './signup.css';

// Define the StyledDialog component
const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        width: '90%',
        maxHeight: '90%',
    },
}));

const Signup = () => {
    const [formErrors, setFormErrors] = useState({});
    const [open, setOpen] = useState(false);
    const [signOpen, setSignOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignOpen = () => {
        setSignOpen(true);
    };

    const handleSignClose = () => {
        setSignOpen(false);
    };

    const check = () => {
        let errors = {};

        if (!email) {
            errors.email = "Please enter your email.";
        } 
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const dialogBox = () => {
        if (check()) {
            setOpen(true);
        }
    };

    const valid = () => {
        let errors = {};

        if (!email) {
            errors.email = "Please enter your email.";
        } 
        if (!firstName) {
            errors.firstName = "Please enter your first name.";
        }
        if (!lastName) {
            errors.lastName = "Please enter your last name.";
        }
        if (!gender) {
            errors.gender = "Please select your gender.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submit = () => {
        if (valid()) {
            setOpen(false);
            handleSignOpen();
          }
    };

    return (
        <div className="main">
            <h3>Sign Up</h3>
            <br />
            <TextField
                id="email-input"
                label="Your email*"
                variant="standard"
                sx={{ width: '40%' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!formErrors.email}
                helperText={formErrors.email}
            />
            <button onClick={dialogBox} style={{border:0}}>{<ArrowForwardIosIcon />}</button>
            <StyledDialog
                maxWidth="70%"
                maxHeight="90%"
                open={open}
                onClose={handleClose}
            >
                <div className="dialog">
                    <div className="img">
                        <img src={Image2} alt="Burberry Logo" width="100%" height="100%" />
                    </div>
                    <div className="text">
                        <DialogTitle>Sign Up</DialogTitle>
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
                                *Fields required
                            </DialogContentText>
                            <br />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="set-email"
                                label="Email*"
                                type="email"
                                fullWidth
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
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                row
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio sx={{ borderRadius: '0%' }} />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio sx={{ borderRadius: '0%' }} />}
                                    label="Male"
                                />
                            </RadioGroup>
                        </DialogContent>
                        <DialogActions>
                            <Button id="reset" onClick={submit}>Sign Up</Button>
                            </DialogActions>
                        <br />
                        <p>Subscribe to receive email updates about Burberry products, services and events. When you subscribe, you confirm you have read Burberry's Privacy Policy. You may opt out at any time by using the unsubscribe link in the emails. Burberry uses your personal information to offer an enhanced customer service tailored to your preferences. You provide your personal information voluntarily.</p>
                    </div>
                </div>
            </StyledDialog>

            <StyledDialog
                maxWidth="70%"
                maxHeight="90%"
                open={signOpen}
                onClose={handleSignClose}
            >
                <div className="dialog">
                    <div className="img">
                        <img src={Image2} alt="Burberry Logo" />
                    </div>
                    <div className="text">
                        <DialogTitle>
                            <h3>Sign up complete</h3>
                            <br />
                            <h2>Hello {firstName}, welcome to Burberry!</h2>
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleSignClose}
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
                                Thanks for signing up. We will keep you up-to-date on our new runway collections, campaigns, events, product launches, and services.
                                <br />
                                <br />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button id="reset" onClick={handleSignClose}>Continue Shopping</Button>
                        </DialogActions>
                    </div>
                </div>
            </StyledDialog>
        </div>
    );
};

export default Signup;
