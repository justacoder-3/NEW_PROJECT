import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import ProfileSection from './ProfileSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-indigo-950">
      <header className="min-h-[200px] bg-gradient-to-r from-[#2A4365] via-[#1A365D] to-[#0F2942] flex flex-col justify-center items-center p-8 text-white text-center font-sans relative">
        <div className="absolute top-4 left-4">
          <HamburgerMenu />
        </div>
        <div className="absolute top-4 right-4">
          <ProfileSection />
        </div>
        <h1 className="text-5xl mb-2 font-bold drop-shadow-lg">OnlyStags</h1>
        <p className="text-2xl opacity-90 drop-shadow-md">Only for the STAGS</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Left Sidebar - 20% */}
          <div className="w-1/5 bg-white rounded-lg shadow-lg p-4 h-fit">
            <Link
              to="/create-post"
              className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors duration-200 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create Post
            </Link>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Quick Links</h3>
              <div className="space-y-2">
                {/* Placeholder for future features */}
              </div>
            </div>
          </div>

          {/* Main Content - 50% */}
          <div className="w-1/2 space-y-6">
            {/* Posts will be mapped here */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 text-center">No posts yet. Be the first to create one!</p>
            </div>
          </div>

          {/* Right Sidebar - 30% */}
          <div className="w-[30%] bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Highlights</h2>
            <div className="space-y-4">
              {/* Placeholder for highlights */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Highlights will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage; 
