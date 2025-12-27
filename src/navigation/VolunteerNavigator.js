// src/navigation/VolunteerNavigator.js
// Volunteer role - Bottom tab navigation

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Volunteer Screens
import VolunteerHomeScreen from '../screens/volunteer/VolunteerHomeScreen';
import AvailableIncidentsScreen from '../screens/volunteer/AvailableIncidentsScreen';
import MyAssignmentsScreen from '../screens/volunteer/MyAssignmentsScreen';
import VolunteerProfileScreen from '../screens/volunteer/VolunteerProfileScreen';

// Modal screens
import IncidentAcceptScreen from '../screens/volunteer/IncidentAcceptScreen';
import RespondingScreen from '../screens/volunteer/RespondingScreen';

// Theme
import { Colors } from '../theme/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="VolunteerHome" component={VolunteerHomeScreen} />
      <Stack.Screen
        name="Responding"
        component={RespondingScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Incidents Stack
const IncidentsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen
        name="AvailableIncidents"
        component={AvailableIncidentsScreen}
      />
      <Stack.Screen
        name="IncidentAccept"
        component={IncidentAcceptScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Assignments Stack
const AssignmentsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="Assignments" component={MyAssignmentsScreen} />
    </Stack.Navigator>
  );
};

// Profile Stack
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="VolunteerProfile" component={VolunteerProfileScreen} />
    </Stack.Navigator>
  );
};

// Main Bottom Tab Navigator
const VolunteerNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'IncidentsTab') {
            iconName = focused ? 'warning' : 'warning';
          } else if (route.name === 'AssignmentsTab') {
            iconName = focused ? 'assignment' : 'assignment';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person';
          }

          return (
            <MaterialIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.borderLight,
          borderTopWidth: 1,
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Dashboard',
        }}
      />

      <Tab.Screen
        name="IncidentsTab"
        component={IncidentsStack}
        options={{
          title: 'Incidents',
        }}
      />

      <Tab.Screen
        name="AssignmentsTab"
        component={AssignmentsStack}
        options={{
          title: 'My Tasks',
        }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default VolunteerNavigator;