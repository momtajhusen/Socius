import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const PhoneVerificationScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const countries = [
    { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳', maxLength: 10 },
    { code: 'NP', name: 'Nepal', dial: '+977', flag: '🇳🇵', maxLength: 10 },
    { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩', maxLength: 11 },
    { code: 'BT', name: 'Bhutan', dial: '+975', flag: '🇧🇹', maxLength: 8 },
    { code: 'LK', name: 'Sri Lanka', dial: '+94', flag: '🇱🇰', maxLength: 10 },
    { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰', maxLength: 10 },
    { code: 'MM', name: 'Myanmar', dial: '+95', flag: '🇲🇲', maxLength: 9 },
    { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇨', maxLength: 11 },
    { code: 'AF', name: 'Afghanistan', dial: '+93', flag: '🇦🇫', maxLength: 9 },
    { code: 'MV', name: 'Maldives', dial: '+960', flag: '🇲🇻', maxLength: 7 },
  ];
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);

  const handleSendOTP = () => {
          navigation.navigate('OTPForm');
  };

  const selectedCountry = countries[selectedCountryIndex];
  const toggleCountryMenu = () => setCountryMenuOpen(!countryMenuOpen);
  const chooseCountry = (index) => {
    setSelectedCountryIndex(index);
    setCountryMenuOpen(false);
    setPhoneNumber('');
  };

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
          <Text style={styles.mainTitle}>Verify your phone number</Text>
          <Text style={styles.subtitle}>
            Your number helps keep the community{'\n'}accountable and safe.
          </Text>
        </View>

        {/* Phone Input */}
        <View>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.countryCodeBox} onPress={toggleCountryMenu} activeOpacity={0.8}>
              <Text style={styles.flagText}>{selectedCountry.flag}</Text>
              <Text style={styles.countryCode}>{selectedCountry.dial}</Text>
              <Icon name={countryMenuOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#666666" />
              <View style={styles.divider} />
            </TouchableOpacity>
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter mobile number"
              placeholderTextColor="#CCCCCC"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={selectedCountry.maxLength}
            />
          </View>
          {countryMenuOpen && (
            <View style={styles.countryDropdown}>
              {countries.map((c, idx) => (
                <TouchableOpacity
                  key={c.code}
                  style={[styles.dropdownItem, selectedCountryIndex === idx && styles.dropdownItemSelected]}
                  onPress={() => chooseCountry(idx)}
                >
                  <Text style={styles.flagText}>{c.flag}</Text>
                  <Text style={styles.dropdownText}>{c.name} {c.dial}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Info Text */}
        <Text style={styles.infoText}>
          Your number is used only for verification and{'\n'}important account updates.
        </Text>
      </View>

      {/* Button Footer */}
      <View style={styles.footer}>
        <Button 
          title="Send OTP" 
          onPress={handleSendOTP}
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
    paddingTop: 40,
    justifyContent: 'flex-start',
  },

  // ===== TITLE SECTION =====
  titleSection: {
    marginBottom: 40,
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

  // ===== INPUT SECTION =====
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  countryCodeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },

  countryCode: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
    marginRight: 8,
  },
  flagText: {
    fontSize: 18,
    marginRight: 8,
  },

  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#E8EAED',
  },

  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 16,
    fontWeight: '400',
    color: '#2C3E50',
  },
  countryDropdown: {
    position: 'absolute',
    top: 56,
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F4',
  },
  dropdownItemSelected: {
    backgroundColor: '#F8F9FA',
  },
  dropdownText: {
    fontSize: 14,
    color: '#2C3E50',
    marginLeft: 8,
  },

  // ===== INFO TEXT =====
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 21,
  },

  // ===== FOOTER BUTTON =====
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },

  buttonStyle: {
    borderRadius: 28,
    height: 52,
    backgroundColor: '#DC5C69',
  },
});

export default PhoneVerificationScreen;
