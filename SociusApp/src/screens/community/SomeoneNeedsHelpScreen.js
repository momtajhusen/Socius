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
        <Text style={styles.pageTitle}>Local Help Request</Text>

        

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Icon name="wrench" size={20} color="#5A6F7D" />
            <Text style={styles.summaryText}>Tool to loosen a stuck bolt</Text>
          </View>
          <View style={styles.rowDivider} />
          <View style={styles.summaryRow}>
            <Icon name="clock-outline" size={20} color="#5A6F7D" />
            <Text style={styles.summaryText}>Approx. 15 minutes</Text>
          </View>
          <View style={styles.rowDivider} />
          <View style={styles.summaryRow}>
            <Icon name="map-marker" size={20} color="#5A6F7D" />
            <Text style={styles.summaryText}>Nearby · exact location shown after acceptance</Text>
          </View>
        </View>

        <View style={styles.sectionDivider} />
        <Text style={styles.sectionHeading}>Community Trust Signals</Text>
        <View style={styles.trustCard}>
          <View style={styles.trustIconsRow}>
            <View style={[styles.trustIconCircle, { backgroundColor: '#EAF7EF' }]}>
              <Icon name="handshake-outline" size={40} color="#3DA365" />
            </View>
            <View style={[styles.trustIconCircle, { backgroundColor: '#F1F5F9' }]}>
              <Icon name="clock-outline" size={40} color="#5A6F7D" />
            </View>
            <View style={[styles.trustIconCircle, { backgroundColor: '#EEF3F6' }]}>
              <Icon name="account-group" size={40} color="#4A6FA5" />
            </View>
            <View style={[styles.trustIconCircle, { backgroundColor: '#FFF4E6' }]}>
              <Icon name="calendar-check" size={40} color="#C94D4D" />
            </View>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Icon name="information" size={18} color="#999999" />
          <Text style={styles.infoText}>These signals reflect past local interactions — not ratings or scores.</Text>
        </View>

        <Button title="Open Details" onPress={handleOpenDetails} variant="gradient" size="large" fullWidth />
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
  
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    shadowColor: '#8B3A36',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 6,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  rowDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 6,
  },
  summaryText: {
    flex: 1,
    fontSize: 14,
    color: '#2C3E50',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 12,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  trustCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 12,
    shadowColor: '#8B3A36',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 6,
  },
  trustIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trustIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#666666',
  },
});

export default SomeoneNeedsHelpScreen;
