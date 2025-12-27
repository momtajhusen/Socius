// src/screens/volunteer/IncidentAcceptScreen.js
// Accept incident and show quick help guide

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const IncidentAcceptScreen = ({ navigation, route }) => {
  const { incidentId } = route.params;
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const incidentDetails = {
    id: incidentId,
    type: 'Medical Emergency',
    icon: '🚑',
    location: '123 Main St, Downtown',
    description: 'Person feeling unwell',
    distance: '0.4 mi',
    eta: '5 minutes',
  };

  const quickGuide = [
    {
      number: '1',
      title: 'Arrive calmly',
      description: 'Take a moment to pause. Breathe. Approach the situation in a calm, composed manner.',
      icon: '🧘',
    },
    {
      number: '2',
      title: 'Stand with presence',
      description: 'Show that you are there to help and support. Your presence matters. Ground yourself in the situation.',
      icon: '🫱',
    },
    {
      number: '3',
      title: 'De-escalate and support',
      description: 'Help those involved feel safe and heard. Listen without judging. Support vulnerable people.',
      icon: '💬',
    },
  ];

  const handleAccept = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setAccepted(true);

      // Auto navigate after 2 seconds
      setTimeout(() => {
        navigation.navigate('Responding', { incidentId });
      }, 2000);
    }, 1500);
  };

  if (accepted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.successContainer}>
          <Card style={styles.successCard} shadow="large">
            <Text style={styles.successIcon}>✓</Text>
            <Text style={styles.successTitle}>You're Responding!</Text>
            <Text style={styles.successMessage}>
              You've accepted the incident. Open Maps to navigate.
            </Text>
            <Text style={styles.successSubtext}>
              Redirecting to navigation...
            </Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>

        {/* Incident Header */}
        <Card style={styles.headerCard} shadow="medium">
          <Text style={styles.incidentIcon}>{incidentDetails.icon}</Text>
          <Text style={styles.incidentType}>{incidentDetails.type}</Text>
          <Text style={styles.incidentLocation}>{incidentDetails.location}</Text>

          {/* Details Grid */}
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Distance</Text>
              <Text style={styles.detailValue}>{incidentDetails.distance}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>ETA</Text>
              <Text style={styles.detailValue}>{incidentDetails.eta}</Text>
            </View>
          </View>
        </Card>

        {/* Quick Help Guide */}
        <View style={styles.guideSection}>
          <Text style={styles.guideTitle}>Quick Help Guide For Volunteers</Text>

          {quickGuide.map((guide) => (
            <Card key={guide.number} style={styles.guideCard} shadow="small">
              <View style={styles.guideHeader}>
                <Text style={styles.guideNumber}>{guide.number}</Text>
                <Text style={styles.guideIcon}>{guide.icon}</Text>
              </View>
              <Text style={styles.guideCardTitle}>{guide.title}</Text>
              <Text style={styles.guideDescription}>{guide.description}</Text>
            </Card>
          ))}
        </View>

        {/* Volunteer Guidelines */}
        <View style={styles.guidelinesSection}>
          <Text style={styles.guidelinesTitle}>Volunteer Guidelines</Text>

          <Card style={styles.guidelinesCard} shadow="small">
            <Text style={styles.guidelineItemTitle}>✓ DO:</Text>
            <Text style={styles.guidelineItem}>
              • Stay calm and respectful
            </Text>
            <Text style={styles.guidelineItem}>
              • De-escalate situations
            </Text>
            <Text style={styles.guidelineItem}>
              • Support vulnerable people
            </Text>
            <Text style={styles.guidelineItem}>
              • Call authorities when required
            </Text>
          </Card>

          <Card style={[styles.guidelinesCard, styles.dontsCard]} shadow="small">
            <Text style={styles.guidelineItemTitle}>✗ DO NOT:</Text>
            <Text style={styles.guidelineItem}>
              • Confront aggressively
            </Text>
            <Text style={styles.guidelineItem}>
              • Use force
            </Text>
            <Text style={styles.guidelineItem}>
              • Accuse or judge
            </Text>
            <Text style={styles.guidelineItem}>
              • Share photos publicly
            </Text>
          </Card>
        </View>

        {/* Safety First */}
        <View style={styles.safetySection}>
          <Card style={styles.safetyCard} shadow="small">
            <Text style={styles.safetyIcon}>🛡️</Text>
            <Text style={styles.safetyTitle}>Your Safety Comes First</Text>
            <Text style={styles.safetyText}>
              If you feel unsafe at any point, step back and call authorities immediately.
              Your wellbeing is paramount.
            </Text>
          </Card>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonSection}>
          <Button
            title={loading ? 'Accepting...' : 'I Can Help'}
            onPress={handleAccept}
            variant="primary"
            fullWidth
            loading={loading}
            style={styles.acceptButton}
          />

          <Button
            title="Not Right Now"
            onPress={() => navigation.goBack()}
            variant="secondary"
            fullWidth
            style={styles.declineButton}
          />
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
  closeButton: {
    position: 'absolute',
    top: Spacing.paddingLg,
    right: Spacing.paddingLg,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: Colors.textDark,
    fontWeight: '700',
  },
  headerCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
    marginTop: Spacing.marginMd,
  },
  incidentIcon: {
    fontSize: 60,
    marginBottom: Spacing.marginMd,
  },
  incidentType: {
    ...Typography.h4,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  incidentLocation: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    marginBottom: Spacing.marginMd,
  },
  detailsGrid: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: Spacing.paddingMd,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  detailLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.marginXs,
  },
  detailValue: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '700',
  },
  divider: {
    width: 1,
    backgroundColor: Colors.borderLight,
  },
  guideSection: {
    marginBottom: Spacing.marginXxl,
  },
  guideTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  guideCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginMd,
  },
  guideHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.marginSm,
  },
  guideNumber: {
    fontSize: 32,
    color: Colors.primary,
    fontWeight: '700',
    marginRight: Spacing.marginMd,
  },
  guideIcon: {
    fontSize: 32,
  },
  guideCardTitle: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  guideDescription: {
    ...Typography.caption,
    color: Colors.textDark,
    lineHeight: 16,
  },
  guidelinesSection: {
    marginBottom: Spacing.marginXxl,
  },
  guidelinesTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  guidelinesCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginMd,
  },
  dontsCard: {
    backgroundColor: '#FFE5E5',
  },
  guidelineItemTitle: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  guidelineItem: {
    ...Typography.caption,
    color: Colors.textDark,
    marginVertical: Spacing.marginXs,
    lineHeight: 16,
  },
  safetySection: {
    marginBottom: Spacing.marginXxl,
  },
  safetyCard: {
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
  },
  safetyIcon: {
    fontSize: 40,
    marginBottom: Spacing.marginMd,
  },
  safetyTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '700',
    marginBottom: Spacing.marginMd,
  },
  safetyText: {
    ...Typography.caption,
    color: Colors.info,
    textAlign: 'center',
  },
  buttonSection: {
    gap: Spacing.gapMd,
  },
  acceptButton: {
    paddingVertical: Spacing.paddingMd,
  },
  declineButton: {
    paddingVertical: Spacing.paddingMd,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.paddingLg,
  },
  successCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingXxl,
  },
  successIcon: {
    fontSize: 60,
    color: Colors.success,
    marginBottom: Spacing.marginMd,
  },
  successTitle: {
    ...Typography.h4,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginMd,
  },
  successMessage: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.marginMd,
  },
  successSubtext: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
});

export default IncidentAcceptScreen;