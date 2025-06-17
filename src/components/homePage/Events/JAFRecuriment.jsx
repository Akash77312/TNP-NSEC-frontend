import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config/config";

const JobAnnouncementForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    recruiterName: "",
    email: "",
    phone: "",
    jobTitle: "",
    jobLocation: "",
    eligibilityCriteria: "",
    batch: "",
    percentage: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/recruiter/job-announcement`, formData);

      if (response.data.success) {
        alert("Your request has been sent to the TNP Cell!");
        setFormData({
          companyName: "",
          recruiterName: "",
          email: "",
          phone: "",
          jobTitle: "",
          jobLocation: "",
          eligibilityCriteria: "",
          batch: "",
          percentage: "",
          jobDescription: "",
        });
      } else {
        alert("Failed to submit: " + response.data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Job Announcement Form</h1>
      <p>Recruiters, please fill out the form below to hire students through our college's TNP Cell.</p>
      <form onSubmit={handleSubmit}>
        <label>Company Name</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

        <label>Recruiter Name</label>
        <input type="text" name="recruiterName" value={formData.recruiterName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Job Title / Position</label>
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />

        <label>Job Location</label>
        <input type="text" name="jobLocation" value={formData.jobLocation} onChange={handleChange} required />

        <label>Eligibility Criteria</label>
        <input
          type="text"
          name="eligibilityCriteria"
          value={formData.eligibilityCriteria}
          onChange={handleChange}
          placeholder="e.g., B.Tech IT, CSE"
          required
        />

        <label>Eligible Batch</label>
        <input type="text" name="batch" value={formData.batch} onChange={handleChange} required />

        <label>Minimum Percentage Required</label>
        <input type="text" name="percentage" value={formData.percentage} onChange={handleChange} required />

        <label>Job Description / Requirements</label>
        <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} rows="4" required></textarea>

        <button className="ask_button" type="submit">Ask TNP</button>
      </form>

      <style>{`
        .form-container {
          max-width: 600px;
          margin: 40px auto;
          background: #f9f9f9;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', sans-serif;
        }
        .form-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #333;
        }
        h1 {
          text-align: center;
          margin-bottom: 10px;
        }
        p {
          text-align: center;
          margin-bottom: 25px;
          color: #555;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin: 8px 0 4px;
          font-weight: 600;
        }
        input, textarea {
          padding: 10px;
          margin-bottom: 16px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        .ask_button {
          background-color: #007bff;
          color: white;
          padding: 12px;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .ask_button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default JobAnnouncementForm;
