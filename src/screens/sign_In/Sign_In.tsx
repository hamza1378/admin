import React, { useState } from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import ImageSlider from '../../components/imageSlider/ImageSlider';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign-In clicked');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Image Slider */}
      <div className="pl-8 flex-1 md:flex hidden flex-col flex-wrap">
        <ImageSlider />
      </div>
      {/* Right Side: Sign In Form */}
      <div className="flex-1 bg-white p-6 md:p-8 rounded-md shadow-md w-full max-w-md mx-auto my-10 md:my-0">
        <h2 className="text-2xl font-bold mb-6 text-center font-ubuntu">Admin Sign In</h2>
        <form className="space-y-4">
          {/* Email Input with Label */}
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">Email</span>
            <CustomInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>
          
          {/* Password Input with Label */}
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">Password</span>
            <CustomInput
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </div>
          
          <CustomButton label="Sign In" onClick={handleSignIn} />
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;
