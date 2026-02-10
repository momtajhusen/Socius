import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock Data matching the screenshot
const initialRequests = [
  { id: 'U203456', role: 'User', submittedOn: '04/24/2024 10:15 AM', status: 'Pending' },
  { id: 'U198765', role: 'Volunteer', submittedOn: '04/24/2024 09:45 AM', status: 'Pending' },
  { id: 'U210123', role: 'Both', submittedOn: '04/23/2024 03:30 PM', status: 'Pending' },
  { id: 'U204567', role: 'User', submittedOn: '04/23/2024 11:50 AM', status: 'Pending' },
  { id: 'U200789', role: 'Volunteer', submittedOn: '04/22/2024 02:25 PM', status: 'Pending' },
  { id: 'U195432', role: 'Both', submittedOn: '04/21/2024 04:10 PM', status: 'Pending' },
  { id: 'U207654', role: 'User', submittedOn: '04/21/2024 09:20 AM', status: 'Pending' },
  { id: 'U208321', role: 'Volunteer', submittedOn: '04/20/2024 01:45 PM', status: 'Pending' },
];

const VerificationQueuePage = () => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState('Pending');
  const [dateFilter, setDateFilter] = useState('Today');

  // Simple filter component to match the text-based design
  const FilterGroup = ({ label, options, selected, onSelect }) => (
    <div className="flex flex-col sm:flex-row sm:items-center text-sm gap-2 sm:gap-0">
      <span className="font-bold text-gray-800 dark:text-gray-200 mr-2 whitespace-nowrap">{label}:</span>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {options.map((option, idx) => (
          <React.Fragment key={option}>
            <button
              onClick={() => onSelect(option)}
              className={`${
                selected === option
                  ? 'text-red-800 font-medium'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              } transition-colors whitespace-nowrap`}
            >
              {option}
            </button>
            {idx < options.length - 1 && (
              <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Verification Queue</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Pending identity reviews for platform access
        </p>
      </div>

      {/* Filters Card */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-6 items-center">
          <FilterGroup 
            label="Status" 
            options={['Pending', 'Approved', 'Rejected']} 
            selected={statusFilter} 
            onSelect={setStatusFilter} 
          />
          
          <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
          
          <FilterGroup 
            label="Submission Date" 
            options={['Today', 'Last 7 days', 'Last 30 days']} 
            selected={dateFilter} 
            onSelect={setDateFilter} 
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                  Role Requested
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                  Submitted On
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {initialRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {request.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {request.submittedOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {request.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button 
                      onClick={() => navigate(`/verification/${request.id}`)}
                      className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded px-4 py-1 text-sm shadow-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="pt-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Verification is used only to confirm account authenticity.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Socius does not assess character, intent, or behavior.
        </p>
      </div>
    </div>
  );
};

export default VerificationQueuePage;
