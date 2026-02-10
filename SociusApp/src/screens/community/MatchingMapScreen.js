import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const MatchingMapScreen = ({ navigation }) => {
  const handleOpenNavigation = () => navigation.navigate('NearbyMap');
  const handleNearby = () => navigation.navigate('PeopleAware');
  const handleStepAway = () => navigation.navigate('SteppedAway');

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
        <Text style={styles.pageTitle}>Meeting Details</Text>

        <View style={styles.mapCard}>
          <View style={styles.mapImage}>
            <Icon name="map-marker" size={40} color="#DC5C69" />
          </View>
          <Text style={styles.mapPlaceTitle}>Downtown Plaza</Text>
          <Text style={styles.mapPlaceSubtitle}>Location shared voluntarily for this request only.</Text>
        </View>

        <View style={styles.sectionDivider} />

        <View style={styles.whereCard}>
          <View style={styles.whereHeader}>
            <Text style={styles.whereTitle}>Where to Find Them</Text>
            <Icon name="office-building" size={24} color="#5A6F7D" />
          </View>
          <Text style={styles.whereBody}>
            Standing near the main entrance, beside the security desk.
          </Text>
        </View>

        <View style={styles.peopleRow}>
          <View style={styles.personCard}>
            <View style={styles.personPhoto}>
              <Icon name="account" size={48} color="#8C9199" />
            </View>
            <Text style={styles.personName}>Rahul</Text>
            <Text style={styles.personRole}>Requested help</Text>
          </View>
          <View style={styles.personCard}>
            <View style={styles.personPhoto}>
              <Icon name="account" size={48} color="#8C9199" />
            </View>
            <Text style={styles.personName}>Sarah</Text>
            <Text style={styles.personRole}>You</Text>
          </View>
        </View>

        <View style={styles.cautionCard}>
          <Icon name="information-outline" size={20} color="#9B6F3A" />
          <Text style={styles.cautionText}>
            You are not required to stay, speak, or proceed if you feel uncomfortable.
          </Text>
        </View>

        <Button title="Open Navigation" onPress={handleOpenNavigation} variant="gradient" size="large" fullWidth />
        <Text style={styles.buttonHelper}>Opens your maps app</Text>

        <View style={styles.bottomActions}>
          <TouchableOpacity onPress={handleNearby} activeOpacity={0.85}>
            <Text style={styles.bottomActionText}>I'm Nearby</Text>
          </TouchableOpacity>
          <View style={styles.bottomDivider} />
          <TouchableOpacity onPress={handleStepAway} activeOpacity={0.85}>
            <Text style={styles.bottomActionText}>Step Away</Text>
          </TouchableOpacity>
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
  whereCard: {
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
  whereHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  whereTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A83A30',
  },
  whereBody: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 22,
  },
  peopleRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  personCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  personPhoto: {
    width: '100%',
    height: 110,
    borderRadius: 12,
    backgroundColor: '#EEF3F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  personName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 2,
  },
  personRole: {
    fontSize: 12,
    color: '#666666',
  },
  cautionCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#F6EFE6',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
  },
  cautionText: {
    flex: 1,
    fontSize: 13,
    color: '#2C3E50',
    lineHeight: 20,
  },
  buttonHelper: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666666',
    marginTop: 6,
    marginBottom: 10,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  bottomDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#E8EAED',
  },
  bottomActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
  },
});

export default MatchingMapScreen;
