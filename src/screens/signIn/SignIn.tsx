import React, { useState } from 'react';
import { FaUserShield } from 'react-icons/fa'; // Import the admin icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import ImageSlider from '../../components/imageSlider/ImageSlider';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignIn = () => {
    // Here you might want to add authentication logic
    console.log('Sign-In clicked');

    // Navigate to the dashboard after sign-in
    navigate('/dashboard'); // Navigate to the dashboard route
  };

  return (
    <div className="min-h-screen h-screen flex flex-col md:flex-row">
      {/* Left Side: Image Slider */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 h-full">
        <ImageSlider />
      </div>
     
      {/* Right Side: Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-r from-white to-gray-100 h-full">
        <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-8">
          <div className="flex items-center justify-center mb-4">
            <FaUserShield className="h-16 w-16 text-lightGreen" /> {/* Admin icon */}
          </div>
          <h2 className="text-3xl font-ubuntu font-bold mb-6 text-center text-greyBlack">
            Sign In
          </h2>
          
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1" htmlFor="email">
                Email
              </label>
              <CustomInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1" htmlFor="password">
                Password
              </label>
              <CustomInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-right mt-2">
                <a href="/forgot-password" className="text-sm text-lightGreen">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <div>
              <CustomButton
                label="Sign In"
                onClick={handleSignIn} // Call handleSignIn to navigate
                className="w-full bg-green-500 text-white p-3 rounded-md shadow-md hover:bg-green-600 transition duration-200 ease-in-out"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
