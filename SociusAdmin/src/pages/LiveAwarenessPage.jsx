import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// Mock Data matching the screenshot
const initialIncidents = [
  { id: 'A471B2C3', category: 'Calm', status: 'Open', viewers: 3, timeActive: '12 min', flags: 'red' },
  { id: 'C890D1F2', category: 'Care', status: 'Open', viewers: 5, timeActive: '18 min', flags: 'yellow' },
  { id: 'E76F1A23', category: 'Routing', status: 'Frozen', viewers: 2, timeActive: '45 min', flags: 'red' },
  { id: 'B35D09A7', category: 'Prevent', status: 'Open', viewers: 1, timeActive: '22 min', flags: 'green' },
  { id: 'F64A3C5E', category: 'Calm', status: 'Open', viewers: 4, timeActive: '5 min', flags: 'red' },
  { id: 'H12E98F1', category: 'Care', status: 'Merged', viewers: 6, timeActive: '1 hr 5 min', flags: 'yellow' },
  { id: 'G89D27C4', category: 'Routing', status: 'Open', viewers: 2, timeActive: '30 min', flags: 'red' },
  { id: 'D45F7B1E', category: 'Prevent', status: 'Open', viewers: 0, timeActive: '15 min', flags: 'none' },
];

// Icons
const RedFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
  </svg>
);

const GreenFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
  </svg>
);

const YellowAlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const LiveAwarenessPage = () => {
  const [timeRange, setTimeRange] = useState('Last 6h');
  const [category, setCategory] = useState('Calm Presence');
  const [status, setStatus] = useState('Open');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFilterChange = async (setter, value) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setter(value);
    setIsLoading(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Live Awareness</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Currently open awareness requests (information only)
        </p>
      </div>

      {/* Filters */}
      <Card className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 mb-6 p-4">
        {/* Category Filter */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <label htmlFor="category" className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full md:w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-socius-red focus:border-socius-red sm:text-sm rounded-md border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option>Calm Presence</option>
            <option>Care</option>
            <option>Routing</option>
            <option>Prevent</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <label htmlFor="status" className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => handleFilterChange(setStatus, e.target.value)}
            disabled={isLoading}
            className="block w-full md:w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-socius-red focus:border-socius-red sm:text-sm rounded-md border dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-50"
          >
            <option>Open</option>
            <option>Frozen</option>
            <option>Merged</option>
            <option>Closed</option>
          </select>
        </div>

        {/* Time Range Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full md:w-auto md:ml-auto">
          <span className="text-sm font-bold text-gray-700 dark:text-gray-300 sm:mr-2">Time Range:</span>
          <div className="inline-flex rounded-md shadow-sm w-full sm:w-auto" role="group">
            {['Last 1h', 'Last 6h', 'Last 24h'].map((range, idx) => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                key={range}
                type="button"
                onClick={() => handleFilterChange(setTimeRange, range)}
                disabled={isLoading}
                className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium border ${
                  idx === 0 ? 'rounded-l-lg' : ''
                } ${idx === 2 ? 'rounded-r-lg' : ''} ${
                  timeRange === range
                    ? 'z-10 bg-gray-100 text-blue-600 border-gray-200 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {range}
              </motion.button>
            ))}
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card className="overflow-hidden p-0 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 z-10 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Incident ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Volunteers Viewing
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Time Active
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Flags
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {initialIncidents.map((incident, index) => (
                <motion.tr 
                  key={incident.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {incident.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {incident.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {incident.status === 'Open' ? (
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Open</span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        {incident.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-center font-medium">
                    {incident.viewers}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {incident.timeActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {incident.flags === 'red' && <RedFlagIcon />}
                    {incident.flags === 'yellow' && <YellowAlertIcon />}
                    {incident.flags === 'green' && <GreenFlagIcon />}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <Button 
                      variant="secondary"
                      onClick={() => navigate(`/live-awareness/${incident.id}`)}
                      className="text-xs px-3 py-1.5"
                    >
                      View Details
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Footer Disclaimer */}
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
          Live awareness data is limited to aggregated indicators. No live tracking, messaging, or intervention tools are available.
        </p>
      </div>
    </div>
  );
};

export default LiveAwarenessPage;