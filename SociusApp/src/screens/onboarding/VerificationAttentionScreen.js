import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const VerificationNeedsAttentionScreen = ({ navigation }) => {
  const reasons = [
    'Image unclear or cropped',
    'Document not fully visible',
    'Information mismatch',
    'Missing required detail'
  ];

  const solutions = [
    'Use clear, well-lit photos',
    'Ensure full document is visible',
    'Avoid glare or blur',
    'Take selfie without hats or masks'
  ];

  const handleRetryVerification = () => {
    navigation.navigate('IdentityVerification');
  };

  const handleContactSupport = () => {
    navigation.navigate('SupportChat');
  };

  const handleSaveExit = () => {
    navigation.navigate('Home');
  };

  const handleContinue = () => {
    navigation.navigate('RequestReview');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Title */}
        <Text style={styles.mainTitle}>Verification Needs Attention</Text>

        {/* Error Card */}
        <View style={styles.errorCard}>
          <Text style={styles.errorTitle}>
            We couldn't complete verification with the information provided.
          </Text>
          <Text style={styles.errorSubtitle}>
            This can happen for a few common reasons.
          </Text>
        </View>

        {/* Reasons List */}
        <View style={styles.reasonsContainer}>
          {reasons.map((reason, index) => (
            <View key={index} style={styles.reasonRow}>
              <Icon name="check" size={18} color="#666666" />
              <Text style={styles.reasonText}>{reason}</Text>
            </View>
          ))}
        </View>

        {/* How to Fix Section */}
        <Text style={styles.howToFixTitle}>How to fix this</Text>

        <View style={styles.solutionsContainer}>
          {solutions.map((solution, index) => (
            <View key={index} style={styles.solutionRow}>
              <View style={styles.bulletPoint} />
              <Text style={styles.solutionText}>{solution}</Text>
            </View>
          ))}
        </View>

        {/* Retry Button */}
        <Button
          title="Retry Verification"
          onPress={handleRetryVerification}
          variant="gradient"
          fullWidth
        />

        {/* Contact Support Button */}
        <Button
          title="Contact Support"
          onPress={handleContactSupport}
          variant="white"
          fullWidth
        />

        {/* Save & Exit */}
        <Button
          title="Save & Exit"
          onPress={handleSaveExit}
          variant="link"
        />
      </ScrollView>
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
    paddingBottom: 30,
  },

  // ===== LOGO SECTION =====
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 28,
  },

  logoIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#DC5C69',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  logoText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
  },

  // ===== MAIN TITLE =====
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'left',
    marginBottom: 16,
    lineHeight: 32,
  },

  // ===== ERROR CARD =====
  errorCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  errorTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2C3E50',
    lineHeight: 22,
    marginBottom: 8,
  },

  errorSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#888888',
    lineHeight: 20,
  },

  // ===== REASONS CONTAINER =====
  reasonsContainer: {
    marginBottom: 24,
  },

  reasonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  reasonText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    marginLeft: 12,
    lineHeight: 22,
    flex: 1,
  },

  // ===== HOW TO FIX SECTION =====
  howToFixTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 14,
  },

  solutionsContainer: {
    marginBottom: 28,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  solutionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },

  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2C3E50',
    marginRight: 12,
    marginTop: 8,
  },

  solutionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    lineHeight: 20,
    flex: 1,
  },

  // ===== BUTTONS =====
  retryButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },

  retryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  supportButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  supportButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },

  saveExitButton: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveExitText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    textDecorationLine: 'underline',
  },
});

export default VerificationNeedsAttentionScreen;
