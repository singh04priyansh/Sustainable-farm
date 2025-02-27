import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SustainFarm</h3>
            <p className="text-gray-300">
              A data-driven approach to sustainable farming without complex AI/ML technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-light">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-primary-light">Dashboard</Link></li>
              <li><Link to="/history" className="text-gray-300 hover:text-primary-light">History</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email: info@sustainfarm.com<br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SustainFarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;