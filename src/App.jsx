import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StartInterview from "./pages/StartInterview";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
import History from "./pages/History";
import InterviewDetail from "./pages/InterviewDetail";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AdminUsers from "./pages/AdminUsers";
import AdminQuestions from "./pages/AdminQuestions";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import InterviewSetup from "./pages/InterviewSetup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminRoute from "./pages/AdminRoute";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        

<Route
  path="/admin/users"
  element={
    <AdminRoute>
      <AdminUsers />
    </AdminRoute>
  }
/>

<Route
  path="/admin/questions"
  element={
    <AdminRoute>
      <AdminQuestions />
    </AdminRoute>
  }
/>
        <Route path="/" element={<Home/>} />
        <Route path="/interview/setup" element={<InterviewSetup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/start" element={<StartInterview />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
        <Route path="/detail/:id" element={<InterviewDetail />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/questions" element={<AdminQuestions />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}