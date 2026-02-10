import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

// Tab Screens
import HomeScreen from '../screens/home/HomeScreen';
import PrepareScreen from '../screens/prepare/PrepareScreen';
import CommunityScreen from '../screens/community/CommunityScreen';
import ProfileScreen from '../screens/home/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 6,
          height: 72,
          backgroundColor: '#FFFFFF',
          borderRadius: 28,
          borderWidth: 1,
          borderColor: '#E8EAED',
          paddingVertical: 8,
          elevation: 20,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.12,
          shadowRadius: 12,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#FFFFFF', '#FFFFFF']}
            start={{ x: 0.5, y: 0.0 }}
            end={{ x: 0.5, y: 1.0 }}
            style={{ flex: 1, borderRadius: 28 }}
          />
        ),
        tabBarActiveTintColor: '#DC5C69',
        tabBarInactiveTintColor: '#6B7A8F',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PrepareTab') {
            iconName = focused ? 'shield-check' : 'shield-check-outline';
          } else if (route.name === 'CommunityTab') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{ 
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="PrepareTab" 
        component={PrepareScreen}
        options={{ 
          tabBarLabel: 'Prepare',
        }}
      />
      <Tab.Screen 
        name="CommunityTab" 
        component={CommunityScreen}
        options={{ 
          tabBarLabel: 'Community',
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen}
        options={{ 
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
