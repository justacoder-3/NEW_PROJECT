import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A365D] via-[#2A4365] to-[#2C5282] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1A365D]">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-[#4A5568]">
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-[#2D3748]">
                Email or Phone Number
              </label>
              <input
                id="emailOrPhone"
                name="emailOrPhone"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A4365] focus:border-transparent focus:z-10 sm:text-sm"
                placeholder="john@example.com or +1 (555) 000-0000"
                value={formData.emailOrPhone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2D3748]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2A4365] focus:border-transparent focus:z-10 sm:text-sm"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-[#2A4365] focus:ring-[#2A4365] border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#2D3748]">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="/forgot-password" className="font-medium text-[#2A4365] hover:text-[#1A365D] transition-colors duration-200">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-[#2A4365] hover:bg-[#1A365D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A4365] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <a href="/signup" className="font-medium text-[#2A4365] hover:text-[#1A365D] transition-colors duration-200">
            Don't have an account? <span className="underline">Sign up</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 
