// src/navigation/RootNavigator.js
// Main navigator - decide karega kaunsa stack show karna hai

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';
import VolunteerNavigator from './VolunteerNavigator';
import AdminNavigator from './AdminNavigator';

// Screens
import SplashScreen from '../screens/auth/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userRole } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user already logged in
    const bootstrapAsync = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        const role = await AsyncStorage.getItem('userRole');

        if (token && role) {
          // User already logged in - dispatch action to restore auth state
          dispatch({
            type: 'auth/setAuthState',
            payload: { isLoggedIn: true, userRole: role },
          });
        }
      } catch (e) {
        console.log('Restoring token failed', e);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAsync();
  }, [dispatch]);

  if (isLoading) {
    // Show splash screen while checking auth
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  // If not logged in, show Auth Navigator
  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  // If logged in, show role-based navigator
  switch (userRole) {
    case 'USER':
      return <UserNavigator />;
    case 'VOLUNTEER':
      return <VolunteerNavigator />;
    case 'ADMIN':
      return <AdminNavigator />;
    default:
      return <AuthNavigator />;
  }
};

export default RootNavigator;