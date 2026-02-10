import React from 'react';
 import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const CommunityScreen = ({ navigation }) => {
  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleRequestHelp = () => {
    navigation.navigate('HelpType');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        backButton={false}
        rightComponent={
          <TouchableOpacity onPress={handleSettings} style={{ padding: 8 }}>
            <Icon name="cog" size={24} color="#999999" />
          </TouchableOpacity>
        }
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Community</Text>
          <Text style={styles.subtitle}>Small help, close by.</Text>
        </View>

        {/* Ask for Local Help Card */}
        <View style={styles.helpCard}>
          {/* Icon Image */}
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/community/AskHelpIcon.png')}
              style={styles.helpIcon}
              resizeMode="contain"
            />
          </View>

          {/* Card Title */}
          <Text style={styles.cardTitle}>Ask for Local Help</Text>

          {/* Card Description */}
          <Text style={styles.cardDescription}>
            Request small, everyday help from people nearby.
          </Text>
          <Text style={styles.cardSubtext}>
            No money. No obligation.
          </Text>

          {/* Request Help Button */}
          <Button
            title="Request Help"
            onPress={handleRequestHelp}
            fullWidth
          />
        </View>

        {/* Local Improvements Card */}
        <View style={styles.improvementsCard}>
          <Text style={styles.improvementsTitle}>Local Improvements</Text>
          <Text style={styles.improvementsDescription}>
            Community cleanups and shared fixes. Coming soon.
          </Text>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />
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
    paddingTop: 20,
    paddingBottom: 100,
  },

  // ===== TITLE SECTION =====
  titleSection: {
    alignItems: 'center',
    marginBottom: 24,
  },

  mainTitle: {
    fontSize: 32,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 24,
  },

  // ===== HELP CARD =====
  helpCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },

  iconContainer: {
    width: 120,
    height: 100,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  helpIcon: {
    width: '200%',
    height: '110%',
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 28,
  },

  cardDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 4,
    lineHeight: 22,
  },

  cardSubtext: {
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },

  requestButton: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 26,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  requestButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ===== IMPROVEMENTS CARD =====
  improvementsCard: {
    backgroundColor: '#F8F9FA',
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

  improvementsTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
    lineHeight: 22,
  },

  improvementsDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
  },

  // ===== SPACER =====
  spacer: {
    height: 40,
  },
});

export default CommunityScreen;
