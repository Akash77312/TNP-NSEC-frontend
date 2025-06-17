import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";

const emptyCourse = {
  title: "",
  description: "",
  details: "",
  price: 0,
  category: "",
  image: "",
  instructor: "", // should be an ObjectId string from user model
  duration: "",
  level: "",
  tags: [],
  videos: [],
  studentsEnrolled: 0,
  isFree: false,
};

export default function CourseManager() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Course being edited or viewed
  const [activeCourse, setActiveCourse] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Form state for create/edit
  const [form, setForm] = useState(emptyCourse);

  // Fetch all courses
  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/courses`);
      setCourses(res.data.courses || []);
    } catch (err) {
      alert("Error fetching courses");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Open create modal
  function openCreateModal() {
    setForm(emptyCourse);
    setEditMode(false);
    setShowCreateModal(true);
  }

  // Open info modal (view)
  function openInfoModal(course) {
    setActiveCourse(course);
    setShowInfoModal(true);
    setEditMode(false);
  }

  // Open info modal (edit mode)
  function openEditModal(course) {
    setForm(course);
    setEditMode(true);
    setShowInfoModal(true);
  }

  // Handle input change (including nested like tags and videos)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "isFree") {
      setForm((f) => ({ ...f, isFree: checked }));
      return;
    }

    if (name === "tags") {
      // split by comma
      const tagsArray = value.split(",").map((t) => t.trim());
      setForm((f) => ({ ...f, tags: tagsArray }));
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  // Handle videos (simple input with add/remove)
  const handleVideoChange = (index, field, value) => {
    const newVideos = [...form.videos];
    newVideos[index][field] = value;
    setForm((f) => ({ ...f, videos: newVideos }));
  };

  const addVideo = () => {
    setForm((f) => ({
      ...f,
      videos: [...f.videos, { title: "", url: "", duration: "" }],
    }));
  };

  const removeVideo = (index) => {
    const newVideos = [...form.videos];
    newVideos.splice(index, 1);
    setForm((f) => ({ ...f, videos: newVideos }));
  };

  // Create course
  async function createCourse() {
    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/admin/create-course`, form, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Course created!");
      setShowCreateModal(false);
      fetchCourses();
    } catch (err) {
      alert("Failed to create course");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Update course
  async function updateCourse() {
    try {
      setLoading(true);
      await axios.put(`${BASE_URL}/courses/${form._id}`, form, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Course updated!");
      setShowInfoModal(false);
      fetchCourses();
    } catch (err) {
      alert("Failed to update course");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Delete course
  async function deleteCourse(id) {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}/courses/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Course deleted!");
      setShowInfoModal(false);
      fetchCourses();
    } catch (err) {
      alert("Failed to delete course");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Course Manager</h1>

        <div className="mb-6 flex justify-center">
          <button
            onClick={openCreateModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
          >
            Create Course
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}

        {/* Course List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded shadow p-4 flex flex-col justify-between"
            >
              <img
                src={
                  course.image ||
                  "https://via.placeholder.com/400x200?text=No+Image"
                }
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600 mb-2 truncate">
                {course.description}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Category:{" "}
                <span className="font-medium">{course.category || "-"}</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Level: <span className="font-medium">{course.level || "-"}</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Duration:{" "}
                <span className="font-medium">{course.duration || "-"}</span>
              </p>
              <button
                onClick={() => openInfoModal(course)}
                className="self-start bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              >
                Info
              </button>
            </div>
          ))}
        </div>

        {/* Create Modal */}
        {showCreateModal && (
          <Modal
            onClose={() => setShowCreateModal(false)}
            title="Create New Course"
          >
            <CourseForm
              form={form}
              setForm={setForm}
              handleChange={handleChange}
              handleVideoChange={handleVideoChange}
              addVideo={addVideo}
              removeVideo={removeVideo}
            />
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded"
              >
                Cancel
              </button>
              <button
                onClick={createCourse}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Create
              </button>
            </div>
          </Modal>
        )}

        {/* Info/Edit Modal */}
        {showInfoModal && activeCourse && (
          <Modal
            onClose={() => setShowInfoModal(false)}
            title={editMode ? "Edit Course" : "Course Details"}
          >
            {editMode ? (
              <>
                <CourseForm
                  form={form}
                  setForm={setForm}
                  handleChange={handleChange}
                  handleVideoChange={handleVideoChange}
                  addVideo={addVideo}
                  removeVideo={removeVideo}
                />
                <div className="mt-4 flex justify-end gap-4">
                  <button
                    onClick={() => {
                      setEditMode(false);
                      setForm(activeCourse);
                    }}
                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={updateCourse}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <img
                    src={
                      activeCourse.image ||
                      "https://via.placeholder.com/600x300?text=No+Image"
                    }
                    alt={activeCourse.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-2">{activeCourse.title}</h2>
                  <p className="mb-2">{activeCourse.description}</p>
                  <p className="mb-1">
                    <strong>Category:</strong> {activeCourse.category}
                  </p>
                  <p className="mb-1">
                    <strong>Level:</strong> {activeCourse.level}
                  </p>
                  <p className="mb-1">
                    <strong>Duration:</strong> {activeCourse.duration}
                  </p>
                  <p className="mb-1">
                    <strong>Price:</strong>{" "}
                    {activeCourse.isFree ? "Free" : `$${activeCourse.price}`}
                  </p>
                  <p className="mb-1">
                    <strong>Tags:</strong> {activeCourse.tags?.join(", ")}
                  </p>
                  <p className="mb-1">
                    <strong>Videos:</strong>
                  </p>
                  <ul className="list-disc pl-5 mb-3">
                    {activeCourse.videos?.map((v, idx) => (
                      <li key={idx}>
                        {v.title} - Duration: {v.duration} - URL: {v.url}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => openEditModal(activeCourse)}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCourse(activeCourse._id)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowInfoModal(false)}
                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </Modal>
        )}
      </div>
    </div>
  );
}

// Modal Component
function Modal({ onClose, title, children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded max-w-3xl w-full max-h-full overflow-auto p-6 relative">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

// CourseForm Component
function CourseForm({
  form,
  setForm,
  handleChange,
  handleVideoChange,
  addVideo,
  removeVideo,
}) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows={3}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Details</label>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows={3}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Price ($)</label>
        <input
          type="number"
          name="price"
          min="0"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          disabled={form.isFree}
        />
      </div>

      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="isFree"
            checked={form.isFree}
            onChange={handleChange}
            className="mr-2"
          />
          Free Course
        </label>
      </div>

      <div>
        <label className="block font-semibold mb-1">Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g. Programming, Design"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Level</label>
        <input
          type="text"
          name="level"
          value={form.level}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Beginner, Intermediate, Advanced"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Duration</label>
        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g. 10 hours"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          value={form.tags.join(", ")}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="tag1, tag2, tag3"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Image URL</label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Instructor (User ID)</label>
        <input
          type="text"
          name="instructor"
          value={form.instructor}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="User ObjectId string"
        />
      </div>

      {/* Videos */}
      <div>
        <label className="block font-semibold mb-2">Videos</label>
        {form.videos.map((video, idx) => (
          <div
            key={idx}
            className="mb-3 border p-3 rounded relative bg-gray-50"
          >
            <button
              type="button"
              onClick={() => removeVideo(idx)}
              className="absolute top-1 right-1 text-red-600 font-bold"
              title="Remove video"
            >
              &times;
            </button>
            <input
              type="text"
              placeholder="Title"
              value={video.title}
              onChange={(e) =>
                handleVideoChange(idx, "title", e.target.value)
              }
              className="w-full mb-1 border rounded px-2 py-1"
            />
            <input
              type="text"
              placeholder="URL"
              value={video.url}
              onChange={(e) => handleVideoChange(idx, "url", e.target.value)}
              className="w-full mb-1 border rounded px-2 py-1"
            />
            <input
              type="text"
              placeholder="Duration"
              value={video.duration}
              onChange={(e) =>
                handleVideoChange(idx, "duration", e.target.value)
              }
              className="w-full border rounded px-2 py-1"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addVideo}
          className="px-3 py-1 bg-green-600 text-white rounded"
        >
          + Add Video
        </button>
      </div>
    </form>
  );
}
