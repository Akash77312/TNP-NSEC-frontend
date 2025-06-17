import React from "react";

const assessments = [
  {
    id: 1,
    company: "TechNova Inc.",
    position: "Frontend Developer",
    date: "July 2, 2025",
    time: "10:00 AM - 11:30 AM",
    mode: "Online",
    description: "Aptitude + JavaScript Coding Round",
    type: "Test"
  },
  {
    id: 2,
    company: "FinEdge Solutions",
    position: "Business Analyst Intern",
    date: "July 4, 2025",
    time: "2:00 PM - 3:30 PM",
    mode: "Offline",
    description: "Case Study + HR Interview",
    type: "Interview"
  },
  {
    id: 3,
    company: "DataVista",
    position: "Data Scientist",
    date: "July 6, 2025",
    time: "9:00 AM - 11:00 AM",
    mode: "Online",
    description: "Python + SQL Assessment",
    type: "Test"
  }
];

const UpcomingAssessments = () => {
  return (
    <div className="assessment-container">
      <h1 className="heading">Upcoming Assessments & Interviews</h1>
      {assessments.map((item) => (
        <div key={item.id} className="assessment-card">
          <div className="card-header">
            <h3>{item.company} - {item.position}</h3>
            <span className={`status ${item.type === "Test" ? "test" : "interview"}`}>{item.type}</span>
          </div>
          <p><strong>Date:</strong> {item.date}</p>
          <p><strong>Time:</strong> {item.time}</p>
          <p><strong>Mode:</strong> {item.mode}</p>
          <p>{item.description}</p>
          <p className="note"><em>Test/Interview link will be sent via registered email.</em></p>
        </div>
      ))}

      <style>{`
        .assessment-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          font-family: 'Segoe UI', sans-serif;
        }

        .heading {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2.2rem;
          color: #333;
        }

        .assessment-card {
          background: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          margin-bottom: 25px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .assessment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .assessment-card h3 {
          margin: 0;
          color: #007bff;
          font-size: 1.4rem;
        }

        .status {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #fff;
        }

        .test {
          background-color: #28a745;
        }

        .interview {
          background-color: #17a2b8;
        }

        .assessment-card p {
          margin: 6px 0;
          color: #555;
          line-height: 1.4;
        }

        .note {
          margin-top: 10px;
          color: red;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};

export default UpcomingAssessments;
