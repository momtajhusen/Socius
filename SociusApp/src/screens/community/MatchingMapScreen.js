import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const MatchingMapScreen = ({ navigation }) => {
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
            <View style={styles.infoItemDivider} />
            <Text style={styles.infoSubText}>Location shared voluntarily</Text>
          </View>
        </View>

        <Text style={styles.guidanceLine}>You are not required to respond.</Text>
        <Text style={[styles.guidanceLine, { marginBottom: 14 }]}>Only proceed if you feel safe and comfortable.</Text>

        <Button title="View Details" onPress={handleViewDetails} variant="gradient" size="large" fullWidth />
        <Button title="Dismiss" onPress={handleDismiss} variant="white" size="large" fullWidth />
        <Button title="Set Not Available" onPress={handleSetNotAvailable} variant="white" size="large" fullWidth textStyle={{ color: '#E85555' }} />

        <View style={styles.sectionDivider} />
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
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
  },
  mapCard: {
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
  mapImage: {
    height: 160,
    borderRadius: 12,
    backgroundColor: '#EEF3F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  mapPlaceTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 4,
  },
  mapPlaceSubtitle: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 8,
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
  infoItemDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 6,
  },
  infoSubText: {
    fontSize: 12,
    color: '#666666',
  },
  buttonHelper: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666666',
    marginTop: 6,
    marginBottom: 10,
  },
  guidanceLine: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 8,
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  detailsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  detailsHeaderPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#E7EFFC',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  detailsHeaderText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4A6FA5',
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  detailsMeta: {
    fontSize: 13,
    color: '#666666',
  },
  subtleNote: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 14,
  },
  guidelinesCard: {
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
  guidelinesHeader: {
    backgroundColor: '#D84D42',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  guidelinesHeaderText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'left',
  },
  guidelinesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  guidelinesCol: {
    flex: 1,
  },
  columnHeader: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
  },
  helperSubtext: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666666',
    marginTop: -6,
    marginBottom: 10,
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

export default MatchingMapScreen;
