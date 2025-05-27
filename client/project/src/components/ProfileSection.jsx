import React, { useState } from 'react';
import LoginPage from '../../pages/authentication/LoginPage';
import SignupPage from '../../pages/authentication/SignupPage';
import { Link } from "react-router-dom";

const ProfileSection = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);

  const profileSettings = [
    { title: 'Edit Profile', link: '/profile/edit' },
    { title: 'Account Settings', link: '/profile/settings' },
    { title: 'Privacy', link: '/profile/privacy' },
    { title: 'Notifications', link: '/profile/notifications' },
    { title: 'Help & Support', link: '/help' },
    { title: 'Logout', link: '/logout' },
  ];

  return (
    <div className="flex items-center gap-4">
      {/* Login/Signup Button with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
          onBlur={() => setTimeout(() => setIsAuthDropdownOpen(false), 200)}
          className="px-6 py-2 bg-[#2A4365] text-white rounded-full font-semibold hover:bg-[#1A365D] transition-colors duration-200 focus:outline-none"
        >
          Login / Signup
        </button>
        
        {/* Auth Dropdown */}
        <div
          className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${
            isAuthDropdownOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-2 invisible'
          }`}
        >
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            onClick={() => (<LoginPage/>)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            onClick={() => (<SignupPage/>)}
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Profile Button */}
      <button
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-white hover:border-gray-200 transition-colors duration-200 focus:outline-none"
        aria-label="Profile"
      >
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Profile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isProfileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsProfileOpen(false)}
      />

      {/* Profile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isProfileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/64"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>

          {/* Profile Settings Navigation */}
          <nav className="space-y-1">
            {profileSettings.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection; 