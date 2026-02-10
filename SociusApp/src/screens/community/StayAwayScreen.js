import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const StayAwayScreen = ({ navigation }) => {
  const handleBackHome = () => navigation.navigate('Home');
  const handleSetNotAvailable = () => navigation.navigate('Availability');

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ padding: 8 }}>
            <Icon name="cog" size={24} color="#999999" />
          </TouchableOpacity>
        }
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Icon name="hand-back-left" size={34} color="#8B6F47" />
          </View>
          <Text style={styles.statusTitle}>You’ve Stepped Away</Text>
          <Text style={styles.statusSubtitle}>No action was required from you.</Text>
        </View>

        <View style={styles.centerTextBlock}>
          <Text style={styles.centerLine}>It’s okay to decline.</Text>
          <Text style={styles.centerLine}>Availability is always optional.</Text>
          <Text style={styles.centerLine}>There are no penalties or expectations.</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoCardLine}>The awareness remains visible to others nearby.</Text>
          <Text style={styles.infoCardLine}>You are not recorded as a responder.</Text>
        </View>

        <Button title="Return to Home" onPress={handleBackHome} variant="gradient" size="large" fullWidth />
        <Button title="Set Not Available" onPress={handleSetNotAvailable} variant="white" size="large" fullWidth />

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>Socius does not assign responsibility.</Text>
          <Text style={styles.footerNoteText}>Your choice to step away is respected.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    alignItems: 'stretch',
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  statusIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F1EEE8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  centerTextBlock: {
    alignItems: 'center',
    marginBottom: 16,
  },
  centerLine: {
    fontSize: 14,
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  infoCardLine: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
    textAlign: 'center',
  },
  footerNote: {
    alignItems: 'center',
    marginTop: 8,
  },
  footerNoteText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default StayAwayScreen;
