import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const SomeoneNeedsHelpScreen = ({ navigation }) => {
  const handleOpenDetails = () => navigation.navigate('MatchingMap');
  const handleNotAvailable = () => navigation.navigate('Availability');

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
        <Text style={styles.pageTitle}>Someone Nearby Needs Help</Text>

        <View style={styles.personCard}>
          <View style={styles.avatar}>
            <Icon name="account" size={28} color="#8C9199" />
          </View>
          <View style={styles.personInfo}>
            <Text style={styles.personName}>Rahul</Text>
            <Text style={styles.personMeta}>Nearby · Shared voluntarily</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Request Summary</Text>
          <View style={styles.summaryRow}>
            <Icon name="wrench" size={18} color="#5A6F7D" />
            <Text style={styles.summaryText}>Need a wrench to loosen a stuck bolt</Text>
          </View>
          <View style={styles.summaryRow}>
            <Icon name="clock-outline" size={18} color="#5A6F7D" />
            <Text style={styles.summaryText}>About 15 minutes</Text>
          </View>
          <View style={styles.summaryRow}>
            <Icon name="map-marker" size={18} color="#5A6F7D" />
            <Text style={styles.summaryText}>Exact spot shown after you continue</Text>
          </View>
        </View>

        <View style={styles.badgeList}>
          <View style={[styles.badgePill, { backgroundColor: '#E6F5EA', borderColor: '#CBE9D5' }]}>
            <Icon name="check-circle" size={18} color="#3DA365" />
            <Text style={styles.badgeText}>Usually closes requests properly</Text>
          </View>
          <View style={[styles.badgePill, { backgroundColor: '#E6F3F5', borderColor: '#CBE5EA' }]}>
            <Icon name="check-circle" size={18} color="#3D9FA3" />
            <Text style={styles.badgeText}>Returns borrowed items on time</Text>
          </View>
          <View style={[styles.badgePill, { backgroundColor: '#E7EFFC', borderColor: '#CCDBF6' }]}>
            <Icon name="check-circle" size={18} color="#5477C8" />
            <Text style={styles.badgeText}>Also helps others when available</Text>
          </View>
        </View>

        <View style={styles.noteWrap}>
          <Text style={styles.noteText}>These are based on past local interactions — not ratings.</Text>
        </View>

        <Button title="View Location & Details" onPress={handleOpenDetails} variant="gradient" size="large" fullWidth />
        <Button title="Not Available" onPress={handleNotAvailable} variant="white" size="large" fullWidth />
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
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
  },
  personCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF3F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },
  personMeta: {
    fontSize: 13,
    color: '#666666',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  summaryText: {
    flex: 1,
    fontSize: 14,
    color: '#2C3E50',
  },
  badgeList: {
    gap: 10,
    marginBottom: 14,
  },
  badgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 14,
    color: '#2C3E50',
  },
  noteWrap: {
    marginBottom: 12,
  },
  noteText: {
    fontSize: 12,
    color: '#666666',
  },
});

export default SomeoneNeedsHelpScreen;
