// src/screens/auth/RoleSelectionScreen.js
// Select user role - User or Volunteer

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
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const RoleSelectionScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'USER',
      title: 'I Need Support',
      icon: '🆘',
      description: 'Get help during emergencies and stay safe',
      features: [
        '✓ Emergency SOS button',
        '✓ Track nearby volunteers',
        '✓ Request support anytime',
        '✓ Community safety info',
      ],
    },
    {
      id: 'VOLUNTEER',
      title: 'I Want to Help',
      icon: '🤝',
      description: 'Be a lifesaver in your community',
      features: [
        '✓ Respond to help requests',
        '✓ Build community trust',
        '✓ Flexible volunteering hours',
        '✓ Get recognized as a hero',
      ],
    },
  ];

  const handleContinue = () => {
    if (!selectedRole) {
      alert('Please select a role to continue');
      return;
    }

    // Navigate to onboarding with selected role
    navigation.navigate('Onboarding', { userRole: selectedRole });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Choose Your Role"
        onBackPress={() => navigation.goBack()}
        backButton
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Info Card */}
        <Card style={styles.infoCard} shadow="medium">
          <Text style={styles.infoTitle}>Good people, Nearby, Ready to help.</Text>
          <Text style={styles.infoSubtitle}>
            Connect with your community. Stay safe together.
          </Text>
        </Card>

        {/* Role Cards */}
        <View style={styles.rolesContainer}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              onPress={() => setSelectedRole(role.id)}
              style={styles.roleCardWrapper}
            >
              <Card
                style={[
                  styles.roleCard,
                  selectedRole === role.id && styles.roleCardSelected,
                ]}
                shadow={selectedRole === role.id ? 'large' : 'medium'}
              >
                {/* Icon */}
                <Text style={styles.roleIcon}>{role.icon}</Text>

                {/* Title */}
                <Text style={styles.roleTitle}>{role.title}</Text>

                {/* Description */}
                <Text style={styles.roleDescription}>{role.description}</Text>

                {/* Features */}
                <View style={styles.featuresContainer}>
                  {role.features.map((feature, index) => (
                    <Text key={index} style={styles.feature}>
                      {feature}
                    </Text>
                  ))}
                </View>

                {/* Selection Indicator */}
                {selectedRole === role.id && (
                  <View style={styles.selectedBadge}>
                    <Text style={styles.selectedBadgeText}>✓ Selected</Text>
                  </View>
                )}
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Text */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTextBold}>
            You can change your role anytime in settings
          </Text>
          <Text style={styles.infoTextMuted}>
            Whether you need help or want to help, you're in the right place
          </Text>
        </View>

        {/* Continue Button */}
        <Button
          title="Continue"
          onPress={handleContinue}
          variant="primary"
          fullWidth
          style={styles.continueButton}
        />

        {/* Skip for now */}
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
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
  infoCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
  },
  infoTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  infoSubtitle: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
  },
  rolesContainer: {
    gap: Spacing.gapLg,
    marginBottom: Spacing.marginXxl,
  },
  roleCardWrapper: {
    flex: 1,
  },
  roleCard: {
    backgroundColor: Colors.cardBg,
    borderWidth: 2,
    borderColor: 'transparent',
    paddingVertical: Spacing.paddingXl,
    paddingHorizontal: Spacing.paddingLg,
  },
  roleCardSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
  },
  roleIcon: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: Spacing.marginLg,
  },
  roleTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: Spacing.marginSm,
  },
  roleDescription: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.marginLg,
  },
  featuresContainer: {
    marginBottom: Spacing.marginLg,
  },
  feature: {
    ...Typography.caption,
    color: Colors.textDark,
    marginVertical: Spacing.marginSm,
  },
  selectedBadge: {
    backgroundColor: Colors.success,
    borderRadius: Spacing.radiusXl,
    paddingVertical: Spacing.paddingSm,
    alignItems: 'center',
  },
  selectedBadgeText: {
    ...Typography.label,
    color: Colors.white,
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: '#F0F8FF',
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingLg,
    marginBottom: Spacing.marginXxl,
  },
  infoTextBold: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  infoTextMuted: {
    ...Typography.caption,
    color: Colors.info,
  },
  continueButton: {
    marginBottom: Spacing.marginLg,
    paddingVertical: Spacing.paddingMd,
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  skipText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    fontWeight: '500',
  },
});

export default RoleSelectionScreen;