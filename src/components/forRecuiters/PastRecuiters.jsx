import React, { useEffect, useRef } from "react";

// Random dummy recruiters
const pastRecruitersList = [
  { title: "TechNova", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
  { title: "CodeCrush", imageLink: "https://content.jdmagicbox.com/v2/v2/comp/hyderabad/g1/040pxx40.xx40.240417200034.j2g1/catalogue/code-crush-juices-madhapur-hyderabad-juice-centres-vn05s4nm8e.jpg" },
  { title: "ByteForge", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
  { title: "NexGen IT", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
  { title: "FutureSoft", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
  { title: "LogicLabs", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
  { title: "AlgoSphere", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&se" },
  { title: "StackHive", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
  { title: "Quantum Tech", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
  { title: "DigitalWaves", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNlEyX534l_jgN1zH-ObS6G9ITyeTIMLE4w&s" },
];

const PastRecruitersCard = ({ title, imageLink }) => {
  return (
    <div
      className="recruiter-card"
      style={{
        width: '180px',
        minHeight: '250px',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '12px',
        background: '#f0f0f0',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
      }}
    >
      <img
        src={imageLink}
        alt={title}
        style={{ width: '100%', height: '80px', objectFit: 'contain' }}
      />
      <h3 style={{ marginTop: '1rem', fontSize: '1.1rem' }}>{title}</h3>
    </div>
  );
};

const PastRecruiters = () => {
  const containerRef = useRef();

  useEffect(() => {
    document.title = "Past Recruiters | Demo Page";
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current.querySelectorAll(".recruiter-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section style={{ padding: '2rem', background: '#fff', color: '#333' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Placement Partners</h1>
        <h3
          style={{
            padding: '1rem',
            marginBottom: '2rem',
            border: '2px solid #ccc',
            borderRadius: '8px',
            fontSize: '1.1rem',
          }}
        >
          “Your Path to Success Starts with Our Placement Alliances”
        </h3>
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {pastRecruitersList.map((item, index) => (
            <PastRecruitersCard key={index} title={item.title} imageLink={item.imageLink} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastRecruiters;
