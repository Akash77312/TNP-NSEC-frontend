import React, { useEffect, useState } from 'react';
import User from './User';
import Interview from './Interview';
import CourseManager from './CourseManager';
import ReacruiterJAF from './RecruiterJAF';
import JobApplicationForm from './JAF';
import PGraphForm from './PGraphForm'

const orders = [
    {
      id: '12809',
      product: 'Apple Macbook Pro...',
      orderTime: '20/03/2023,01:10',
      status: 'Waiting Payment',
      qty: 'x1',
      total: '$4.012',
      customer: 'Omar Griffith',
      avatar: 'user.png',
    }
  ];

  const statusColors = {
    'Waiting Payment': 'text-[#DD6107]',
    'Transition Done': 'text-[#10B860]',
    'Delivery to Cust': 'text-[#4F80E1]',
    'Cancel': 'text-[#FB4949]',
  };


  //Admin dashboard tabs 
const TABS = [
  'Dashboard',
  'Users',
  'Job Application Form',
  'Recruiter JAF',
  'Settings',
  'Graph Form',
];


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeTab') || 'Dashboard'
  );

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const renderContent = () => {
  switch (activeTab) {
    case 'Dashboard':
      return <h1 className="text-2xl font-semibold text-center mt-20">I am Admin Dashboard</h1>;
    case 'Users':
      return <><User /></>;
    case 'Job Application Form':
      return <><JobApplicationForm /></>;
    case 'Recruiter JAF':
      return <><ReacruiterJAF /></>;
    case 'Settings':
      return <p>This is the Settings tab content.</p>;
    case 'Graph Form':
      return <><PGraphForm/></>;
    default:
      return <p>Tab not found.</p>;
  }
};

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-[80%]">
        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 justify-between mb-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-2 rounded-3xl transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white p-4 rounded-md shadow-md min-h-[200px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
