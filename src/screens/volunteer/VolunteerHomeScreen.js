// src/screens/volunteer/VolunteerHomeScreen.js
// Volunteer dashboard with stats and alerts

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const VolunteerHomeScreen = ({ navigation }) => {
  const [availability, setAvailability] = useState(true);
  const [nearbyIncidents, setNearbyIncidents] = useState(2);
  const [activeAssignments, setActiveAssignments] = useState(1);

  const stats = {
    thisWeek: {
      incidents: 24,
      resolved: 24,
      deescalated: 16,
    },
    volunteers: {
      active: 84,
      responseTime: '03:12', // minutes
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header with Availability */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Volunteer</Text>
            <Text style={styles.subGreeting}>You're making a difference</Text>
          </View>
        </View>

        {/* Availability Switch Card */}
        <Card style={styles.availabilityCard} shadow="large">
          <View style={styles.availabilityContent}>
            <View>
              <Text style={styles.availabilityTitle}>Your Availability</Text>
              <Text style={styles.availabilityStatus}>
                {availability ? '✓ Available' : '✕ Unavailable'}
              </Text>
            </View>
            <Switch
              value={availability}
              onValueChange={setAvailability}
              trackColor={{ false: Colors.borderLight, true: Colors.success }}
              thumbColor={Colors.white}
              style={styles.switch}
            />
          </View>

          {availability && (
            <View style={styles.availabilityInfo}>
              <Text style={styles.infoText}>
                🔴 You're receiving incident notifications
              </Text>
            </View>
          )}
        </Card>

        {/* Incident Alerts */}
        {nearbyIncidents > 0 && (
          <Card style={styles.alertCard} shadow="medium">
            <Text style={styles.alertIcon}>🚨</Text>
            <Text style={styles.alertTitle}>{nearbyIncidents} Help Request Nearby</Text>
            <Text style={styles.alertSubtitle}>
              People in your area need assistance
            </Text>
            <Button
              title="View Available Incidents"
              onPress={() => navigation.navigate('AvailableIncidents')}
              variant="primary"
              fullWidth
              style={styles.alertButton}
            />
          </Card>
        )}

        {/* Stats Row */}
        <View style={styles.statsContainer}>
          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>👥</Text>
            <Text style={styles.statValue}>{stats.volunteers.active}</Text>
            <Text style={styles.statLabel}>Active Volunteers</Text>
          </Card>

          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>⏱️</Text>
            <Text style={styles.statValue}>{stats.volunteers.responseTime}</Text>
            <Text style={styles.statLabel}>Avg Response</Text>
          </Card>
        </View>

        {/* This Week Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This Week in Your Community</Text>

          <View style={styles.statsGrid}>
            <Card style={styles.gridCard} shadow="small">
              <Text style={styles.gridIcon}>⚠️</Text>
              <Text style={styles.gridValue}>{stats.thisWeek.incidents}</Text>
              <Text style={styles.gridLabel}>Incidents Responded to</Text>
            </Card>

            <Card style={styles.gridCard} shadow="small">
              <Text style={styles.gridIcon}>🧯</Text>
              <Text style={styles.gridValue}>{stats.thisWeek.deescalated}</Text>
              <Text style={styles.gridLabel}>Situations De-escalated</Text>
            </Card>
          </View>

          <Card style={styles.infoCard} shadow="small">
            <Text style={styles.infoBold}>
              These are people helping people.
            </Text>
            <Text style={styles.infoText}>
              Your actions create real change in the community
            </Text>
          </Card>
        </View>

        {/* Reminders */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Volunteer Reminders</Text>

          <View style={styles.remindersList}>
            <Card style={styles.reminderCard} shadow="small">
              <Text style={styles.reminderNumber}>1</Text>
              <Text style={styles.reminderText}>
                Stay calm. De-escalate. Do not confront.
              </Text>
            </Card>

            <Card style={styles.reminderCard} shadow="small">
              <Text style={styles.reminderNumber}>2</Text>
              <Text style={styles.reminderText}>
                Your safety is paramount. Call authorities if needed.
              </Text>
            </Card>

            <Card style={styles.reminderCard} shadow="small">
              <Text style={styles.reminderNumber}>3</Text>
              <Text style={styles.reminderText}>
                Be respectful. Listen. Support vulnerable people.
              </Text>
            </Card>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.section}>
          <Button
            title="Available Incidents"
            onPress={() => navigation.navigate('AvailableIncidents')}
            variant="primary"
            fullWidth
            style={styles.actionButton}
          />

          <Button
            title="My Assignments"
            onPress={() => navigation.navigate('Assignments')}
            variant="secondary"
            fullWidth
            style={styles.actionButton}
          />
        </View>

        {/* Support Message */}
        <View style={styles.section}>
          <Card style={styles.supportCard} shadow="small">
            <Text style={styles.supportIcon}>🤝</Text>
            <Text style={styles.supportTitle}>Need Support?</Text>
            <Text style={styles.supportText}>
              If you're ever overwhelmed, you can pause your availability anytime.
              Mental health matters.
            </Text>
          </Card>
        </View>

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
  availabilityCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
  },
  availabilityContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.marginMd,
  },
  availabilityTitle: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  availabilityStatus: {
    ...Typography.bodySmall,
    color: Colors.success,
    fontWeight: '700',
    marginTop: Spacing.marginXs,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  availabilityInfo: {
    paddingTop: Spacing.paddingMd,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.success,
    fontWeight: '500',
  },
  alertCard: {
    backgroundColor: Colors.emergency,
    marginBottom: Spacing.marginXxl,
    alignItems: 'center',
  },
  alertIcon: {
    fontSize: 48,
    marginBottom: Spacing.marginMd,
  },
  alertTitle: {
    ...Typography.h5,
    color: Colors.white,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  alertSubtitle: {
    ...Typography.bodySmall,
    color: Colors.white,
    marginBottom: Spacing.marginMd,
    opacity: 0.9,
  },
  alertButton: {
    backgroundColor: Colors.white,
    width: '100%',
    paddingVertical: Spacing.paddingMd,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginXxl,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  statIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  statValue: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginTop: Spacing.marginXs,
  },
  section: {
    marginBottom: Spacing.marginXxl,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginMd,
  },
  gridCard: {
    flex: 1,
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  gridIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  gridValue: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
  },
  gridLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginTop: Spacing.marginXs,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: Colors.cardBg,
  },
  infoBold: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.textDark,
  },
  remindersList: {
    gap: Spacing.gapMd,
  },
  reminderCard: {
    backgroundColor: Colors.cardBg,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  reminderNumber: {
    fontSize: 28,
    color: Colors.primary,
    fontWeight: '700',
    marginRight: Spacing.marginMd,
    marginTop: Spacing.marginXs,
  },
  reminderText: {
    flex: 1,
    ...Typography.bodySmall,
    color: Colors.textDark,
    lineHeight: 18,
  },
  actionButton: {
    paddingVertical: Spacing.paddingMd,
    marginBottom: Spacing.marginMd,
  },
  supportCard: {
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
  },
  supportIcon: {
    fontSize: 40,
    marginBottom: Spacing.marginMd,
  },
  supportTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  supportText: {
    ...Typography.caption,
    color: Colors.info,
    textAlign: 'center',
  },
});

export default VolunteerHomeScreen;