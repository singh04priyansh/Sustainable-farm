import React from 'react';
import { Link } from 'react-router-dom';

// Mock data - in a real app, this would come from the backend
const resultData = {
  soilAnalysis: {
    status: 'Moderately Acidic',
    pH: 5.8,
    nitrogen: 'Low (20 ppm)',
    phosphorus: 'Medium (35 ppm)',
    potassium: 'High (150 ppm)',
  },
  recommendations: [
    {
      name: 'Lime (Calcium Carbonate)',
      amount: '2 tons per acre',
      purpose: 'Adjust soil pH',
      priority: 'High',
    },
    {
      name: 'Urea (46-0-0)',
      amount: '150 lbs per acre',
      purpose: 'Address nitrogen deficiency',
      priority: 'High',
    },
    {
      name: 'Diammonium Phosphate (18-46-0)',
      amount: '50 lbs per acre',
      purpose: 'Maintain phosphorus levels',
      priority: 'Medium',
    },
  ],
  applicationSchedule: [
    {
      fertilizer: 'Lime',
      timing: 'Apply immediately',
      method: 'Broadcast application and incorporate into soil',
    },
    {
      fertilizer: 'Urea',
      timing: 'Split application - 50% pre-planting, 50% mid-season',
      method: 'Side-dress or broadcast',
    },
    {
      fertilizer: 'Diammonium Phosphate',
      timing: 'Apply pre-planting',
      method: 'Broadcast and incorporate into soil',
    },
  ],
};

const Results = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Fertilizer Recommendations</h1>
          <div className="text-sm text-gray-600">Generated on: Feb 27, 2025</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-secondary-light p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-primary-dark">Current Soil Status</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium">{resultData.soilAnalysis.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">pH Level:</span>
                <span className="font-medium">{resultData.soilAnalysis.pH}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Nitrogen:</span>
                <span className="font-medium">{resultData.soilAnalysis.nitrogen}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phosphorus:</span>
                <span className="font-medium">{resultData.soilAnalysis.phosphorus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Potassium:</span>
                <span className="font-medium">{resultData.soilAnalysis.potassium}</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-primary-dark">Weather Considerations</h2>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Precipitation Expected</p>
                  <p className="text-sm text-gray-600">Rainfall predicted in the next 48 hours. Consider delaying application until weather clears.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Seasonal Considerations</p>
                  <p className="text-sm text-gray-600">Current season is optimal for lime application. Temperature range is suitable for nutrient absorption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary-dark">Recommended Fertilizers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fertilizer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purpose
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resultData.recommendations.map((recommendation, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{recommendation.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {recommendation.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {recommendation.purpose}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${recommendation.priority === 'High' ? 'bg-red-100 text-red-800' : 
                          recommendation.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {recommendation.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary-dark">Application Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resultData.applicationSchedule.map((schedule, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="font-semibold text-primary-dark mb-2">{schedule.fertilizer}</div>
                <div className="mb-2">
                  <span className="text-sm text-gray-600">Timing: </span>
                  <span className="text-sm">{schedule.timing}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Method: </span>
                  <span className="text-sm">{schedule.method}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary-dark">Next Steps</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                <span>1</span>
              </div>
              <div>
                <p className="font-medium">Purchase Recommended Fertilizers</p>
                <p className="text-sm text-gray-600">Visit our partner stores or order online through our marketplace.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                <span>2</span>
              </div>
              <div>
                <p className="font-medium">Follow Application Schedule</p>
                <p className="text-sm text-gray-600">Apply fertilizers according to the recommended timing and methods.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                <span>3</span>
              </div>
              <div>
                <p className="font-medium">Schedule Follow-up Analysis</p>
                <p className="text-sm text-gray-600">We recommend retesting soil in 6 months to track improvements.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Link to="/marketplace" className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Shop Fertilizers
            </Link>
            <Link to="/calendar" className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Add to Calendar
            </Link>
            <button className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;