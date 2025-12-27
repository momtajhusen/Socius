// src/navigation/AdminNavigator.js
// Admin role - Drawer navigation (Hamburger menu)

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Admin Screens
import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import IncidentReviewScreen from '../screens/admin/IncidentReviewScreen';
import VolunteerManagementScreen from '../screens/admin/VolunteerManagementScreen';
import ClusterControlScreen from '../screens/admin/ClusterControlScreen';
import AnalyticsScreen from '../screens/admin/AnalyticsScreen';
import AdminSettingsScreen from '../screens/admin/AdminSettingsScreen';

// Theme
import { Colors } from '../theme/colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Dashboard Stack
const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="Dashboard" component={AdminDashboardScreen} />
    </Stack.Navigator>
  );
};

// Incident Review Stack
const IncidentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="IncidentReview" component={IncidentReviewScreen} />
    </Stack.Navigator>
  );
};

// Volunteer Management Stack
const VolunteerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen
        name="VolunteerMgmt"
        component={VolunteerManagementScreen}
      />
    </Stack.Navigator>
  );
};

// Cluster Control Stack
const ClusterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="ClusterCtrl" component={ClusterControlScreen} />
    </Stack.Navigator>
  );
};

// Analytics Stack
const AnalyticsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
    </Stack.Navigator>
  );
};

// Settings Stack
const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="AdminSettings" component={AdminSettingsScreen} />
    </Stack.Navigator>
  );
};

// Main Drawer Navigator
const AdminNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: Colors.textMuted,
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          marginLeft: -16,
        },
        drawerStyle: {
          backgroundColor: Colors.white,
          width: 280,
        },
      }}
    >
      <Drawer.Screen
        name="DashboardTab"
        component={DashboardStack}
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="IncidentTab"
        component={IncidentStack}
        options={{
          drawerLabel: 'Incident Review',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="list-alt" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="VolunteerTab"
        component={VolunteerStack}
        options={{
          drawerLabel: 'Volunteer Management',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="ClusterTab"
        component={ClusterStack}
        options={{
          drawerLabel: 'Cluster Control',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="public" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="AnalyticsTab"
        component={AnalyticsStack}
        options={{
          drawerLabel: 'Analytics',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="bar-chart" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AdminNavigator;