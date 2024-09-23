import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    f_Email: "",
    f_Pwd: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/auth/login",
  //       formData
  //     );

  //     console.log("Login Response:", response.data); // Log the response

  //     // Store user data in local storage
  //     localStorage.setItem("user", JSON.stringify(response.data.user));

  //     toast.success("Login successful!", {
  //       position: "top-center",
  //     });

  //     setTimeout(() => {
  //       navigate("/"); // Redirect to the home page
  //     }, 2000);
  //   } catch (err) {
  //     toast.error(err.response?.data?.message || "Invalid email or password", {
  //       position: "top-center",
  //     });
  //     setError(err.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );
  
      console.log("Login Response:", response.data);
  
      // Ensure the user object includes the correct properties
      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user)); // Adjust this if the structure is different
  
      toast.success("Login successful!", {
        position: "top-center",
      });
  
      setTimeout(() => {
        navigate("/"); // Redirect to the home page
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid email or password", {
        position: "top-center",
      });
      setError(err.message);
    }
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="f_Email"
              className="block text-sm font-medium text-gray-700"
            >
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

          {/* Password Field */}
          <div>
            <label
              htmlFor="f_Pwd"
              className="block text-sm font-medium text-gray-700"
            >
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
