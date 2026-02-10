import React from 'react';
 import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const RequestSuccessScreen = ({ navigation }) => {
  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleEditRequest = () => {
    navigation.navigate('HelpDetails');
  };

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  const handleCancelRequest = () => {
    navigation.navigate('CancelRequest');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <TouchableOpacity onPress={handleSettings} style={{ padding: 8 }}>
            <Icon name="cog" size={24} color="#999999" />
          </TouchableOpacity>
        }
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Animation Circle */}
        <View style={styles.successContainer}>
          <View style={styles.pulseRing1} />
          <View style={styles.pulseRing2} />
          <LinearGradient
            colors={['#FF8A7A', '#D84D42']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.successCircle}
          >
            <View style={styles.highlightDot} />
          </LinearGradient>
        </View>

        {/* Success Message */}
        <View style={styles.messageSection}>
          <Text style={styles.successTitle}>Your request has been shared.</Text>
          <Text style={styles.successSubtitle}>People nearby can now see it.</Text>
        </View>

        {/* Request Details Card */}
        <View style={styles.requestDetailsCard}>
          <Text style={styles.cardLabel}>Your request</Text>
          <Text style={styles.requestTitle}>Need a quick printout near the bus stop</Text>
          <Text style={styles.requestSubtitle}>Shared with nearby available people</Text>
        </View>

        {/* Notification Info */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>You'll be notified if someone chooses to be nearby.</Text>
          <Text style={styles.infoSubtitle}>There's no obligation for anyone to respond.</Text>
        </View>

        {/* Wait Card */}
        <View style={styles.actionCard}>
          <Text style={styles.actionTitle}>Wait</Text>
          <Text style={styles.actionSubtitle}>You can stay on this screen or continue using your phone.</Text>
        </View>

        {/* Edit Request Card */}
        <TouchableOpacity style={styles.actionCard} onPress={handleEditRequest} activeOpacity={0.85}>
          <Text style={styles.actionTitle}>Edit Request</Text>
          <Text style={styles.actionSubtitle}>Change details if needed.</Text>
        </TouchableOpacity>

        {/* Cancel Request Card */}
        <TouchableOpacity style={styles.actionCard} onPress={handleCancelRequest} activeOpacity={0.85}>
          <Text style={styles.actionTitle}>Cancel Request</Text>
          <Text style={styles.actionSubtitle}>End this request at any time.</Text>
        </TouchableOpacity>

        {/* Location Notice */}
        <Text style={styles.locationNotice}>Your location is shared only while this request is active.</Text>

        {/* Cancel Request Button */}
        <Button
          title="Cancel Request"
          onPress={handleCancelRequest}
          variant="gradient"
          size="large"
          fullWidth
        />

        {/* Back to Home Button */}
        <Button
          title="Back to Home"
          onPress={handleBackToHome}
          variant="white"
          fullWidth
        />

        <View style={styles.bottomSpacer} />
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
    paddingBottom: 80,
  },

  // ===== SUCCESS ANIMATION =====
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    marginBottom: 18,
    position: 'relative',
  },

  pulseRing1: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFF0F2',
    opacity: 0.45,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 5,
  },

  pulseRing2: {
    position: 'absolute',
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#FFDBDF',
    opacity: 0.38,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  successCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },

  // ===== MESSAGE SECTION =====
  messageSection: {
    alignItems: 'center',
    marginBottom: 28,
  },

  successTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
    lineHeight: 28,
  },

  successSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 22,
  },

  // ===== REQUEST DETAILS CARD =====
  requestDetailsCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  cardLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#999999',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
    letterSpacing: 0.2,
  },

  requestTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2C3E50',
    marginTop: 12,
    marginBottom: 8,
    lineHeight: 26,
  },

  requestSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    lineHeight: 21,
  },

  // ===== INFO SECTION =====
  infoSection: {
    marginBottom: 18,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 4,
    lineHeight: 23,
  },

  infoSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    lineHeight: 21,
  },

  // ===== ACTION CARD =====
  actionCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  actionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },

  actionSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
  },

  // ===== LOCATION NOTICE =====
  locationNotice: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 22,
  },

  // ===== CANCEL BUTTON =====
  cancelButton: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },

  cancelButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

  // ===== BACK BUTTON =====
  backButton: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  backButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2C3E50',
    letterSpacing: 0.3,
  },

  bottomSpacer: {
    height: 20,
  },
});

export default RequestSuccessScreen;
