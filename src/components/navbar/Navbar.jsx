// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error("Failed to parse user data:", error);
//         localStorage.removeItem("user"); // Clear invalid data
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     window.location.href = "/login";
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-blue-600 text-white">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-lg font-bold">DEALSDRAY ONLINE PVT. LTD</div>

//         <ul className="hidden md:flex space-x-8 items-center">
//           <li>
//             <Link to="/" className="hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/employee-list" className="hover:text-gray-300">
//               Employee List
//             </Link>
//           </li>
//           <li>
//             {user ? (
//               <span className="hover:text-gray-300">
//                 {user.f_userName || "User"}
//               </span>
//             ) : (
//               <span className="hover:text-gray-300">Admin Name</span>
//             )}
//           </li>
//           <li>
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-300"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/register">
//                 <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-300">
//                   Sign In
//                 </button>
//               </Link>
//             )}
//           </li>
//         </ul>

//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <ul className="md:hidden bg-blue-600 text-white p-4 space-y-4">
//           <li>
//             <Link to="/" className="block" onClick={toggleMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/employee-list" className="block" onClick={toggleMenu}>
//               Employee List
//             </Link>
//           </li>
//           <li>
//             {user ? (
//               <span className="block">{user.f_userName || "User"}</span>
//             ) : (
//               <span className="block">Admin Name</span>
//             )}
//           </li>
//           <li>
//             {user ? (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   toggleMenu();
//                 }}
//                 className="bg-white text-blue-600 w-full py-2 rounded"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/register">
//                 <button
//                   className="bg-white text-blue-600 w-full py-2 rounded"
//                   onClick={toggleMenu}
//                 >
//                   Sign In
//                 </button>
//               </Link>
//             )}
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Load user from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser); // Parse the stored user data
        setUser(parsedUser); // Set the user state to the parsed data
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem("user"); // Clear invalid data
      }
    }
  }, []);

  // Handle logout and clear localStorage
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // Reset the user state
    window.location.href = "/login"; // Redirect to login page
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">DEALSDRAY ONLINE PVT. LTD</div>

        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/employeeList" className="hover:text-gray-300">
              Employee List
            </Link>
          </li>
          <li>
            {user ? (
              <span className="hover:text-gray-300">
                {user.f_userName || "User"} {/* Display the logged-in username */}
              </span>
            ) : (
              <span className="hover:text-gray-300">Admin Name</span>
            )}
          </li>
          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-300"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-300">
                  Sign In
                </button>
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 text-white p-4 space-y-4">
          <li>
            <Link to="/" className="block" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/employeeList" className="block" onClick={toggleMenu}>
              Employee List
            </Link>
          </li>
          <li>
            {user ? (
              <span className="block">{user.f_userName || "User"}</span>
            ) : (
              <span className="block">Admin Name</span>
            )}
          </li>
          <li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="bg-white text-blue-600 w-full py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button
                  className="bg-white text-blue-600 w-full py-2 rounded"
                  onClick={toggleMenu}
                >
                  Sign In
                </button>
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
