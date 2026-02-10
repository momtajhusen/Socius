import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { LinearGradient } from 'expo-linear-gradient';

const SteppedAwayScreen = ({ navigation }) => {
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
          <LinearGradient
            colors={['#EEF2F6', '#E5EAEE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.statusIcon}
          >
            <Icon name="pause" size={28} color="#8C9199" />
          </LinearGradient>
          <Text style={styles.statusTitle}>You Can Step Away</Text>
          <Text style={styles.statusSubtitle}>No explanation is required.</Text>
        </View>

        <View style={styles.centerTextBlock}>
          <Text style={styles.centerLine}>You are not required to continue.</Text>
          <Text style={styles.centerLine}>You are not expected to explain.</Text>
          <Text style={styles.centerLine}>Your safety and comfort come first.</Text>
        </View>

        <View style={styles.bulletCard}>
          <View style={styles.bulletRow}>
            <Icon name="circle" size={8} color="#9AA3AB" />
            <Text style={styles.bulletText}>You are removed from this awareness.</Text>
          </View>
          <View style={styles.bulletRow}>
            <Icon name="circle" size={8} color="#9AA3AB" />
            <Text style={styles.bulletText}>The requester is not notified of your exit.</Text>
          </View>
          <View style={styles.bulletRow}>
            <Icon name="circle" size={8} color="#9AA3AB" />
            <Text style={styles.bulletText}>Others may still see the awareness.</Text>
          </View>
        </View>

        <View style={styles.guidanceBlock}>
          <Text style={styles.guidanceLine}>If a situation feels unclear or unsafe,</Text>
          <Text style={styles.guidanceLine}>stepping away is the right choice.</Text>
        </View>

        <Button title="Return to Home" onPress={handleBackHome} variant="gradient" size="large" fullWidth />
        <Button title="Set Not Available" onPress={handleSetNotAvailable} variant="white" size="large" fullWidth />

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>Socius does not assign responsibility.</Text>
          <Text style={styles.footerNoteText}>Participation is always voluntary.</Text>
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
  guidanceBlock: {
    alignItems: 'center',
    marginBottom: 12,
  },
  guidanceLine: {
    fontSize: 13,
    color: '#666666',
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

export default SteppedAwayScreen;
