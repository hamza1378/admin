import React from 'react';
import Sidebar from '../../components/sideBar/SideBar';
import Navbar from '../../components/navBar/Navbar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left side */}
      <Sidebar setActiveComponent={() => {}} />

      {/* Main content area with Navbar and Dashboard content */}
      <div className="flex flex-col flex-grow">
        {/* Navbar at the top */}
        <Navbar title="Admin Dashboard" />

        {/* Dashboard content */}
        <div className="flex-grow p-4 bg-gray-100 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-md rounded-lg">Card 1</div>
            <div className="bg-white p-4 shadow-md rounded-lg">Card 2</div>
            <div className="bg-white p-4 shadow-md rounded-lg">Card 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
