import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const HelpTypeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHelpType, setSelectedHelpType] = useState(null);

  const helpTypes = [
    { id: 1, label: 'Print / Document', icon: 'printer', color: '#5A6F7D' },
    { id: 2, label: 'Tool / Repair', icon: 'wrench', color: '#5A6F7D' },
    { id: 3, label: 'Carry / Lift', icon: 'package-variant', color: '#8B6F47' },
    { id: 4, label: 'Transport Help', icon: 'car', color: '#5A6F7D' },
    { id: 5, label: 'Language / Translation', icon: 'translate', color: '#5A6F7D' },
    { id: 6, label: 'Blood Donation', icon: 'water-opacity', color: '#C94D4D' },
    { id: 7, label: 'Elder Assistance', icon: 'human-greeting-proximity', color: '#C94D4D' },
    { id: 8, label: 'Other', icon: 'comment-multiple-outline', color: '#5A6F7D' },
  ];

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleSelectHelpType = (helpType) => {
    setSelectedHelpType(helpType.id);
  };

  const handleContinue = () => {
    if (selectedHelpType) {
      navigation.navigate('AddDetails', { helpTypeId: selectedHelpType });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onBackPress={() => navigation.goBack()}
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
          <Text style={styles.mainTitle}>What kind of help do you need?</Text>
          <Text style={styles.subtitle}>Choose something simple and local.</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={20} color="#999999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help (e.g., print, tool, lift)"
            placeholderTextColor="#999999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Help Type Grid */}
        <View style={styles.gridContainer}>
          {helpTypes.map((helpType) => (
            <TouchableOpacity
              key={helpType.id}
              style={[
                styles.helpTypeCard,
                selectedHelpType === helpType.id && styles.helpTypeCardSelected
              ]}
              onPress={() => handleSelectHelpType(helpType)}
            >
              <Icon name={helpType.icon} size={32} color={helpType.color} style={styles.cardIcon} />
              <Text style={styles.helpTypeLabel}>{helpType.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Text */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Requests should be small, time-limited, and non-monetary.</Text>
        </View>

        {/* Continue Button */}
        <Button
          title="Continue"
          onPress={handleContinue}
          fullWidth
          disabled={!selectedHelpType}
        />

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
    paddingTop: 24,
    paddingBottom: 60,
  },

  // ===== TITLE SECTION =====
  titleSection: {
    alignItems: 'center',
    marginBottom: 28,
  },

  mainTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 5,
    lineHeight: 34,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
  },

  // ===== SEARCH BAR =====
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 28,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E8EAED',
    marginBottom: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    paddingVertical: 0,
  },

  // ===== GRID CONTAINER =====
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
    marginBottom: 24,
  },

  cardIcon: {
    flexShrink: 0,
  },

  helpTypeCard: {
    width: '48%',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },

  helpTypeCardSelected: {
    borderColor: '#DC5C69',
    backgroundColor: '#FFF5F5',
    borderWidth: 2,
  },

  helpTypeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'left',
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
  },

  // ===== INFO CONTAINER =====
  infoContainer: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E8EAED',
    marginBottom: 24,
  },

  infoText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  // ===== CONTINUE BUTTON =====
  continueButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 28,
    backgroundColor: '#D89398',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },

  continueButtonDisabled: {
    backgroundColor: '#E0B0B5',
    shadowOpacity: 0.15,
  },

  continueButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ===== SPACER =====
  spacer: {
    height: 40,
  },
});

export default HelpTypeScreen;
