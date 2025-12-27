// src/screens/user/IncidentDetailScreen.js
// Live tracking of incident and responders

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
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const { width } = Dimensions.get('window');

const IncidentDetailScreen = ({ navigation, route }) => {
  const { incidentId, type } = route.params;
  const [status, setStatus] = useState('ACTIVE');
  const [respondersCount, setRespondersCount] = useState(3);
  const [estimatedTime, setEstimatedTime] = useState(8);

  // Simulate timer counting down
  useEffect(() => {
    const timer = setInterval(() => {
      setEstimatedTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Mock volunteer data
  const volunteers = [
    {
      id: 1,
      name: 'Anna',
      role: 'Nearby Volunteer',
      distance: '0.4 mi',
      eta: '5 min',
      avatar: '👩‍🦰',
      status: 'arriving',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Peter',
      role: 'Nearby Volunteer',
      distance: '0.6 mi',
      eta: '8 min',
      avatar: '👨‍💼',
      status: 'en_route',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Susan',
      role: 'Nearby Volunteer',
      distance: '0.9 mi',
      eta: '12 min',
      avatar: '👩‍⚕️',
      status: 'en_route',
      rating: 4.9,
    },
  ];

  const getStatusColor = (volStatus) => {
    if (volStatus === 'arriving') return Colors.success;
    if (volStatus === 'en_route') return Colors.warning;
    return Colors.info;
  };

  const getStatusLabel = (volStatus) => {
    if (volStatus === 'arriving') return '✓ Arriving';
    if (volStatus === 'en_route') return '⧖ En Route';
    return '⧘ Notified';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Live Help Tracking"
        subtitle={incidentId}
        onBackPress={() => navigation.goBack()}
        backButton
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Status Banner */}
        <View style={styles.statusBanner}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusBadgeText}>● ACTIVE</Text>
          </View>
          <Text style={styles.statusMessage}>
            We are here. Help is on the way.
          </Text>
        </View>

        {/* Map Placeholder */}
        <Card style={styles.mapCard} shadow="medium">
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>🗺️</Text>
            <Text style={styles.mapLabel}>Live Location Map</Text>
            <Text style={styles.mapSubtext}>
              3 volunteers are coming to you
            </Text>
          </View>
        </Card>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>👥</Text>
            <Text style={styles.statValue}>{respondersCount}</Text>
            <Text style={styles.statLabel}>Responders</Text>
          </Card>

          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>⏱️</Text>
            <Text style={styles.statValue}>{estimatedTime}</Text>
            <Text style={styles.statLabel}>Minutes ETA</Text>
          </Card>

          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statValue}>4.7</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </Card>
        </View>

        {/* Volunteers List */}
        <View style={styles.volunteersSection}>
          <Text style={styles.sectionTitle}>Responding Volunteers</Text>

          {volunteers.map((vol) => (
            <Card key={vol.id} style={styles.volunteerCard} shadow="medium">
              <View style={styles.volunteerHeader}>
                <Text style={styles.volunteerAvatar}>{vol.avatar}</Text>
                <View style={styles.volunteerInfo}>
                  <Text style={styles.volunteerName}>{vol.name}</Text>
                  <Text style={styles.volunteerRole}>{vol.role}</Text>
                </View>
                <View style={styles.volunteerRating}>
                  <Text style={styles.ratingValue}>⭐ {vol.rating}</Text>
                </View>
              </View>

              <View style={styles.volunteerDetails}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>📍</Text>
                  <View>
                    <Text style={styles.detailLabel}>Distance</Text>
                    <Text style={styles.detailValue}>{vol.distance}</Text>
                  </View>
                </View>

                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>⏱️</Text>
                  <View>
                    <Text style={styles.detailLabel}>ETA</Text>
                    <Text style={styles.detailValue}>{vol.eta}</Text>
                  </View>
                </View>

                <View style={styles.detailItem}>
                  <View
                    style={[
                      styles.statusIndicator,
                      { backgroundColor: getStatusColor(vol.status) },
                    ]}
                  />
                  <Text style={styles.statusText}>
                    {getStatusLabel(vol.status)}
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.messageButton}>
                <Text style={styles.messageButtonText}>💬 Message</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </View>

        {/* Quick Help Guide */}
        <View style={styles.guidesSection}>
          <Text style={styles.sectionTitle}>Quick Help Guide</Text>

          <Card style={styles.guideCard} shadow="small">
            <Text style={styles.guideNumber}>1</Text>
            <Text style={styles.guideTitle}>Arrive calmly</Text>
            <Text style={styles.guideText}>
              Take a moment to pause. Breathe.
            </Text>
          </Card>

          <Card style={styles.guideCard} shadow="small">
            <Text style={styles.guideNumber}>2</Text>
            <Text style={styles.guideTitle}>Stand with presence</Text>
            <Text style={styles.guideText}>
              Show that you are there to help and support
            </Text>
          </Card>

          <Card style={styles.guideCard} shadow="small">
            <Text style={styles.guideNumber}>3</Text>
            <Text style={styles.guideTitle}>De-escalate and support</Text>
            <Text style={styles.guideText}>
              Help those involved feel safe and heard
            </Text>
          </Card>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Cancel Request"
            onPress={() => navigation.goBack()}
            variant="secondary"
            fullWidth
            style={styles.cancelButton}
          />

          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>🚨 Emergency</Text>
          </TouchableOpacity>
        </View>

        {/* Info Footer */}
        <Card style={styles.infoFooter} shadow="small">
          <Text style={styles.infoText}>
            ✓ All volunteers are verified and trained
          </Text>
          <Text style={styles.infoText}>
            ✓ You can rate them after the incident is resolved
          </Text>
        </Card>

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
  },
  statusBanner: {
    backgroundColor: Colors.success,
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingXl,
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: Spacing.radiusXl,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingSm,
    marginBottom: Spacing.marginMd,
  },
  statusBadgeText: {
    ...Typography.label,
    color: Colors.white,
    fontWeight: '700',
  },
  statusMessage: {
    ...Typography.h4,
    color: Colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  mapCard: {
    marginHorizontal: Spacing.paddingLg,
    marginVertical: Spacing.marginXl,
    backgroundColor: Colors.cardBg,
    minHeight: 150,
  },
  mapPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mapText: {
    fontSize: 40,
    marginBottom: Spacing.marginMd,
  },
  mapLabel: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  mapSubtext: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginTop: Spacing.marginSm,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.paddingLg,
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
  volunteersSection: {
    paddingHorizontal: Spacing.paddingLg,
    marginBottom: Spacing.marginXxl,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  volunteerCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginMd,
  },
  volunteerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.marginMd,
  },
  volunteerAvatar: {
    fontSize: 40,
    marginRight: Spacing.marginMd,
  },
  volunteerInfo: {
    flex: 1,
  },
  volunteerName: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  volunteerRole: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  volunteerRating: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingSm,
  },
  ratingValue: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  volunteerDetails: {
    flexDirection: 'row',
    paddingVertical: Spacing.paddingMd,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
    marginBottom: Spacing.marginMd,
  },
  detailItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 20,
    marginRight: Spacing.marginSm,
  },
  detailLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  detailValue: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
    marginTop: Spacing.marginXs,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: Spacing.marginSm,
  },
  statusText: {
    ...Typography.caption,
    color: Colors.textDark,
    fontWeight: '600',
  },
  messageButton: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.radiusLarge,
    paddingVertical: Spacing.paddingSm,
    alignItems: 'center',
  },
  messageButtonText: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
  },
  guidesSection: {
    paddingHorizontal: Spacing.paddingLg,
    marginBottom: Spacing.marginXxl,
  },
  guideCard: {
    backgroundColor: Colors.cardBg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.marginMd,
    paddingHorizontal: Spacing.paddingMd,
  },
  guideNumber: {
    fontSize: 32,
    color: Colors.primary,
    fontWeight: '700',
    marginRight: Spacing.marginMd,
  },
  guideTitle: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginXs,
  },
  guideText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  actionButtons: {
    paddingHorizontal: Spacing.paddingLg,
    marginBottom: Spacing.marginXxl,
    gap: Spacing.gapMd,
  },
  cancelButton: {
    paddingVertical: Spacing.paddingMd,
  },
  emergencyButton: {
    backgroundColor: Colors.emergency,
    borderRadius: Spacing.radiusLarge,
    paddingVertical: Spacing.paddingMd,
    alignItems: 'center',
  },
  emergencyButtonText: {
    ...Typography.label,
    color: Colors.white,
    fontWeight: '700',
  },
  infoFooter: {
    marginHorizontal: Spacing.paddingLg,
    backgroundColor: '#F0F8FF',
  },
  infoText: {
    ...Typography.caption,
    color: Colors.info,
    marginVertical: Spacing.marginSm,
  },
});

export default IncidentDetailScreen;