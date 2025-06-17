import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";

const Interview = () => {
  const [interviews, setInterviews] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newSlot, setNewSlot] = useState("");
  const [selectedInterview, setSelectedInterview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    domain: "DSA",
    difficulty: "Medium",
    price: "",
    duration: "",
    availableSlots: [],
  });

  const token = localStorage.getItem("token");

  // Fetch all interviews
  const fetchInterviews = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/admin/all-interview`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInterviews(data.interviews);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      domain: "DSA",
      difficulty: "Medium",
      price: "",
      duration: "",
      availableSlots: [],
    });
    setNewSlot("");
  };

  // Create interview submit
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/admin/interview/create`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      resetForm();
      setShowCreateModal(false);
      fetchInterviews();
    } catch (err) {
      console.error(err);
      alert("Error creating interview");
    }
  };

  // Open Edit Modal and fill form
  const openEditModal = (interview) => {
    setSelectedInterview(interview);
    setFormData({
      title: interview.title,
      description: interview.description,
      domain: interview.domain,
      difficulty: interview.difficulty,
      price: interview.price,
      duration: interview.duration,
      availableSlots: interview.availableSlots,
    });
    setShowEditModal(true);
  };

  // Edit interview submit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${BASE_URL}/admin/interview/${selectedInterview._id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setShowEditModal(false);
      fetchInterviews();
    } catch (err) {
      console.error(err);
      alert("Error updating interview");
    }
  };

  // Delete interview
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this interview?")) {
      try {
        await axios.delete(`${BASE_URL}/admin/interview/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setShowEditModal(false);
        fetchInterviews();
      } catch (err) {
        console.error(err);
        alert("Error deleting interview");
      }
    }
  };

  // Add slot to formData.availableSlots
  const addSlot = () => {
    if (newSlot) {
      setFormData((prev) => ({
        ...prev,
        availableSlots: [...prev.availableSlots, new Date(newSlot)],
      }));
      setNewSlot("");
    }
  };

  // Remove slot by index
  const removeSlot = (index) => {
    setFormData((prev) => ({
      ...prev,
      availableSlots: prev.availableSlots.filter((_, i) => i !== index),
    }));
  };

  // Sample Dashboard Analytics (You can replace with your real data or components)
  const totalInterviews = interviews.length;
  const totalDomains = [...new Set(interviews.map((i) => i.domain))].length;
  const totalSlots = interviews.reduce(
    (acc, i) => acc + i.availableSlots.length,
    0
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Dashboard Analytics */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold">Total Interviews</h3>
          <p className="mt-2 text-3xl text-blue-600">{totalInterviews}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold">Domains Covered</h3>
          <p className="mt-2 text-3xl text-green-600">{totalDomains}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold">Available Slots</h3>
          <p className="mt-2 text-3xl text-purple-600">{totalSlots}</p>
        </div>
      </div>

      {/* Create Interview Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            resetForm();
            setShowCreateModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Interview
        </button>
      </div>

      {/* Interviews List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interviews.map((interview) => (
          <div
            key={interview._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => openEditModal(interview)}
          >
            <h2 className="text-xl font-semibold">{interview.title}</h2>
            <p className="text-gray-600">{interview.description}</p>
            <p>
              <strong>Domain:</strong> {interview.domain}
            </p>
            <p>
              <strong>Difficulty:</strong> {interview.difficulty}
            </p>
            <p>
              <strong>Price:</strong> ₹{interview.price}
            </p>
            <p>
              <strong>Duration:</strong> {interview.duration} mins
            </p>
          </div>
        ))}
      </div>

      {/* Create Interview Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-3 right-3 text-gray-600 text-3xl font-bold hover:text-red-600"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Create New Interview</h2>
            <form
              onSubmit={handleCreateSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                value={formData.title}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option>DSA</option>
                <option>System Design</option>
                <option>HR</option>
                <option>Behavioral</option>
                <option>Full Stack</option>
                <option>Frontend</option>
                <option>Backend</option>
              </select>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <input
                type="number"
                name="price"
                placeholder="Price"
                required
                value={formData.price}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                name="duration"
                placeholder="Duration (minutes)"
                value={formData.duration}
                onChange={handleChange}
                className="p-2 border rounded"
              />

              {/* Slots */}
              <div className="col-span-2 space-y-2">
                <label className="font-semibold">Available Slots</label>
                <div className="flex gap-2">
                  <input
                    type="datetime-local"
                    value={newSlot}
                    onChange={(e) => setNewSlot(e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                  <button
                    type="button"
                    onClick={addSlot}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  >
                    Add Slot
                  </button>
                </div>

                <ul className="list-disc ml-6 text-sm text-gray-700 max-h-32 overflow-auto">
                  {formData.availableSlots.map((slot, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      {new Date(slot).toLocaleString()}
                      <button
                        type="button"
                        onClick={() => removeSlot(index)}
                        className="text-red-500 ml-4 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded col-span-2 hover:bg-green-700"
              >
                Create Interview
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Interview Modal */}
      {showEditModal && selectedInterview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-3 right-3 text-gray-600 text-3xl font-bold hover:text-red-600"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Edit Interview</h2>
            <form
              onSubmit={handleEditSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option>DSA</option>
                <option>System Design</option>
                <option>HR</option>
                <option>Behavioral</option>
                <option>Full Stack</option>
                <option>Frontend</option>
                <option>Backend</option>
              </select>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              <input
                type="number"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="p-2 border rounded"
              />

              {/* Slots */}
              <div className="col-span-2 space-y-2">
                <label className="font-semibold">Available Slots</label>
                <div className="flex gap-2">
                  <input
                    type="datetime-local"
                    value={newSlot}
                    onChange={(e) => setNewSlot(e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                  <button
                    type="button"
                    onClick={addSlot}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  >
                    Add Slot
                  </button>
                </div>

                <ul className="list-disc ml-6 text-sm text-gray-700 max-h-32 overflow-auto">
                  {formData.availableSlots.map((slot, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      {new Date(slot).toLocaleString()}
                      <button
                        type="button"
                        onClick={() => removeSlot(index)}
                        className="text-red-500 ml-4 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded col-span-2 hover:bg-green-700"
              >
                Update Interview
              </button>
              <button
                type="button"
                onClick={() => handleDelete(selectedInterview._id)}
                className="bg-red-600 text-white px-4 py-2 rounded col-span-2 hover:bg-red-700"
              >
                Delete Interview
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interview;
