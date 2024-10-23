import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface ButtonProps {
  label: string;
  onClick?: () => void; // Make onClick optional for when using the to prop
  to?: string; // Add to prop for navigation
  className?: string;
}

const Button = ({ label, onClick, to, className }: ButtonProps) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle button click for navigation
  const handleClick = () => {
    if (to) {
      navigate(to); // Navigate to the specified route if to prop is provided
    } else if (onClick) {
      onClick(); // Call onClick function if provided
    }
  };

  return (
    <div className='flex justify-center items-center w-full'>
      <button
        onClick={handleClick}
        className={`px-6 py-2 rounded-lg text-white ${className}`}
        style={{
          backgroundColor: 'rgba(75, 189, 189, 1)', // Light green
          transition: 'background-color 0.3s', // Optional: smooth transition
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(75, 189, 189, 0.8)'; // Change on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(75, 189, 189, 1)'; // Reset on leave
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
