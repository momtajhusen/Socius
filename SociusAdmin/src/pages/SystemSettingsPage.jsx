import React from 'react';
import { 
  Lock, 
  Shield, 
  AlertTriangle,
  Clock,
  Settings,
  AlertOctagon,
  FileText,
  Database
} from 'lucide-react';

const SystemSettingsPage = () => {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">System Settings & Safeguards</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Platform-wide limits, safety rules, and non-negotiable boundaries</p>
      </div>

      <div className="space-y-6">
        
        {/* Platform Boundaries */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Platform Boundaries</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "No dispatching of people",
                "No instruction to intervene",
                "No enforcement authority",
                "No patrols or teams",
                "No live tracking of users",
                "No public incident feeds"
              ].map((boundary, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-socius-red" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{boundary}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 italic">
                    <Lock className="w-3 h-3" />
                    <span>This setting cannot be changed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident Safety Limits */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Incident Safety Limits</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max volunteers per incident:</label>
                <div className="flex items-center gap-2">
                  <select className="form-select block w-20 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring focus:ring-socius-red focus:ring-opacity-50 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option>5</option>
                    <option>10</option>
                  </select>
                  <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max incident visibility radius:</label>
                <div className="flex items-center gap-2">
                  <select className="form-select block w-20 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring focus:ring-socius-red focus:ring-opacity-50 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option>5 km</option>
                  </select>
                  <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Max incident visibility radius:</label>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300 font-medium">
                    5 km
                  </div>
                  <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Incident type escalation rules:</label>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300 font-medium">
                    Routing-only
                  </div>
                  <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
                </div>
              </div>
              <div className="flex items-center justify-between md:col-span-2">
                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Incident auto-close timeout:</label>
                 <div className="flex items-center gap-2">
                  <select className="form-select block w-32 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring focus:ring-socius-red focus:ring-opacity-50 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option>60 minutes</option>
                  </select>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Notification Safeguards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notification Safeguards</h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                "Rate-limit notifications per user",
                "Prevent repeated alerts in same cluster",
                "Cool-down period after cancellation",
                "Disable notifications during system stress"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item}</span>
                  <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
                </div>
              ))}
            </div>
          </div>

          {/* Police Escalation Constraints */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Police Escalation Constraints</h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                "Escalation is user-initiated only",
                "No admin-triggered escalation",
                "Police profiles receive awareness only",
                "No response enforcement"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-socius-red" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item}</span>
                  </div>
                  <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Safety Controls */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Content Safety Controls</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Incident categories</span>
                <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Lock className="w-3 h-3 text-gray-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Scenario text templates</span>
                </div>
                <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Scenario text templates</span>
                <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Lock className="w-3 h-3 text-gray-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Forbidden words list</span>
                </div>
                <span className="text-xs text-gray-500 italic">View-only - Language controls prevent misinterpretation</span>
              </div>
            </div>
          </div>

          {/* Emergency Fail-Safes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Emergency Fail-Safes</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-socius-red" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">System-wide pause (multi-admin approval)</span>
                </div>
                <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-socius-red" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Emergency message template</span>
                </div>
                <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data & Logging Safeguards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Data & Logging Safeguards</h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                "Incident data retention period",
                "Auto-anonymization timeline",
                "Export restrictions"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item}</span>
                  <span className="text-xs text-gray-500 italic">Caps enforced by system</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Footer Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          These safeguards ensure Socius remains an information-sharing and awareness platform, not an enforcement or response system.
          <span className="ml-2 inline-flex gap-2">
             <span className="flex items-center gap-1 text-socius-red font-medium"><AlertTriangle className="w-3 h-3" /> No real-time controls</span>
             <span className="flex items-center gap-1 text-socius-red font-medium"><AlertTriangle className="w-3 h-3" /> No user targeting</span>
             <span className="flex items-center gap-1 text-socius-red font-medium"><AlertTriangle className="w-3 h-3" /> No authority override</span>
          </span>
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 shadow-sm">
            Save Changes
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded hover:bg-gray-50 dark:hover:bg-gray-600 shadow-sm">
            View Change Log
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettingsPage;
