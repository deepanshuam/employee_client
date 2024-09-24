// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import clsx from "clsx";

// const EmployeeUpdateForm = () => {
//   const { id } = useParams(); // Extract the ID from the URL
//   const [employeeData, setEmployeeData] = useState({
//     f_Name: "",
//     f_Email: "",
//     f_Mobile: "",
//     f_Designation: "",
//     f_gender: "",
//     f_Course: "",
//   });

//   const [loading, setLoading] = useState(true);
//   const [toggle, setToggle] = useState(false);

//   // Fetch employee data when the component mounts
//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         if (!id) {
//           throw new Error("Employee ID is required");
//         }
//         const { data } = await axios.get(
//           `http://localhost:8000/api/idgetemployees/${id}`
//         );
//         setEmployeeData(data.payload);
//       } catch (error) {
//         toast.error(
//           "Error fetching employee data: " +
//             (error.response?.data?.message || error.message)
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEmployee();
//   }, [id]); // Use id in the dependency array

//   const handleChange = (e) => {
//     setEmployeeData({
//       ...employeeData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(
//         `http://localhost:8000/api/updateemployees/${id}`,
//         employeeData
//       );
//       console.log(data);
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(
//         "Error updating employee: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   const handleToggle = () => {
//     setToggle((prevState) => !prevState);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       className={clsx(
//         "max-w-xl mx-auto p-6 shadow-md rounded-lg",
//         toggle ? "bg-blue-100" : "bg-white"
//       )}
//     >
//       <h2 className="text-2xl font-semibold mb-6">Update Employee</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             type="text"
//             name="f_Name"
//             value={employeeData.f_Name}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="f_Email"
//             value={employeeData.f_Email}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Mobile
//           </label>
//           <input
//             type="text"
//             name="f_Mobile"
//             value={employeeData.f_Mobile}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Designation
//           </label>
//           <input
//             type="text"
//             name="f_Designation"
//             value={employeeData.f_Designation}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Gender
//           </label>
//           <select
//             name="f_gender"
//             value={employeeData.f_gender}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Course
//           </label>
//           <input
//             type="text"
//             name="f_Course"
//             value={employeeData.f_Course}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
//         >
//           Update Employee
//         </button>
//       </form>

//       {/* Toggle button for class switching */}
//       <button
//         onClick={handleToggle}
//         className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
//       >
//         Toggle Background
//       </button>
//     </div>
//   );
// };

// export default EmployeeUpdateForm;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import clsx from "clsx";

const EmployeeUpdateForm = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const [employeeData, setEmployeeData] = useState({
    f_Name: "",
    f_Email: "",
    f_Mobile: "",
    f_Designation: "",
    f_gender: "",
    f_Course: "",
    imageUrl: "", // For storing image URL if provided
  });

  const [selectedFile, setSelectedFile] = useState(null); // For handling image file upload
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  // Fetch employee data when the component mounts
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/idemployees/${id}`);
        setEmployeeData(data.payload); // Set the employee data
        toast.success("Employee data loaded successfully!"); // Toast message on load
      } catch (error) {
        toast.error("Error fetching employee data: " + (error.response?.data?.message || error.message));
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]); // Use id in the dependency array

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Capture the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // Create FormData object for file uploads

    // Append employee data fields to formData
    formData.append("f_Name", employeeData.f_Name);
    formData.append("f_Email", employeeData.f_Email);
    formData.append("f_Mobile", employeeData.f_Mobile);
    formData.append("f_Designation", employeeData.f_Designation);
    formData.append("f_gender", employeeData.f_gender);
    formData.append("f_Course", employeeData.f_Course);

    // If a file is selected, append it to formData
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    // Append image URL if provided
    if (employeeData.imageUrl) {
      formData.append("imageUrl", employeeData.imageUrl);
    }

    try {
      const { data } = await axios.put(`http://localhost:8000/api/updateemployees/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(data.message);
    } catch (error) {
      toast.error("Error updating employee: " + (error.response?.data?.message || error.message));
    }
  };

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={clsx("max-w-xl mx-auto p-6 shadow-md rounded-lg", toggle ? "bg-blue-100" : "bg-white")}>
      <h2 className="text-2xl font-semibold mb-6">Update Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="f_Name"
            value={employeeData.f_Name} // Display existing name
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="f_Email"
            value={employeeData.f_Email} // Display existing email
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile</label>
          <input
            type="text"
            name="f_Mobile"
            value={employeeData.f_Mobile} // Display existing mobile
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Designation</label>
          <input
            type="text"
            name="f_Designation"
            value={employeeData.f_Designation} // Display existing designation
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="f_gender"
            value={employeeData.f_gender} // Display existing gender
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Course</label>
          <input
            type="text"
            name="f_Course"
            value={employeeData.f_Course} // Display existing courses
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image (from device)</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Or Enter Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={employeeData.imageUrl} // Display existing image URL
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Update Employee
        </button>
      </form>

      <button
        onClick={handleToggle}
        className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
      >
        Toggle Background
      </button>
    </div>
  );
};

export default EmployeeUpdateForm;
