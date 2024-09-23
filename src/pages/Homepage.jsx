import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-4xl text-black text-center">Dashboard</h1>
      <p className="text-gray-600 text-2xl text-center mt-4">Welcome admin.</p>

      <div className="w-full h-full mt-8">
        {/* Navigation options */}
        <ul className="text-xl md:text-2xl space-y-4 md:space-y-6">
          <li className="border-b pb-2 hover:text-blue-600 transition-all">
            <Link to="/employeeCreate">Create Employee</Link>
          </li>
          <li className="border-b pb-2 hover:text-blue-600 transition-all">
            <Link to="employeeList">Employees List</Link>
          </li>
          {/* <li className="border-b pb-2 hover:text-blue-600 transition-all">
            <Link to="/employees/update/:id">Edit Employees Data</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
