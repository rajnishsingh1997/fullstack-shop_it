import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-[500px] mx-auto my-a p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col text-gray-700 font-medium">
            Email
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="daisy@site.com"
            />
          </label>
          <label className="flex flex-col text-gray-700 font-medium">
            Password
            <input
              type="password"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Password"
            />
          </label>
        </div>
        <div className="flex justify-center py-3">
          <button className="btn w-40">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
