// src/screens/user/ReportAbuseScreen.js
// Report abuse or inappropriate behavior

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const ReportAbuseScreen = ({ navigation }) => {
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    {
      id: 'false_request',
      icon: '❌',
      title: 'False Request',
      description: 'Report false emergency requests',
    },
    {
      id: 'inappropriate_volunteer',
      icon: '👤',
      title: 'Inappropriate Volunteer',
      description: 'Volunteer behavior concern',
    },
    {
      id: 'harassment',
      icon: '⚠️',
      title: 'Harassment',
      description: 'Being harassed or threatened',
    },
    {
      id: 'abuse',
      icon: '🚫',
      title: 'Verbal Abuse',
      description: 'Abusive language or behavior',
    },
    {
      id: 'scam',
      icon: '🚨',
      title: 'Scam/Fraud',
      description: 'Suspicious fraudulent activity',
    },
    {
      id: 'other',
      icon: '❓',
      title: 'Other',
      description: 'Other inappropriate behavior',
    },
  ];

  const handleSubmit = () => {
    if (!category) {
      alert('Please select a category');
      return;
    }

    if (!description.trim()) {
      alert('Please describe the issue');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }, 1500);
  };

  if (submitted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.successContainer}>
          <Card style={styles.successCard} shadow="large">
            <Text style={styles.successIcon}>✓</Text>
            <Text style={styles.successTitle}>Report Submitted</Text>
            <Text style={styles.successMessage}>
              Thank you for helping us keep the community safe
            </Text>
            <Text style={styles.successSubtext}>
              Our team will review your report within 24 hours
            </Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Report a Concern"
        subtitle="Help us keep community safe"
        onBackPress={() => navigation.goBack()}
        backButton
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Warning Banner */}
        <View style={styles.warningBanner}>
          <Text style={styles.warningIcon}>⚠️</Text>
          <Text style={styles.warningText}>
            False or malicious reports will result in account suspension
          </Text>
        </View>

        {/* Category Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What are you reporting?</Text>

          <View style={styles.categoriesGrid}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                onPress={() => setCategory(cat.id)}
                style={styles.categoryWrapper}
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
                      styles.categoryTitle,
                      category === cat.id && styles.categoryTitleSelected,
                    ]}
                  >
                    {cat.title}
                  </Text>
                  <Text style={styles.categoryDescription}>
                    {cat.description}
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Describe What Happened</Text>

          <TextInput
            style={styles.descriptionInput}
            placeholder="Provide detailed information about the incident..."
            placeholderTextColor={Colors.textPlaceholder}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={5}
            maxLength={1000}
            textAlignVertical="top"
          />

          <Text style={styles.charCount}>
            {description.length}/1000
          </Text>
        </View>

        {/* Incident Date */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>When Did This Happen?</Text>

          <TextInput
            style={styles.dateInput}
            placeholder="MM/DD/YYYY"
            placeholderTextColor={Colors.textPlaceholder}
            value={incidentDate}
            onChangeText={setIncidentDate}
            maxLength={10}
          />
        </View>

        {/* Evidence Info */}
        <View style={styles.section}>
          <Card style={styles.infoBox} shadow="small">
            <Text style={styles.infoBold}>📸 Evidence Helpful</Text>
            <Text style={styles.infoText}>
              Screenshots, timestamps, or witness names help us investigate better
            </Text>
          </Card>
        </View>

        {/* Privacy Assurance */}
        <View style={styles.section}>
          <Card style={styles.privacyBox} shadow="small">
            <Text style={styles.privacyIcon}>🔒</Text>
            <Text style={styles.privacyTitle}>Your Identity is Protected</Text>
            <Text style={styles.privacyText}>
              Your report is confidential. The reported person will not know who
              reported them unless required by law
            </Text>
          </Card>
        </View>

        {/* Submit Button */}
        <View style={styles.buttonSection}>
          <Button
            title={loading ? 'Submitting...' : 'Submit Report'}
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

        {/* Help Footer */}
        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Need Help?</Text>
          <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.helpText}>Contact Support Team</Text>
          </TouchableOpacity>
          <Text style={styles.helpSubtext}>
            Response within 24 hours
          </Text>
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
  warningBanner: {
    backgroundColor: '#FFE5E5',
    borderRadius: Spacing.radiusLarge,
    padding: Spacing.paddingMd,
    marginBottom: Spacing.marginXxl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningIcon: {
    fontSize: 20,
    marginRight: Spacing.marginMd,
  },
  warningText: {
    ...Typography.caption,
    color: Colors.emergency,
    flex: 1,
    fontWeight: '500',
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
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.gapMd,
  },
  categoryWrapper: {
    width: '48%',
  },
  categoryCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryCardSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  categoryTitle: {
    ...Typography.label,
    color: Colors.textDark,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: Spacing.marginXs,
  },
  categoryTitleSelected: {
    color: Colors.primary,
  },
  categoryDescription: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'center',
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
    minHeight: 120,
  },
  charCount: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'right',
    marginTop: Spacing.marginSm,
  },
  dateInput: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingMd,
    fontSize: 14,
    color: Colors.textDark,
    minHeight: 48,
  },
  infoBox: {
    backgroundColor: '#FFF8E6',
  },
  infoBold: {
    ...Typography.label,
    color: Colors.warning,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.textDark,
  },
  privacyBox: {
    backgroundColor: '#F0F8FF',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  privacyIcon: {
    fontSize: 24,
    marginRight: Spacing.marginMd,
    marginTop: Spacing.marginXs,
  },
  privacyTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  privacyText: {
    ...Typography.caption,
    color: Colors.info,
    flex: 1,
  },
  buttonSection: {
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginXxl,
  },
  submitButton: {
    paddingVertical: Spacing.paddingMd,
  },
  cancelButton: {
    paddingVertical: Spacing.paddingMd,
  },
  helpSection: {
    alignItems: 'center',
  },
  helpTitle: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  helpLink: {
    paddingVertical: Spacing.paddingSm,
  },
  helpText: {
    ...Typography.bodySmall,
    color: Colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  helpSubtext: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginSm,
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

export default ReportAbuseScreen;