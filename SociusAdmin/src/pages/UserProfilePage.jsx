import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Shield, 
  User, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Lock,
  Ban,
  RefreshCw,
  Unlock,
  ChevronDown
} from 'lucide-react';

const UserProfilePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Mock data matching the screenshot
  const user = {
    id: 'USR-847291',
    role: 'Volunteer & User',
    accountStatus: 'Active',
    verificationStatus: 'Verified',
    joinedOn: '12 Aug 2025',
    capabilities: [
      'Calm presence',
      'Care & support',
      'Elder assistance',
      'Language help'
    ],
    stats: {
      cancellations: 5,
      requestsInitiated: 3,
      requestsClosed: 12
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Profile</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Administrative view — limited information
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        
        {/* Account Summary */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Summary</h2>
          <div className="border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="px-6 py-4 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 sm:col-span-3 text-sm font-medium text-gray-500 dark:text-gray-400">User ID:</div>
                <div className="col-span-12 sm:col-span-9 text-sm font-bold text-gray-900 dark:text-white">{user.id}</div>
              </div>
              <div className="px-6 py-4 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 sm:col-span-3 text-sm font-medium text-gray-500 dark:text-gray-400">Role:</div>
                <div className="col-span-12 sm:col-span-9 text-sm font-medium text-gray-900 dark:text-white">{user.role}</div>
              </div>
              <div className="px-6 py-4 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 sm:col-span-3 text-sm font-medium text-gray-500 dark:text-gray-400">Account Status:</div>
                <div className="col-span-12 sm:col-span-9 text-sm font-bold text-gray-900 dark:text-white">{user.accountStatus}</div>
              </div>
              <div className="px-6 py-4 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 sm:col-span-3 text-sm font-medium text-gray-500 dark:text-gray-400">Verification Status:</div>
                <div className="col-span-12 sm:col-span-9 text-sm font-medium text-gray-900 dark:text-white">{user.verificationStatus}</div>
              </div>
              <div className="px-6 py-4 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 sm:col-span-3 text-sm font-medium text-gray-500 dark:text-gray-400">Joined On:</div>
                <div className="col-span-12 sm:col-span-9 text-sm font-bold text-gray-900 dark:text-white">{user.joinedOn}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Declared Interests & Capabilities */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Declared Interests & Capabilities</h2>
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 space-y-3">
              {user.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="bg-gray-300 dark:bg-gray-500 rounded-sm p-0.5 mr-3 flex items-center justify-center w-5 h-5">
                     <ChevronDown size={14} className="text-white stroke-[4]" />
                  </div>
                  <span className="text-sm font-medium">{cap}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
              Capabilities are self-declared by the user.
            </p>
          </div>

          {/* Safety Flags & Notes */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Safety Flags & Notes</h2>
            <div className="border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden">
               <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Repeated cancellations:</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{user.stats.cancellations}</span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Awareness requests initiated:</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{user.stats.requestsInitiated}</span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Requests closed normally:</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{user.stats.requestsClosed}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Administrative Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Administrative Actions</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center px-4 py-2 bg-red-800 hover:bg-red-900 text-white text-sm font-medium rounded transition-colors shadow-sm">
              <Ban size={16} className="mr-2" />
              Limit Account
            </button>
            <button className="flex items-center px-4 py-2 bg-red-800 hover:bg-red-900 text-white text-sm font-medium rounded transition-colors shadow-sm">
              <Lock size={16} className="mr-2" />
              Suspend Account
            </button>
             <button className="flex items-center px-4 py-2 bg-red-800 hover:bg-red-900 text-white text-sm font-medium rounded transition-colors shadow-sm">
              <RefreshCw size={16} className="mr-2" />
              Require Re-Verification
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm font-medium rounded border border-gray-300 transition-colors shadow-sm cursor-not-allowed">
              <Unlock size={16} className="mr-2" />
              Reinstate Account
            </button>
          </div>
        </div>

        {/* Legal & Access Notice */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal & Access Notice</h2>
          <div className="bg-gray-100 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-md p-4">
             <p className="text-sm italic text-gray-700 dark:text-gray-300">
               Admins do not view private communications, real-time locations, or personal identifiers.
             </p>
          </div>
        </div>

      </div>
      
      {/* Footer Note */}
      <div className="px-1">
         <p className="text-xs italic text-gray-500 dark:text-gray-400">
           Administrative access logged for audit
         </p>
      </div>
    </div>
  );
};

export default UserProfilePage;
