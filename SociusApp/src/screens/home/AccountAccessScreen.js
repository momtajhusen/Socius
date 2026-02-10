import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const AccountAccessScreen = ({ navigation }) => {
  const canStill = [
    'View emergency help',
    'Access your profile',
    'Contact support',
  ];

  const unavailable = [
    'Sharing awareness',
    'Receiving awareness notifications',
  ];

  const handleSupport = () => {
    navigation.navigate('HelpSupport');
  };

  const handleSignOut = () => {
    navigation.replace('Welcome');
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
        <Text style={styles.pageTitle}>Account Access Update</Text>

        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusPill}>
            <Text style={styles.statusTitle}>
              Your account access is currently limited.
            </Text>
          </View>
          <Text style={styles.statusDescription}>
            This may happen during routine review or after a reported concern.
          </Text>
        </View>

        {/* Reason */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reason</Text>
          <View style={styles.divider} />
          <View style={styles.reasonPill}>
            <Text style={styles.reasonText}>Routine verification review</Text>
          </View>
        </View>

        {/* Capabilities */}
        <View style={styles.capabilities}>
          <View style={styles.capColumn}>
            <Text style={styles.capTitle}>You can still:</Text>
            {canStill.map((item, idx) => (
              <View style={styles.capRow} key={`can-${idx}`}>
                <Icon name="check" size={18} color="#2C3E50" />
                <Text style={styles.capText}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={styles.capColumn}>
            <Text style={styles.capTitle}>Temporarily unavailable:</Text>
            {unavailable.map((item, idx) => (
              <View style={styles.capRow} key={`un-${idx}`}>
                <Icon name="close" size={18} color="#C94D4D" />
                <Text style={styles.capText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        {/* Note */}
        <Text style={styles.note}>
          This is not a judgment. Most reviews are resolved quickly.
        </Text>

        {/* Contact Support Button */}
        <Button 
          title="Contact Support" 
          onPress={handleSupport}
          fullWidth
        />

        {/* Sign Out */}
        <Text style={styles.signOut} onPress={handleSignOut}>Sign Out</Text>
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
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 28,
  },

  // ===== STATUS CARD =====
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  statusPill: {
    backgroundColor: '#F8F1EE',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  statusTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
  },
  statusDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
  },

  // ===== SECTION =====
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 12,
  },
  reasonPill: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E8EAED',
    alignSelf: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  reasonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
  },

  // ===== CAPABILITIES =====
  capabilities: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  capColumn: {
    flex: 1,
  },
  capTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  capRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  capText: {
    fontSize: 14,
    color: '#2C3E50',
  },
  
  note: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#888888',
    textAlign: 'center',
    marginBottom: 16,
  },
  signOut: {
    textAlign: 'center',
    color: '#C94D4D',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
  }
});

export default AccountAccessScreen;
