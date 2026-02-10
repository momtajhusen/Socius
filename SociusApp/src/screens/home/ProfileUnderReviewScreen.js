import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileUnderReviewScreen = ({ navigation }) => {
  const handleRequestReview = () => {
    navigation.navigate('RequestReview');
  };
  const handleContactSupport = () => {
    navigation.navigate('HelpSupport');
  };

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
        <View style={styles.heroIconWrap}>
          <LinearGradient
            colors={['#F2F4F7', '#E3E7EB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroIcon}
          >
            <Icon name="timer-sand" size={30} color="#D84D42" />
          </LinearGradient>
        </View>

        <Text style={styles.title}>Account Under Review</Text>
        <Text style={styles.subtitle}>Your account access is temporarily limited.</Text>
        <View style={styles.divider} />
        <Text style={styles.helperText}>
          This happens when activity requires review to keep the community safe and fair.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>What’s happening</Text>
          <View style={styles.cardDivider} />
          <View style={styles.pointRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.pointText}>Some features are paused.</Text>
          </View>
          <View style={styles.pointRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.pointText}>Your account is <Text style={styles.emphasis}>not deleted</Text>.</Text>
          </View>
          <View style={styles.pointRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.pointText}>No action is required right now.</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>What happens next</Text>
          <View style={styles.cardDivider} />
          <View style={styles.pointRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.pointText}>A human review will take place.</Text>
          </View>
          <View style={styles.pointRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.pointText}>You may be contacted if clarification is needed.</Text>
          </View>
          <View style={styles.pointRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.pointText}>Reviews take time — <Text style={styles.emphasis}>thank you for your patience</Text>.</Text>
          </View>
        </View>

        <Button title="Request Review" onPress={handleRequestReview} variant="gradient" size="large" fullWidth />

        <TouchableOpacity onPress={handleContactSupport} style={styles.linkCenter} activeOpacity={0.85}>
          <Text style={styles.linkText}>Contact Support</Text>
        </TouchableOpacity>

        <View style={styles.footNote}>
          <Text style={styles.footText}>Limits are applied to patterns, not single moments.</Text>
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
  },
  heroIconWrap: {
    alignItems: 'center',
    marginBottom: 10,
  },
  heroIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 12,
  },
  helperText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 14,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 10,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    color: '#8C9199',
    lineHeight: 18,
  },
  pointText: {
    flex: 1,
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
  },
  emphasis: {
    fontWeight: '700',
    color: '#2C3E50',
  },
  linkCenter: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  linkText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2B6CB0',
  },
  footNote: {
    alignItems: 'center',
    marginTop: 4,
  },
  footText: {
    fontSize: 13,
    color: '#999999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default ProfileUnderReviewScreen;
