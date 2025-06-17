import React from 'react';
import akashraj from "./akashraj.png";
const cardData = [
  {
    id: 1,
    image: akashraj,
    title: 'Akash Raj',
    description: 'CEO of This Site',
    email: 'akashraj.it2021@nsec.ac.in',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
    title: 'Vishal Kumar Das',
    description: 'Senior Manager – Guides students through their placement preparation journey.',
    email: 'vishalkumardas.it2021@nsec.ac.in',
  },
  {
    id: 3,
    image: akashraj,
    title: 'Akash Raj',
    description: 'Query Resolution Lead – Handles all incoming questions and provides timely support.',
    email: 'akashraj.it2021@nsec.ac.in',
    email: 'akashraj.it2021@nsec.ac.in',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
    title: 'Akash Singh',
    description: 'Platform Onboarding Expert – Assists new users in getting started with the platform.',
    email: 'akashraj.it2021@nsec.ac.in',
  },{
    id: 5,
    image: akashraj,
    title: 'Akash Raj',
    description: 'Platform Onboarding Expert – Assists new users in getting started with the platform.',
    email: 'akashraj.it2021@nsec.ac.in',
  },{
    id: 6,
    image: akashraj,
    title: 'Akash Raj',
    description: 'Query Resolution Lead – Handles all incoming questions and provides timely support.',
    email: 'akashraj.it2021@nsec.ac.in',
  },
  
];



const Contact = () => {
  return (
    <div className="w-[70%] min-h-screen mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600">
         Whether you have questions about the platform, need guidance on your preparation journey, or simply want to share feedback — our dedicated support team is just a message away. Don't hesitate to reach out and connect with us!
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{card.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{card.email}</p>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <a
              href={`mailto:${card.email}?subject=Support%20Inquiry&body=Hello%20${encodeURIComponent(card.title)},%0D%0A%0D%0AI would like to get in touch with you regarding...`}
              className="block text-center bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Send Email
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

