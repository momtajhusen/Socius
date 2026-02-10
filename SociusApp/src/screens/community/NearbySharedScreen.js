import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const NearbySharedScreen = ({ navigation }) => {
  const handleViewDetails = () => navigation.navigate('ViewDetailsIgnore');
  const handleDismiss = () => navigation.goBack();
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
        <View style={styles.bannerCard}>
          <Text style={styles.bannerTitle}>Someone Nearby Shared Awareness</Text>
          <View style={styles.bannerDivider} />
          <Text style={styles.bannerSubtitle}>You are seeing this because you are available.</Text>
        </View>

        <View style={styles.sharedInfoCard}>
          <Text style={styles.cardHeaderLabel}>Shared information</Text>
          <View style={styles.infoItemCard}>
            <Text style={styles.infoMainText}>Needs a quick printout near the bus stop</Text>
            <Text style={styles.infoSubText}>Location shared voluntarily</Text>
          </View>
        </View>

        <Text style={styles.guidanceLine}>You are not required to respond.</Text>
        <Text style={styles.guidanceLine}>Only proceed if you feel safe and comfortable.</Text>

        <Button title="View Details" onPress={handleViewDetails} variant="gradient" size="large" fullWidth />
        <Button title="Dismiss" onPress={handleDismiss} variant="white" size="large" fullWidth />
        <Button title="Set Not Available" onPress={handleSetNotAvailable} variant="white" size="large" fullWidth textStyle={{ color: '#E85555' }} />

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>Socius does not instruct action or intervention.</Text>
          <Text style={styles.footerNoteText}>What you do is entirely your choice.</Text>
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
  bannerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
  },
  bannerDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 4,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  sharedInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeaderLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#999999',
    marginBottom: 10,
    textTransform: 'none',
  },
  infoItemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  infoMainText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
  },
  infoSubText: {
    fontSize: 12,
    color: '#666666',
  },
  guidanceLine: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 8,
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

export default NearbySharedScreen;
