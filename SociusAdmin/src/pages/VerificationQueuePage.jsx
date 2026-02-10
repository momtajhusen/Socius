import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = async (setter, value) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setter(value);
    setIsLoading(false);
  };

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Verification Queue</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Pending identity reviews for platform access
        </p>
      </motion.div>

      {/* Filters Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-4 border-0">
          <div className="flex flex-wrap gap-6 items-center">
            <FilterGroup 
              label="Status" 
              options={['Pending', 'Approved', 'Rejected']} 
              selected={statusFilter} 
              onSelect={(val) => handleFilterChange(setStatusFilter, val)} 
            />
            
            <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            
            <FilterGroup 
              label="Submission Date" 
              options={['Today', 'Last 7 days', 'Last 30 days']} 
              selected={dateFilter} 
              onSelect={(val) => handleFilterChange(setDateFilter, val)} 
            />
          </div>
        </Card>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="overflow-hidden p-0 border-0 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 z-10 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
          )}
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
                {initialRequests.map((request, index) => (
                  <motion.tr 
                    key={request.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
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
                      <Button 
                        variant="secondary"
                        onClick={() => navigate(`/verification/${request.id}`)}
                        className="px-4 py-1 text-sm shadow-sm"
                      >
                        Review
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      {/* Footer Disclaimer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pt-2"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Verification is used only to confirm account authenticity.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Socius does not assess character, intent, or behavior.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default VerificationQueuePage;
