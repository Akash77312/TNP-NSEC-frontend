import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { useSelector } from "react-redux";

export default function JobApplicationForm() {
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem("token");

  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const initialForm = {
    adminId: user.id,
    companyName: "",
    description: "",
    status: "Open",
    lastDateToApply: "",
    totalOpenings: 1,
    eligibility: {
      cgpa: "",
      backlogsAllowed: false,
      branchesAllowed: "",
    },
    link: "",
    education: {
      tenth: "",
      twelfth: "",
      graduation: "",
    },
    location: "",
    ctc: "",
    skillsRequired: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("eligibility.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        eligibility: {
          ...prev.eligibility,
          [key]: type === "checkbox" ? checked : value,
        },
      }));
    } else if (name.startsWith("education.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        skillsRequired: formData.skillsRequired.split(",").map((s) => s.trim()),
        eligibility: {
          ...formData.eligibility,
          branchesAllowed: formData.eligibility.branchesAllowed
            .split(",")
            .map((b) => b.trim()),
        },
      };
      await axios.post(`${BASE_URL}/admin/create-job-application`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Job Application Created Successfully");
      setFormData(initialForm);
      setShowForm(false);
      fetchAllJobs();
    } catch (err) {
      console.error(err);
      alert("Failed to create job application");
    }
  };

  const fetchAllJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/all-jobs`);
      setJobs(res.data || []);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
        onClick={() => setShowForm(true)}
      >
        Create New Job Application
      </button>

      {/* Job Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">New Job Application</h2>
              <button onClick={() => setShowForm(false)} className="text-red-500">X</button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="border p-2 rounded" required />
              <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} className="border p-2 rounded col-span-2" required />
              <input name="lastDateToApply" type="date" value={formData.lastDateToApply} onChange={handleChange} className="border p-2 rounded" required />
              <input name="totalOpenings" type="number" value={formData.totalOpenings} onChange={handleChange} className="border p-2 rounded" />
              <input name="link" placeholder="Application Link" value={formData.link} onChange={handleChange} className="border p-2 rounded" required />
              <input name="location" placeholder="Job Location" value={formData.location} onChange={handleChange} className="border p-2 rounded" />
              <input name="ctc" placeholder="CTC" value={formData.ctc} onChange={handleChange} className="border p-2 rounded" />
              <input name="eligibility.cgpa" placeholder="Minimum CGPA" value={formData.eligibility.cgpa} onChange={handleChange} className="border p-2 rounded" />
              <label className="flex items-center gap-2">
                <input type="checkbox" name="eligibility.backlogsAllowed" checked={formData.eligibility.backlogsAllowed} onChange={handleChange} />
                Backlogs Allowed
              </label>
              <input name="eligibility.branchesAllowed" placeholder="Branches Allowed (comma separated)" value={formData.eligibility.branchesAllowed} onChange={handleChange} className="border p-2 rounded col-span-2" />
              <input name="education.tenth" placeholder="10th Requirement" value={formData.education.tenth} onChange={handleChange} className="border p-2 rounded" />
              <input name="education.twelfth" placeholder="12th Requirement" value={formData.education.twelfth} onChange={handleChange} className="border p-2 rounded" />
              <input name="education.graduation" placeholder="Graduation Requirement" value={formData.education.graduation} onChange={handleChange} className="border p-2 rounded" />
              <textarea name="skillsRequired" placeholder="Skills Required (comma separated)" value={formData.skillsRequired} onChange={handleChange} className="border p-2 rounded col-span-2" />
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded col-span-2 hover:bg-blue-700">
                Submit Job Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Job List */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(jobs) && jobs.map((job, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-bold text-lg">{job.companyName}</h3>
            <p className="text-sm text-gray-600">{job.description?.substring(0, 100)}...</p>
            <p className="text-sm">Location: {job.location}</p>
            <p className="text-sm">Last Date: {job.lastDateToApply?.split("T")[0]}</p>
            <button className="text-blue-600 hover:underline mt-2" onClick={() => setSelectedJob(job)}>
              Get More Info
            </button>
          </div>
        ))}
      </div>

      {/* Job Info Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">{selectedJob.companyName}</h2>
              <button onClick={() => setSelectedJob(null)} className="text-red-500 font-bold">X</button>
            </div>
            <p className="mb-2"><strong>Description:</strong> {selectedJob.description}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>CTC:</strong> {selectedJob.ctc}</p>
            <p><strong>Last Date to Apply:</strong> {selectedJob.lastDateToApply?.split("T")[0]}</p>
            <p><strong>Total Openings:</strong> {selectedJob.totalOpenings}</p>

            <div className="mt-4">
              <h3 className="font-semibold">Eligibility</h3>
              <p>CGPA: {selectedJob.eligibility?.cgpa}</p>
              <p>Backlogs Allowed: {selectedJob.eligibility?.backlogsAllowed ? "Yes" : "No"}</p>
              <p>Branches Allowed: {selectedJob.eligibility?.branchesAllowed?.join(", ")}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Education</h3>
              <p>10th: {selectedJob.education?.tenth}</p>
              <p>12th: {selectedJob.education?.twelfth}</p>
              <p>Graduation: {selectedJob.education?.graduation}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Skills Required</h3>
              <p>{selectedJob.skillsRequired?.join(", ")}</p>
            </div>

            <a
              href={selectedJob.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 underline"
            >
              Application Link
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
