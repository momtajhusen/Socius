import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking, Alert, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeHeader from '../../components/common/HomeHeader';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  const quickActions = [
    { id: 1, label: 'Unsafe walk', icon: 'walk' },
    { id: 2, label: 'Blood needed', icon: 'water-opacity' },
    { id: 3, label: 'Car issue', icon: 'car' }
  ];

  const emergencyContacts = [
    { id: 1, label: 'Police', icon: 'shield-alert', phone: '100' },
    { id: 2, label: 'Ambulance', icon: 'hospital-box', phone: '108' },
    { id: 3, label: "Women's Safety", icon: 'account-heart', phone: '1091' },
    { id: 4, label: 'Local Helpline', icon: 'phone', phone: '112' }
  ];

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleQuickAction = (action) => {
    console.log('Quick action:', action);
  };

  const handleEmergencyContact = (contact) => {
    const url = `tel:${contact.phone}`;
    Linking.openURL(url).catch(() => {
      Alert.alert(contact.label, `Dial ${contact.phone}`);
    });
  };

  const handlePresence = () => {
    console.log('Need Presence button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader 
        onSettingsPress={handleSettings} 
        onLogoPress={() => navigation.navigate('DevLauncher')}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Connected Message */}
        <Text style={styles.connectedMessage}>
          You're connected to people nearby.
        </Text>

        {/* Availability Toggle */}
        <View style={styles.availabilityContainer}>
          <TouchableOpacity
            style={[
              styles.availabilityButton,
              isAvailable && styles.availabilityButtonActive
            ]}
            onPress={() => setIsAvailable(true)}
          >
            {isAvailable && (
              <LinearGradient
                colors={['#EC6E63', '#D84D42']}
                start={{ x: 0.2, y: 0.0 }}
                end={{ x: 0.8, y: 1.0 }}
                style={styles.availabilityGradientFill}
              />
            )}
            <Text style={[
              styles.availabilityButtonText,
              isAvailable && styles.availabilityButtonTextActive
            ]}>
              Available
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.availabilityButton,
              !isAvailable && styles.availabilityButtonActive
            ]}
            onPress={() => setIsAvailable(false)}
          >
            {!isAvailable && (
              <LinearGradient
                colors={['#EC6E63', '#D84D42']}
                start={{ x: 0.2, y: 0.0 }}
                end={{ x: 0.8, y: 1.0 }}
                style={styles.availabilityGradientFill}
              />
            )}
            <Text style={[
              styles.availabilityButtonText,
              !isAvailable && styles.availabilityButtonTextActive
            ]}>
              Not Available
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.id}
              style={styles.quickActionButton}
              onPress={() => handleQuickAction(action)}
            >
              <Icon name={action.icon} size={20} color="#DC5C69" />
              <Text style={styles.quickActionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.quickActionSubtext}>
          Quick actions based on what you face often.
        </Text>

        {/* Need Presence Section */}
        <View style={styles.presenceSection}>
          <TouchableOpacity onPress={handlePresence} activeOpacity={0.9}>
            <View style={styles.presenceButtonContainer}>
              <LinearGradient
                colors={['#B93F3F', '#8E2D2D']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.presenceOuterRing}
              />
              <LinearGradient
                colors={['#EC6E63', '#D84D42']}
                start={{ x: 0.2, y: 0.0 }}
                end={{ x: 0.8, y: 1.0 }}
                style={styles.presenceInnerCircle}
              />
              <LinearGradient
                colors={['rgba(255,255,255,0.45)', 'rgba(255,255,255,0.0)']}
                start={{ x: 0.5, y: 0.0 }}
                end={{ x: 0.5, y: 0.6 }}
                style={styles.presenceGlossTop}
              />
              <LinearGradient
                colors={['rgba(0,0,0,0.18)', 'rgba(0,0,0,0.0)']}
                start={{ x: 0.5, y: 1.0 }}
                end={{ x: 0.5, y: 0.4 }}
                style={styles.presenceInnerShadow}
              />
              <View style={styles.presenceIconWrapper}>
                <Icon name="account-multiple-plus" size={64} color="#FFFFFF" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Title and Description */}
          <Text style={styles.presenceTitle}>Need Presence</Text>
          <Text style={styles.presenceSubtitle}>
            Calm local support, no escalation
          </Text>
        </View>

        {/* Emergency Contacts Grid */}
        <View style={styles.emergencyContactsContainer}>
          {emergencyContacts.map((contact) => (
            <TouchableOpacity
              key={contact.id}
              style={styles.emergencyContactButton}
              onPress={() => handleEmergencyContact(contact)}
            >
              <View style={styles.emergencyContactIconWrapper}>
                <Icon name={contact.icon} size={28} color="#DC5C69" />
              </View>
              <Text style={styles.emergencyContactLabel}>{contact.label}</Text>
            </TouchableOpacity>
          ))}
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
    paddingTop: 12,
    // paddingBottom: 180,
  },

  // ===== CONNECTED MESSAGE =====
  connectedMessage: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 26,
  },

  // ===== AVAILABILITY TOGGLE =====
  availabilityContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 3,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  availabilityButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  availabilityButtonActive: {
    backgroundColor: '#DC5C69',
  },
  availabilityGradientFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 26,
  },

  availabilityButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },

  availabilityButtonTextActive: {
    color: '#FFFFFF',
  },

  // ===== QUICK ACTIONS =====
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 12,
  },

  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  quickActionLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'left',
    marginLeft: 8,
  },

  quickActionSubtext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    letterSpacing: 0.3,
  },

  // ===== PRESENCE SECTION =====
  presenceSection: {
    alignItems: 'center',
    marginBottom: 15,
  },

  presenceButtonContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#C84242',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.35,
    shadowRadius: 22,
    elevation: 14,
    overflow: 'visible',
  },
  presenceOuterRing: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 90,
  },
  presenceInnerCircle: {
    position: 'absolute',
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
    borderRadius: 80,
  },
  presenceGlossTop: {
    position: 'absolute',
    left: 18,
    right: 18,
    top: 16,
    height: 54,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    overflow: 'hidden',
  },
  presenceInnerShadow: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 10,
    height: 60,
    width: 100,
    borderRadius: 70,
  },
  presenceIconWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  presenceTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
  },

  presenceSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },

  // ===== EMERGENCY CONTACTS GRID =====
  emergencyContactsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  emergencyContactButton: {
    width: '48%',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  emergencyContactIconWrapper: {
    marginRight: 12,
    flexShrink: 0,
  },

  emergencyContactLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    flex: 1,
  },

  // ===== SPACER =====
  spacer: {
    height: 20,
  },
});

export default HomeScreen;
