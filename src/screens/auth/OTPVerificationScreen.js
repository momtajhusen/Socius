// src/screens/auth/OTPVerificationScreen.js
// OTP verification screen

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const OTPVerificationScreen = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Timer for resend OTP
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerifyOTP = () => {
    if (!otp || otp.length < 4) {
      alert('Please enter valid OTP');
      return;
    }

    setLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      // Navigate to role selection
      navigation.navigate('RoleSelection');
    }, 1500);
  };

  const handleResendOTP = () => {
    setTimer(30);
    setCanResend(false);
    setOtp('');
    // TODO: Call resend OTP API
    alert('OTP sent again to ' + phoneNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Verify OTP"
        onBackPress={() => navigation.goBack()}
        backButton
      />

      <View style={styles.content}>
        {/* Illustration */}
        <Card style={styles.illustrationCard} shadow="medium">
          <Text style={styles.illustrationEmoji}>📱</Text>
        </Card>

        {/* Main Card */}
        <Card style={styles.mainCard} shadow="large">
          {/* Title */}
          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>
            We sent a code to {phoneNumber}
          </Text>

          {/* OTP Input */}
          <View style={styles.otpSection}>
            <Text style={styles.otpLabel}>Verification Code</Text>
            <TextInput
              style={styles.otpInput}
              placeholder="Enter 4-digit code"
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad"
              maxLength={4}
              placeholderTextColor={Colors.textPlaceholder}
            />
            <Text style={styles.otpHint}>
              We've sent a 4-digit code to your phone
            </Text>
          </View>

          {/* Verify Button */}
          <Button
            title={loading ? 'Verifying...' : 'Verify & Continue'}
            onPress={handleVerifyOTP}
            variant="primary"
            fullWidth
            loading={loading}
            style={styles.verifyButton}
          />

          {/* Resend Section */}
          <View style={styles.resendSection}>
            {!canResend ? (
              <View style={styles.timerBox}>
                <Text style={styles.timerText}>
                  Resend code in {timer}s
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.resendButton}
                onPress={handleResendOTP}
              >
                <Text style={styles.resendText}>
                  Didn't receive the code?{' '}
                  <Text style={styles.resendLink}>Resend</Text>
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Security Info */}
          <View style={styles.securityBox}>
            <Text style={styles.securityIcon}>🔒</Text>
            <Text style={styles.securityText}>
              Your code is secure and will expire in 10 minutes
            </Text>
          </View>
        </Card>

        {/* Help */}
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Need help? Contact Support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  content: {
    flex: 1,
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
  otpSection: {
    marginBottom: Spacing.marginXl,
  },
  otpLabel: {
    ...Typography.label,
    color: Colors.textDark,
    marginBottom: Spacing.marginSm,
  },
  otpInput: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: Spacing.radiusLarge,
    paddingVertical: Spacing.paddingMd,
    paddingHorizontal: Spacing.paddingMd,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.textDark,
    letterSpacing: 8,
    minHeight: 56,
  },
  otpHint: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginSm,
    textAlign: 'center',
  },
  verifyButton: {
    marginBottom: Spacing.marginLg,
    paddingVertical: Spacing.paddingMd,
  },
  resendSection: {
    alignItems: 'center',
    marginBottom: Spacing.marginLg,
  },
  timerBox: {
    paddingVertical: Spacing.paddingSm,
  },
  timerText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
  },
  resendButton: {
    paddingVertical: Spacing.paddingSm,
  },
  resendText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
  },
  resendLink: {
    color: Colors.primary,
    fontWeight: '600',
  },
  securityBox: {
    backgroundColor: '#F0F8FF',
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingMd,
    alignItems: 'center',
    flexDirection: 'row',
  },
  securityIcon: {
    fontSize: 18,
    marginRight: Spacing.marginSm,
  },
  securityText: {
    flex: 1,
    ...Typography.caption,
    color: Colors.info,
  },
  helpButton: {
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  helpText: {
    ...Typography.bodySmall,
    color: Colors.primary,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default OTPVerificationScreen;