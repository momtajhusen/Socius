import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const StatusSharedScreen = ({ navigation }) => {
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
          <View style={styles.radarWrap}>
            <View style={[styles.radarRing, { width: 72, height: 72, borderRadius: 36, opacity: 0.25 }]} />
            <View style={[styles.radarRing, { width: 52, height: 52, borderRadius: 26, opacity: 0.35 }]} />
            <View style={[styles.radarRing, { width: 34, height: 34, borderRadius: 17, opacity: 0.45 }]} />
            <View style={styles.radarDot} />
          </View>
          <Text style={styles.statusTitle}>Status Shared</Text>
          <Text style={styles.statusSubtitle}>The requester has been informed that someone is nearby.</Text>
        </View>

        <View style={styles.centerTextBlock}>
          <Text style={styles.centerLine}>This does not commit you to arrive.</Text>
          <Text style={styles.centerLine}>You may step away at any time.</Text>
          <Text style={styles.centerLine}>No response is expected.</Text>
        </View>

        <View style={styles.bulletCard}>
          <View style={styles.bulletRow}>
            <Icon name="circle" size={8} color="#9AA3AB" />
            <Text style={styles.bulletText}>You remain anonymous until you choose otherwise.</Text>
          </View>
          <View style={styles.bulletRow}>
            <Icon name="circle" size={8} color="#9AA3AB" />
            <Text style={styles.bulletText}>No location is shared beyond awareness.</Text>
          </View>
          <View style={styles.bulletRow}>
            <Icon name="circle" size={8} color="#9AA3AB" />
            <Text style={styles.bulletText}>The requester may still contact authorities.</Text>
          </View>
        </View>

        <Button title="View Incident Details" onPress={() => navigation.navigate('MatchingMap')} variant="gradient" size="large" fullWidth />
        <Button title="Step Away" onPress={() => navigation.navigate('SteppedAway')} variant="white" size="large" fullWidth />
        <Button title="Set Not Available" onPress={() => navigation.navigate('Availability')} variant="white" size="large" fullWidth />

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>Socius shares information only.</Text>
          <Text style={styles.footerNoteText}>All actions are voluntary and independent.</Text>
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
  radarWrap: {
    width: 88,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  radarRing: {
    position: 'absolute',
    borderWidth: 10,
    borderColor: '#FF9FA4',
    borderRadius: 999,
  },
  radarDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#D84D42',
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
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
  bulletCard: {
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

export default StatusSharedScreen;
