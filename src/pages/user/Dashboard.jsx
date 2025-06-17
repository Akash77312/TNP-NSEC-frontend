import React, { useState } from "react";
import Profile from "./Profile";
import Courses from "../course/Course";
import Assessments from "./Assessments";
import Settings from "./Settings";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile />;
      case "Courses":
        return <Courses />;
      case "Assessments":
        return <Assessments />;
      case "Settings":
        return <Settings />;
      default:
        return null;
    }
  };

  const tabs = ["Profile", "Courses", "Assessments", "Settings"];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar */}
        <div className="md:w-1/4 border-r border-gray-200 bg-gray-100">
          <div className="flex md:flex-col justify-around md:justify-start p-4 space-x-2 md:space-x-0 md:space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 w-full rounded-lg text-left ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
