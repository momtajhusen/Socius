// src/navigation/AuthNavigator.js
// Authentication screens - Login, OTP, Role Selection

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import OTPVerificationScreen from '../screens/auth/OTPVerificationScreen';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
      initialRouteName="Login"
    >
      {/* Login Screen - Phone number entry */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          animationTypeForReplace: true,
        }}
      />

      {/* OTP Verification */}
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerificationScreen}
        options={{
          animationEnabled: true,
        }}
      />

      {/* Role Selection - User/Volunteer/Admin */}
      <Stack.Screen
        name="RoleSelection"
        component={RoleSelectionScreen}
        options={{
          animationEnabled: true,
        }}
      />

      {/* Onboarding - Profile setup */}
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;