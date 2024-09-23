import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import LoginForm from "./components/Login/Login";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/Homepage";
import EmployeeForm from "./components/Employee/EmployeeForm";
import EmployeeList from "./components/Employee/EmployeeList";
import EmployeeUpdateForm from "./components/Employee/EmployeeEditForm";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employees/update/:id" element={<EmployeeUpdateForm />} />
        <Route path="/employeeList" element={<EmployeeList />} />
        <Route path="/employeeCreate" element={<EmployeeForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
};

export default App;
