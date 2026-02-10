import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../hooks/useAlert';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// Mock Data matching the screenshot
const initialUsers = [
  { id: '104582', role: 'User', accountStatus: 'Active', verification: 'Verified', flags: 0, lastActivity: '2 days ago' },
  { id: '209871', role: 'Volunteer', accountStatus: 'Limited', verification: 'Pending', flags: 1, lastActivity: '1 day ago' },
  { id: '315490', role: 'User', accountStatus: 'Suspended', verification: 'Failed', flags: 2, lastActivity: '3 days ago' },
  { id: '427856', role: 'Both', accountStatus: 'Active', verification: 'Verified', flags: 0, lastActivity: '4 days ago' },
  { id: '538092', role: 'Volunteer', accountStatus: 'Active', verification: 'Pending', flags: 3, lastActivity: '5 days ago' },
  { id: '649103', role: 'User', accountStatus: 'Limited', verification: 'Failed', flags: 1, lastActivity: '6 days ago' },
];

const UsersVolunteersPage = () => {
  const navigate = useNavigate();
  const { toast } = useAlert();
  const [roleFilter, setRoleFilter] = useState('All');
  const [accountStatusFilter, setAccountStatusFilter] = useState('');
  const [verificationFilter, setVerificationFilter] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Simulated filter handler
  const handleFilterChange = async (setter, value) => {
    setIsFiltering(true);
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
    setter(value);
    setIsFiltering(false);
  };

  const handleExport = async () => {
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsExporting(false);
    toast.success('User list exported successfully');
  };

  const handleClearFilters = async () => {
    setIsFiltering(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRoleFilter('All');
    setAccountStatusFilter('');
    setVerificationFilter('');
    setIsFiltering(false);
    toast.success('Filters cleared');
  };

  // Helper for Status Dots
  const StatusDot = ({ status, type }) => {
    let colorClass = 'bg-gray-400';
    
    if (type === 'account') {
      if (status === 'Active') colorClass = 'bg-green-500';
      if (status === 'Limited') colorClass = 'bg-yellow-500';
      if (status === 'Suspended') colorClass = 'bg-red-500';
    } else if (type === 'verification') {
      if (status === 'Verified') colorClass = 'bg-green-500';
      if (status === 'Pending') colorClass = 'bg-yellow-500';
      if (status === 'Failed') colorClass = 'bg-red-500';
    }

    return (
      <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${colorClass}`}></span>
    );
  };

  // Helper for text color based on status
  const getStatusTextColor = (status) => {
     if (status === 'Suspended' || status === 'Failed') return 'text-red-600';
     return 'text-gray-700 dark:text-gray-200';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Users & Volunteers</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Account overview for safety and compliance
          </p>
        </div>
        <Button 
          variant="primary"
          onClick={handleExport}
          loading={isExporting}
          disabled={isExporting}
          className="w-full md:w-auto"
        >
          {isExporting ? 'Exporting...' : 'Export List'}
        </Button>
      </div>

      {/* Filters Section */}
      <Card className="p-5 mb-6">
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Role Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 min-w-[100px]">Role:</span>
                  <div className="inline-flex rounded-md shadow-sm flex-1 sm:flex-none overflow-x-auto">
                    {['All', 'User', 'Volunteer', 'Both'].map((r, idx) => (
                      <button
                        key={r}
                        onClick={() => handleFilterChange(setRoleFilter, r)}
                        disabled={isFiltering}
                        className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium border whitespace-nowrap ${
                          idx === 0 ? 'rounded-l-md' : ''
                        } ${idx === 3 ? 'rounded-r-md' : ''} ${
                          roleFilter === r
                            ? 'bg-gray-100 text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700'
                        } ${idx !== 0 ? '-ml-px' : ''} ${isFiltering ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Account Status Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 min-w-[100px]">Account Status:</span>
                  <div className="inline-flex rounded-md shadow-sm flex-1 sm:flex-none overflow-x-auto">
                    {['Active', 'Limited', 'Suspended'].map((s, idx) => (
                      <button
                        key={s}
                        onClick={() => handleFilterChange(setAccountStatusFilter, accountStatusFilter === s ? '' : s)}
                        disabled={isFiltering}
                        className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium border whitespace-nowrap ${
                          idx === 0 ? 'rounded-l-md' : ''
                        } ${idx === 2 ? 'rounded-r-md' : ''} ${
                          accountStatusFilter === s
                            ? 'bg-gray-100 text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700'
                        } ${idx !== 0 ? '-ml-px' : ''} ${isFiltering ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verification Status Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 min-w-[100px]">Verification:</span>
                <div className="inline-flex rounded-md shadow-sm flex-1 sm:flex-none overflow-x-auto">
                  {['Verified', 'Pending', 'Failed'].map((v, idx) => (
                    <button
                      key={v}
                      onClick={() => handleFilterChange(setVerificationFilter, verificationFilter === v ? '' : v)}
                      disabled={isFiltering}
                      className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium border whitespace-nowrap ${
                        idx === 0 ? 'rounded-l-md' : ''
                      } ${idx === 2 ? 'rounded-r-md' : ''} ${
                        verificationFilter === v
                          ? 'bg-gray-100 text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700'
                      } ${idx !== 0 ? '-ml-px' : ''} ${isFiltering ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="w-full lg:w-auto mt-4 lg:mt-0">
               <Button 
                variant="secondary"
                onClick={() => {
                  setRoleFilter('All');
                  setAccountStatusFilter('');
                  setVerificationFilter('');
                  toast.success('Filters cleared');
                }}
                className="w-full lg:w-auto px-6 py-2.5 shadow-sm"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card className="overflow-hidden p-0 relative">
        {isFiltering && (
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 z-10 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Account Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Verification
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Flags
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Last Activity
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {initialUsers.map((user, index) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className={`flex items-center ${getStatusTextColor(user.accountStatus)}`}>
                       <StatusDot status={user.accountStatus} type="account" />
                       {user.accountStatus}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className={`flex items-center ${getStatusTextColor(user.verification)}`}>
                       <StatusDot status={user.verification} type="verification" />
                       {user.verification}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 text-center">
                    {user.flags}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {user.lastActivity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <Button 
                      variant="secondary"
                      onClick={() => navigate(`/users/${user.id}`)}
                      className="text-blue-700 dark:text-blue-400 text-xs px-3 py-1.5 shadow-sm"
                    >
                      View Profile
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
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This list provides high-level account information only.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Private communications and real-time activity are not visible.
        </p>
      </div>
    </div>
  );
};

export default UsersVolunteersPage;