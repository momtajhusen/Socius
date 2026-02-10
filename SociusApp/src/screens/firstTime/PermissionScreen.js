import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';

const PermissionRequiredScreen = ({ navigation }) => {
  const bulletPoints = [
    'Shared only during active requests',
    'Never tracked in the background',
    'Can be turned off anytime'
  ];

  const handleAllowPermission = () => {
    navigation.navigate('EmergencyContacts');
  };

  const handleNotNow = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Header */}
        <View style={styles.logoSection}>
          <View style={styles.logoIcon}>
            <Icon name="account-multiple" size={24} color="#DC5C69" />
          </View>
          <Text style={styles.logoText}>Socius</Text>
        </View>

        {/* Divider */}
        <View style={styles.headerDivider} />

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Permission Required</Text>
          <Text style={styles.subtitle}>To help Socius work when you choose</Text>
        </View>

        {/* Location Card */}
        <View style={styles.locationCard}>
          <View style={styles.iconContainerLarge}>
            <Icon name="map-marker" size={48} color="#999999" />
          </View>

          <Text style={styles.cardTitle}>
            Socius uses your location only {"\n"} when you request awareness.
          </Text>

          {/* Bullet Points */}
          <View style={styles.bulletContainer}>
            {bulletPoints.map((point, index) => (
              <View key={index} style={styles.bulletRow}>
                <View style={styles.bulletPoint} />
                <Text style={styles.bulletText}>{point}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Allow Permission Button */}
        <Button
          title="Allow Permission"
          onPress={handleAllowPermission}
          variant="gradient"
          fullWidth
        />

        {/* Not Now Button */}
        <Button
          title="Not now"
          onPress={handleNotNow}
          variant="link"
        />

        {/* Footer Text */}
        <Text style={styles.footerText}>
          You remain in control at all times.
        </Text>
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
    paddingHorizontal: 16,
    paddingTop: 35,
    paddingBottom: 30,
  },

  // ===== LOGO SECTION =====
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  logoIcon: {
    marginRight: 8,
  },

  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#999999',
  },

  // ===== HEADER DIVIDER =====
  headerDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginBottom: 32,
  },

  // ===== TITLE SECTION =====
  titleSection: {
    alignItems: 'center',
    marginBottom: 32,
  },

  mainTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#555555',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 32,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#888888',
    textAlign: 'center',
    lineHeight: 22,
  },

  // ===== LOCATION CARD =====
  locationCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EAED',
    marginBottom: 28,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  iconContainerLarge: {
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 18,
  },

  // ===== BULLET POINTS =====
  bulletContainer: {
    width: '100%',
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2C3E50',
    marginRight: 12,
    marginTop: 7,
  },

  bulletText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    lineHeight: 20,
    flex: 1,
  },

  // ===== SPACER =====
  spacer: {
    flex: 1,
    minHeight: 20,
  },

  // ===== ALLOW BUTTON =====
  allowButton: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },

  allowButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ===== NOT NOW BUTTON =====
  notNowButton: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  notNowText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#888888',
    textDecorationLine: 'underline',
  },

  // ===== FOOTER TEXT =====
  footerText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888888',
    textAlign: 'center',
    lineHeight: 21,
  },
});

export default PermissionRequiredScreen;
