import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Maximize2, 
  ZoomIn, 
  ChevronDown,
  User,
  CreditCard
} from 'lucide-react';

const VerificationReviewPage = () => {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const [rejectReason, setRejectReason] = useState('');

  // Mock Data matching the screenshot
  const data = {
    userId: requestId || 'USR-482193',
    role: 'Volunteer & User',
    submittedOn: '18 Sept 2025',
    name: 'Ahmed Khan',
    age: '27',
    association: 'Crescent Community Center'
  };

  return (
    <div className="pb-80 lg:pb-40">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Identity confirmation for platform access
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Submitted Information */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Submitted Information
            </h2>

            {/* Account Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Account Details</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">User ID:</span>
                  <span className="col-span-2 text-sm font-bold text-gray-900 dark:text-white">{data.userId}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Role Requested:</span>
                  <span className="col-span-2 text-sm font-bold text-gray-900 dark:text-white">{data.role}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Submitted On:</span>
                  <span className="col-span-2 text-sm font-bold text-gray-900 dark:text-white">{data.submittedOn}</span>
                </div>
              </div>
            </div>

            {/* Declared Basic Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Declared Basic Info</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Name:</span>
                  <span className="col-span-2 text-sm font-bold text-gray-900 dark:text-white">{data.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Age:</span>
                  <span className="col-span-2 text-sm font-bold text-gray-900 dark:text-white">{data.age}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Association:</span>
                  <span className="col-span-2 text-sm font-bold text-gray-900 dark:text-white">{data.association}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verification Materials */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Verification Materials
            </h2>

            {/* Government-issued ID */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Government-issued ID</h3>
              </div>
              <div className="p-4 flex flex-col items-center">
                {/* ID Card Image */}
                <div className="w-full max-w-md bg-gray-50 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600 rounded-xl p-4 flex items-center justify-center mb-3">
                   <img 
                     src="https://placehold.co/600x400/374151/FFFFFF?text=Government+ID" 
                     alt="Government ID" 
                     className="w-full h-48 object-cover rounded-lg shadow-sm"
                   />
                </div>
                
                <div className="flex space-x-6">
                  <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <Maximize2 size={16} className="mr-1.5" />
                    <span className="underline">View full size</span>
                  </button>
                  <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <ZoomIn size={16} className="mr-1.5" />
                    <span className="underline">Zoom</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Selfie Verification */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Selfie Verification</h3>
              </div>
              <div className="p-4 flex flex-col items-center">
                {/* Selfie Image */}
                <div className="w-full bg-gray-50 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600 rounded-xl p-4 flex items-center justify-center mb-3">
                  <img 
                    src="https://i.pravatar.cc/300?img=33" 
                    alt="Selfie Verification" 
                    className="h-48 w-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  Selfie is used only to confirm document ownership.
                </p>
              </div>
            </div>

          </div>
        </div>

      {/* Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 lg:left-64 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center sm:text-left">
            Approval confirms identity submission completeness only.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded shadow-sm transition-colors w-full sm:w-auto">
                Approve Verification
              </button>
              
              <div className="flex w-full sm:w-auto">
                <button className="px-4 py-2 border border-red-200 text-red-800 font-semibold bg-red-50 hover:bg-red-100 rounded-l transition-colors whitespace-nowrap">
                  Reject Verification
                </button>
                <div className="relative border-t border-b border-r border-red-200 rounded-r bg-white hover:bg-gray-50 transition-colors">
                  <select 
                    className="appearance-none bg-transparent pl-3 pr-8 py-2 h-full text-sm text-gray-700 focus:outline-none cursor-pointer"
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                  >
                    <option value="">Select Reason</option>
                    <option value="blurry">Image Blurry</option>
                    <option value="mismatch">Name Mismatch</option>
                    <option value="expired">ID Expired</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded shadow-sm transition-colors w-full sm:w-auto">
                Request Resubmission
              </button>
            </div>
          </div>
          
          <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">
            Verification actions are logged and auditable. Documents are stored securely and access is limited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationReviewPage;
