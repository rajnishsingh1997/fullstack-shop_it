import axios from "axios";
import React, { useState } from "react";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isUserCreated, setIsUserCreated] = useState(false);

  const handleInputChange = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value.trim(),
    });
    setError(null);
  };

  const handleSignSubmission = async () => {
    const { firstName, lastName, emailId, password } = signupDetails;

    if (!firstName || !lastName || !emailId || !password) {
      setError("All fields are required!");
      return;
    }
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!strongPasswordRegex.test(password)) {
        console.log("here")
      setError("Please choose a strong password");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      setIsUserCreated(false);

      const response = await axios.post(
        "http://localhost:4000/signup",
        signupDetails
      );

      if (response?.status === 200) {
        setIsUserCreated(true);
      } else {
        setError("Unable to create an account. Please try again later.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.data || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Sign Up
        </h2>
        <div className="flex flex-col gap-4">
          {["firstName", "lastName", "emailId", "password"].map(
            (field, index) => (
              <label
                key={index}
                className="flex flex-col text-gray-700 font-medium"
              >
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace("Id", "")}
                <input
                  name={field}
                  onChange={handleInputChange}
                  value={signupDetails[field]}
                  type={field === "password" ? "password" : "text"}
                  className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder={`Enter your ${field}`}
                />
              </label>
            )
          )}
        </div>

        <div className="flex justify-center py-4">
          <button
            onClick={handleSignSubmission}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md transition-all duration-200 ease-in-out disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Signup"}
          </button>
        </div>

        {error && (
          <div className="mt-3 text-center text-red-600 text-sm animate-fade-in">
            {error}
          </div>
        )}

        {isUserCreated && (
          <div className="mt-3 text-center text-green-600 text-sm animate-fade-in">
            🎉 Account successfully created!
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
