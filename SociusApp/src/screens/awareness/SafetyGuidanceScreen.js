import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const SafetyGuidanceScreen = ({ navigation, route }) => {
  const { category, reason, query } = route.params || {};

  const handleContinue = () => {
    navigation.navigate('BeforeShare', { category, reason, query });
  };

  const handleStepAway = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>You Are Not Alone Here</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image 
          source={require('../../assets/images/awareness/03.png')} 
          style={styles.heroImage} 
          resizeMode="contain"
        />
        
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Others nearby have also seen this request.</Text>
          <Text style={styles.infoCardText}>This is shared awareness, not a solo situation.</Text>
        </View>

        <View style={styles.tipsList}>
          <View style={styles.tipItem}>
            <Icon name="map-marker" size={22} color="#C62828" style={styles.tipIcon} />
            <Text style={styles.tipText}>Stay in open, visible places</Text>
          </View>
          <View style={styles.tipDivider} />
          
          <View style={styles.tipItem}>
            <Icon name="eye" size={22} color="#546E7A" style={styles.tipIcon} />
            <Text style={styles.tipText}>Let others remain within view</Text>
          </View>
          <View style={styles.tipDivider} />

          <View style={styles.tipItem}>
            <Icon name="door-open" size={22} color="#78909C" style={styles.tipIcon} />
            <Text style={styles.tipText}>Avoid private or enclosed areas</Text>
          </View>
        </View>

        <View style={styles.sociusNoteWrap}>
          <View style={styles.hairline} />
          <Text style={styles.sociusNote}>Socius encourages visibility, not action.</Text>
          <View style={styles.hairline} />
        </View>

        <TouchableOpacity onPress={handleContinue} activeOpacity={0.8}>
          <LinearGradient
            colors={['#E53935', '#C62828']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.continueButton}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleStepAway} style={styles.stepAwayButton}>
          <Text style={styles.stepAwayText}>Step Away</Text>
        </TouchableOpacity>

        <View style={styles.bottomDivider} />
        <Text style={styles.bottomNote}>Presence does not require engagement.</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#37474F',
  },
  scrollContent: {
    padding: 24,
    alignItems: 'center',
    paddingBottom: 40,
  },
  heroImage: {
    width: '100%',
    height: 180,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#37474F',
    marginBottom: 8,
  },
  infoCardText: {
    fontSize: 14,
    color: '#546E7A',
    lineHeight: 20,
  },
  tipsList: {
    width: '100%',
    marginBottom: 32,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  tipIcon: {
    width: 32,
    textAlign: 'center',
    marginRight: 12,
  },
  tipText: {
    fontSize: 15,
    color: '#455A64',
    flex: 1,
  },
  tipDivider: {
    height: 1,
    backgroundColor: '#ECEFF1',
    marginLeft: 44,
  },
  sociusNoteWrap: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  hairline: {
    height: 1,
    backgroundColor: '#ECEFF1',
    width: '100%',
    marginBottom: 12,
  },
  sociusNote: {
    fontSize: 13,
    color: '#78909C',
    marginBottom: 12,
  },
  continueButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    minWidth: 300,
    marginBottom: 16,
    shadowColor: '#C62828',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  stepAwayButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  stepAwayText: {
    fontSize: 16,
    color: '#78909C',
    fontWeight: '600',
  },
  bottomDivider: {
    height: 1,
    backgroundColor: '#ECEFF1',
    width: '100%',
    marginBottom: 16,
  },
  bottomNote: {
    fontSize: 13,
    color: '#90A4AE',
    fontStyle: 'italic',
  },
});

export default SafetyGuidanceScreen;