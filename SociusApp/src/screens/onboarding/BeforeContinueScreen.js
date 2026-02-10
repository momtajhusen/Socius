import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const TermsAndConditionsScreen = ({ navigation }) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const keyPoints = [
    'Socius shares information only — It does not direct actions',
    'Participation is voluntary at all times',
    'You are responsible for your own decisions',
    'Socius does not replace emergency services',
    'You may leave or stop using the app at any time'
  ];

  const sections = [
    {
      id: 'terms',
      title: 'Terms of Use',
      icon: 'file-document-outline',
      content: 'By using Socius, you agree to use the platform responsibly and in accordance with all applicable laws. You acknowledge that Socius is a community information-sharing platform and not a substitute for professional services.'
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: 'shield-lock-outline',
      content: 'Your privacy is important to us. We collect only necessary information to help you connect with your community. Your personal data is protected and never shared publicly without your consent.'
    },
    {
      id: 'community',
      title: 'Community Guidelines',
      icon: 'handshake',
      content: 'We are committed to maintaining a safe and respectful community. Users must treat each other with respect, avoid harassment, and refrain from sharing harmful or illegal content.'
    }
  ];

  const handleAgree = () => {
    if (agreedToTerms) {
      navigation.navigate('Subscription');
    }
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
          <Text style={styles.mainTitle}>Before you continue</Text>
          <Text style={styles.subtitle}>
            Please review and agree to the following to use Socius.
          </Text>
        </View>

        {/* Key Points Section */}
        <View style={styles.keyPointsContainer}>
          {keyPoints.map((point, index) => (
            <View key={index} style={styles.keyPointRow}>
              <View style={styles.checkmarkIconContainer}>
                <Icon name="check-circle" size={20} color="#4CAF50" />
              </View>
              <Text style={styles.keyPointText}>{point}</Text>
            </View>
          ))}
        </View>

        {/* Terms Sections */}
        <View style={styles.sectionsContainer}>
          {sections.map((section) => (
            <View key={section.id} style={styles.sectionCard}>
              <TouchableOpacity 
                style={styles.sectionHeader}
                onPress={() => toggleSection(section.id)}
              >
                <View style={styles.sectionTitleContainer}>
                  <View style={styles.sectionIconContainer}>
                    <Icon 
                      name={section.icon} 
                      size={24} 
                      color="#2C3E50"
                    />
                  </View>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
                <Icon 
                  name={expandedSections[section.id] ? "chevron-up" : "chevron-right"}
                  size={24}
                  color="#999999"
                />
              </TouchableOpacity>

              {expandedSections[section.id] && (
                <View style={styles.sectionContent}>
                  <Text style={styles.sectionText}>{section.content}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Agreement Checkbox */}
        <View style={styles.agreementContainer}>
          <TouchableOpacity 
            style={styles.checkboxWrapper}
            onPress={() => setAgreedToTerms(!agreedToTerms)}
          >
            <View style={[
              styles.checkbox,
              agreedToTerms && styles.checkboxChecked
            ]}>
              {agreedToTerms && (
                <Icon name="check" size={14} color="#FFFFFF" />
              )}
            </View>
            <Text style={styles.agreementText}>
              I have read and agree to the Terms of Use, Privacy Policy, and Community Guidelines.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Agree Button */}
      <View style={styles.footer}>
        <Button 
          title="Agree & Continue" 
          onPress={handleAgree}
          fullWidth
          disabled={!agreedToTerms}
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
    marginBottom: 9,
    lineHeight: 32,
  },

  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },

  // ===== KEY POINTS SECTION =====
  keyPointsContainer: {
    marginBottom: 17,
    paddingHorizontal: 8,
  },

  keyPointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },

  checkmarkIconContainer: {
    marginRight: 12,
    marginTop: 2,
    width: 20,
  },

  keyPointText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2C3E50',
    lineHeight: 22,
    flex: 1,
  },

  // ===== SECTIONS CONTAINER =====
  sectionsContainer: {
    marginBottom: 10,
    gap: 10,
  },

  sectionCard: {
    borderWidth: 1,
    borderColor: '#E8EAED',
    borderRadius: 16,
    backgroundColor: '#F8F9FA',
    overflow: 'hidden',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },

  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  sectionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },

  sectionContent: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },

  sectionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 21,
  },

  // ===== AGREEMENT SECTION =====
  agreementContainer: {
    marginBottom: 30,
    paddingHorizontal: 8,
  },

  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8EAED',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },

  checkboxChecked: {
    backgroundColor: '#DC5C69',
    borderColor: '#DC5C69',
  },

  agreementText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
    lineHeight: 21,
    flex: 1,
    paddingTop: 2,
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

export default TermsAndConditionsScreen;
