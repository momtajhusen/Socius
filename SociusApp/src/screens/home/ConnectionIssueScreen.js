import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const ConnectionUnavailableScreen = ({ navigation }) => {
  const actionItems = [
    'Check your internet connection.',
    'Try again in a moment.',
    'Contact emergency services if needed.'
  ];

  const handleTryAgain = () => {
    console.log('Try again');
    navigation.goBack();
  };

  const handleEmergencyHelp = () => {
    console.log('Emergency help');
  };

  const handleGoBack = () => {
    navigation.goBack();
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
        

        {/* Main Title */}
        <Text style={styles.mainTitle}>Connection Unavailable</Text>

        {/* Error Card */}
        <View style={styles.errorCard}>
          <Text style={styles.errorMessage}>
            Socius can't connect right now due to a network issue.
          </Text>
          <Text style={styles.errorSubtext}>
            This may be temporary.
          </Text>
        </View>

        {/* Info Text */}
        <Text style={styles.infoText}>
          Your information has not been shared.
        </Text>

        {/* Divider */}
        <View style={styles.sectionDivider} />

        {/* What you can do now */}
        <Text style={styles.sectionTitle}>What you can do now</Text>

        {/* Action Items */}
        <View style={styles.actionItemsContainer}>
          {actionItems.map((item, index) => (
            <View key={index} style={styles.actionItem}>
              <Icon name="check" size={20} color="#2C3E50" />
              <Text style={styles.actionItemText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Try Again Button */}
        <Button
          title="Try Again"
          onPress={handleTryAgain}
          variant="gradient"
          fullWidth
        />

        {/* Emergency Help Button */}
        <Button
          title="Emergency Help"
          onPress={handleEmergencyHelp}
          variant="white"
          fullWidth
        />

        {/* Go Back Link */}
        <Button
          title="Go Back"
          onPress={handleGoBack}
          variant="link"
        />

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
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
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },

 

  // ===== MAIN TITLE =====
  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 36,
  },

  // ===== ERROR CARD =====
  errorCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  errorMessage: {
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    lineHeight: 22,
    marginBottom: 6,
  },

  errorSubtext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    fontStyle: 'italic',
    lineHeight: 18,
  },

  // ===== INFO TEXT =====
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },

  sectionDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginBottom: 20,
  },

  // ===== SECTION TITLE =====
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 16,
  },

  // ===== ACTION ITEMS =====
  actionItemsContainer: {
    marginBottom: 28,
  },

  actionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
    gap: 10,
  },

  actionItemText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    lineHeight: 20,
    flex: 1,
    paddingTop: 2,
  },

  // ===== SPACER =====
  spacer: {
    height: 16,
  },

  // ===== TRY AGAIN BUTTON =====
  tryAgainButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  tryAgainButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ===== EMERGENCY HELP BUTTON =====
  emergencyHelpButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D0D5DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  emergencyHelpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },

  // ===== GO BACK LINK =====
  goBackButton: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  goBackButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#666666',
    textDecorationLine: 'underline',
  },

  // ===== BOTTOM SPACING =====
  bottomSpacing: {
    height: 20,
  },
});

export default ConnectionUnavailableScreen;
