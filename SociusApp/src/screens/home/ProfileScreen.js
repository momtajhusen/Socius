import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';

const ProfileScreen = ({ navigation }) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([
    'Calm presence',
    'Care & support',
  ]);

  const categories = [
    { id: 1, label: 'Calm presence' },
    { id: 2, label: 'Care & support' },
    { id: 3, label: 'Medical awareness' },
    { id: 4, label: 'Language support' },
    { id: 5, label: 'Elder assistance' },
  ];

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const toggleCategory = (label) => {
    if (selectedCategories.includes(label)) {
      setSelectedCategories(selectedCategories.filter(c => c !== label));
    } else {
      setSelectedCategories([...selectedCategories, label]);
    }
  };

  const handleSettingsControls = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Socius</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Icon name="account" size={60} color="#9E9E9E" />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Aman K.</Text>
              <Text style={styles.profileRole}>Role: Volunteer</Text>
              <View style={styles.verifiedBadge}>
                <Icon name="check-circle" size={16} color="#4CAF50" />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.profileNotice}>Your profile is visible only when you choose to share presence.</Text>
        </View>

        {/* Availability Card */}
        <View style={styles.availabilityCard}>
          <View style={styles.availabilityHeader}>
            <View>
              <Text style={styles.availabilityTitle}>Available to be aware</Text>
              <Text style={styles.availabilitySubtext}>You can change this anytime.</Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.availableButton,
                isAvailable && styles.availableButtonActive
              ]}
              onPress={() => setIsAvailable(!isAvailable)}
            >
              <Text style={[
                styles.availableButtonText,
                isAvailable ? styles.availableButtonTextActive : styles.availableButtonTextInactive
              ]}>
                {isAvailable ? 'Available' : 'Not Available'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* What I'm Open To */}
        <View style={styles.categoriesCard}>
          <Text style={styles.categoriesTitle}>What I'm open to</Text>
          
          <View style={styles.categoryGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategories.includes(category.label) && styles.categoryButtonSelected
                ]}
                onPress={() => toggleCategory(category.label)}
              >
                <Text style={[
                  styles.categoryButtonText,
                  selectedCategories.includes(category.label) && styles.categoryButtonTextSelected
                ]}>
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.categoriesHint}>This helps filter what you may see. Nothing is required.</Text>
        </View>

        {/* Verification Card */}
        <View style={styles.verificationCard}>
          <Text style={styles.verificationTitle}>Verification</Text>
          
          <View style={styles.verificationItem}>
            <Icon name="check-circle" size={18} color="#4CAF50" />
            <Text style={styles.verificationText}>Identity verified</Text>
          </View>

          <View style={styles.verificationItem}>
            <Icon name="check-circle" size={18} color="#4CAF50" />
            <Text style={styles.verificationText}>Phone verified</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.verificationLink}>View verification details</Text>
          </TouchableOpacity>
        </View>

        {/* Associations Card */}
        <View style={styles.associationsCard}>
          <Text style={styles.associationsTitle}>Associations <Text style={styles.optional}>(optional)</Text></Text>
          
          <View style={styles.associationItem}>
            <Text style={styles.associationText}>College / University</Text>
          </View>

          <View style={styles.associationItem}>
            <Text style={styles.associationText}>Mosque / Temple / Church</Text>
          </View>

          <View style={styles.associationItem}>
            <Text style={styles.associationText}>Workplace / Local group</Text>
          </View>

          <Text style={styles.associationHint}>Used only for context. Not shown publicly.</Text>
        </View>

        {/* Settings & Controls */}
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsControls}>
          <Text style={styles.settingsButtonText}>Settings & Controls</Text>
          <Icon name="chevron-right" size={22} color="#DC5C69" />
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // ===== HEADER =====
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#DC5C69',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 80,
  },

  // ===== PROFILE CARD =====
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#D0D5DD',
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 2,
  },

  profileRole: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 6,
  },

  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  verifiedText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4CAF50',
  },

  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 12,
  },

  profileNotice: {
    fontSize: 11,
    fontWeight: '500',
    color: '#999999',
    lineHeight: 20,
  },

  // ===== AVAILABILITY CARD =====
  availabilityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },

  availabilityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  availabilityTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },

  availabilitySubtext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
  },

  availableButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F2F5',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },

  availableButtonActive: {
    backgroundColor: '#DC5C69',
    borderColor: '#DC5C69',
  },

  availableButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  availableButtonTextActive: {
    color: '#FFFFFF',
  },
  availableButtonTextInactive: {
    color: '#2C3E50',
  },

  // ===== CATEGORIES CARD =====
  categoriesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },

  categoriesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 14,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },

  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F2F5',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  categoryButtonSelected: {
    backgroundColor: '#DC5C69',
    borderColor: '#DC5C69',
  },

  categoryButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2C3E50',
  },

  categoryButtonTextSelected: {
    color: '#FFFFFF',
  },

  categoriesHint: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    lineHeight: 20,
  },

  // ===== VERIFICATION CARD =====
  verificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },

  verificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },

  verificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },

  verificationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
  },

  verificationLink: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0066CC',
    marginTop: 4,
    textDecorationLine: 'underline',
  },

  // ===== ASSOCIATIONS CARD =====
  associationsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },

  associationsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },

  optional: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
  },

  associationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },

  associationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
  },

  associationHint: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    marginTop: 10,
    lineHeight: 20,
  },

  // ===== SETTINGS BUTTON =====
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },

  settingsButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    flex: 1,
    textAlign: 'center',
  },

  bottomSpacer: {
    height: 40,
  },
});

export default ProfileScreen;
