// src/navigation/UserNavigator.js
// User role - Bottom tab navigation

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// User Screens
import UserHomeScreen from '../screens/user/UserHomeScreen';
import IncidentHistoryScreen from '../screens/user/IncidentHistoryScreen';
import UserProfileScreen from '../screens/user/UserProfileScreen';
import EmergencyContactsScreen from '../screens/user/EmergencyContactsScreen';

// Stack screens (modal style)
import HelpRequestScreen from '../screens/user/HelpRequestScreen';
import IncidentDetailScreen from '../screens/user/IncidentDetailScreen';
import ReportAbuseScreen from '../screens/user/ReportAbuseScreen';

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
      <Stack.Screen name="UserHome" component={UserHomeScreen} />
      <Stack.Screen
        name="HelpRequest"
        component={HelpRequestScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="IncidentDetail"
        component={IncidentDetailScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// History Stack
const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen name="History" component={IncidentHistoryScreen} />
    </Stack.Navigator>
  );
};

// Emergency Stack
const EmergencyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.lightBg },
      }}
    >
      <Stack.Screen
        name="EmergencyContacts"
        component={EmergencyContactsScreen}
      />
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
      <Stack.Screen name="Profile" component={UserProfileScreen} />
      <Stack.Screen
        name="ReportAbuse"
        component={ReportAbuseScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Main Bottom Tab Navigator
const UserNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'HistoryTab') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'EmergencyTab') {
            iconName = focused ? 'emergency' : 'emergency';
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
          title: 'Home',
        }}
      />

      <Tab.Screen
        name="HistoryTab"
        component={HistoryStack}
        options={{
          title: 'History',
        }}
      />

      <Tab.Screen
        name="EmergencyTab"
        component={EmergencyStack}
        options={{
          title: 'Emergency',
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

export default UserNavigator;