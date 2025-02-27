import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary rounded-lg text-white p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Sustainable Fertilizer Usage Optimizer</h1>
          <p className="text-xl mb-8">A data-driven approach to enhance crop yield while maintaining soil health</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link to="/dashboard" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary transition-colors">
              Try Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tailored Recommendations</h3>
            <p className="text-gray-600">Get customized fertilizer recommendations based on your soil data and crop type.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Weather Integration</h3>
            <p className="text-gray-600">Incorporates weather data to adjust fertilizer recommendations for optimal results.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Historical Data Tracking</h3>
            <p className="text-gray-600">Monitor soil health and fertilizer effectiveness over time with detailed analytics.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">1</div>
              <h3 className="font-semibold mb-2">Input Soil Data</h3>
              <p className="text-gray-600 text-sm">Enter your soil pH, nutrient levels, and select your crop type</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">2</div>
              <h3 className="font-semibold mb-2">Weather Analysis</h3>
              <p className="text-gray-600 text-sm">System integrates local weather patterns</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">3</div>
              <h3 className="font-semibold mb-2">Get Recommendations</h3>
              <p className="text-gray-600 text-sm">Receive optimal fertilizer type and quantity suggestions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">4</div>
              <h3 className="font-semibold mb-2">Track Results</h3>
              <p className="text-gray-600 text-sm">Log and monitor soil health improvements over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-secondary-light p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Farm's Productivity?</h2>
        <p className="text-lg mb-6">Join thousands of farmers benefiting from sustainable farming practices</p>
        <Link to="/register" className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
          Sign Up Today
        </Link>
      </section>
    </div>
  );
};

export default Home;