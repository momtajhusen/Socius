// src/screens/user/UserHomeScreen.js
// User main dashboard with help button

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useAuth } from '../../state/hooks/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const { width, height } = Dimensions.get('window');

const UserHomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [nearbyVolunteers, setNearbyVolunteers] = useState(5);
  const [activeIncidents, setActiveIncidents] = useState(2);

  useEffect(() => {
    // Simulate real-time data
    const interval = setInterval(() => {
      setNearbyVolunteers(Math.floor(Math.random() * 10) + 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleHelpRequest = () => {
    navigation.navigate('HelpRequest', { type: 'HELP' });
  };

  const handleConcernReport = () => {
    navigation.navigate('HelpRequest', { type: 'CONCERN' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, {user?.name || 'User'}</Text>
            <Text style={styles.subGreeting}>Your Community is Here</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.notificationBell}>🔔</Text>
            {activeIncidents > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{activeIncidents}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Status Card */}
        <Card style={styles.statusCard} shadow="medium">
          <Text style={styles.statusTitle}>Good people are nearby.</Text>
          <Text style={styles.statusValue}>{nearbyVolunteers}</Text>
          <Text style={styles.statusLabel}>Active Volunteers</Text>

          <View style={styles.statusDetails}>
            <View style={styles.statusItem}>
              <Text style={styles.statusItemIcon}>📍</Text>
              <View>
                <Text style={styles.statusItemLabel}>Your Area</Text>
                <Text style={styles.statusItemValue}>1 km radius</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.statusItem}>
              <Text style={styles.statusItemIcon}>⏱️</Text>
              <View>
                <Text style={styles.statusItemLabel}>Avg Response</Text>
                <Text style={styles.statusItemValue}>6 minutes</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* Map Placeholder */}
        <Card style={styles.mapCard} shadow="medium">
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>🗺️</Text>
            <Text style={styles.mapText}>Community Presence</Text>
            <Text style={styles.mapSubtext}>
              Safe areas shown in green, Attention needed in red
            </Text>
          </View>
        </Card>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          {/* Help Button */}
          <TouchableOpacity
            style={styles.helpButtonLarge}
            onPress={handleHelpRequest}
            activeOpacity={0.8}
          >
            <Card style={styles.helpButton} shadow="large">
              <Text style={styles.helpIcon}>🆘</Text>
              <Text style={styles.helpText}>HELP</Text>
              <Text style={styles.helpSubtext}>Tap for immediate help</Text>
            </Card>
          </TouchableOpacity>

          {/* Concern Button */}
          <TouchableOpacity
            style={styles.concernButtonLarge}
            onPress={handleConcernReport}
            activeOpacity={0.8}
          >
            <Card
              style={[
                styles.concernButton,
                { borderColor: Colors.info, borderWidth: 2 },
              ]}
              shadow="medium"
            >
              <Text style={styles.concernIcon}>⚠️</Text>
              <Text style={styles.concernText}>CONCERN</Text>
              <Text style={styles.concernSubtext}>Report an issue</Text>
            </Card>
          </TouchableOpacity>
        </View>

        {/* Quick Info Cards */}
        <View style={styles.infoCardsContainer}>
          <Card style={styles.infoCard} shadow="small">
            <Text style={styles.infoCardIcon}>📱</Text>
            <Text style={styles.infoCardTitle}>Emergency Contacts</Text>
            <Text style={styles.infoCardText}>Police, Ambulance, Fire</Text>
          </Card>

          <Card style={styles.infoCard} shadow="small">
            <Text style={styles.infoCardIcon}>📊</Text>
            <Text style={styles.infoCardTitle}>This Week</Text>
            <Text style={styles.infoCardText}>27 incidents resolved</Text>
          </Card>
        </View>

        {/* Tips Card */}
        <Card style={styles.tipsCard} shadow="small">
          <Text style={styles.tipsTitle}>Safety Tips</Text>
          <Text style={styles.tipItem}>
            ✓ Stay calm in emergency situations
          </Text>
          <Text style={styles.tipItem}>
            ✓ Share your location with volunteers
          </Text>
          <Text style={styles.tipItem}>
            ✓ Keep emergency contacts updated
          </Text>
        </Card>

        {/* Bottom spacing */}
        <View style={{ height: Spacing.marginXxl }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingXl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
  },
  greeting: {
    ...Typography.h3,
    color: Colors.primary,
    fontWeight: '700',
  },
  subGreeting: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    marginTop: Spacing.marginSm,
  },
  notificationIcon: {
    position: 'relative',
    padding: Spacing.paddingMd,
  },
  notificationBell: {
    fontSize: 24,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.emergency,
    borderRadius: Spacing.radiusRound,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    ...Typography.label,
    color: Colors.white,
    fontWeight: '700',
    fontSize: 10,
  },
  statusCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
    alignItems: 'center',
  },
  statusTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  statusValue: {
    ...Typography.h1,
    color: Colors.primary,
    fontWeight: '700',
  },
  statusLabel: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    marginBottom: Spacing.marginLg,
  },
  statusDetails: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: Spacing.paddingLg,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  statusItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusItemIcon: {
    fontSize: 28,
    marginRight: Spacing.marginMd,
  },
  statusItemLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  statusItemValue: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
    marginTop: Spacing.marginXs,
  },
  divider: {
    width: 1,
    backgroundColor: Colors.borderLight,
  },
  mapCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
    minHeight: 150,
  },
  mapPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mapIcon: {
    fontSize: 40,
    marginBottom: Spacing.marginSm,
  },
  mapText: {
    ...Typography.body,
    color: Colors.textDark,
    fontWeight: '600',
  },
  mapSubtext: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginTop: Spacing.marginSm,
    textAlign: 'center',
  },
  actionsContainer: {
    gap: Spacing.gapLg,
    marginBottom: Spacing.marginXxl,
  },
  helpButtonLarge: {
    flex: 1,
  },
  helpButton: {
    backgroundColor: Colors.emergency,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.paddingXxl,
  },
  helpIcon: {
    fontSize: 48,
    marginBottom: Spacing.marginSm,
  },
  helpText: {
    ...Typography.h4,
    color: Colors.white,
    fontWeight: '700',
  },
  helpSubtext: {
    ...Typography.caption,
    color: Colors.white,
    marginTop: Spacing.marginSm,
    opacity: 0.9,
  },
  concernButtonLarge: {
    flex: 1,
  },
  concernButton: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.paddingXxl,
  },
  concernIcon: {
    fontSize: 48,
    marginBottom: Spacing.marginSm,
  },
  concernText: {
    ...Typography.h4,
    color: Colors.info,
    fontWeight: '700',
  },
  concernSubtext: {
    ...Typography.caption,
    color: Colors.info,
    marginTop: Spacing.marginSm,
  },
  infoCardsContainer: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginXxl,
  },
  infoCard: {
    flex: 1,
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingLg,
  },
  infoCardIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  infoCardTitle: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
    marginBottom: Spacing.marginXs,
  },
  infoCardText: {
    ...Typography.caption,
    color: Colors.textMuted,
    textAlign: 'center',
  },
  tipsCard: {
    backgroundColor: Colors.cardBg,
  },
  tipsTitle: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  tipItem: {
    ...Typography.caption,
    color: Colors.textDark,
    marginVertical: Spacing.marginSm,
    lineHeight: 16,
  },
});

export default UserHomeScreen;