import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const otpInputs = useRef([]);

  useEffect(() => {
    let interval;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [canResend]);

  const handleOTPChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index) => {
    if (otp[index] === '' && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      navigation.navigate('ProfileInfo');
    }
  };

  const handleResendOTP = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setCanResend(false);
    otpInputs.current[0]?.focus();
    console.log('Resending OTP...');
  };

  const otpFilled = otp.every(digit => digit !== '');

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="" 
        onBackPress={() => navigation.goBack()} 
        style={{ borderBottomWidth: 0 }}
      />
      
      <View style={styles.content}>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Enter verification code</Text>
          <Text style={styles.subtitle}>
            We've sent a 6-digit code to your phone.
          </Text>
        </View>

        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => otpInputs.current[index] = ref}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(value) => handleOTPChange(value, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
              placeholder=""
              placeholderTextColor="#E8EAED"
            />
          ))}
        </View>

        {/* Resend Section */}
        <View style={styles.resendSection}>
          <Text style={styles.resendLabel}>Didn't receive the code?</Text>
          
          <TouchableOpacity 
            onPress={handleResendOTP}
            disabled={!canResend}
            style={[
              styles.resendButtonContainer,
              !canResend && styles.resendButtonDisabled
            ]}
          >
            <Text style={styles.resendButton}>
              Resend OTP
            </Text>
          </TouchableOpacity>

          {!canResend && (
            <Text style={styles.timerText}>Resend available in {timer}s</Text>
          )}
        </View>
      </View>

      {/* Verify Button */}
      <View style={styles.footer}>
        <Button 
          title="Verify" 
          onPress={handleVerify}
          fullWidth
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    justifyContent: 'flex-start',
  },
  
  // ===== TITLE SECTION =====
  titleSection: {
    marginBottom: 36,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 36,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },

  // ===== OTP INPUT =====
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 48,
  },

  otpInput: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E8EAED',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2C3E50',
    backgroundColor: '#F8F9FA',
  },

  // ===== RESEND SECTION =====
  resendSection: {
    alignItems: 'center',
  },

  resendLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    marginBottom: 12,
  },

  resendButtonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#E8EAED',
    borderRadius: 24,
    marginBottom: 8,
  },

  resendButtonDisabled: {
    borderColor: '#E8EAED',
    opacity: 0.5,
  },

  resendButton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
  },

  timerText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    fontStyle: 'italic',
  },

  // ===== FOOTER BUTTON =====
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },

  buttonStyle: {
  },
});

export default OTPVerificationScreen;
