// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Fetch employees from the server
//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8000/api/getemployees"
//       );
//       setEmployees(response.data.data); // Assuming data structure based on your API response
//       setLoading(false);
//     } catch (error) {
//       toast.error("Failed to fetch employees.");
//       setLoading(false);
//     }
//   };

//   // Delete an employee by ID
//   const deleteEmployee = async (id) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:8000/api/deleteemployees/${id}`
//       );
//       toast.success(response.data.message);
//       setEmployees(employees.filter((employee) => employee._id !== id)); // Update state
//     } catch (error) {
//       toast.error("Failed to delete employee.");
//     }
//   };

//   // Load employees when component mounts
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-6">Employee List</h2>
//       {employees.length === 0 ? (
//         <p>No employees found.</p>
//       ) : (
//         <table className="min-w-full bg-white shadow-md rounded-lg">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 text-left">Name</th>
//               <th className="py-2 px-4 text-left">Email</th>
//               <th className="py-2 px-4 text-left">Mobile</th>
//               <th className="py-2 px-4 text-left">Designation</th>
//               <th className="py-2 px-4 text-left">Gender</th>
//               <th className="py-2 px-4 text-left">Courses</th>
//               <th className="py-2 px-4 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee._id} className="border-t">
//                 <td className="py-2 px-4">{employee.f_Image}</td>
//                 <td className="py-2 px-4">{employee.f_Name}</td>
//                 <td className="py-2 px-4">{employee.f_Email}</td>
//                 <td className="py-2 px-4">{employee.f_Mobile}</td>
//                 <td className="py-2 px-4">{employee.f_Designation}</td>
//                 <td className="py-2 px-4">{employee.f_gender}</td>
//                 <td className="py-2 px-4">{employee.f_Course.join(", ")}</td>
//                 <td className="py-2 px-4">
//                   <button
//                     onClick={() =>
//                       navigate(`/employees/update/${employee._id}`)
//                     } // Navigate to the edit page
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteEmployee(employee._id)}
//                     className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch employees from the server
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/getemployees");
      setEmployees(response.data.data); // Assuming data structure based on your API response
      setLoading(false);
    } catch (error) {
      toast.error("Failed to fetch employees.");
      setLoading(false);
    }
  };

  // Delete an employee by ID
  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/deleteemployees/${id}`);
      toast.success(response.data.message);
      setEmployees(employees.filter((employee) => employee._id !== id)); // Update state
    } catch (error) {
      toast.error("Failed to delete employee.");
    }
  };

  // Load employees when component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Mobile</th>
              <th className="py-2 px-4 text-left">Designation</th>
              <th className="py-2 px-4 text-left">Gender</th>
              <th className="py-2 px-4 text-left">Courses</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id} className="border-t">
                <td className="py-2 px-4">
                  {employee.f_Image ? (
                    <img
                      src={employee.f_Image} // Assuming employee.image contains the Cloudinary URL
                      alt={employee.f_Name}
                      className="w-12 h-12 rounded-full" // Adjust size as needed
                    />
                  ) : (
                    <span>No image</span> // Fallback if no image is present
                  )}
                </td>
                <td className="py-2 px-4">{employee.f_Name}</td>
                <td className="py-2 px-4">{employee.f_Email}</td>
                <td className="py-2 px-4">{employee.f_Mobile}</td>
                <td className="py-2 px-4">{employee.f_Designation}</td>
                <td className="py-2 px-4">{employee.f_gender}</td>
                <td className="py-2 px-4">{employee.f_Course.join(", ")}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => navigate(`/employees/update/${employee._id}`)} // Navigate to the edit page
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
