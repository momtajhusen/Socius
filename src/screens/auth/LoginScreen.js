// src/screens/auth/LoginScreen.js
// Login with phone number

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
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const { loading, error, clearError } = useAuth();

  const validatePhone = (phoneNumber) => {
    // 10 digit phone validation
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleContinue = () => {
    setPhoneError('');

    if (!phone) {
      setPhoneError('Phone number is required');
      return;
    }

    if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }

    // Navigate to OTP screen with phone number
    navigation.navigate('OTPVerification', { phoneNumber: phone });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome Back</Text>
          <Text style={styles.headerSubtitle}>
            Stay safe with our community
          </Text>
        </View>

        {/* Illustration Card */}
        <Card style={styles.illustrationCard} shadow="medium">
          <Text style={styles.illustrationEmoji}>🔐</Text>
        </Card>

        {/* Form Card */}
        <Card style={styles.formCard} shadow="large">
          {/* Title */}
          <Text style={styles.formTitle}>Login to Your Account</Text>
          <Text style={styles.formSubtitle}>
            We'll send you an OTP for verification
          </Text>

          {/* Error message */}
          {error && (
            <View style={styles.errorAlert}>
              <Text style={styles.errorText}>⚠️ {error}</Text>
            </View>
          )}

          {/* Phone Input */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.phoneInputWrapper}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                placeholder="9876543210"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                maxLength={10}
                error={phoneError}
                style={styles.phoneInput}
              />
            </View>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              ✓ We'll use your phone number to verify your identity and keep you
              safe
            </Text>
          </View>

          {/* Continue Button */}
          <Button
            title={loading ? 'Processing...' : 'Continue'}
            onPress={handleContinue}
            variant="primary"
            fullWidth
            loading={loading}
            style={styles.continueButton}
          />

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login */}
          <View style={styles.socialSection}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialEmoji}>g</Text>
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialEmoji}>f</Text>
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Footer text */}
          <Text style={styles.footerText}>
            Your data is encrypted and secure with us
          </Text>
        </Card>

        {/* Terms */}
        <View style={styles.termsSection}>
          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
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
  header: {
    marginBottom: Spacing.marginXxl,
    alignItems: 'center',
  },
  headerTitle: {
    ...Typography.h2,
    color: Colors.primary,
    fontWeight: '700',
  },
  headerSubtitle: {
    ...Typography.body,
    color: Colors.textMuted,
    marginTop: Spacing.marginSm,
  },
  illustrationCard: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
    backgroundColor: Colors.cardBg,
  },
  illustrationEmoji: {
    fontSize: 60,
  },
  formCard: {
    marginBottom: Spacing.marginXxl,
    backgroundColor: Colors.cardBg,
  },
  formTitle: {
    ...Typography.h4,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  formSubtitle: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    marginBottom: Spacing.marginLg,
  },
  errorAlert: {
    backgroundColor: '#FFE5E5',
    borderRadius: Spacing.radiusLarge,
    padding: Spacing.paddingMd,
    marginBottom: Spacing.marginLg,
    borderLeftWidth: 4,
    borderLeftColor: Colors.emergency,
  },
  errorText: {
    ...Typography.bodySmall,
    color: Colors.emergency,
    fontWeight: '600',
  },
  inputSection: {
    marginBottom: Spacing.marginLg,
  },
  inputLabel: {
    ...Typography.label,
    color: Colors.textDark,
    marginBottom: Spacing.marginSm,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    backgroundColor: Colors.white,
    minHeight: 48,
  },
  countryCode: {
    ...Typography.body,
    color: Colors.textDark,
    fontWeight: '600',
    marginRight: Spacing.marginSm,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: Spacing.paddingSm,
  },
  infoBox: {
    backgroundColor: '#F0F8FF',
    borderRadius: Spacing.radiusLarge,
    padding: Spacing.paddingMd,
    marginBottom: Spacing.marginLg,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.info,
    lineHeight: 18,
  },
  continueButton: {
    marginBottom: Spacing.marginLg,
    paddingVertical: Spacing.paddingMd,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.marginLg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderLight,
  },
  dividerText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginHorizontal: Spacing.marginMd,
  },
  socialSection: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginLg,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Spacing.radiusLarge,
    paddingVertical: Spacing.paddingMd,
    backgroundColor: Colors.white,
  },
  socialEmoji: {
    fontSize: 16,
    marginRight: Spacing.marginSm,
  },
  socialText: {
    ...Typography.body,
    color: Colors.textDark,
    fontWeight: '500',
  },
  footerText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  termsSection: {
    paddingHorizontal: Spacing.paddingLg,
    paddingBottom: Spacing.paddingLg,
  },
  termsText: {
    ...Typography.caption,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 16,
  },
  termsLink: {
    color: Colors.primary,
    fontWeight: '600',
  },
});

export default LoginScreen;