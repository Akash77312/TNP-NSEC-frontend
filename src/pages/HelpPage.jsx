import React from "react";
import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Need Help?</h1>

        <p className="text-gray-700 mb-4 text-center">
          We're here to support you throughout the placement process. Below are answers to some common queries students and recruiters may have.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">📝 How to register for a placement drive?</h3>
            <p className="text-gray-600">
              Visit the “Events & Applications” section. Select the company and click on “Apply Now” before the deadline.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">📄 How to submit my resume?</h3>
            <p className="text-gray-600">
              Make sure your resume is updated in your profile section. It will be auto-submitted during your application.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">📧 Didn't receive confirmation email?</h3>
            <p className="text-gray-600">
              Check your spam folder or contact our team directly for assistance.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-3">Still have questions?</p>
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Contact TNP Cell
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
