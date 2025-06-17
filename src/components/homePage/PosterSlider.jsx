import React from 'react';

export default function PosterSlider() {
  const imageSlider = [
    {
      title: 'Placed At Cognizant',
      imageLink: 'https://www.nsec.ac.in/images/gallery/it/it_placement_2025_03.jpg',
    },
    {
      title: 'Placed At TCS',
      imageLink: 'https://www.nsec.ac.in/images/gallery/it/it_placement_2025_02.jpg',
    },
    {
      title: 'Placed At TCS',
      imageLink: 'https://www.nsec.ac.in/images/gallery/it/it_placement_2025_03.jpg',
    },
    {
      title: 'Placed At Zoho',
      imageLink: 'https://www.nsec.ac.in/images/gallery/it/it_placement_2025_01.jpg',
    },
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 300px;
          border-radius: 16px;
        }

        @media (min-width: 640px) {
          .slider-container {
            height: 400px;
          }
        }

        .slide-track {
          display: flex;
          animation: slide 20s linear infinite;
        }

        .slide {
          min-width: 100%;
          transition: all 0.7s ease-in-out;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }
      `}</style>

      <div className="slider-container">
        <div className="slide-track">
          {imageSlider.concat(imageSlider).map((item, index) => (
            <div key={index + item.imageLink} className="slide">
              <img src={item.imageLink} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}