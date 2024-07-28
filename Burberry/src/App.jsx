import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Men from './Componets/Men';

function App() {
  const [men, setMen] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let response = await fetch("http://localhost:3000/men");
            let  menData = await response.json();
            setMen(menData);
        }

        fetchData();
    }, []);


  return (
    <>
    <div>
    <h1>Vite + React</h1>
    <Router>
    <Routes>
        <Route path='/' element={<Men menData={men}/>} />
        
              
      </Routes>
      </Router>

    </div>
      
    </>
  )
}

export default App
