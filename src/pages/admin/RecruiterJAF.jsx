import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";

const ReacruiterJAF = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/recruiter/all-recruiter-jaf`)
      .then((res) => {
        setJobs(res.data.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      });
  }, []);

  return (
    <div className="job-container">
      <h1 className="title">Recruiter Job Applications</h1>
      <div className="job-grid">
        {jobs && jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h2>{job.companyName}</h2>
            <p><strong>Position:</strong> {job.jobTitle}</p>
            <p><strong>Location:</strong> {job.jobLocation}</p>
            <p><strong>Batch:</strong> {job.batch}</p>
            <button onClick={() => setSelectedJob(job)}>Get More Info</button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedJob.companyName}</h2>
            <p><strong>Recruiter:</strong> {selectedJob.recruiterName}</p>
            <p><strong>Email:</strong> {selectedJob.email}</p>
            <p><strong>Phone:</strong> {selectedJob.phone}</p>
            <p><strong>Position:</strong> {selectedJob.jobTitle}</p>
            <p><strong>Location:</strong> {selectedJob.jobLocation}</p>
            <p><strong>Eligibility:</strong> {selectedJob.eligibilityCriteria}</p>
            <p><strong>Batch:</strong> {selectedJob.batch}</p>
            <p><strong>Percentage:</strong> {selectedJob.percentage}</p>
            <p><strong>Description:</strong> {selectedJob.jobDescription}</p>
            <button onClick={() => setSelectedJob(null)}>Close</button>
          </div>
        </div>
      )}

      <style>{`
        .job-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        .title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .job-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .job-card {
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }

        .job-card:hover {
          transform: translateY(-5px);
        }

        .job-card h2 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .job-card p {
          margin: 4px 0;
        }

        .job-card button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .job-card button:hover {
          background-color: #0056b3;
        }

        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-content h2 {
          margin-top: 0;
        }

        .modal-content button {
          margin-top: 20px;
          background-color: crimson;
        }

        @media (max-width: 600px) {
          .modal-content {
            padding: 20px;
          }

          .title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ReacruiterJAF;
