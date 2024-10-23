import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './screens';
import AdminLayout from './Layout/adminLayout/AdminLayout'; // Adjust the import path as needed
import Dashboard from './screens/dashBoard/DashBoard'; // Adjust the import path as needed

const App: React.FC = () => {
  return (
    <Routes>
      {/* SignIn Route */}
      <Route path="/" element={<SignIn />} />

      {/* Admin Routes using AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        {/* Add more routes inside AdminLayout as needed */}
      </Route>
    </Routes>
  );
};

// Wrap App with Router
const WrappedApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
