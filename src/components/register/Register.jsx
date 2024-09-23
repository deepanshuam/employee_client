import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    f_userName: "",
    f_Pwd: "",
    f_Email: "",
    f_Mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", formData);
      
      toast.success("Registration successful! Redirecting to login...", {
        position: "top-center", // Directly set the position string
      });
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!", {
        position: "top-center", // Directly set the position string
      });
    }
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="f_userName" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="f_userName"
              name="f_userName"
              value={formData.f_userName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="f_Pwd" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="f_Pwd"
              name="f_Pwd"
              value={formData.f_Pwd}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="f_Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="f_Email"
              name="f_Email"
              value={formData.f_Email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Mobile Field */}
          <div>
            <label htmlFor="f_Mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="text"
              id="f_Mobile"
              name="f_Mobile"
              value={formData.f_Mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
            <Link
              to={"/login"}
              className="text-indigo-600 hover:text-indigo-500 mt-2 block text-center"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
