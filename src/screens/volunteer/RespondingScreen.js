// src/screens/volunteer/RespondingScreen.js
// Real-time navigation to incident

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
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const { width } = Dimensions.get('window');

const RespondingScreen = ({ navigation, route }) => {
  const { incidentId } = route.params;
  const [eta, setEta] = useState(5);
  const [arrived, setArrived] = useState(false);
  const [resolving, setResolving] = useState(false);

  // Simulate ETA countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => {
        if (prev <= 0) {
          setArrived(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const incidentDetails = {
    id: incidentId,
    type: 'Medical Emergency',
    icon: '🚑',
    location: '123 Main St, Downtown',
    address: 'Apartment 5B, Near Central Park',
    person: 'Sarah Johnson',
    description: 'Person feeling unwell',
    distance: '0.4 mi',
  };

  const resolutionOptions = [
    { id: 'resolved', label: '✓ Situation Resolved', description: 'Help was provided' },
    { id: 'escalated', label: '🚨 Escalated to Authorities', description: 'Authorities called' },
    { id: 'transferred', label: '🔄 Transferred', description: 'Another volunteer took over' },
    { id: 'notfound', label: '❓ Person Not Found', description: 'Could not locate person' },
  ];

  const handleResolve = (option) => {
    setResolving(true);
    setTimeout(() => {
      setResolving(false);
      navigation.navigate('Assignments');
    }, 1500);
  };

  if (arrived && !resolving) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.arrivedHeader}>
            <Text style={styles.arrivedIcon}>✓</Text>
            <Text style={styles.arrivedTitle}>You've Arrived!</Text>
          </View>

          {/* Person Details */}
          <Card style={styles.personCard} shadow="medium">
            <Text style={styles.personIcon}>👤</Text>
            <Text style={styles.personName}>{incidentDetails.person}</Text>
            <Text style={styles.personAddress}>{incidentDetails.address}</Text>
          </Card>

          {/* Checklist Before Resolution */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Before You Finish</Text>

            <Card style={styles.checklistCard} shadow="small">
              <View style={styles.checklistItem}>
                <Text style={styles.checkbox}>☐</Text>
                <Text style={styles.checklistText}>
                  Ensure person is safe and stable
                </Text>
              </View>
              <View style={styles.checklistItem}>
                <Text style={styles.checkbox}>☐</Text>
                <Text style={styles.checklistText}>
                  Provide any necessary first aid
                </Text>
              </View>
              <View style={styles.checklistItem}>
                <Text style={styles.checkbox}>☐</Text>
                <Text style={styles.checklistText}>
                  Call authorities if needed
                </Text>
              </View>
              <View style={styles.checklistItem}>
                <Text style={styles.checkbox}>☐</Text>
                <Text style={styles.checklistText}>
                  Get their contact info for follow-up
                </Text>
              </View>
            </Card>
          </View>

          {/* Resolution Options */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How to Proceed?</Text>

            {resolutionOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleResolve(option.id)}
                style={styles.optionWrapper}
              >
                <Card style={styles.optionCard} shadow="small">
                  <Text style={styles.optionLabel}>{option.label}</Text>
                  <Text style={styles.optionDescription}>
                    {option.description}
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </View>

          {/* Support Card */}
          <Card style={styles.supportCard} shadow="small">
            <Text style={styles.supportIcon}>💬</Text>
            <Text style={styles.supportTitle}>Need Help?</Text>
            <TouchableOpacity>
              <Text style={styles.supportLink}>Contact Incident Coordinator</Text>
            </TouchableOpacity>
          </Card>

          <View style={{ height: Spacing.marginXxl }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ETA Counter */}
        <Card style={styles.etaCard} shadow="large">
          <Text style={styles.etaLabel}>Estimated Time to Arrival</Text>
          <Text style={styles.etaValue}>{eta}</Text>
          <Text style={styles.etaUnit}>minutes</Text>
        </Card>

        {/* Map Placeholder */}
        <Card style={styles.mapCard} shadow="medium">
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>🗺️</Text>
            <Text style={styles.mapText}>Live Navigation</Text>
            <Text style={styles.mapSubtext}>
              You are on your way to the incident
            </Text>
            <Button
              title="Open Maps"
              onPress={() => alert('Open Maps app')}
              variant="primary"
              fullWidth
              style={styles.mapsButton}
            />
          </View>
        </Card>

        {/* Incident Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Incident Details</Text>

          <Card style={styles.detailCard} shadow="small">
            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>🏷️</Text>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Incident ID</Text>
                <Text style={styles.detailValue}>{incidentDetails.id}</Text>
              </View>
            </View>
          </Card>

          <Card style={styles.detailCard} shadow="small">
            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>📍</Text>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Location</Text>
                <Text style={styles.detailValue}>{incidentDetails.location}</Text>
              </View>
            </View>
          </Card>

          <Card style={styles.detailCard} shadow="small">
            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>🚶</Text>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Distance</Text>
                <Text style={styles.detailValue}>{incidentDetails.distance}</Text>
              </View>
            </View>
          </Card>

          <Card style={styles.detailCard} shadow="small">
            <View style={styles.detailRow}>
              <Text style={styles.detailIcon}>ℹ️</Text>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Description</Text>
                <Text style={styles.detailValue}>{incidentDetails.description}</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* In Case of Emergency */}
        <Card style={styles.emergencyCard} shadow="small">
          <Text style={styles.emergencyIcon}>🚨</Text>
          <Text style={styles.emergencyTitle}>In Case of Emergency</Text>
          <Button
            title="Call Authorities"
            onPress={() => alert('Call 100 - Police')}
            variant="emergency"
            fullWidth
            style={styles.emergencyButton}
          />
        </Card>

        {/* Cancel Response */}
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>
            ✕ Mark Unavailable
          </Text>
        </TouchableOpacity>

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
  etaCard: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
    paddingVertical: Spacing.paddingXxl,
  },
  etaLabel: {
    ...Typography.bodySmall,
    color: Colors.white,
    opacity: 0.9,
  },
  etaValue: {
    fontSize: 60,
    fontWeight: '700',
    color: Colors.white,
    marginVertical: Spacing.marginMd,
  },
  etaUnit: {
    ...Typography.body,
    color: Colors.white,
    opacity: 0.9,
  },
  mapCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
    minHeight: 200,
  },
  mapPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mapIcon: {
    fontSize: 48,
    marginBottom: Spacing.marginMd,
  },
  mapText: {
    ...Typography.h5,
    color: Colors.textDark,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  mapSubtext: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginBottom: Spacing.marginMd,
  },
  mapsButton: {
    paddingVertical: Spacing.paddingMd,
    width: '80%',
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
  detailCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginMd,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailIcon: {
    fontSize: 24,
    marginRight: Spacing.marginMd,
    marginTop: Spacing.marginXs,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  detailValue: {
    ...Typography.bodySmall,
    color: Colors.textDark,
    fontWeight: '600',
    marginTop: Spacing.marginXs,
  },
  emergencyCard: {
    backgroundColor: '#FFE5E5',
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
  },
  emergencyIcon: {
    fontSize: 40,
    marginBottom: Spacing.marginMd,
  },
  emergencyTitle: {
    ...Typography.label,
    color: Colors.emergency,
    fontWeight: '700',
    marginBottom: Spacing.marginMd,
  },
  emergencyButton: {
    paddingVertical: Spacing.paddingMd,
    width: '100%',
  },
  cancelButton: {
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  cancelButtonText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    fontWeight: '500',
  },
  arrivedHeader: {
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
  },
  arrivedIcon: {
    fontSize: 60,
    color: Colors.success,
    marginBottom: Spacing.marginMd,
  },
  arrivedTitle: {
    ...Typography.h3,
    color: Colors.primary,
    fontWeight: '700',
  },
  personCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
  },
  personIcon: {
    fontSize: 48,
    marginBottom: Spacing.marginMd,
  },
  personName: {
    ...Typography.h5,
    color: Colors.textDark,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  personAddress: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
  },
  checklistCard: {
    backgroundColor: Colors.cardBg,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: Spacing.marginMd,
  },
  checkbox: {
    fontSize: 20,
    marginRight: Spacing.marginMd,
  },
  checklistText: {
    flex: 1,
    ...Typography.bodySmall,
    color: Colors.textDark,
  },
  optionWrapper: {
    marginBottom: Spacing.marginMd,
  },
  optionCard: {
    backgroundColor: Colors.cardBg,
  },
  optionLabel: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  optionDescription: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  supportCard: {
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
  },
  supportIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginMd,
  },
  supportTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  supportLink: {
    ...Typography.bodySmall,
    color: Colors.info,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default RespondingScreen;