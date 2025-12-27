// src/screens/auth/VolunteerOnboardingScreen.js
// Volunteer-specific onboarding with verification & training

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

const VolunteerOnboardingScreen = ({ navigation, route }) => {
  const { userRole } = route.params;
  const { handleLogin, loading } = useAuth();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    areaOfOperation: '',
    specializations: [],
    idType: '',
    idNumber: '',
    emergencyContact: '',
    emergencyPhone: '',
  });

  const [errors, setErrors] = useState({});

  // Specialization options
  const specializations = [
    { id: 'medical', label: 'Medical Support', icon: '🏥' },
    { id: 'legal', label: 'Legal Support', icon: '⚖️' },
    { id: 'community', label: 'Community Peace', icon: '☮️' },
    { id: 'safety', label: 'Safety Support', icon: '🛡️' },
    { id: 'counseling', label: 'Counseling', icon: '💬' },
  ];

  const idTypes = [
    { id: 'aadhar', label: 'Aadhar Card' },
    { id: 'pan', label: 'PAN Card' },
    { id: 'passport', label: 'Passport' },
    { id: 'drivingLicense', label: 'Driving License' },
  ];

  const toggleSpecialization = (specId) => {
    setForm((prev) => ({
      ...prev,
      specializations: prev.specializations.includes(specId)
        ? prev.specializations.filter((id) => id !== specId)
        : [...prev.specializations, specId],
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!form.name.trim()) newErrors.name = 'Name is required';
      if (!form.email.trim()) newErrors.email = 'Email is required';
      if (!form.age) newErrors.age = 'Age is required';
      if (form.age && (isNaN(form.age) || form.age < 18)) {
        newErrors.age = 'Must be 18 or older';
      }
    }

    if (step === 2) {
      if (!form.phone.trim()) newErrors.phone = 'Phone is required';
      if (!form.areaOfOperation.trim()) newErrors.areaOfOperation = 'Area is required';
      if (form.specializations.length === 0) {
        newErrors.specializations = 'Select at least one specialization';
      }
    }

    if (step === 3) {
      if (!form.idType) newErrors.idType = 'ID type is required';
      if (!form.idNumber.trim()) newErrors.idNumber = 'ID number is required';
      if (!form.emergencyContact.trim()) newErrors.emergencyContact = 'Contact name is required';
      if (!form.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1);
      }
    }
  };

  const handleComplete = async () => {
    if (validateStep()) {
      const success = await handleLogin('9876543210', '1234', 'VOLUNTEER');
      if (success) {
        console.log('Volunteer onboarding complete!');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={`Become a Guardian - Step ${step}/4`}
        onBackPress={() => step > 1 ? setStep(step - 1) : navigation.goBack()}
        backButton
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Progress Bar */}
        <View style={styles.progressBar}>
          {[1, 2, 3, 4].map((s) => (
            <View
              key={s}
              style={[
                styles.progressDot,
                s <= step && styles.progressDotActive,
              ]}
            />
          ))}
        </View>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <View style={styles.stepContainer}>
            <Card style={styles.infoCard} shadow="medium">
              <Text style={styles.stepIcon}>👤</Text>
              <Text style={styles.stepTitle}>Tell Us About You</Text>
              <Text style={styles.stepSubtitle}>
                Basic information to get started
              </Text>
            </Card>

            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
              error={errors.name}
            />

            <TextInput
              label="Email Address"
              placeholder="your.email@example.com"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType="email-address"
              error={errors.email}
            />

            <TextInput
              label="Age"
              placeholder="Must be 18 or older"
              value={form.age}
              onChangeText={(text) => setForm({ ...form, age: text })}
              keyboardType="number-pad"
              maxLength={2}
              error={errors.age}
            />

            <Card style={styles.guidelineCard} shadow="small">
              <Text style={styles.guidelineIcon}>📋</Text>
              <Text style={styles.guidelineTitle}>Why We Ask This</Text>
              <Text style={styles.guidelineText}>
                We verify volunteer information to ensure community safety
              </Text>
            </Card>
          </View>
        )}

        {/* Step 2: Specialization */}
        {step === 2 && (
          <View style={styles.stepContainer}>
            <Card style={styles.infoCard} shadow="medium">
              <Text style={styles.stepIcon}>🎓</Text>
              <Text style={styles.stepTitle}>Your Specializations</Text>
              <Text style={styles.stepSubtitle}>
                Choose areas where you can help
              </Text>
            </Card>

            <TextInput
              label="Phone Number"
              placeholder="9876543210"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType="phone-pad"
              maxLength={10}
              error={errors.phone}
            />

            <TextInput
              label="Area of Operation"
              placeholder="e.g., Downtown, North District"
              value={form.areaOfOperation}
              onChangeText={(text) => setForm({ ...form, areaOfOperation: text })}
              error={errors.areaOfOperation}
            />

            <Text style={styles.specLabel}>
              What are you trained in? (Select at least 1)
            </Text>
            {errors.specializations && (
              <Text style={styles.errorText}>{errors.specializations}</Text>
            )}

            <View style={styles.specializationsGrid}>
              {specializations.map((spec) => (
                <TouchableOpacity
                  key={spec.id}
                  onPress={() => toggleSpecialization(spec.id)}
                  style={styles.specCardWrapper}
                >
                  <Card
                    style={[
                      styles.specCard,
                      form.specializations.includes(spec.id) &&
                        styles.specCardSelected,
                    ]}
                    shadow="small"
                  >
                    <Text style={styles.specIcon}>{spec.icon}</Text>
                    <Text
                      style={[
                        styles.specCardLabel,
                        form.specializations.includes(spec.id) &&
                          styles.specCardLabelSelected,
                      ]}
                    >
                      {spec.label}
                    </Text>
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Step 3: Verification */}
        {step === 3 && (
          <View style={styles.stepContainer}>
            <Card style={styles.infoCard} shadow="medium">
              <Text style={styles.stepIcon}>🆔</Text>
              <Text style={styles.stepTitle}>Verification Details</Text>
              <Text style={styles.stepSubtitle}>
                For background verification
              </Text>
            </Card>

            <View style={styles.selectContainer}>
              <Text style={styles.selectLabel}>ID Type</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.idTypesRow}>
                  {idTypes.map((type) => (
                    <TouchableOpacity
                      key={type.id}
                      onPress={() => setForm({ ...form, idType: type.id })}
                      style={styles.idTypeWrapper}
                    >
                      <Card
                        style={[
                          styles.idTypeCard,
                          form.idType === type.id &&
                            styles.idTypeCardSelected,
                        ]}
                        shadow="small"
                      >
                        <Text
                          style={[
                            styles.idTypeLabel,
                            form.idType === type.id &&
                              styles.idTypeLabelSelected,
                          ]}
                        >
                          {type.label}
                        </Text>
                      </Card>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
              {errors.idType && (
                <Text style={styles.errorText}>{errors.idType}</Text>
              )}
            </View>

            <TextInput
              label="ID Number"
              placeholder="Enter your ID number"
              value={form.idNumber}
              onChangeText={(text) => setForm({ ...form, idNumber: text })}
              error={errors.idNumber}
            />

            <TextInput
              label="Emergency Contact Name"
              placeholder="Person to contact in emergency"
              value={form.emergencyContact}
              onChangeText={(text) =>
                setForm({ ...form, emergencyContact: text })
              }
              error={errors.emergencyContact}
            />

            <TextInput
              label="Emergency Contact Phone"
              placeholder="9876543210"
              value={form.emergencyPhone}
              onChangeText={(text) => setForm({ ...form, emergencyPhone: text })}
              keyboardType="phone-pad"
              maxLength={10}
              error={errors.emergencyPhone}
            />

            <Card style={styles.verificationCard} shadow="small">
              <Text style={styles.verificationTitle}>🔒 Privacy Assured</Text>
              <Text style={styles.verificationText}>
                Your ID and emergency contact are encrypted and never shared publicly
              </Text>
            </Card>
          </View>
        )}

        {/* Step 4: Agreement */}
        {step === 4 && (
          <View style={styles.stepContainer}>
            <Card style={styles.infoCard} shadow="medium">
              <Text style={styles.stepIcon}>✓</Text>
              <Text style={styles.stepTitle}>Guardian Agreement</Text>
              <Text style={styles.stepSubtitle}>
                Review and accept our guidelines
              </Text>
            </Card>

            <Card style={styles.agreementCard} shadow="small">
              <Text style={styles.agreementTitle}>Before You Begin</Text>

              <View style={styles.agreementItem}>
                <Text style={styles.agreementNumber}>1</Text>
                <Text style={styles.agreementText}>
                  Volunteers are helpers, not authorities
                </Text>
              </View>

              <View style={styles.agreementItem}>
                <Text style={styles.agreementNumber}>2</Text>
                <Text style={styles.agreementText}>
                  Safety comes first - call authorities if needed
                </Text>
              </View>

              <View style={styles.agreementItem}>
                <Text style={styles.agreementNumber}>3</Text>
                <Text style={styles.agreementText}>
                  Support vulnerable people with respect
                </Text>
              </View>

              <View style={styles.agreementItem}>
                <Text style={styles.agreementNumber}>4</Text>
                <Text style={styles.agreementText}>
                  De-escalate situations peacefully
                </Text>
              </View>

              <View style={styles.agreementItem}>
                <Text style={styles.agreementNumber}>5</Text>
                <Text style={styles.agreementText}>
                  Never use force or aggression
                </Text>
              </View>

              <View style={styles.agreementItem}>
                <Text style={styles.agreementNumber}>6</Text>
                <Text style={styles.agreementText}>
                  Respect privacy and confidentiality
                </Text>
              </View>
            </Card>

            <Card style={styles.commitmentsCard} shadow="small">
              <Text style={styles.commitmentsIcon}>🤝</Text>
              <Text style={styles.commitmentsTitle}>Your Commitment</Text>
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>☑</Text>
                <Text style={styles.commitmentText}>
                  I understand my role as a community volunteer
                </Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>☑</Text>
                <Text style={styles.commitmentText}>
                  I agree to follow the guidelines
                </Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>☑</Text>
                <Text style={styles.commitmentText}>
                  I prioritize safety and respect
                </Text>
              </View>
            </Card>

            <Card style={styles.readyCard} shadow="small">
              <Text style={styles.readyIcon}>🎉</Text>
              <Text style={styles.readyTitle}>You're Ready!</Text>
              <Text style={styles.readyText}>
                Complete your onboarding and start helping your community today
              </Text>
            </Card>
          </View>
        )}

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          {step > 1 && (
            <Button
              title="Back"
              onPress={() => setStep(step - 1)}
              variant="secondary"
              fullWidth
              style={styles.button}
            />
          )}

          {step < 4 && (
            <Button
              title="Next"
              onPress={handleNext}
              variant="primary"
              fullWidth
              loading={loading}
              style={styles.button}
            />
          )}

          {step === 4 && (
            <Button
              title={loading ? 'Completing...' : 'Complete Setup'}
              onPress={handleComplete}
              variant="primary"
              fullWidth
              loading={loading}
              style={styles.button}
            />
          )}
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
  progressBar: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginXxl,
    justifyContent: 'center',
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.borderLight,
  },
  progressDotActive: {
    backgroundColor: Colors.primary,
  },
  stepContainer: {
    marginBottom: Spacing.marginXxl,
  },
  infoCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    marginBottom: Spacing.marginXxl,
  },
  stepIcon: {
    fontSize: 48,
    marginBottom: Spacing.marginMd,
  },
  stepTitle: {
    ...Typography.h4,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  stepSubtitle: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
  },
  guidelineCard: {
    backgroundColor: '#F0F8FF',
    marginTop: Spacing.marginXl,
  },
  guidelineIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  guidelineTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  guidelineText: {
    ...Typography.caption,
    color: Colors.info,
  },
  specLabel: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
    marginVertical: Spacing.marginMd,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.emergency,
    marginTop: Spacing.marginSm,
  },
  specializationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginXxl,
  },
  specCardWrapper: {
    width: '48%',
  },
  specCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  specCardSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
  },
  specIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  specCardLabel: {
    ...Typography.caption,
    color: Colors.textDark,
    textAlign: 'center',
    fontWeight: '500',
  },
  specCardLabelSelected: {
    color: Colors.primary,
    fontWeight: '700',
  },
  selectContainer: {
    marginBottom: Spacing.marginXxl,
  },
  selectLabel: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  idTypesRow: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
  },
  idTypeWrapper: {
    width: 120,
  },
  idTypeCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
    borderWidth: 2,
    borderColor: Colors.borderLight,
  },
  idTypeCardSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
  },
  idTypeLabel: {
    ...Typography.caption,
    color: Colors.textDark,
    fontWeight: '500',
    textAlign: 'center',
  },
  idTypeLabelSelected: {
    color: Colors.primary,
    fontWeight: '700',
  },
  verificationCard: {
    backgroundColor: '#F0F8FF',
    marginTop: Spacing.marginXl,
  },
  verificationTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  verificationText: {
    ...Typography.caption,
    color: Colors.info,
  },
  agreementCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXl,
  },
  agreementTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginMd,
  },
  agreementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: Spacing.marginMd,
  },
  agreementNumber: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: '700',
    marginRight: Spacing.marginMd,
    minWidth: 30,
  },
  agreementText: {
    flex: 1,
    ...Typography.bodySmall,
    color: Colors.textDark,
  },
  commitmentsCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    marginBottom: Spacing.marginXl,
  },
  commitmentsIcon: {
    fontSize: 40,
    marginBottom: Spacing.marginMd,
  },
  commitmentsTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginMd,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: Spacing.marginSm,
    width: '100%',
  },
  checkboxText: {
    fontSize: 18,
    color: Colors.success,
    marginRight: Spacing.marginMd,
  },
  commitmentText: {
    flex: 1,
    ...Typography.caption,
    color: Colors.textDark,
  },
  readyCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
  },
  readyIcon: {
    fontSize: 48,
    marginBottom: Spacing.marginMd,
  },
  readyTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  readyText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: Spacing.gapMd,
    marginTop: Spacing.marginXxl,
  },
  button: {
    paddingVertical: Spacing.paddingMd,
  },
});

export default VolunteerOnboardingScreen;