import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const SubscriptionStatusScreen = ({ navigation }) => {
  const availableItems = [
    'Emergency Help',
    'Profile access',
    'Contact support',
  ];

  const unavailableItems = [
    'Sharing awareness',
    'Receiving awareness notifications',
  ];

  const handleRenew = () => {
    navigation.navigate('SubscriptionManage');
  };

  const handleLimitedAccess = () => {
    navigation.navigate('AccountAccess');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="" onBackPress={() => navigation.goBack()} style={{ borderBottomWidth: 0 }} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>Subscription Status</Text>
        <View style={styles.divider} />

        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Your subscription has ended.</Text>
          <Text style={styles.statusSubtitle}>You're currently in a grace period.</Text>
        </View>

        <Text style={styles.sectionTitle}>Still available:</Text>
        <View style={styles.itemsList}>
          {availableItems.map((item, idx) => (
            <View key={idx} style={styles.itemRow}>
              <Icon name="check-circle" size={20} color="#4CAF50" />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Temporarily unavailable:</Text>
        <View style={styles.itemsList}>
          {unavailableItems.map((item, idx) => (
            <View key={idx} style={styles.itemRow}>
              <Icon name="close-circle" size={20} color="#DC5C69" />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.disclaimerText}>
          Emergency access is always available, even without a subscription.
        </Text>

        <Button
          title="Renew Subscription"
          onPress={handleRenew}
          variant="primary"
          fullWidth
          style={styles.primaryButton}
        />

        <Button
          title="Continue with Limited Access"
          onPress={handleLimitedAccess}
          variant="white"
          fullWidth
          style={styles.secondaryButton}
        />

        <Text style={styles.footerNote}>₹15/month — cancel anytime</Text>
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
    paddingTop: 20,
    paddingBottom: 30,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#C84242',
    textAlign: 'center',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginBottom: 18,
  },
  statusCard: {
    backgroundColor: '#FDF6F2',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#F1DDD6',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
  },
  statusSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
  },
  itemsList: {
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    color: '#2C3E50',
    marginLeft: 10,
  },
  disclaimerText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    marginBottom: 18,
  },
  primaryButton: {
    borderRadius: 26,
    paddingVertical: 14,
    marginBottom: 12,
  },
  secondaryButton: {
    borderRadius: 26,
    paddingVertical: 14,
    marginBottom: 14,
  },
  footerNote: {
    fontSize: 12,
    color: '#888888',
    textAlign: 'center',
  },
});

export default SubscriptionStatusScreen;
