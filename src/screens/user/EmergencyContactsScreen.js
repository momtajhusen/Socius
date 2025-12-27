// src/screens/user/EmergencyContactsScreen.js
// Quick access to emergency services

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const EmergencyContactsScreen = ({ navigation }) => {
  const emergencyContacts = [
    {
      id: 'police',
      name: 'Police',
      icon: '🚓',
      number: '100',
      description: 'For immediate danger or crime',
      color: Colors.info,
    },
    {
      id: 'ambulance',
      name: 'Ambulance',
      icon: '🚑',
      number: '102',
      description: 'For medical emergencies',
      color: Colors.emergency,
    },
    {
      id: 'fire',
      name: 'Fire Services',
      icon: '🚒',
      number: '101',
      description: 'For fires and rescues',
      color: '#FF6B35',
    },
    {
      id: 'disaster',
      name: 'Disaster Management',
      icon: '🆘',
      number: '108',
      description: 'For disaster relief',
      color: Colors.warning,
    },
    {
      id: 'helpline',
      name: 'Local Emergency Helpline',
      icon: '📞',
      number: '1091',
      description: 'For community support',
      color: Colors.success,
    },
    {
      id: 'women',
      name: 'Women Support',
      icon: '👩',
      number: '1090',
      description: 'For women in distress',
      color: '#E94B3C',
    },
  ];

  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`).catch((err) =>
      console.log('Error opening phone:', err)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Emergency Contacts"
        subtitle="Quick access to emergency services"
        onBackPress={() => navigation.goBack()}
        backButton
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Info Card */}
        <Card style={styles.infoCard} shadow="medium">
          <Text style={styles.infoTitle}>Emergency? Save These Numbers</Text>
          <Text style={styles.infoText}>
            One-tap calling to reach emergency services instantly
          </Text>
        </Card>

        {/* Emergency Contacts Grid */}
        <View style={styles.contactsGrid}>
          {emergencyContacts.map((contact) => (
            <TouchableOpacity
              key={contact.id}
              onPress={() => handleCall(contact.number)}
              style={styles.contactCardWrapper}
            >
              <Card
                style={[
                  styles.contactCard,
                  { borderTopWidth: 4, borderTopColor: contact.color },
                ]}
                shadow="medium"
              >
                <Text style={styles.contactIcon}>{contact.icon}</Text>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={[styles.contactNumber, { color: contact.color }]}>
                  {contact.number}
                </Text>
                <Text style={styles.contactDescription}>
                  {contact.description}
                </Text>
                <View style={styles.callButton}>
                  <Text style={styles.callButtonText}>📞 Call</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {/* Important Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Important Information</Text>

          <Card style={styles.importantCard} shadow="small">
            <Text style={styles.importantIcon}>💡</Text>
            <Text style={styles.importantTitle}>Stay Calm</Text>
            <Text style={styles.importantText}>
              Take a deep breath and assess the situation before calling for help
            </Text>
          </Card>

          <Card style={styles.importantCard} shadow="small">
            <Text style={styles.importantIcon}>📍</Text>
            <Text style={styles.importantTitle}>Provide Location</Text>
            <Text style={styles.importantText}>
              Clearly describe your location and address to the operator
            </Text>
          </Card>

          <Card style={styles.importantCard} shadow="small">
            <Text style={styles.importantIcon}>🗣️</Text>
            <Text style={styles.importantTitle}>Speak Clearly</Text>
            <Text style={styles.importantText}>
              Describe the emergency calmly and provide all relevant details
            </Text>
          </Card>

          <Card style={styles.importantCard} shadow="small">
            <Text style={styles.importantIcon}>📞</Text>
            <Text style={styles.importantTitle}>Stay on the Line</Text>
            <Text style={styles.importantText}>
              Don't hang up. Keep communication until help arrives
            </Text>
          </Card>
        </View>

        {/* Community Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>You're Not Alone</Text>

          <Card style={styles.communityCard} shadow="small">
            <Text style={styles.communityIcon}>🤝</Text>
            <Text style={styles.communityTitle}>Community Support</Text>
            <Text style={styles.communityText}>
              In addition to these services, nearby community volunteers are always
              ready to help through our app
            </Text>
          </Card>
        </View>

        {/* Quick Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Tips</Text>

          <View style={styles.tipsContainer}>
            <View style={styles.tipItem}>
              <Text style={styles.tipNumber}>1</Text>
              <Text style={styles.tipText}>
                Save this screen to your home screen for quick access
              </Text>
            </View>
            <View style={styles.tipItem}>
              <Text style={styles.tipNumber}>2</Text>
              <Text style={styles.tipText}>
                Enable location services for faster response
              </Text>
            </View>
            <View style={styles.tipItem}>
              <Text style={styles.tipNumber}>3</Text>
              <Text style={styles.tipText}>
                Add personal emergency contacts in your profile
              </Text>
            </View>
            <View style={styles.tipItem}>
              <Text style={styles.tipNumber}>4</Text>
              <Text style={styles.tipText}>
                Share this app with friends and family for community safety
              </Text>
            </View>
          </View>
        </View>

        <View style={{ height: Spacing.marginXxl }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingXl,
  },
  infoCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
    alignItems: 'center',
  },
  infoTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
    marginBottom: Spacing.marginSm,
  },
  infoText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
  },
  contactsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginXxl,
  },
  contactCardWrapper: {
    width: '48%',
  },
  contactCard: {
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  contactIcon: {
    fontSize: 40,
    marginBottom: Spacing.marginSm,
  },
  contactName: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: Spacing.marginXs,
  },
  contactNumber: {
    ...Typography.h5,
    fontWeight: '700',
    marginBottom: Spacing.marginXs,
  },
  contactDescription: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.marginMd,
  },
  callButton: {
    backgroundColor: Colors.primary,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingSm,
    width: '100%',
    alignItems: 'center',
  },
  callButtonText: {
    ...Typography.caption,
    color: Colors.white,
    fontWeight: '600',
  },
  section: {
    marginBottom: Spacing.marginXxl,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  importantCard: {
    backgroundColor: Colors.cardBg,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.marginMd,
  },
  importantIcon: {
    fontSize: 24,
    marginRight: Spacing.marginMd,
    marginTop: Spacing.marginXs,
  },
  importantTitle: {
    ...Typography.label,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginXs,
  },
  importantText: {
    ...Typography.caption,
    color: Colors.textDark,
    flex: 1,
  },
  communityCard: {
    backgroundColor: '#F0F8FF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  communityIcon: {
    fontSize: 32,
    marginRight: Spacing.marginMd,
  },
  communityTitle: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginSm,
  },
  communityText: {
    ...Typography.caption,
    color: Colors.info,
    flex: 1,
  },
  tipsContainer: {
    gap: Spacing.gapMd,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.cardBg,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingMd,
  },
  tipNumber: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
    marginRight: Spacing.marginMd,
  },
  tipText: {
    flex: 1,
    ...Typography.caption,
    color: Colors.textDark,
  },
});

export default EmergencyContactsScreen;