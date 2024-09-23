import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    f_Name: "",
    f_Email: "",
    f_Mobile: "",
    f_Designation: "",
    f_gender: "",
    f_Course: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "f_Course") {
      const updatedCourses = formData.f_Course.includes(value)
        ? formData.f_Course.filter((course) => course !== value)
        : [...formData.f_Course, value];
      setFormData({ ...formData, f_Course: updatedCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/employees",
        formData
      );
      toast.success(response.data.message);
      setFormData({
        f_Name: "",
        f_Email: "",
        f_Mobile: "",
        f_Designation: "",
        f_gender: "",
        f_Course: [],
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Add Employee</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="f_Name"
          value={formData.f_Name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="f_Email"
          value={formData.f_Email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Mobile</label>
        <input
          type="text"
          name="f_Mobile"
          value={formData.f_Mobile}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Designation</label>
        <select
          name="f_Designation"
          value={formData.f_Designation}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
        >
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          name="f_gender"
          value={formData.f_gender}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Course</label>
        <div className="flex flex-col">
          {["MCA", "BCA", "BSC"].map((course) => (
            <label key={course} className="flex items-center mb-2">
              <input
                type="checkbox"
                name="f_Course"
                value={course}
                checked={formData.f_Course.includes(course)}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{course}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Create Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
