import React from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaHome, FaBookOpen } from 'react-icons/fa';

const features = [
  {
    title: "Online Assessment",
    description: "Online assessment enhanced with AI provides a personalized evaluation of your skills to enhance your learning and development.",
    icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
  },
  {
    title: "Online Classes",
    description: "Take advantage of our online classes to expand your knowledge and skills.",
    icon: <FaChalkboardTeacher className="text-green-600 text-4xl" />,
  },
  {
    title: "Home Projects",
    description: "Transform your living space with these creative home project ideas that are sure to inspire.",
    icon: <FaHome className="text-pink-500 text-4xl" />,
  },
  {
    title: "Book Library",
    description: "Our e-library offers a diverse range of e-books and digital resources to cater to every interest and age group.",
    icon: <FaBookOpen className="text-yellow-500 text-4xl" />,
  },
];

const Features = () => {
  return (
    <section className="w-full flex justify-center py-12 bg-gray-50">
      <div className="w-[90%] md:w-[80%]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
