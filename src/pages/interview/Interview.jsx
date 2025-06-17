import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/config';

const Interview = () => {
  const [interviews, setInterviews] = useState([]);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/u/all-interview`);
        setInterviews(data.interviews || []);
      } catch (error) {
        console.error('Failed to fetch interviews:', error);
      }
    };

    fetchInterviews();
  }, []);

  const handleMoreInfo = (interview) => {
    setSelectedInterview(interview);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedInterview(null);
  };

  return (
    <section className="w-full py-12 bg-gray-50 flex justify-center">
      <div className="w-[90%] md:w-[85%]">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Interview Prep</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {interviews.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={"https://5cc2b83c.delivery.rocketcdn.me/app/uploads/qualitative-interview-jpg.webp"}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">₹{item.price}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                <button
                  className="bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                  onClick={() => handleMoreInfo(item)}
                >
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedInterview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-xl relative">
              <img
                src={"https://5cc2b83c.delivery.rocketcdn.me/app/uploads/qualitative-interview-jpg.webp"}
                alt={selectedInterview.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedInterview.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">Price: ₹{selectedInterview.price}</p>
              <p className="text-gray-700 mb-4">{selectedInterview.details || selectedInterview.description}</p>

              <button className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 transition mb-3">
                Subscribe
              </button>

              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Interview;
