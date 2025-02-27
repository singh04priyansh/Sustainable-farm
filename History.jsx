import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  // In a real app, this data would come from your backend
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch history data
    const fetchData = () => {
      // Mock data - in a real app, this would come from your API
      const mockHistoryData = [
        {
          id: 1,
          date: '2025-02-15',
          cropType: 'Wheat',
          soilPH: 6.8,
          nitrogenLevel: 'Medium',
          phosphorusLevel: 'Low',
          potassiumLevel: 'High',
          recommendation: 'Phosphorus-rich fertilizer - 25kg/acre'
        },
        {
          id: 2,
          date: '2025-01-20',
          cropType: 'Rice',
          soilPH: 5.5,
          nitrogenLevel: 'Low',
          phosphorusLevel: 'Medium',
          potassiumLevel: 'Medium',
          recommendation: 'Lime + Nitrogen-rich fertilizer - 30kg/acre'
        },
        {
          id: 3,
          date: '2024-12-10',
          cropType: 'Corn',
          soilPH: 7.2,
          nitrogenLevel: 'High',
          phosphorusLevel: 'Medium',
          potassiumLevel: 'Low',
          recommendation: 'Potassium-rich fertilizer - 20kg/acre'
        }
      ];

      setHistoryData(mockHistoryData);
      setLoading(false);
    };

    // Simulate network delay
    setTimeout(fetchData, 1000);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">Soil Test History</h2>
        <Link 
          to="/dashboard" 
          className=" text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          New Soil Test
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : historyData.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 mb-4">You haven't submitted any soil tests yet.</p>
          <Link 
            to="/dashboard" 
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Submit Your First Test
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-50 text-green-800">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Crop</th>
                <th className="py-3 px-4 text-left">Soil pH</th>
                <th className="py-3 px-4 text-left">NPK Levels</th>
                <th className="py-3 px-4 text-left">Recommendation</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {historyData.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">{entry.date}</td>
                  <td className="py-4 px-4">{entry.cropType}</td>
                  <td className="py-4 px-4">{entry.soilPH}</td>
                  <td className="py-4 px-4">
                    N: {entry.nitrogenLevel}<br />
                    P: {entry.phosphorusLevel}<br />
                    K: {entry.potassiumLevel}
                  </td>
                  <td className="py-4 px-4">{entry.recommendation}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button 
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => console.log('View details for entry:', entry.id)}
                      >
                        View
                      </button>
                      <button 
                        className="text-green-600 hover:text-green-800"
                        onClick={() => console.log('Download report for entry:', entry.id)}
                      >
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 p-4 bg-green-50 rounded-md">
        <h3 className="font-bold text-green-800 mb-2">Soil Health Trends</h3>
        <p className="text-gray-700">
          Based on your historical data, your soil pH has improved from 5.5 to 6.8 over the past three months. 
          Nitrogen levels have stabilized, while phosphorus levels still need improvement.
        </p>
      </div>
    </div>
  );
};

export default History;
