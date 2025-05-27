import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import ProfileSection from './ProfileSection';

const HomePage = () => {
  return (
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
  );
};

export default HomePage; 