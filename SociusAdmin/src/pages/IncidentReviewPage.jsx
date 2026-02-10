import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  Filter, 
  Download,
  AlertCircle,
  CheckCircle,
  XCircle,
  Flag,
  MessageSquare,
  Users
} from 'lucide-react';

const IncidentReviewPage = () => {
  const [selectedIncident, setSelectedIncident] = useState(10123);

  // Mock Data
  const incidents = [
    { id: 10123, date: 'Jan 14, 2022 - 8:10 PM', category: 'Calm Presence', scenario: 'Info Request', outcome: 'Calm Resolution', status: 'Closed', outcomeType: 'neutral' },
    { id: 10098, date: 'Jan 5, 2022 - 6:45 PM', category: 'Prevent', scenario: 'Rising Tension', outcome: 'Safety Concern', status: 'Closed', outcomeType: 'warning' },
    { id: 10085, date: 'Dec 28, 2021 - 3:30 PM', category: 'Care & Support', scenario: 'Welfare Check', outcome: 'Cancelled by User', status: 'Closed', outcomeType: 'negative' },
    { id: 10072, date: 'Dec 12, 2021 - 1:20 PM', category: 'Right Help', scenario: 'Assist Needed', outcome: 'Emergency Contact', status: 'Closed', outcomeType: 'neutral' },
    { id: 10058, date: 'Dec 3, 2021 - 5:00 PM', category: 'Calm Presence', scenario: 'Noise Complaint', outcome: 'No Response', status: 'Closed', outcomeType: 'neutral' },
  ];

  const currentIncident = incidents.find(i => i.id === selectedIncident) || incidents[0];

  const renderOutcomeBadge = (outcome, type) => {
    let classes = "px-2 py-1 rounded text-xs font-medium ";
    if (type === 'negative') classes += "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    else if (type === 'warning') classes += "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
    else classes += "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    
    return <span className={classes}>{outcome}</span>;
  };

  return (
    <div className="flex flex-col min-h-screen pb-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Incident Review</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Post-event analysis for learning and platform safety</p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6 flex flex-wrap gap-3 items-center">
        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full pl-3 pr-8 py-2">
            <option>Date Range</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>
        
        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full pl-3 pr-8 py-2">
            <option>Category</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full pl-3 pr-8 py-2">
            <option>Scenario</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full pl-3 pr-8 py-2">
            <option>Outcome Tag</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full pl-3 pr-8 py-2">
            <option>Cluster / City</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="flex w-full md:w-auto gap-2 ml-auto sm:ml-0">
            <button className="flex-1 md:flex-none px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            Export
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 bg-socius-red text-white rounded-md text-sm font-medium hover:bg-red-800">
            Apply Filters
            </button>
        </div>
        <button className="w-full md:w-auto text-sm text-socius-red font-medium hover:text-red-800 text-center md:text-left">
          Reset
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Incident List */}
        <div className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Incident List</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date & Time</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Scenario</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Outcome</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {incidents.map((incident) => (
                  <tr 
                    key={incident.id} 
                    onClick={() => setSelectedIncident(incident.id)}
                    className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${selectedIncident === incident.id ? 'bg-red-50 dark:bg-red-900/10' : ''}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {incident.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {incident.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {incident.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {incident.scenario}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`
                        ${incident.outcomeType === 'negative' ? 'text-red-600 dark:text-red-400' : ''}
                        ${incident.outcomeType === 'warning' ? 'text-yellow-600 dark:text-yellow-400' : ''}
                        ${incident.outcomeType === 'neutral' ? 'text-gray-900 dark:text-white' : ''}
                      `}>
                        {incident.outcome}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {incident.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Incident Summary */}
        <div className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Incident Summary</h3>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Header Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">ID: {currentIncident.id}</h2>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <p><span className="font-medium text-gray-500 dark:text-gray-400">Date:</span> {currentIncident.date}</p>
                <p><span className="font-medium text-gray-500 dark:text-gray-400">Category:</span> <span className="font-medium text-gray-900 dark:text-white">{currentIncident.category}</span></p>
                <p><span className="font-medium text-gray-500 dark:text-gray-400">Scenario:</span> <span className="font-medium text-gray-900 dark:text-white">{currentIncident.scenario}</span></p>
              </div>
            </div>

            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <p><span className="font-medium text-gray-500 dark:text-gray-400">Radius Used:</span> 500 meters</p>
              <p><span className="font-medium text-gray-500 dark:text-gray-400">Users Viewed:</span> 45</p>
              <p><span className="font-medium text-gray-500 dark:text-gray-400">Volunteers Aware:</span> 18</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Timeline */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Timeline</h4>
              <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-4">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Awareness request created</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">12 volunteers became aware</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Navigation opened (6)</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Incident closed</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Outcome Tags */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Outcome Tags</h4>
              <div className="flex flex-wrap gap-2">
                {renderOutcomeBadge(currentIncident.outcome, currentIncident.outcomeType)}
                {currentIncident.outcomeType === 'negative' && renderOutcomeBadge('Cancelled by User', 'negative')}
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Feedback Signals */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Feedback Signals</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                  <span>User Feedback: 12</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                  <span>Volunteer Feedback: 8</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                  <span>Flags Raised: 0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="text-xs text-gray-500 dark:text-gray-400 italic text-center sm:text-left">
          Incident reviews are anonymized and used only for learning, safety, and platform improvement.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-4 py-2 bg-socius-red text-white text-sm font-medium rounded hover:bg-red-800">
            Mark for Policy Review
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
            Send to Content Team
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded hover:bg-gray-50 dark:hover:bg-gray-600">
            Export Anonymized Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncidentReviewPage;
