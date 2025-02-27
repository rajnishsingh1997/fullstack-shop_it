import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router";
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const [loginDetail, setLoginDetail] = useState({
    emailId: "",
    password: "",
  });

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setLoginDetail({
      ...loginDetail,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleLoginSubmission = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        loginDetail ,  { withCredentials: true }
      );
      if (response.status === 200) {
        setUser(response?.data?.data);
        navigate('/')
      } else {
        throw new Error("Unable to Login");
      }
    } catch (error) {
      console.log("Error" + " " + error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-[500px] mx-auto my-a p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col text-gray-700 font-medium">
            Email
            <input
              name="emailId"
              type="text"
              onChange={handleInputChange}
              value={loginDetail.emailId}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Please enter your email"
            />
          </label>
          <label className="flex flex-col text-gray-700 font-medium">
            Password
            <input
              name="password"
              onChange={handleInputChange}
              value={loginDetail.password}
              type="password"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Password"
            />
          </label>
        </div>
        <div className="flex justify-center py-3">
          <button
            onClick={handleLoginSubmission}
            className={`btn w-40 bg-blue-400${
              loading ? "loading loading-spinner" : ""
            }`}
          >
            Login
          </button>
        </div>
        <NavLink to="/signup" end>
          <div>
            <p className="text-sm cursor-pointer">
            Not registered? Sign up now
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
