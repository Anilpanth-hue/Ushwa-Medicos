import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, User as UserIcon } from "lucide-react";
import { formatPhoneNumber } from "../utils/format";
import toast from "react-hot-toast";

export const Profile = () => {
  const [user, setUser] = useState({
    prefix: "Dr.",
    name: "Amrit Singh",
    mobile: "9826454554",
    email: "amritsingh@example.com",
    address: "123 Medical Lane, Garoth, MP",
    profileImage: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">My Profile</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-center mb-8">
          <div className="relative">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center">
                <UserIcon className="h-16 w-16 text-primary-600" />
              </div>
            )}
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
              <Camera className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prefix
              </label>
              <select
                value={user.prefix}
                onChange={(e) => setUser({ ...user, prefix: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              value={formatPhoneNumber(user.mobile)}
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Save Changes
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};
