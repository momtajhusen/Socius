import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const UserProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('Male');
  const [city, setCity] = useState('');

  const genderOptions = ['Male', 'Female', 'Other'];

  const handleContinue = () => {
     navigation.navigate('ParticipationChoice');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="" 
        onBackPress={() => navigation.goBack()} 
        style={{ borderBottomWidth: 0 }}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Tell us a bit about you</Text>
          <Text style={styles.subtitle}>
            This helps people recognize each other and builds{'\n'}trust in the community.
          </Text>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Full Name Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#CCCCCC"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Age Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              placeholderTextColor="#CCCCCC"
              keyboardType="number-pad"
              maxLength={3}
              value={age}
              onChangeText={setAge}
            />
          </View>

          {/* Gender Field */}
          <View style={styles.fieldGroup}>
            <View style={styles.genderHeader}>
              <Text style={styles.fieldLabel}>Gender</Text>
              <Text style={styles.optionalLabel}>(Optional)</Text>
            </View>
            <View style={styles.genderButtonContainer}>
              {genderOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.genderButton,
                    selectedGender === option && styles.genderButtonSelected
                  ]}
                  onPress={() => setSelectedGender(option)}
                >
                  <Text style={[
                    styles.genderButtonText,
                    selectedGender === option && styles.genderButtonTextSelected
                  ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* City/Area Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>City / Area</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your city or locality"
              placeholderTextColor="#CCCCCC"
              value={city}
              onChangeText={setCity}
            />
          </View>
        </View>

        {/* Info Text */}
        <Text style={styles.infoText}>
          Your information is visible only during active requests and{'\n'}never shared publicly.
        </Text>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={handleContinue}
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
  
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 130,
  },

 

  // ===== TITLE SECTION =====
  titleSection: {
    marginBottom: 28,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 32,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },

  // ===== FORM CONTAINER =====
  formContainer: {
    marginBottom: 20,
  },

  fieldGroup: {
    marginBottom: 14,
    backgroundColor: '#F8F9FA',
    borderRadius: 13,
    padding: 11,
    borderWidth: 1,
    borderColor: '#E8EAED',
  },

  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 7,
  },

  genderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },

  optionalLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    marginLeft: 4,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 11,
    paddingVertical: 9,
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    height: 45,
  },

  // ===== GENDER BUTTONS =====
  genderButtonContainer: {
    flexDirection: 'row',
    gap: 7,
  },

  genderButton: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  genderButtonSelected: {
    backgroundColor: '#DC5C69',
    borderColor: '#DC5C69',
  },

  genderButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
  },

  genderButtonTextSelected: {
    color: '#FFFFFF',
  },

  // ===== INFO TEXT =====
  infoText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 12,
  },

  // ===== FOOTER BUTTON =====
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingBottom: 22,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },

  buttonStyle: {
  },
});

export default UserProfileScreen;
