// src/screens/auth/OnboardingScreen.js
// Complete profile setup

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../../state/hooks/useAuth';
import TextInput from '../../components/common/TextInput';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const OnboardingScreen = ({ navigation, route }) => {
  const { userRole } = route.params;
  const { handleLogin, loading } = useAuth();

  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(form.age) || form.age < 18) {
      newErrors.age = 'You must be at least 18 years old';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleComplete = async () => {
    if (!validateForm()) {
      return;
    }

    // Call login with form data
    const success = await handleLogin('9876543210', '1234', userRole);

    if (success) {
      // Navigation happens automatically
      console.log('Profile setup complete!');
    }
  };

  const getStepTitle = () => {
    if (userRole === 'VOLUNTEER') {
      return 'Become a Volunteer';
    }
    return 'Complete Your Profile';
  };

  const getStepSubtitle = () => {
    if (userRole === 'VOLUNTEER') {
      return 'Help us verify your identity to keep the community safe';
    }
    return 'Help us know you better';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Setup Complete"
        subtitle="Step 1 of 1"
        onBackPress={() => navigation.goBack()}
        backButton
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Illustration */}
        <Card style={styles.illustrationCard} shadow="medium">
          <Text style={styles.illustrationEmoji}>👤</Text>
        </Card>

        {/* Main Card */}
        <Card style={styles.mainCard} shadow="large">
          <Text style={styles.title}>{getStepTitle()}</Text>
          <Text style={styles.subtitle}>{getStepSubtitle()}</Text>

          {/* Name Input */}
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
            error={errors.name}
            style={styles.input}
          />

          {/* Email Input */}
          <TextInput
            label="Email Address"
            placeholder="your.email@example.com"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            keyboardType="email-address"
            error={errors.email}
            style={styles.input}
          />

          {/* Age Input */}
          <TextInput
            label="Age"
            placeholder="Enter your age"
            value={form.age}
            onChangeText={(text) => setForm({ ...form, age: text })}
            keyboardType="number-pad"
            error={errors.age}
            maxLength={2}
            style={styles.input}
          />

          {/* Volunteer specific fields */}
          {userRole === 'VOLUNTEER' && (
            <>
              {/* Verification info */}
              <Card style={styles.verificationCard} shadow="small">
                <Text style={styles.verificationTitle}>Verification Required</Text>
                <Text style={styles.verificationText}>
                  ✓ Valid ID (Aadhar, PAN, Passport)
                </Text>
                <Text style={styles.verificationText}>
                  ✓ Police clearance check
                </Text>
                <Text style={styles.verificationText}>
                  ✓ Background verification
                </Text>
              </Card>
            </>
          )}

          {/* Guidelines */}
          <Card style={styles.guidelinesCard} shadow="small">
            <Text style={styles.guidelinesTitle}>
              Community Guidelines
            </Text>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity style={styles.checkbox}>
                <Text style={styles.checkboxText}>☑</Text>
              </TouchableOpacity>
              <Text style={styles.guidelinesText}>
                I agree to the Terms of Service
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity style={styles.checkbox}>
                <Text style={styles.checkboxText}>☑</Text>
              </TouchableOpacity>
              <Text style={styles.guidelinesText}>
                I commit to following community guidelines
              </Text>
            </View>
          </Card>

          {/* Complete Button */}
          <Button
            title={loading ? 'Setting up...' : 'Complete Setup'}
            onPress={handleComplete}
            variant="primary"
            fullWidth
            loading={loading}
            style={styles.completeButton}
          />
        </Card>

        {/* Security Note */}
        <View style={styles.securityNote}>
          <Text style={styles.securityNoteText}>
            🔒 Your information is encrypted and secure. We never share your data
            with third parties.
          </Text>
        </View>
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
  illustrationCard: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
    backgroundColor: Colors.cardBg,
  },
  illustrationEmoji: {
    fontSize: 50,
  },
  mainCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
  },
  title: {
    ...Typography.h4,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  subtitle: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    marginBottom: Spacing.marginXl,
  },
  input: {
    marginVertical: Spacing.marginSm,
  },
  verificationCard: {
    backgroundColor: '#FFF8E6',
    marginVertical: Spacing.marginLg,
  },
  verificationTitle: {
    ...Typography.label,
    color: Colors.warning,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  verificationText: {
    ...Typography.caption,
    color: Colors.textDark,
    marginVertical: Spacing.marginSm,
  },
  guidelinesCard: {
    backgroundColor: '#F0F8FF',
    marginBottom: Spacing.marginLg,
  },
  guidelinesTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: Spacing.marginSm,
  },
  checkbox: {
    marginRight: Spacing.marginMd,
    paddingTop: Spacing.paddingSm,
  },
  checkboxText: {
    fontSize: 16,
    color: Colors.success,
  },
  guidelinesText: {
    flex: 1,
    ...Typography.caption,
    color: Colors.textDark,
  },
  completeButton: {
    marginBottom: Spacing.marginLg,
    paddingVertical: Spacing.paddingMd,
  },
  securityNote: {
    backgroundColor: '#F0F8FF',
    borderRadius: Spacing.radiusLarge,
    padding: Spacing.paddingMd,
    marginBottom: Spacing.marginXl,
  },
  securityNoteText: {
    ...Typography.caption,
    color: Colors.info,
    textAlign: 'center',
  },
});

export default OnboardingScreen;