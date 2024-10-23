import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet to render nested routes
import Sidebar from '../../components/sideBar/SideBar';
import Navbar from '../../components/navBar/Navbar';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left side */}
      <Sidebar setActiveComponent={() => {}} />

      {/* Main content area with Navbar and Outlet for child routes */}
      <div className="flex flex-col flex-grow">
        {/* Navbar at the top */}
        <Navbar title="Admin Dashboard" />

        {/* Content section where child routes (like Dashboard) will be rendered */}
        <div className="flex-grow p-4 bg-gray-100 overflow-auto">
          <Outlet /> {/* This is where nested routes will be rendered */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
