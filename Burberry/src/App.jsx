import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Product from './components/Pages/SingleProduct/Product'
import Login from './Componets/Login'
import Men from './components/Pages/SingleProduct/Men'



function NavigationButtons() {
  const navigate = useNavigate();  // Call useNavigate here

  return (
      <div>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/addProduct')}>AddProduct</button>
          <button onClick={() => navigate('/login')}>Login</button>
      </div>
  );
}
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
   
    <NavigationButtons /> 
    <Routes>
      <Route path='/' element={<Product data={ecom}/>} />
        <Route path='/addProduct' element={<Men/>} />
        <Route path='/Login' element={<Login/>} />  
        </Routes>
  
    
      
      
    </>
  )
}

export default App
