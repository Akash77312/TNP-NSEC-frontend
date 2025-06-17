import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">TNP-NSEC</h1>
          <p className="text-gray-400 text-sm">
            TNP-NSEC is a dedicated Training and Placement Cell platform for NSEC,<br></br> helping students connect with recruiters and stay updated on placement<br/> opportunities, assessments, and career resources.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-col gap-4 text-center">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/courses" className="text-gray-300 hover:text-white">Courses</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
          <a href="https://twitter.com/_nsec_official_" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          <a href="https://www.instagram.com/nseckolkata/" className="text-gray-400 hover:text-white"><FaInstagram /></a>
          <a href="https://www.linkedin.com/school/netaji-subhash-engineering-college/posts/?feedView=all" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} TNP-NSEC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
