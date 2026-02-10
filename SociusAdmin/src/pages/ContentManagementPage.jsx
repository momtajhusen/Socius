import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAlert } from '../hooks/useAlert';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  Heart, 
  HandHelping, 
  MessageCircle, 
  UserPlus, 
  UserCheck, 
  X, 
  Edit2, 
  Trash2, 
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react';

const ContentManagementPage = () => {
  const { confirm, toast } = useAlert();
  const [activeTab, setActiveTab] = useState('Categories');
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Mock Data
  const [categories, setCategories] = useState([
    { id: 1, name: 'Calm Presence', description: 'Promoting a steady and calm approach.', status: 'Enabled', icon: 'heart' },
    { id: 2, name: 'Care & Support', description: 'Offering empathy and assistance.', status: 'Enabled', icon: 'hand' },
    { id: 3, name: 'Right Help', description: 'Connecting to appropriate resources.', status: 'Enabled', icon: 'message' },
    { id: 4, name: 'Prevent / Fix', description: 'Addressing issues to reduce harm.', status: 'Enabled', icon: 'user-plus' },
  ]);

  const [scenarios, setScenarios] = useState([
    { id: 1, name: 'Broken Down Vehicle', risk: 'Medium', status: 'Active' },
    { id: 2, name: 'Suspicious Activity', risk: 'High', status: 'Draft' },
    { id: 3, name: 'Lost Child', risk: 'High', status: 'Active' },
  ]);

  const tabs = [
    'Categories',
    'Scenarios',
    'Do / Don\'t Guidance',
    'Preparedness Content'
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsEditPanelOpen(false);
    setEditingCategory(null);
  };

  const handleEdit = (category) => {
    setEditingCategory({ ...category });
    setIsEditPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsEditPanelOpen(false);
    setEditingCategory(null);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Update local state to simulate persistence
    if (editingCategory) {
      setCategories(prev => prev.map(c => c.id === editingCategory.id ? editingCategory : c));
    }

    setIsSaving(false);
    toast.success('Category updated successfully');
    setIsEditPanelOpen(false);
    setEditingCategory(null);
  };

  const handleDelete = async (categoryName) => {
    const result = await confirm({
      title: 'Delete Category?',
      text: `Are you sure you want to delete "${categoryName}"? This cannot be undone.`,
      icon: 'warning',
      confirmButtonText: 'Yes, delete it',
      confirmButtonColor: 'bg-red-600 hover:bg-red-700 text-white',
    });
    
    if (result.isConfirmed) {
      // Simulate API delay
      const toastId = toast.loading('Deleting category...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setCategories(prev => prev.filter(c => c.name !== categoryName));
      toast.dismiss(toastId);
      toast.success(`Category "${categoryName}" deleted`);
    }
  };

  const renderIcon = (iconName) => {
    const commonClasses = "w-6 h-6 fill-current";
    switch (iconName) {
      case 'heart': return <Heart className={commonClasses} />;
      case 'hand': return <HandHelping className={commonClasses} />;
      case 'message': return <MessageCircle className={commonClasses} />;
      case 'user-plus': return <UserPlus className={commonClasses} />;
      case 'user-check': return <UserCheck className={commonClasses} />;
      default: return <Heart className={commonClasses} />;
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.32))]">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Content Management</h1>
        <p className="mt-1 text-sm md:text-base text-gray-500 dark:text-gray-400">Manage categories, scenarios, and user guidance content</p>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? 'border-socius-red text-white bg-socius-red'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
          {/* Spacer to fill the rest of the tab line if needed, or just let it be */}
          <div className="flex-1 border-b border-gray-200 dark:border-gray-700"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <Card className="flex flex-1 shadow rounded-t-none rounded-b-lg overflow-hidden relative p-0">
        
        {/* Left Side: Table */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeTab === 'Categories' && (
            <div className="overflow-x-auto ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">
                      Category Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Description
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                  {categories.map((category, index) => (
                    <motion.tr 
                      key={category.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                        {category.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {category.description}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <div className="h-5 w-5 bg-green-600 rounded flex items-center justify-center mr-2">
                             <CheckCircle className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{category.status}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => handleEdit(category)}
                            className="text-socius-red hover:text-brand-dark transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(category.name)}
                            className="text-socius-red hover:text-brand-dark transition-colors"
                            title="Disable"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'Scenarios' && (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Available Scenarios</h3>
                <Link 
                  to="/content/scenario-config" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-socius-red hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-socius-red"
                >
                  <Plus className="mr-2 h-4 w-4" /> Create Scenario
                </Link>
              </div>
              <div className="overflow-x-auto ring-1 ring-black ring-opacity-5 rounded-lg m-4">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">Scenario Name</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Risk Tier</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                      <th className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">Edit</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                    {scenarios.map((scenario) => (
                      <tr key={scenario.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">{scenario.name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            scenario.risk === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200' :
                            scenario.risk === 'Medium' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200' :
                            'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
                          }`}>
                            {scenario.risk}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{scenario.status}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link to="/content/scenario-config" className="text-socius-red hover:text-brand-dark">Edit</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'Categories' && activeTab !== 'Scenarios' && (
             <div className="text-center py-10 text-gray-500">
                Content for {activeTab} will be implemented soon.
             </div>
          )}
        </div>

        {/* Right Side: Edit Panel */}
        <AnimatePresence>
        {isEditPanelOpen && (
          <motion.div 
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-0 md:inset-auto md:right-4 md:top-4 md:bottom-4 md:w-96 bg-white dark:bg-gray-800 md:border border-gray-200 dark:border-gray-700 flex flex-col md:shadow-2xl z-20 md:rounded-xl"
          >
            <div className="px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between md:rounded-t-xl">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Edit Category</h2>
              <button 
                onClick={handleClosePanel}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
              {/* Category Name */}
              <div>
                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={editingCategory?.name || ''}
                  onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                  className="w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring-socius-red sm:text-sm dark:bg-gray-700 dark:text-white p-2 border"
                />
              </div>

              {/* Short Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Short Description
                </label>
                <textarea
                  id="description"
                  rows={2}
                  value={editingCategory?.description || ''}
                  onChange={(e) => setEditingCategory({...editingCategory, description: e.target.value})}
                  className="w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-socius-red focus:ring-socius-red sm:text-sm dark:bg-gray-700 dark:text-white p-2 border resize-none"
                />
              </div>

              {/* Icon Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Icon
                </label>
                <div className="flex space-x-3">
                  {['heart', 'hand', 'message', 'user-plus', 'user-check'].map((icon) => (
                    <button
                      key={icon}
                      onClick={() => setEditingCategory({...editingCategory, icon})}
                      className={`w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200 ${
                        editingCategory?.icon === icon
                          ? 'border-2 border-socius-red bg-white text-socius-red shadow-sm'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent'
                      }`}
                    >
                      {renderIcon(icon)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 md:rounded-b-xl flex gap-3">
              <Button 
                variant="primary" 
                className="flex-1"
                onClick={handleSave}
                loading={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={handleClosePanel}
              >
                Cancel
              </Button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </Card>

      {/* Bottom Disclaimer */}
      <div className="mt-6 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-3 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          All content published here is informational. Socius does <span className="italic font-medium">not</span> instruct, coordinate, or enforce actions.
        </p>
      </div>
    </div>
  );
};

export default ContentManagementPage;
