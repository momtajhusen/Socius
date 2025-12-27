// src/screens/user/HelpRequestScreen.js
// Create help or concern request

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const HelpRequestScreen = ({ navigation, route }) => {
  const { type } = route.params; // 'HELP' or 'CONCERN'
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = {
    HELP: [
      { id: 'medical', label: 'Medical Emergency', icon: '🚑', color: Colors.emergency },
      { id: 'safety', label: 'Safety Threat', icon: '⚠️', color: Colors.warning },
      { id: 'accident', label: 'Accident', icon: '🚗', color: Colors.warning },
      { id: 'other', label: 'Other Emergency', icon: '🆘', color: Colors.emergency },
    ],
    CONCERN: [
      { id: 'suspicious', label: 'Suspicious Activity', icon: '👁️', color: Colors.info },
      { id: 'noise', label: 'Noise Complaint', icon: '🔊', color: Colors.info },
      { id: 'lost', label: 'Lost/Missing Person', icon: '👤', color: Colors.warning },
      { id: 'animal', label: 'Animal Issue', icon: '🐕', color: Colors.info },
      { id: 'other', label: 'Other Concern', icon: '⚠️', color: Colors.info },
    ],
  };

  const isHelp = type === 'HELP';
  const categoryList = categories[type] || [];
  const headerColor = isHelp ? Colors.emergency : Colors.info;
  const headerIcon = isHelp ? '🆘' : '⚠️';
  const headerTitle = isHelp ? 'Request Help' : 'Report Concern';

  const handleSubmit = () => {
    if (!category) {
      alert('Please select a category');
      return;
    }

    if (isHelp && !description.trim()) {
      alert('Please describe your situation');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Auto-navigate to incident detail after 2 seconds
      setTimeout(() => {
        navigation.navigate('IncidentDetail', {
          incidentId: 'INC-' + Date.now(),
          type: type,
          category: category,
        });
      }, 2000);
    }, 1500);
  };

  if (submitted) {
    return (
      <SafeAreaView style={styles.container}>
        <Modal visible={true} transparent={true} animationType="fade">
          <View style={styles.successModal}>
            <Card style={styles.successCard} shadow="xl">
              <Text style={styles.successIcon}>✓</Text>
              <Text style={styles.successTitle}>
                {isHelp ? 'Help Request Sent!' : 'Concern Reported!'}
              </Text>
              <Text style={styles.successMessage}>
                {isHelp
                  ? '3 volunteers are coming to you'
                  : 'Thank you for looking out for your community'}
              </Text>

              <View style={styles.successDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Incident ID:</Text>
                  <Text style={styles.detailValue}>INC-{Date.now()}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Status:</Text>
                  <Text style={[styles.detailValue, { color: Colors.activeGreen }]}>
                    Active
                  </Text>
                </View>
              </View>

              <Text style={styles.successSubtext}>
                Redirecting to live tracking...
              </Text>
            </Card>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={[styles.header, { backgroundColor: headerColor }]}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.headerIcon}>{headerIcon}</Text>
          <Text style={styles.headerTitle}>{headerTitle}</Text>

          {isHelp && (
            <Text style={styles.headerSubtitle}>
              Describe what's happening
            </Text>
          )}
        </View>

        {/* Category Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {isHelp ? 'What kind of help do you need?' : 'What are you reporting?'}
          </Text>

          <View style={styles.categoriesGrid}>
            {categoryList.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={styles.categoryCardWrapper}
                onPress={() => setCategory(cat.id)}
              >
                <Card
                  style={[
                    styles.categoryCard,
                    category === cat.id && styles.categoryCardSelected,
                  ]}
                  shadow={category === cat.id ? 'large' : 'medium'}
                >
                  <Text style={styles.categoryIcon}>{cat.icon}</Text>
                  <Text
                    style={[
                      styles.categoryLabel,
                      category === cat.id && styles.categoryLabelSelected,
                    ]}
                  >
                    {cat.label}
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Description Input */}
        {isHelp && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Details</Text>
            <TextInput
              style={styles.descriptionInput}
              placeholder="Describe your situation in detail..."
              placeholderTextColor={Colors.textPlaceholder}
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              maxLength={500}
              textAlignVertical="top"
            />
            <Text style={styles.charCount}>
              {description.length}/500
            </Text>
          </View>
        )}

        {/* Location Card */}
        <View style={styles.section}>
          <Card style={styles.locationCard} shadow="medium">
            <Text style={styles.locationIcon}>📍</Text>
            <View style={styles.locationContent}>
              <Text style={styles.locationTitle}>Your Location</Text>
              <Text style={styles.locationAddress}>
                123 Main Street, Downtown
              </Text>
              <Text style={styles.locationAccuracy}>
                Accurate location being shared with responders
              </Text>
            </View>
          </Card>
        </View>

        {/* Info Box */}
        <View style={styles.section}>
          <Card style={styles.infoBox} shadow="small">
            <Text style={styles.infoBold}>
              {isHelp
                ? '✓ Nearby volunteers will be notified immediately'
                : '✓ Your report will be reviewed by community moderators'}
            </Text>
            <Text style={styles.infoText}>
              {isHelp
                ? 'Expected arrival time: 3-10 minutes'
                : 'Response time: 24 hours'}
            </Text>
          </Card>
        </View>

        {/* Buttons */}
        <View style={styles.buttonSection}>
          <Button
            title={loading ? 'Sending...' : 'Send Request'}
            onPress={handleSubmit}
            variant="primary"
            fullWidth
            loading={loading}
            style={styles.submitButton}
          />

          <Button
            title="Cancel"
            onPress={() => navigation.goBack()}
            variant="secondary"
            fullWidth
            style={styles.cancelButton}
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
  },
  header: {
    paddingTop: Spacing.paddingXl,
    paddingBottom: Spacing.paddingXxl,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: Spacing.paddingLg,
    right: Spacing.paddingLg,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700',
  },
  headerIcon: {
    fontSize: 60,
    marginBottom: Spacing.marginMd,
  },
  headerTitle: {
    ...Typography.h3,
    color: Colors.white,
    fontWeight: '700',
  },
  headerSubtitle: {
    ...Typography.bodySmall,
    color: Colors.white,
    marginTop: Spacing.marginSm,
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingLg,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.gapMd,
  },
  categoryCardWrapper: {
    width: '48%',
  },
  categoryCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingLg,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryCardSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
  },
  categoryIcon: {
    fontSize: 40,
    marginBottom: Spacing.marginMd,
  },
  categoryLabel: {
    ...Typography.caption,
    color: Colors.textDark,
    textAlign: 'center',
    fontWeight: '500',
  },
  categoryLabelSelected: {
    color: Colors.primary,
    fontWeight: '600',
  },
  descriptionInput: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingMd,
    fontSize: 14,
    color: Colors.textDark,
    minHeight: 100,
  },
  charCount: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'right',
    marginTop: Spacing.marginSm,
  },
  locationCard: {
    backgroundColor: Colors.cardBg,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationIcon: {
    fontSize: 32,
    marginRight: Spacing.marginMd,
    marginTop: Spacing.marginSm,
  },
  locationContent: {
    flex: 1,
  },
  locationTitle: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
  },
  locationAddress: {
    ...Typography.bodySmall,
    color: Colors.textDark,
    marginVertical: Spacing.marginSm,
  },
  locationAccuracy: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  infoBox: {
    backgroundColor: '#F0F8FF',
  },
  infoBold: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.info,
  },
  buttonSection: {
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingLg,
    gap: Spacing.gapMd,
  },
  submitButton: {
    paddingVertical: Spacing.paddingMd,
  },
  cancelButton: {
    paddingVertical: Spacing.paddingMd,
  },
  successModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    marginBottom: Spacing.marginSm,
  },
  successMessage: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.marginLg,
  },
  successDetails: {
    width: '100%',
    paddingHorizontal: Spacing.paddingLg,
    marginBottom: Spacing.marginLg,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.paddingSm,
  },
  detailLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  detailValue: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  successSubtext: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
});

export default HelpRequestScreen;