import React from 'react';
import { Shield, AlertTriangle, CheckSquare, Lock, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';

const RiskTiersPage = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Risk Tier Rules & System Safeguards</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 italic">Defines how awareness visibility, limits, and safeguards are applied across the platform.</p>
      </div>

      {/* What Risk Tiers Are */}
      <Card className="mb-8 p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What Risk Tiers Are</h2>
        <div className="bg-gray-100 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600 p-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Risk tiers classify scenarios by potential for harm, misuse, or escalation.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">These tiers automatically control system behavior and cannot be overridden <span className="italic">during live incidents</span>.</p>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li><span className="font-semibold">Risk tiers are internal only</span></li>
            <li>Users never see tier labels</li>
            <li>Admins <span className="font-semibold">cannot modify tier logic per incident</span></li>
          </ul>
        </div>
      </Card>

      {/* Risk Tier Comparison Table */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Risk Tier Comparison Table</h2>
        <Card className="overflow-x-auto p-0">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th scope="col" className="bg-gray-50 dark:bg-gray-800 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/4">
                  
                </th>
                <th scope="col" className="bg-emerald-600 px-6 py-3 text-center text-sm font-bold text-white w-1/4 border-r border-emerald-700">
                  Low Risk
                </th>
                <th scope="col" className="bg-amber-400 px-6 py-3 text-center text-sm font-bold text-gray-900 w-1/4 border-r border-amber-500">
                  Medium Risk
                </th>
                <th scope="col" className="bg-red-700 px-6 py-3 text-center text-sm font-bold text-white w-1/4">
                  High Risk
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {/* Typical Use-Cases */}
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                  Typical Use-Cases
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Everyday, non-sensitive
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Ambiguous or vulnerable
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Potential escalation
                </td>
              </tr>
              {/* Maximum Awareness Viewers */}
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                  Maximum Awareness Viewers
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  7 viewers
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  5 viewers
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  3 viewers
                </td>
              </tr>
              {/* Maximum Radius */}
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                  Maximum Radius
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Local radius
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  1 km
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Limited radius
                </td>
              </tr>
              {/* Auto-Expiry */}
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                  Auto-Expiry
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  No auto-expiry
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  30 min expiry
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Fast-expiry
                </td>
              </tr>
              {/* Volunteer Guidance Strength */}
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                  Volunteer Guidance Strength
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  General guidance
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Caution guidance
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Strong caution
                </td>
              </tr>
              {/* Identity Visibility */}
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                  Identity Visibility
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Normal visibility
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Delayed identity
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Strict identity rules
                </td>
              </tr>
              {/* Admin Controls Available */}
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50">
                  Admin Controls Available
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Review only
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  Freeze + Merge
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Immediate freeze
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Non-Negotiable Safeguards */}
        <div className="lg:col-span-1">
          <Card className="h-full p-0 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Non-Negotiable Safeguards</h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {[
                  "No assignment of people",
                  "No instruction to intervene",
                  "No real-time coordination",
                  "No public visibility",
                  "Emergency services always accessible."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 bg-gray-200 dark:bg-gray-600 rounded p-0.5">
                       <CheckSquare className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-sm text-gray-500 italic">These safeguards apply to all risk tiers.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Legal Framing & Change Control */}
        <div className="lg:col-span-2 space-y-6">
          {/* Legal Framing */}
          <Card className="bg-gray-50 dark:bg-gray-800/30 p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Legal Framing</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Risk tiers exist to limit information sharing and reduce harm.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Socius does not provide emergency response, security services, or enforcement functions.
            </p>
          </Card>

          {/* Change Control Notice */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4 flex gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-red-700 dark:text-red-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-800 dark:text-red-300 mb-1">Change Control Notice</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 italic mb-1">
                Risk tier logic is <span className="font-semibold">defined at the system level.</span>
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-200 italic">
                Changes require <span className="font-semibold text-red-700 dark:text-red-300">legal review and versioned approval.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">This screen is for reference only.</p>
      </div>
    </div>
  );
};

export default RiskTiersPage;
