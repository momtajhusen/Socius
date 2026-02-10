import React, { useState } from 'react';
import { Info, Shield, Lock, AlertTriangle } from 'lucide-react';

const ScenarioConfigPage = () => {
  const [formData, setFormData] = useState({
    scenarioName: 'Broken Down Vehicle',
    primaryCategory: 'Calm Presence',
    shortDescription: 'A person is stranded due to vehicle trouble and requests nearby awareness.',
    riskTier: 'Medium',
    safetyGuidance: '• Stay in public view\n• Do not approach if uncomfortable.\n• You may leave at any time\n• Contact authorities if you feel unsafe.',
    lockGuidance: true
  });

  const riskTiers = [
    {
      id: 'Low',
      color: 'green',
      label: 'Low',
      description: 'Non-sensitive, everyday situations'
    },
    {
      id: 'Medium',
      color: 'orange',
      label: 'Medium',
      description: 'Ambiguous or vulnerable situations'
    },
    {
      id: 'High',
      color: 'red',
      label: 'High',
      description: 'Potential for harm, misuse, or escalation.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRiskTierSelect = (tierId) => {
    setFormData(prev => ({ ...prev, riskTier: tierId }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-44 md:pb-24">
      {/* Header */}
      <div className="mb-6 pt-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Scenario Configuration</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Defines how awareness is shared and limited for this scenario.</p>
      </div>

      <div className="space-y-6">
        
        {/* Scenario Basics */}
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Scenario Basics</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 md:col-span-1">
                Scenario Name
              </label>
              <div className="md:col-span-3">
                <input
                  type="text"
                  name="scenarioName"
                  value={formData.scenarioName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring-socius-red sm:text-sm dark:bg-gray-700 dark:text-white p-2 border"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 md:col-span-1">
                Primary Category
              </label>
              <div className="md:col-span-3">
                <select
                  name="primaryCategory"
                  value={formData.primaryCategory}
                  onChange={handleInputChange}
                  className="block w-full max-w-xs rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring-socius-red sm:text-sm dark:bg-gray-700 dark:text-white p-2 border"
                >
                  <option>Calm Presence</option>
                  <option>Care & Support</option>
                  <option>Right Help</option>
                  <option>Prevent / Fix</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 md:col-span-1 pt-2">
                Short Description
              </label>
              <div className="md:col-span-3">
                <textarea
                  name="shortDescription"
                  rows={2}
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring-socius-red sm:text-sm dark:bg-gray-700 dark:text-white p-2 border"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Incident Risk Tier */}
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Incident Risk Tier</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {riskTiers.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => handleRiskTierSelect(tier.id)}
                  className={`relative rounded-lg border p-4 cursor-pointer flex flex-col transition-all ${
                    formData.riskTier === tier.id
                      ? 'border-gray-400 bg-gray-100 dark:bg-gray-700 shadow-sm ring-1 ring-gray-400'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                      tier.color === 'green' ? 'bg-emerald-500' : 
                      tier.color === 'orange' ? 'bg-amber-500' : 'bg-red-600'
                    }`}></div>
                    <span className="font-semibold text-gray-900 dark:text-white">{tier.label}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                    {tier.description}
                  </p>
                  {formData.riskTier === tier.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 border-b border-r border-gray-400 rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>Risk tier controls visibility limits, guidance, and auto-expiry. This is not shown to users.</p>
            </div>
          </div>

          {/* System Rules (Auto-Applied) */}
          <div className="bg-gray-100 dark:bg-gray-700/30 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">System Rules (Auto-Applied)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between md:block">
                <span>Maximum Awareness Viewers:</span> 
                <span className="font-medium text-gray-900 dark:text-white ml-2">5</span>
              </div>
              <div className="flex justify-between md:block">
                <span>Maximum Radius:</span> 
                <span className="font-medium text-gray-900 dark:text-white ml-2">1 km</span>
              </div>
              <div className="flex justify-between md:block">
                <span>Auto-Expiry:</span> 
                <span className="font-medium text-gray-900 dark:text-white ml-2">30 minutes</span>
              </div>
              <div className="col-span-1 md:col-span-3 mt-2 pt-2 border-t border-gray-200 dark:border-gray-600/50 flex flex-wrap gap-x-2">
                 <span>Identity Visibility:</span>
                 <span className="font-medium text-gray-900 dark:text-white">First name + photo (after presence)</span>
                 <span className="text-gray-400">|</span>
                 <span className="font-medium text-gray-900 dark:text-white">Admin Controls <span className="italic">Enabled</span></span>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-500 italic">
              These rules are automatically applied based on the selected risk tier and cannot be overridden per incident.
            </p>
          </div>
        </div>

        {/* Safety & Boundary Guidance */}
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Safety & Boundary Guidance <span className="font-normal text-gray-500">(Volunteer View)</span></h2>
          </div>
          <div className="p-6">
            <textarea
              name="safetyGuidance"
              rows={5}
              value={formData.safetyGuidance}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring-socius-red sm:text-sm dark:bg-gray-700 dark:text-white p-3 border font-sans"
            />
            
            <div className="mt-4 flex items-center">
              <input
                id="lockGuidance"
                name="lockGuidance"
                type="checkbox"
                checked={formData.lockGuidance}
                onChange={handleInputChange}
                className="h-4 w-4 text-socius-red border-gray-300 rounded focus:ring-socius-red"
              />
              <label htmlFor="lockGuidance" className="ml-2 block text-sm text-gray-900 dark:text-white font-medium">
                Lock guidance during like incidents.
              </label>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 ml-6">
              This content is displayed to users viewing awareness details.
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
             <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
             <div className="text-xs text-gray-500 dark:text-gray-400 max-w-xl">
               <span className="font-semibold block mb-1">Legal Framing</span>
               This scenario operates under Socius' information-only policy. No instruction, coordination, or obligation is created.
             </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-socius-red">
              Save Draft
            </button>
            <button className="flex-1 md:flex-none px-6 py-2 bg-socius-red text-white text-sm font-medium rounded hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-socius-red shadow-sm">
              Publish Scenario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioConfigPage;