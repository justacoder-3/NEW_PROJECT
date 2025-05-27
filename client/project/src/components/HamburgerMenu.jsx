import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Services', link: '/services' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 border-none focus:outline-none bg-transparent p-2 hover:bg-gray-100 rounded-lg transition-all z-50"
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
          <nav>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block py-3 text-gray-800 hover:text-gray-600 border-b border-gray-200 transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
