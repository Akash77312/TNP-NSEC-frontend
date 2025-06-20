import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./context/ProtectRoute";
import Navbar from "./components/navbar/Navbar";
import PublicRoute from "./context/PublicRoute";
import Auth from "./pages/auth/Auth";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Home from "./pages/home/Home";
// import Course from "./pages/course/Course";
import CoursePage from "./pages/course/CoursePage";
// import Profile from "./pages/user/Profile";
import UserDashboard from "./pages/user/Dashboard";
// import PracticeProblem from "./pages/practice-problem/PracticeProblem";
// import Interview from "./pages/interview/Interview";
import UpcomingAssessments from "./pages/UpcomingAssessments/UpcomingAssessments";
// import DoubtAi from "./pages/bot/DoubtAi";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import Placements from "./components/placement/Placement";
import SpecialFacilities from "./components/WhyNSEC/SpecialFacilities";
import Departments from "./components/WhyNSEC/Departments";
import CutOff from "./components/WhyNSEC/CutOff";
// import CompanyInterestForm from "./components/forRecuiters/CompanyInterestForm";
import PastRecuiters from "./components/forRecuiters/PastRecuiters";
import RecuitersProcedures from "./components/forRecuiters/RecuitersProcedures";
import JobAndEvent from "./components/homePage/Events/JobAndEventPage";
import JAFRecuriment from "./components/homePage/Events/JAFRecuriment";
import HelpPage from "./pages/HelpPage";
import JobApplicationForm from "./pages/admin/JAF";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/jaf" element={<JobApplicationForm />} />
          <Route path="/placement" element={<Placements />} />
          <Route path="/special-facilities" element={<SpecialFacilities />} />
          <Route path="/our-departments" element={<Departments />} />
          <Route path="/cut-off" element={<CutOff />} />
          {/* recutires */}
          <Route path="/our-recuiters" element={<PastRecuiters />} />
          <Route
            path="/recuiters-procedures"
            element={<RecuitersProcedures />}
          />

          <Route path="/job-application" element={<JobAndEvent />} />
          <Route path="/jaf_recuriment" element={<JAFRecuriment />} />

          {/* <Route path="/interview" element={<Interview />} /> */}
          <Route
            path="/upcomingassessments"
            element={<UpcomingAssessments />}
          />
          <Route path="/help" element={<HelpPage />} />

          {/* <Route path="/bot" element={<DoubtAi />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/practice-problem" element={<PracticeProblem />} /> */}
          <Route path="/all-courses" element={<CoursePage />} />
          <Route path="/auth" element={<PublicRoute element={<Auth />} />} />
          <Route
            path="/register"
            element={<PublicRoute element={<Register />} />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute element={<AdminDashboard />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<UserDashboard />} />}
          />
        </Routes>
        <Footer />
      </Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
};

export default App;
