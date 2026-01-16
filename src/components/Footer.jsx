import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left - Simple Text */}
          <div className="mb-3 md:mb-0">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Nadim Islam. All rights reserved.
            </p>
          </div>

          {/* Right - Live Clock */}
          <div className="flex items-center">
            <span className="text-yellow-400 mr-2">🕒</span>
            <span className="font-mono text-lg">
              {currentTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
              })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;