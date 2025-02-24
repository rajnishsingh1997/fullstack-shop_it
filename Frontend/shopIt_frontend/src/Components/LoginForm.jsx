import React, { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFormSubmission =async()=>{
    const payload ={
        emailId:email,
        password:password
    }
    try {
        const response = await axios.post("http://localhost:4000/login",payload)
        console.log(response)
    } catch (error) {
        
    }
  }
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-4">
        <label className="flex flex-col text-gray-700 font-medium">
          Email
          <input
            onChange={handleEmailChange}
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="daisy@site.com"
          />
        </label>
        <label className="flex flex-col text-gray-700 font-medium">
          Password
          <input
            onChange={handlePasswordChange}
            type="password"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your Password"
          />
        </label>
        <button onClick={handleFormSubmission}>login</button>
      </div>
    </div>
  );
};

export default LoginForm;
