import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Results from './Components/Results';
import Problems from './Components/Problems';

const App = () => {

  const [score, setScore] = useState(null)

  const handleData = (data) => {
    setScore(data)
  }
  return (
   <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems giveData={handleData}/>} />
          <Route path="/results" element={<Results score={score? score : null}/>} />
        </Routes>
      
    </Router>

  );
};

export default App
