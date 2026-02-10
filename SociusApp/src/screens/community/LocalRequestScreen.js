import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const LocalRequestScreen = ({ navigation }) => {
  const handleOpenDetails = () => navigation.navigate('ReviewRequest');
  const handleStayAway = () => navigation.navigate('StayAway');

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
        <Text style={styles.title}>Local help nearby?</Text>
        <Text style={styles.subtitle}>A short request around your area.</Text>

        <View style={styles.requestCard}>
          <Text style={styles.requestLabel}>Nearby request</Text>
          <View style={styles.requestRow}>
            <Icon name="printer" size={22} color="#DC5C69" />
            <Text style={styles.requestText}>Need a quick printout near the bus stop</Text>
          </View>
          <View style={styles.metaRow}>
            <Icon name="map-marker" size={18} color="#999999" />
            <Text style={styles.metaText}>Approximate location, visible temporarily</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Icon name="information" size={20} color="#999999" />
          <Text style={styles.infoText}>
            You can choose to open details or stay away. There’s no obligation.
          </Text>
        </View>

        <Button title="Open Details" onPress={handleOpenDetails} fullWidth />
        <Button title="Stay Away" onPress={handleStayAway} variant="white" fullWidth />
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 14,
  },
  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  requestLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },
  requestRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 8,
    marginBottom: 10,
  },
  requestText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    lineHeight: 22,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 13,
    color: '#666666',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 22,
  },
});

export default LocalRequestScreen;
