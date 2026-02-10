import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  Filter, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  FileText,
  AlertOctagon
} from 'lucide-react';

const ReportsSafetyFlagsPage = () => {
  const [selectedReportId, setSelectedReportId] = useState('R1018');
  
  // Mock Data for Reports List
  const reports = [
    { id: 'R1023', source: 'Volunteer', type: 'Boundary Conc', severity: 'Medium', submitted: '04/21/2024', status: 'In Review' },
    { id: 'R1018', source: 'User', type: 'Safety Risk', severity: 'High', submitted: '04/20/2024', status: 'New' },
    { id: 'R1004', source: 'System', type: 'Harassment', severity: 'Low', submitted: '04/19/2024', status: 'Closed' },
    { id: 'R0997', source: 'User', type: 'Misuse', severity: 'Medium', submitted: '04/18/2024', status: 'In Review' },
    { id: 'R0982', source: 'Volunteer', type: 'False Reporting', severity: 'Low', submitted: '04/17/2024', status: 'Closed' },
  ];

  // Mock Data for Selected Report Details
  const reportDetails = {
    id: 'R1018',
    submitted: '04/20/2024 15:37',
    source: 'User Report',
    category: 'Safety Risk',
    severity: 'High',
    linkedIncident: {
      id: 'INC0456',
      issue: 'Repeated Violations',
      status: 'Resolved'
    },
    description: "User was making disturbing statements in the chat. I'm worried this could escalate further.",
    isUnverified: true,
    patternSignals: [
      'Multiple reports in same cluster',
      'Previously flagged for concerning behavior'
    ],
    actionLog: '04/20/2024 15:45 - Set to "New Report" status.'
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';
      case 'medium': return 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400';
      case 'low': return 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'text-emerald-600';
      case 'In Review': return 'text-blue-600';
      case 'Closed': return 'text-gray-500';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports & Safety Flags</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Review potential safety concerns and platform misuse</p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6 flex flex-wrap gap-4 items-center">
        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full md:w-40 pl-3 pr-8 py-2">
            <option>Date Range</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>
        
        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full md:w-40 pl-3 pr-8 py-2">
            <option>Report Type</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="relative w-full md:w-auto">
          <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-socius-red focus:border-socius-red block w-full md:w-40 pl-3 pr-8 py-2">
            <option>Severity</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        <div className="flex flex-wrap items-center gap-4 ml-0 md:ml-2 text-sm text-gray-700 dark:text-gray-300 w-full md:w-auto">
          <span className="font-medium w-full md:w-auto">Status</span>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
            <span>New</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-3 h-3 rounded-sm bg-slate-700"></div>
            <span>In Review</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-3 h-3 rounded-sm bg-red-600"></div>
            <span>Closed</span>
          </label>
        </div>

        <div className="flex w-full md:w-auto gap-2 ml-auto">
          <button className="flex-1 md:flex-none px-4 py-2 bg-socius-red text-white rounded-md text-sm font-medium hover:bg-red-800">
            Apply Filters
          </button>
          <button className="flex-1 md:flex-none px-4 py-2 text-socius-red text-sm font-medium hover:text-red-800 border border-gray-200 dark:border-gray-700 md:border-0 rounded-md md:rounded-none">
            Reset
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Reports List */}
        <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Reports</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Source</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Severity</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Submitted</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {reports.map((report) => (
                  <tr 
                    key={report.id}
                    onClick={() => setSelectedReportId(report.id)}
                    className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${selectedReportId === report.id ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">
                      {report.id}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {report.source}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white font-medium">
                      {report.type}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={report.severity === 'High' ? 'text-red-600 font-medium' : report.severity === 'Medium' ? 'text-red-600 font-medium' : 'text-gray-600'}>
                        {report.severity}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {report.submitted}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {report.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Admin Action Log Section at the bottom of left column in design, but structurally fits better here for responsive */}
          <div className="mt-auto border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Admin Action Log</h4>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                {reportDetails.actionLog}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Report Details */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Report Details</h3>
          </div>
          
          <div className="p-6 space-y-6">
            
            {/* Report Summary */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Report Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm">
                <div className="flex">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Report ID:</span>
                  <span className="text-gray-900 dark:text-white font-bold">{reportDetails.id}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Submitted:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{reportDetails.submitted}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Source:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{reportDetails.source}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Category:</span>
                  <span className="text-gray-900 dark:text-white font-bold">{reportDetails.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Severity:</span>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-600 text-white">
                    {reportDetails.severity}
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Linked Incident */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Linked Incident</h4>
              <div className="grid grid-cols-1 gap-y-2 text-sm">
                <div className="flex">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Incident ID:</span>
                  <span className="text-gray-900 dark:text-white font-bold">{reportDetails.linkedIncident.id}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Related Issue:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{reportDetails.linkedIncident.issue}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">Status:</span>
                  <span className="text-gray-900 dark:text-white font-medium">{reportDetails.linkedIncident.status}</span>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Report Description */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Report Description</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="text-red-600 font-medium">Unverified:</span> {reportDetails.description}
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Pattern Signals */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Pattern Signals</h4>
              <div className="space-y-2">
                {reportDetails.patternSignals.map((signal, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Admin Review Checklist */}
            <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Admin Review Checklist</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-socius-red border-gray-300 rounded focus:ring-socius-red" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">Boundary issue confirmed</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-socius-red border-gray-300 rounded focus:ring-socius-red" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">Misuse suspected</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-socius-red border-gray-300 rounded focus:ring-socius-red" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">Education required</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-socius-red border-gray-300 rounded focus:ring-socius-red" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">Temporary limitation recommended</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-socius-red border-gray-300 rounded focus:ring-socius-red" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">No action needed</span>
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-slate-700 text-white text-xs font-bold rounded shadow-sm hover:bg-slate-800 uppercase tracking-wide">
                  Mark as Reviewed
                </button>
                <button className="px-4 py-2 bg-blue-700 text-white text-xs font-bold rounded shadow-sm hover:bg-blue-800 uppercase tracking-wide">
                  Send Warning Message
                </button>
                <button className="px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded shadow-sm hover:bg-slate-900 uppercase tracking-wide">
                  Require Codo Re-Acceptance
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 italic text-center sm:text-left">
          Reports are reviewed to improve safety and platform integrity. Actions are procedural, proportionate, and logged.
        </p>
      </div>
    </div>
  );
};

export default ReportsSafetyFlagsPage;
