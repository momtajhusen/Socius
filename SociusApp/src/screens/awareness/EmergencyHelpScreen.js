import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const EmergencyHelpScreen = ({ navigation }) => {
  
  const handleCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber).catch(err => console.error('Error launching dialer', err));
  };

  const EmergencyOption = ({ icon, title, onPress, iconColor = "#E74C3C" }) => (
    <TouchableOpacity style={styles.optionCard} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={32} color={iconColor} />
      </View>
      <Text style={styles.optionText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="Emergency Help" 
        onBackPress={() => navigation.goBack()}
        style={styles.header}
        titleStyle={styles.headerTitle}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Warning Card */}
        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>Socius does not replace emergency services.</Text>
          <View style={styles.divider} />
          <Text style={styles.warningText}>
            If someone is in immediate danger, contact official emergency services directly.
          </Text>
        </View>

        {/* Emergency Options */}
        <View style={styles.optionsContainer}>
          <EmergencyOption 
            icon="police-badge" 
            title="Police" 
            iconColor="#2C3E50" // Dark Blue for Police
            onPress={() => handleCall('100')} 
          />
          <EmergencyOption 
            icon="ambulance" 
            title="Ambulance / Medical Emergency" 
            iconColor="#E74C3C" // Red for Ambulance
            onPress={() => handleCall('102')} 
          />
          <EmergencyOption 
            icon="face-woman" 
            title="Women's Safety Helpline" 
            iconColor="#E91E63" // Pink for Women's Safety
            onPress={() => handleCall('1091')} 
          />
          <EmergencyOption 
            icon="phone" 
            title="Local Emergency Helpline" 
            iconColor="#E74C3C" // Red for General
            onPress={() => handleCall('112')} 
          />
        </View>

        {/* Bottom Card */}
        <View style={styles.bottomCard}>
          <Text style={styles.bottomText}>
            If the situation is not urgent, you may also choose to share awareness with nearby community members.
          </Text>
          <View style={styles.divider} />
          <Button 
            title="Return to Socius" 
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.returnButton}
            textStyle={styles.returnButtonText}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#34495E',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  warningCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 2,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  warningText: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    flex: 1,
  },
  bottomCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bottomText: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
    marginBottom: 16,
  },
  returnButton: {
    backgroundColor: '#E74C3C',
    borderRadius: 8,
    marginTop: 8,
  },
  returnButtonText: {
    fontWeight: '700',
  },
});

export default EmergencyHelpScreen;
