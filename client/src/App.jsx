import { Toaster } from "react-hot-toast"
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./Pages/Login"
import Layout from "./Pages/Layout"
import Dashboard from "./Pages/Dashboard"
import Employee from "./Pages/Employee"
import Attendance from "./Pages/Attendance"
import Leave from "./Pages/Leave"
import PaySlips from "./Pages/PaySlips"
import Settings from "./Pages/Settings"
import PrintPaySlip from "./Pages/PrintPaySlip"
import LoginForm from "./components/LoginForm"

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin portal" subtitle="Sign in to your Admin account" />} />

        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee portal" subtitle="Sign in to your Employee account" />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="employee" element={<Employee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<PaySlips />} />
          <Route path="/setting" element={<Settings />} />

        </Route>
        <Route path="/print/payslip/:id" element={<PrintPaySlip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes >
    </>

  )
}

export default App
