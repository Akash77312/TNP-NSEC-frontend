import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../config/config.js";

const initialProfile = {
  universityRoll: "",
  collegeName: "",
  branch: "",
  course: "",
  graduationYear: 2025,
  dob: "",
  phone: "",
  address: "",
  skills: [],
  academic: {
    tenthPercentage: null,
    twelfthPercentage: null,
    diplomaPercentage: null,
    cgpa: null,
    backlogs: null,
  },
  resumeLink: "",
  achievements: [],
  placementStatus: "",
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const studentId = user.id; // ideally, this should be fetched from auth context or user state
 const token = localStorage.getItem("token");

 console.log(user.id);
  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/u/profile/${studentId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        const fetched = res.data;

        setProfile({
          ...initialProfile,
          ...fetched,
          academic: { ...initialProfile.academic, ...(fetched.academic || {}) },
          skills: Array.isArray(fetched.skills) ? fetched.skills : [],
          achievements: Array.isArray(fetched.achievements) ? fetched.achievements : [],
        });
      }
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    }
  };

  fetchProfile();
}, []);


  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleAcademicChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      academic: { ...prev.academic, [field]: value },
    }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/u/profile/upsert/${studentId}`, profile,
         {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        alert("Profile updated successfully");
        setEditMode(false);
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Student Profile
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {profile && Object.entries(profile).map(([key, value]) => {
          if (key === "academic" || key === "skills" || key === "achievements") return null;
          return (
            <div key={key}>
              <label className="font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                value={value}
                disabled={!editMode}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Academic Details</h3>
        {profile.academic && Object.entries(profile.academic).map(([key, value]) => (
          <div key={key} className="mt-2">
            <label className="font-medium capitalize">{key}</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={value || ""}
              disabled={!editMode}
              onChange={(e) => handleAcademicChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Skills</h3>
        {editMode ? (
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={profile.skills.join(", ")}
            onChange={(e) => handleChange("skills", e.target.value.split(", "))}
          />
        ) : (
          <ul className="list-disc pl-5">
            {profile.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Achievements</h3>
        {editMode ? (
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={profile.achievements.join("\n")}
            onChange={(e) => handleChange("achievements", e.target.value.split("\n"))}
          />
        ) : (
          <ul className="list-disc pl-5">
            {profile.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => (editMode ? handleSave() : setEditMode(true))}
        >
          {editMode ? "Save" : "Edit Profile"}
        </button>
        {editMode && (
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}