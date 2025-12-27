// src/screens/auth/SplashScreen.js
// App splash screen - Loading indicator

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from 'react-native';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const SplashScreen = () => {
  useEffect(() => {
    // Splash screen automatically handled by RootNavigator
    // No need to navigate manually
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo/Icon */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>❤️</Text>
        </View>

        {/* App Name */}
        <Text style={styles.appName}>Community Safety</Text>
        <Text style={styles.appSubtitle}>Local Help, Nearby Volunteers</Text>

        {/* Tagline */}
        <Text style={styles.tagline}>Stay Safe. Help Others.</Text>

        {/* Spacing */}
        <View style={{ height: Spacing.spacingXxl }} />

        {/* Loading Indicator */}
        <ActivityIndicator size="large" color={Colors.primary} />

        {/* Loading text */}
        <Text style={styles.loadingText}>Initializing App...</Text>
      </View>

      {/* Bottom text */}
      <View style={styles.footer}>
        <Text style={styles.versionText}>v1.0.0</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.paddingLg,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: Spacing.radiusXl,
    backgroundColor: Colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.marginXl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    fontSize: 48,
  },
  appName: {
    ...Typography.h2,
    color: Colors.primary,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: Spacing.marginSm,
  },
  appSubtitle: {
    ...Typography.body,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.marginLg,
  },
  tagline: {
    ...Typography.bodyMedium,
    color: Colors.primary,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: Spacing.marginXxl,
  },
  loadingText: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginTop: Spacing.marginLg,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: Spacing.paddingLg,
  },
  versionText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
});

export default SplashScreen;