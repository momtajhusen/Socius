import React, { useState } from 'react';
import { 
  Filter, 
  ChevronDown, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText, 
  User, 
  Shield, 
  Image as ImageIcon 
} from 'lucide-react';

const AppealsPage = () => {
  const [selectedAppeal, setSelectedAppeal] = useState({
    id: 'APL-23107',
    accountType: 'User',
    accountId: '*******3821',
    reason: 'Account Suspended',
    status: 'Pending',
    currentStatus: 'Suspended',
    originalAction: 'Account Suspended',
    actionDate: 'Feb 14, 2024',
    submitted: 'Feb 14, 2024',
    explanation: 'My account was suspended unfairly. Please review it and restore access.',
    verificationMaterials: [1, 2, 3],
    timeline: []
  });

  const appeals = [
    {
      id: 'APL-23107',
      accountType: 'User',
      accountId: '*******3821',
      reason: 'Account Suspended',
      status: 'Pending',
      currentStatus: 'Suspended',
      originalAction: 'Account Suspended',
      actionDate: 'Feb 14, 2024',
      submitted: 'Feb 14, 2024',
      explanation: 'My account was suspended unfairly. Please review it and restore access.',
      verificationMaterials: [1, 2, 3]
    },
    {
      id: 'APL-23098',
      accountType: 'Volunteer',
      accountId: '*******9922',
      reason: 'Verification Failed',
      status: 'Under Review',
      currentStatus: 'Unverified',
      originalAction: 'Verification Denied',
      actionDate: 'Feb 12, 2024',
      submitted: 'Feb 12, 2024',
      explanation: 'I uploaded the wrong ID document by mistake.',
      verificationMaterials: [1]
    },
    {
      id: 'APL-23087',
      accountType: 'User',
      accountId: '*******1123',
      reason: 'Account Limited',
      status: 'Decision Made',
      currentStatus: 'Active',
      originalAction: 'Account Limited',
      actionDate: 'Feb 10, 2024',
      submitted: 'Feb 10, 2024',
      explanation: 'I did not violate any community guidelines.',
      verificationMaterials: []
    },
    {
      id: 'APL-23076',
      accountType: 'User',
      accountId: '*******4455',
      reason: 'Verification Failed',
      status: 'Pending',
      currentStatus: 'Unverified',
      originalAction: 'Verification Denied',
      actionDate: 'Feb 08, 2024',
      submitted: 'Feb 08, 2024',
      explanation: 'Please check my documents again.',
      verificationMaterials: [1, 2]
    },
    {
      id: 'APL-23065',
      accountType: 'Volunteer',
      accountId: '*******7788',
      reason: 'Account Suspended',
      status: 'Decision Made',
      currentStatus: 'Suspended',
      originalAction: 'Account Suspended',
      actionDate: 'Feb 06, 2024',
      submitted: 'Feb 06, 2024',
      explanation: 'I apologize for the incident.',
      verificationMaterials: []
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span className="px-3 py-1 text-xs font-medium rounded-md bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/30 dark:text-red-300 dark:border-red-900/50">Pending</span>;
      case 'Under Review':
        return <span className="px-3 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-900/50">Under Review</span>;
      case 'Decision Made':
        return <span className="px-3 py-1 text-xs font-medium rounded-md bg-orange-50 text-orange-600 border border-orange-100 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-900/50">Decision Made</span>;
      default:
        return <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-50 text-gray-600 border border-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">status</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Appeals & Re-verification Review</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Review requests for account reconsideration and verification re-checks.
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 h-auto lg:h-[calc(100vh-180px)] min-h-[600px]">
        {/* Left Panel: Appeals List */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden h-[500px] lg:h-auto">
          {/* Toolbar */}
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Sort:</span>
              <button className="text-socius-red font-medium hover:underline">Newest First</button>
              <span className="text-gray-300">|</span>
              <button className="hover:text-gray-900 dark:hover:text-white">Oldest First</button>
            </div>
          </div>

          {/* Table Header - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 bg-gray-50 dark:bg-gray-700/50 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
            <div className="col-span-3">Appeal ID</div>
            <div className="col-span-2">Account Type</div>
            <div className="col-span-3">Reason</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Submitted</div>
          </div>

          {/* List Items */}
          <div className="flex-1 overflow-y-auto">
            {appeals.map((appeal) => (
              <div 
                key={appeal.id}
                onClick={() => setSelectedAppeal(appeal)}
                className={`flex flex-col gap-2 p-4 md:grid md:grid-cols-12 md:gap-4 md:px-4 md:py-4 text-sm border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors ${
                  selectedAppeal?.id === appeal.id 
                    ? 'bg-gray-50 dark:bg-blue-900/10' 
                    : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'
                }`}
              >
                {/* Mobile Top Row: ID & Status */}
                <div className="flex justify-between items-center md:contents">
                   <div className="font-medium text-gray-900 dark:text-white md:col-span-3">{appeal.id}</div>
                   <div className="md:hidden">{getStatusBadge(appeal.status)}</div>
                </div>

                {/* Account Type */}
                <div className="text-xs text-gray-500 md:text-sm md:text-gray-600 dark:text-gray-400 dark:md:text-gray-300 md:col-span-2">
                  <span className="md:hidden font-medium mr-1">Type:</span>
                  {appeal.accountType}
                </div>

                {/* Reason */}
                <div className="text-sm text-gray-800 dark:text-gray-200 md:text-gray-600 dark:md:text-gray-300 md:col-span-3">
                  <span className="md:hidden text-xs text-gray-400 block mb-1">Reason:</span>
                  {appeal.reason}
                </div>

                {/* Status (Desktop) */}
                <div className="hidden md:block md:col-span-2">{getStatusBadge(appeal.status)}</div>

                {/* Date */}
                <div className="text-xs text-gray-400 md:text-sm md:text-gray-500 md:col-span-2 md:text-right flex justify-between items-center md:block">
                  <span className="md:hidden">Submitted: {appeal.submitted}</span>
                  <span className="hidden md:inline">{appeal.submitted}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Outcome Notice - Pinned to bottom of Left Panel */}
          <div className="border-t border-gray-200 dark:border-gray-700">
             <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Outcome Notice</h3>
                <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">Your account has been reinstated after review.</p>
                <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    Appeal Submitted - Feb 14, 2024
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    Review Started - Feb 15, 2024
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Decision Made - Feb 16, 2024
                  </li>
                </ul>
             </div>
          </div>
        </div>

        {/* Right Panel: Details */}
        <div 
          className="lg:col-span-2 flex flex-col gap-6 overflow-y-auto pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for Chrome/Safari/Opera */}
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {selectedAppeal ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                
                {/* Account Summary */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Account Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500 dark:text-gray-400">Account ID:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{selectedAppeal.accountId}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500 dark:text-gray-400">Current Status:</span>
                      <span className="font-medium text-red-600 dark:text-red-400">{selectedAppeal.currentStatus}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500 dark:text-gray-400">Original Action:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAppeal.originalAction}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-500 dark:text-gray-400">Action Date:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAppeal.actionDate}</span>
                    </div>
                  </div>
                </div>

                {/* Appeal Submission */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Appeal Submission</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-2">User explanation (unedited):</label>
                      <div className="p-4 bg-gray-100 dark:bg-gray-700/50 rounded-sm text-sm text-gray-700 dark:text-gray-200">
                        {selectedAppeal.explanation}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      Submitted: {selectedAppeal.submitted}
                    </div>
                  </div>
                </div>

                {/* Verification Materials */}
                {selectedAppeal.verificationMaterials.length > 0 && (
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Verification Materials</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {selectedAppeal.verificationMaterials.map((item, index) => (
                        <div key={index} className="w-24 h-20 bg-gray-100 dark:bg-gray-700 rounded-sm border border-gray-200 dark:border-gray-600 flex items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                           <ImageIcon className="w-8 h-8 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Admin Decision */}
                <div className="p-6">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Admin Decision</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 w-20">Decision:</label>
                      <select className="block flex-1 pl-3 pr-10 py-2 text-sm border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm">
                        <option>Reinstate account</option>
                        <option>Deny appeal (Keep suspended)</option>
                        <option>Request more information</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Decision Notes (Internal):</label>
                      <textarea 
                        rows="3"
                        className="block w-full p-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                        defaultValue="Reviewed per Socius policy."
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                        <input
                          id="policy"
                          name="policy"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-900 border-gray-300 rounded"
                          defaultChecked
                        />
                      <label htmlFor="policy" className="ml-2 block text-sm text-gray-700 dark:text-gray-300 italic">
                        Decision follows Socius policy & safeguards
                      </label>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button className="px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900">
                        Submit Decision
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 px-6 py-4">
                <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                  Appeals are reviewed independently. Decisions are logged and auditable.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-10 flex flex-col items-center justify-center h-full text-center">
              <Shield className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Select an appeal to review</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Choose an item from the list to view details and make a decision.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppealsPage;