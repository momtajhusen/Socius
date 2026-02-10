import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const AwarenessProgressScreen = ({ navigation }) => {
  const handleBackHome = () => navigation.navigate('Home');

  const steps = [
    'Request shared with nearby available people',
    'No public feeds or visibility',
    'People may choose to be nearby',
    'You can cancel anytime',
  ];

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
        <View style={styles.progressHero}>
          <View style={styles.stepBadge}>
            <Icon name="radar" size={28} color="#DC5C69" />
          </View>
          <Text style={styles.title}>Awareness Progress</Text>
          <Text style={styles.subtitle}>Understanding how your request is visible locally.</Text>
        </View>

        <View style={styles.stepCard}>
          {steps.map((t, i) => (
            <View key={i} style={styles.stepRow}>
              <Icon name="check-circle" size={18} color="#5A6F7D" />
              <Text style={styles.stepText}>{t}</Text>
            </View>
          ))}
        </View>

        <View style={styles.infoBox}>
          <Icon name="information" size={20} color="#999999" />
          <Text style={styles.infoText}>
            Socius uses location only during active requests. Nothing is stored publicly.
          </Text>
        </View>

        <Button title="Back to Home" onPress={handleBackHome} fullWidth />
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
  progressHero: {
    alignItems: 'center',
    marginBottom: 16,
  },
  stepBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF0F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
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
    marginBottom: 12,
  },
  stepCard: {
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
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
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
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 22,
  },
});

export default AwarenessProgressScreen;
