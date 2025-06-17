import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config/config";

const applyLink = "https://docs.google.com/forms/d/e/1FAIpQLSf_y-6o7Ee5SOr3xAupvHF6bnQgYRxKwi9IqKvgolctiakd9w/viewform?usp=header";

const events = [
  {
    id: 1,
    title: "Tech Talk 2025",
    description: "Webinar on emerging tech trends.",
    date: "July 10, 2025",
    festName: "InnovateFest 2025",
  },
  {
    id: 2,
    title: "Alumni Meetup",
    description: "Networking event for alumni and students.",
    date: "August 5, 2025",
    festName: "Campus Connect",
  },
];

const JobAndEventPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/all-jobs`);
        setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="page-container">
      <h1 className="title">Jobs & Events</h1>
      <div className="sections">
        <div className="event-section">
          <h2>Events</h2>
          {events.map((event) => (
            <div key={event.id} className="card event-card">
              <h3>{event.title}</h3>
              <p><strong>Fest/Org:</strong> {event.festName}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                <button className="apply-btn">Apply</button>
              </a>
            </div>
          ))}
        </div>

        <div className="job-section">
          <h2>Jobs</h2>
          {loading ? (
            <p>Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p>No job applications available.</p>
          ) : (
            jobs.map((job) => (
              <div key={job._id} className="card job-card">
                <h3>{job.companyName}</h3>
                <p><strong>Description:</strong> {job.description}</p>
                <p><strong>Location:</strong> {job.location || "N/A"}</p>
                <p><strong>CTC:</strong> {job.ctc || "N/A"}</p>
                <p><strong>Last Date to Apply:</strong> {new Date(job.lastDateToApply).toDateString()}</p>
                <p><strong>Status:</strong> {job.status}</p>
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  <button className="apply-btn">Apply</button>
                </a>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        .page-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 30px;
          background: linear-gradient(135deg, #f3f4f6, #ffffff);
          min-height: 100vh;
        }

        .title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          color: #333;
        }

        .sections {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        .event-section, .job-section {
          flex: 1;
          min-width: 300px;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .event-section h2, .job-section h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #007bff;
          border-bottom: 2px solid #007bff;
          padding-bottom: 5px;
        }

        .card {
          background: #fdfdfd;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          transition: transform 0.2s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card h3 {
          margin-top: 0;
          color: #333;
        }

        .card p {
          margin: 6px 0;
          color: #555;
        }

        .apply-btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
          font-weight: bold;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .apply-btn:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .sections {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default JobAndEventPage;
