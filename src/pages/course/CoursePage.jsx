import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config"; // Make sure BASE_URL is set correctly

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

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

  // Filter courses
  const filteredCourses = courses
    .filter((course) => {
      return (
        (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") &&
        (categoryFilter === "All" || course.category === categoryFilter) &&
        (difficultyFilter === "All" || course.difficulty === difficultyFilter)
      );
    })
    .slice(0, 10); // optional limit

  return (
    <section className="w-full flex justify-center py-12 bg-white">
      <div className="w-[80%]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Browse Courses</h2>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Filters */}
          <div className="flex gap-4">
            <select
              className="p-3 border border-gray-300 rounded-md"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Development">Development</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Database">Database</option>
              <option value="Data Science">Data Science</option>
              <option value="Algorithms">Algorithms</option>
            </select>

            <select
              className="p-3 border border-gray-300 rounded-md"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-500">{course.category}</span>
                  <span className="text-gray-500">{course.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
