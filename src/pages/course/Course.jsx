import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import toast from "react-hot-toast";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/courses`);
        setCourses(data.courses || []);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSeeMoreCourse = () => {
    console.log("click")
    if (token!==null) {
      console.log(token)
      navigate("/all-courses");
    } else {
      toast.success("Logged in first");
      navigate("/auth");
    }
  };

  return (
    <section className="w-full flex justify-center py-12 bg-white">
      <div className="w-[80%]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Popular Courses
        </h2>

        {/* Grid of 3 courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {course.description}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Courses button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleSeeMoreCourse}
            className="inline-block bg-gray-100 hover:bg-gray-200 text-blue-600 font-medium px-6 py-3 rounded-md transition"
          >
            View More Courses →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
