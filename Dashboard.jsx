import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock crop types - in a real app, these would come from an API
const cropTypes = [
  { id: 1, name: 'Wheat' },
  { id: 2, name: 'Rice' },
  { id: 3, name: 'Corn' },
  { id: 4, name: 'Soybean' },
  { id: 5, name: 'Cotton' },
  { id: 6, name: 'Potato' },
];

const Dashboard = () => {
  const [formData, setFormData] = useState({
    soilPH: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    cropType: '',
    fieldSize: '',
    lastFertilized: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to the backend
    console.log('Form submitted:', formData);
    // Redirect to results page
    window.location.href = '/results';
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6">Soil Data Input Dashboard</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="soilPH">
                Soil pH Level
              </label>
              <input
                type="number"
                id="soilPH"
                name="soilPH"
                value={formData.soilPH}
                onChange={handleChange}
                step="0.1"
                min="0"
                max="14"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Value between 0-14</p>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="nitrogen">
                Nitrogen Level (ppm)
              </label>
              <input
                type="number"
                id="nitrogen"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phosphorus">
                Phosphorus Level (ppm)
              </label>
              <input
                type="number"
                id="phosphorus"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="potassium">
                Potassium Level (ppm)
              </label>
              <input
                type="number"
                id="potassium"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cropType">
                Crop Type
              </label>
              <select
                id="cropType"
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select a crop type</option>
                {cropTypes.map((crop) => (
                  <option key={crop.id} value={crop.id}>
                    {crop.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="fieldSize">
                Field Size (acres)
              </label>
              <input
                type="number"
                id="fieldSize"
                name="fieldSize"
                value={formData.fieldSize}
                onChange={handleChange}
                min="0.1"
                step="0.1"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastFertilized">
                Last Fertilized Date
              </label>
              <input
                type="date"
                id="lastFertilized"
                name="lastFertilized"
                value={formData.lastFertilized}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
            >
              Get Fertilizer Recommendations
            </button>
          </div>
        </form>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Weather Data</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Location: <span className="font-medium">Riverside Farm</span></p>
              <p className="text-gray-600">Temperature: <span className="font-medium">72°F</span></p>
              <p className="text-gray-600">Humidity: <span className="font-medium">65%</span></p>
              <p className="text-gray-600">Precipitation: <span className="font-medium">20% chance</span></p>
            </div>
            <div className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <p className="text-gray-600">Added soil data for North Field</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </li>
            <li className="py-3">
              <p className="text-gray-600">Updated crop type to Corn</p>
              <p className="text-xs text-gray-500">5 days ago</p>
            </li>
            <li className="py-3">
              <p className="text-gray-600">Received recommendations for South Field</p>
              <p className="text-xs text-gray-500">1 week ago</p>
            </li>
          </ul>
          <Link to="/history" className="text-primary hover:text-primary-dark text-sm mt-4 inline-block">
            View Full History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;