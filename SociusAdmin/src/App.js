import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

// Pages
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LiveAwarenessPage from './pages/LiveAwarenessPage';
import LiveAwarenessDetailsPage from './pages/LiveAwarenessDetailsPage';
import IncidentReviewPage from './pages/IncidentReviewPage';
import UsersVolunteersPage from './pages/UsersVolunteersPage';
import UserProfilePage from './pages/UserProfilePage';
import VerificationQueuePage from './pages/VerificationQueuePage';
import VerificationReviewPage from './pages/VerificationReviewPage';
import ContentManagementPage from './pages/ContentManagementPage';
import ReportsSafetyFlagsPage from './pages/ReportsSafetyFlagsPage';
import SystemSettingsPage from './pages/SystemSettingsPage';
import AuditLogsPage from './pages/AuditLogsPage';
import AppealsPage from './pages/AppealsPage';
import RiskTiersPage from './pages/RiskTiersPage';
import SubscriptionSettingsPage from './pages/SubscriptionSettingsPage';
import ScenarioConfigPage from './pages/ScenarioConfigPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

function App() {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster 
          position="top-right" 
          reverseOrder={false}
          toastOptions={{
            style: {
              background: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#f3f4f6' : '#111827',
              border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
            },
            success: {
              iconTheme: {
                primary: '#16a34a',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#dc2626',
                secondary: '#ffffff',
              },
            },
          }}
        />
        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          {/* Protected Routes */}
          <Route element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/live-awareness" element={<LiveAwarenessPage />} />
          <Route path="/live-awareness/:id" element={<LiveAwarenessDetailsPage />} />
          <Route path="/incident-review" element={<IncidentReviewPage />} />
          <Route path="/users" element={<UsersVolunteersPage />} />
          <Route path="/users/:userId" element={<UserProfilePage />} />
          <Route path="/verification" element={<VerificationQueuePage />} />
          <Route path="/verification/:requestId" element={<VerificationReviewPage />} />
          <Route path="/content" element={<ContentManagementPage />} />
          <Route path="/reports" element={<ReportsSafetyFlagsPage />} />
          <Route path="/settings" element={<SystemSettingsPage />} />
          <Route path="/audit-logs" element={<AuditLogsPage />} />
          <Route path="/appeals" element={<AppealsPage />} />
          <Route path="/risk-tiers" element={<RiskTiersPage />} />
          <Route path="/subscriptions" element={<SubscriptionSettingsPage />} />
          <Route path="/content/scenario-config" element={<ScenarioConfigPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
