import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';

const CommunityAroundScreen = ({ navigation }) => {
  const presenceTypes = [
    { label: 'Calm presence', icon: 'meditation', color: '#5A6F7D', bg: '#EEF3F6' },
    { label: 'Care & support', icon: 'hand-heart', color: '#8B6F47', bg: '#F1EEE8' },
    { label: 'Medical awareness', icon: 'medical-bag', color: '#C94D4D', bg: '#F8EAEA' },
    { label: 'Language support', icon: 'translate', color: '#5A6F7D', bg: '#EEF3F6' },
    { label: 'Elder assistance', icon: 'human-greeting-proximity', color: '#C94D4D', bg: '#F8EAEA' },
    { label: 'Community upkeep', icon: 'home-heart', color: '#8B6F47', bg: '#F1EEE8' },
  ];

  const guidelines = [
    'Voluntary participation',
    'No public activity',
    'No confrontation',
    'Respect and restraint',
  ];

  const handleReadGuidelines = () => {
    navigation.navigate('CommunityPrinciples');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Socius" onBackPress={() => navigation.goBack()} style={{ borderBottomWidth: 0 }} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Community Around You</Text>
        <Text style={styles.pageSubtitle}>Awareness without exposure.</Text>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Local awareness network</Text>
          <View style={styles.cardDivider} />
          <Text style={styles.cardText}>
            Socius helps people stay aware and supportive without public feeds, groups, or coordination.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Types of presence nearby</Text>
        <View style={styles.grid}>
          {presenceTypes.map((item, idx) => (
            <View key={idx} style={styles.gridItem}>
              <View style={[styles.iconCircle, { backgroundColor: item.bg }]}>
                <Icon name={item.icon} size={24} color={item.color} />
              </View>
              <Text style={styles.gridLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>How this community works</Text>
          <View style={styles.cardDivider} />

          <View style={styles.pointsContainer}>
            {guidelines.map((text, i) => (
              <View key={i} style={styles.pointRow}>
                <Icon name="check-circle" size={18} color="#5A6F7D" />
                <Text style={styles.pointText}>{text}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.linkRow} onPress={handleReadGuidelines}>
            <Text style={styles.linkText}>Read community guidelines</Text>
            <Icon name="chevron-right" size={20} color="#DC5C69" />
          </TouchableOpacity>
        </View>

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>
            There are no feeds, rankings, or visibility of individuals.
          </Text>
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 18,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
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
  cardText: {
    fontSize: 13,
    color: '#2C3E50',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    marginBottom: 16,
  },
  gridItem: {
    width: '31.5%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gridLabel: {
    fontSize: 13,
    color: '#2C3E50',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  pointsContainer: {
    marginBottom: 8,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 8,
  },
  pointText: {
    fontSize: 13,
    color: '#2C3E50',
    lineHeight: 20,
    flex: 1,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC5C69',
  },
  footerNote: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
  },
  footerNoteText: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
  },
});

export default CommunityAroundScreen;
