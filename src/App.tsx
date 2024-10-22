import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign_In from './screens/sign_In/Sign_In';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_In />} />
      </Routes>
    </Router>
  );
};

export default App;
