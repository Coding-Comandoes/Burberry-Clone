import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Recommend from './Recommend';
import Allroutes from './components/Allroutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Allroutes />
        <Footer />
        {/* <Recommend/> */}
      </div>
    </Router>
  );
};

export default App;
