import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HighRiskAreaScreen = ({ navigation }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="High-Risk Area Detected" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 0 }}
        titleStyle={{ fontSize: 16 }}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../../assets/images/awareness/06.png')}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        {/* Warning Card */}
        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>This location may not be safe for civilian presence.</Text>
          <Text style={styles.warningSubtitle}>Isolation, time, or environment increases risk.</Text>
        </View>

        {/* What this means Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardHeader}>What this means</Text>
          <View style={styles.divider} />
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="eye-outline" size={18} color="#5D6D7E" />
            </View>
            <Text style={styles.listItemText}>Limited visibility</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="map-marker-outline" size={18} color="#5D6D7E" />
            </View>
            <Text style={styles.listItemText}>Few people nearby</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="shield-alert-outline" size={18} color="#5D6D7E" />
            </View>
            <Text style={styles.listItemText}>Higher personal risk</Text>
          </View>
        </View>

        {/* Recommended Options Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardHeader}>Recommended options</Text>
          <View style={styles.divider} />
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="account" size={18} color="#5D6D7E" />
            </View>
            <Text style={styles.listItemText}>Do not approach alone</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="phone-in-talk" size={18} color="#5D6D7E" />
            </View>
            <Text style={styles.listItemText}>Use emergency contacts instead</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="police-badge" size={18} color="#5D6D7E" />
            </View>
            <Text style={styles.listItemText}>Let authorities handle it</Text>
          </View>
        </View>

        <View style={styles.dividerFull} />

        <Text style={styles.decisionNote}>
          Choosing not to go is a responsible decision.
        </Text>

        <View style={styles.actionContainer}>
          <Button 
            title="Contact Emergency Services" 
            onPress={() => navigation.navigate('EmergencyHelp')} 
            variant="emergency"
            fullWidth
            style={styles.emergencyButton}
          />
          
          <Button 
            title="Step Back" 
            onPress={() => navigation.goBack()} 
            variant="white"
            fullWidth
            style={styles.stepBackButton}
          />
        </View>

        <Text style={styles.footerNote}>
          Socius does not expect civilian presence in high-risk locations.
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
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  illustrationContainer: {
    width: '100%',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  warningCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },
  warningSubtitle: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EAECEE',
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  iconBox: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemText: {
    fontSize: 15,
    color: '#5D6D7E',
    flex: 1,
  },
  dividerFull: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  decisionNote: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
    marginBottom: 20,
  },
  actionContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 16,
  },
  emergencyButton: {
    backgroundColor: '#D3453D', // Emergency Red
    borderRadius: 30,
  },
  stepBackButton: {
    borderRadius: 30,
  },
  footerNote: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HighRiskAreaScreen;
