import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const SubscriptionScreen = ({ navigation }) => {
  const [subscriptionStatus, setSubscriptionStatus] = useState('active');

  const contributionItems = [
    'Platform maintenance',
    'Identity verification & safety checks',
    'Moderation & misuse prevention',
    'Server & notification costs'
  ];

  const handlePauseSubscription = () => {
    Alert.alert(
      'Pause Subscription?',
      'You can resume your subscription anytime.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Pause',
          onPress: () => setSubscriptionStatus('paused'),
        }
      ]
    );
  };

  const handleCancelSubscription = () => {
    // Alert.alert(
    //   'Cancel Subscription?',
    //   'You can reactivate anytime.',
    //   [
    //     { text: 'Keep Subscription', style: 'cancel' },
    //     {
    //       text: 'Cancel',
    //       onPress: () => setSubscriptionStatus('cancelled'),
    //       style: 'destructive'
    //     }
    //   ]
    // );
    navigation.navigate('ProfileReview');
  };

  const handleUpdatePayment = () => {
    navigation.navigate('UpdatePaymentMethod');
  };

  const isSubscriptionActive = subscriptionStatus === 'active';

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onBackPress={() => navigation.goBack()} 
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Why Socius Has a Subscription Section */}
        <View style={styles.infoCard}>
          <View style={styles.infoIconContainer}>
            <Icon name="heart" size={40} color="#DC5C69" />
          </View>
          
          <Text style={styles.infoTitle}>Why Socius Has a Subscription</Text>
          
          <View style={styles.infoLine} />
          
          <Text style={styles.infoDescription}>
            Socius is maintained through a small monthly contribution to keep the platform independent, ad-free, and focused on community safety.
          </Text>
          
          <Text style={styles.infoSubtext}>
            No ads. No selling data. No external control.
          </Text>
        </View>

        {/* Your Plan Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Plan</Text>
          
          <View style={styles.planCard}>
            <View style={styles.planHeader}>
              <View style={styles.planLeft}>
                <Text style={styles.planName}>Community Supporter</Text>
                <Text style={styles.planBilling}>Billing: Monthly</Text>
              </View>
              
              <View style={styles.planRight}>
                <Text style={styles.planPrice}>₹15 <Text style={styles.planFrequency}>/month</Text></Text>
                <View style={[
                  styles.statusBadge,
                  isSubscriptionActive && styles.statusBadgeActive
                ]}>
                  <Text style={[
                    styles.statusText,
                    isSubscriptionActive && styles.statusTextActive
                  ]}>
                    Active
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Your Contribution Supports Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Contribution Supports</Text>
          
          <View style={styles.contributionCard}>
            {contributionItems.map((item, index) => (
              <View key={index} style={[styles.contributionRow, index !== contributionItems.length - 1 && styles.contributionRowBorder]}>
                <Icon name="check" size={16} color="#2C3E50" style={styles.checkIcon} />
                <Text style={styles.contributionText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Payment Method Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          
          <View style={styles.paymentCard}>
            <Text style={styles.paymentMethod}>UPI • Card ending ***** 1234</Text>
            
            <Button
              title="Update Payment Method"
              onPress={handleUpdatePayment}
            />
          </View>
        </View>

        {/* Manage Subscription Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Manage Subscription</Text>
          
          <View style={styles.managementButtonsContainer}>
            <Button
              title="Pause Subscription"
              onPress={handlePauseSubscription}
              disabled={!isSubscriptionActive}
              style={{ flex: 1 }}
            />
            
            <Button
              title="Cancel Subscription"
              onPress={handleCancelSubscription}
              style={{ flex: 1 }}
            />
          </View>
          
          <Text style={styles.managementInfo}>
            You can cancel anytime. Access continues until the end of the billing period.
          </Text>
        </View>

        {/* Footer Note */}
        <Text style={styles.footerNote}>
          Socius does not condition safety access on payment.
        </Text>
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

  // ===== INFO CARD SECTION =====
  infoCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 24,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EAED',
  },

  infoIconContainer: {
    marginBottom: 16,
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
  },

  infoLine: {
    width: 50,
    height: 1,
    backgroundColor: '#D0D0D0',
    marginBottom: 16,
  },

  infoDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 14,
  },

  infoSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
    textAlign: 'center',
  },

  // ===== SECTION STYLING =====
  section: {
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 12,
  },

  // ===== PLAN CARD =====
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
  },

  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  planLeft: {
    flex: 1,
  },

  planRight: {
    alignItems: 'flex-end',
  },

  planName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },

  planBilling: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
  },

  planPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },

  planFrequency: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666666',
  },

  statusBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: '#D4E8DB',
  },

  statusBadgeActive: {
    backgroundColor: '#D4E8DB',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },

  statusTextActive: {
    color: '#4CAF50',
  },

  // ===== CONTRIBUTION CARD =====
  contributionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    overflow: 'hidden',
  },

  contributionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  contributionRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },

  checkIcon: {
    marginRight: 12,
    marginTop: 2,
  },

  contributionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    lineHeight: 20,
    flex: 1,
  },

  // ===== PAYMENT METHOD CARD =====
  paymentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
  },

  paymentMethod: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 14,
  },

  updateButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  updateButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2C3E50',
  },

  // ===== MANAGEMENT SECTION =====
  managementButtonsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },

  pauseButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  pauseButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
  },

  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#DC5C69',
  },

  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC5C69',
  },

  managementInfo: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 19,
  },

  // ===== FOOTER NOTE =====
  footerNote: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 21,
    fontStyle: 'italic',
    marginTop: 20,
    marginBottom: 12,
  },
});

export default SubscriptionScreen;
