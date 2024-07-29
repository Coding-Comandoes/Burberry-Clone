import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Product from './components/Pages/SingleProduct/Product'
import Navbar from './components/Navbar'
import Men from './components/Pages/SingleProduct/Men'
import Women from './components/Pages/SingleProduct/Women'
import Child from './components/Pages/SingleProduct/Child';
import Home from './components/Pages/SingleProduct/Home';
import Footer from './components/Footer';
import SignIn from './components/Pages/SingleProduct/SignIn';
import Signup from './components/Pages/SingleProduct/SignUp';
import SingleProduct from './components/Pages/SingleProduct/SingleProduct';
import Allroutes from './components/Allroutes';

function App() {
  const [ecom,setEcom] = useState([]);


async function fetchData(){
  let res = await fetch("http://localhost:3000/data")
  let data = await res.json();
  setEcom(data);
}
useEffect(()=>{
  fetchData()
},[])
  

  return (
    <>
    <div>
   <header>
      <Navbar/> 
   </header>
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/child" element={<Child/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/singleProduct/:id" element={<SingleProduct />} />


        {/*<Route path='/Login' element={<Login/>} />  */}
        </Routes>
    </div>
      <Allroutes/>
        <footer><Footer/></footer>
      
    </div>
      
    </>
  )
}

export default App
