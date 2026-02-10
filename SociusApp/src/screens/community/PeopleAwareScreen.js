import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const PeopleAwareScreen = ({ navigation }) => {
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
        <Text style={styles.title}>Who might be there</Text>
        <Text style={styles.subtitle}>Nearby people aware of your request.</Text>

        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Icon name="account" size={26} color="#DC5C69" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Ravi</Text>
            <Text style={styles.profileMeta}>Available nearby</Text>
          </View>
          <Icon name="check-circle" size={20} color="#5A6F7D" />
        </View>

        <View style={styles.profileRow}>
          <View style={[styles.avatar, { backgroundColor: '#F1EEE8' }]}>
            <Icon name="account" size={26} color="#8B6F47" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Tejal</Text>
            <Text style={styles.profileMeta}>May choose to be nearby</Text>
          </View>
          <Icon name="clock-outline" size={20} color="#999999" />
        </View>

        <View style={styles.infoBox}>
          <Icon name="information" size={20} color="#999999" />
          <Text style={styles.infoText}>
            This is not public. People decide privately whether to be nearby.
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
    marginBottom: 16,
  },
  profileRow: {
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
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },
  profileMeta: {
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

export default PeopleAwareScreen;
