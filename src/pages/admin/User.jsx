import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { Users2 } from "lucide-react"; // Make sure lucide-react is installed

const User = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const userList = Array.isArray(res.data.users) ? res.data.users : [];
        setUsers(userList);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="mx-10 mt-5">
      {/* User Analytics Box */}
      <div className="w-full max-w-[80%] bg-white shadow-lg rounded-xl p-6 mb-10 border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#212B36] mb-6">User Analytics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Total Users Card */}
          <div className="flex items-center gap-4 p-5 rounded-lg bg-[#F4F6F8] hover:shadow-md transition">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users2 className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-[#637381]">Total Users</p>
              <p className="text-2xl font-bold text-[#212B36]">{users.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-separate border-spacing-y-1 text-left font-inter">
          <thead className="bg-[#222E3A]/[6%] text-sm font-semibold text-[#212B36]">
            <tr>
              <th className="py-3 pl-3 rounded-l-lg">Full Name</th>
              <th className="py-3">Username</th>
              <th className="py-3">Email</th>
              <th className="py-3">Active</th>
              <th className="py-3 pr-3 rounded-r-lg">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-[#f6f8fa] shadow-sm hover:shadow-xl cursor-pointer"
              >
                <td className="py-4 pl-3 rounded-l-lg text-sm text-[#637381]">
                  {user.fullname}
                </td>
                <td className="py-4 text-sm text-[#637381]">{user.username}</td>
                <td className="py-4 text-sm text-[#637381]">{user.email}</td>
                <td className="py-4 text-sm text-[#637381]">
                  <label className="inline-flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      checked={user.isActive}
                      readOnly
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-red-500 peer-checked:bg-green-500 rounded-full transition-colors duration-300 peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-green-500"></div>
                    <div className="w-5 h-5 bg-white rounded-full shadow-md absolute left-0 top-0.5 transform peer-checked:translate-x-full transition-transform duration-300 ml-1"></div>
                  </label>
                </td>
                <td className="py-4 pr-3 rounded-r-lg text-sm text-[#637381]">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
