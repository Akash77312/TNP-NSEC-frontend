import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaBook, FaTimes, FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import toast from "react-hot-toast";

export default function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setResourcesDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate("/");
    toast.success('Logout Successfully');
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-orange-500 font-bold text-xl">
          <FaBook className="text-2xl" />
          <span className="text-gray-800">TNP-NSEC</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-gray-700 items-center relative">
          {/* {user && !user.isAdmin && <>
            <NavLink to="/practice-problem" className="hover:text-orange-500">Practice</NavLink>
            <NavLink to="/interview" className="hover:text-orange-500">Interview</NavLink>
            <NavLink to="/all-courses" className="hover:text-orange-500">Courses</NavLink>
          </>} */}
          <NavLink to="/" className="hover:text-orange-500" end>Home</NavLink>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="hover:text-orange-500 flex items-center gap-1 focus:outline-none">
              Why NSEC?
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-8 left-0 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 min-w-[150px]">
              <NavLink to="/special-facilities" className="block px-4 py-2 hover:bg-orange-100">Special Facilities</NavLink>
              <NavLink to="/our-departments" className="block px-4 py-2 hover:bg-orange-100">Our Department</NavLink>
              <NavLink to="/cut-off" className="block px-4 py-2 hover:bg-orange-100">Last year Cutoff</NavLink>
            </div>
          </div>
            {/* For Recuiters */}
          <div className="relative group">
            <button className="hover:text-orange-500 flex items-center gap-1 focus:outline-none">
              For Recuiters
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-8 left-0 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 min-w-[150px]">
              <NavLink to="/our-recuiters" className="block px-4 py-2 hover:bg-orange-100">Our Recuiters</NavLink>
              <NavLink to="/recuiters-procedures" className="block px-4 py-2 hover:bg-orange-100">Recuiters Procedures</NavLink>
              <NavLink to="/jaf_recuriment" className="block px-4 py-2 hover:bg-orange-100">Company Intrest Form</NavLink>
            </div>
          </div>

          {user && user.isAdmin && <NavLink to="/admin" className="hover:text-orange-500">Admin</NavLink>}
          <NavLink to="/placement" className="hover:text-orange-500">Placement</NavLink>
          <NavLink to="/contact" className="hover:text-orange-500">Contact</NavLink>

          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-700 hover:text-orange-500 flex items-center gap-1 focus:outline-none">
                <FaUserCircle size={24} />
                <span className="hidden md:inline">{user?.name || "User"}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 text-gray-700 z-50">
                  <NavLink to="/profile" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setDropdownOpen(false)}>Profile</NavLink>
                  <NavLink to="/upcomingassessments" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setDropdownOpen(false)}>Upcomming Assessment & Interview</NavLink>
                  <NavLink to="/my-courses" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setDropdownOpen(false)}>other</NavLink>
                  <NavLink to="/help" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setDropdownOpen(false)}>Help</NavLink>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 font-semibold">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/auth" className="hover:text-orange-500 text-white bg-[#1A2B4D] px-6 py-2 rounded-3xl">Sign in</NavLink>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 text-gray-700 border-t border-gray-200">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-orange-100">Home</NavLink>
          <NavLink to="/interview" onClick={() => setMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-orange-100">Interview</NavLink>
          <NavLink to="/courses" onClick={() => setMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-orange-100">Courses</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-orange-100">Contact</NavLink>

          {/* Resources Mobile Dropdown */}
          <div>
            <button
              onClick={() => setResourcesDropdown(!resourcesDropdown)}
              className="w-full flex justify-between items-center py-2 px-3 rounded hover:bg-orange-100"
            >
              Resources
              <svg className={`h-4 w-4 transition-transform ${resourcesDropdown ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesDropdown && (
              <div className="pl-4 mt-1 space-y-1">
                <NavLink to="/notes" className="block py-2 px-3 rounded hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Notes</NavLink>
                <NavLink to="/roadmaps" className="block py-2 px-3 rounded hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Roadmaps</NavLink>
                <NavLink to="/cheatsheets" className="block py-2 px-3 rounded hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Cheat Sheets</NavLink>
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <div className="pt-2" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 w-full py-2 px-3 rounded hover:bg-orange-100 focus:outline-none">
                <FaUserCircle size={20} />
                <span>{user?.name || "User"}</span>
                <svg className={`ml-auto h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="pl-6 mt-1 space-y-1">
                  <NavLink to="/profile" className="block py-2 px-3 rounded hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Profile</NavLink>
                  <NavLink to="/upcomingassessments" className="block py-2 px-3 rounded hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Upcoming Assessments</NavLink>
                  <NavLink to="/my-courses" className="block py-2 px-3 rounded hover:bg-orange-100" onClick={() => setMenuOpen(false)}>My Courses</NavLink>
                  <NavLink to="/help" className="block py-2 px-3 rounded hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Help</NavLink>
                  <button onClick={handleLogout} className="block w-full text-left py-2 px-3 rounded hover:bg-red-100 text-red-600 font-semibold">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login" onClick={() => setMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-orange-100">Login</NavLink>
          )}
        </div>
      )}
    </nav>
  );
}