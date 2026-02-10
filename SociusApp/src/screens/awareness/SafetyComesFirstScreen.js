import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SafetyComesFirstScreen = ({ navigation }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="Socius" 
        onBackPress={() => navigation.goBack()}
        style={styles.header}
        titleStyle={styles.headerTitle}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>Your Safety Comes First</Text>
        
        <Text style={styles.subtitle}>
          You are choosing to be aware — not required to act.
        </Text>

        <View style={styles.guidelinesContainer}>
          <View style={styles.guidelineItem}>
            <View style={styles.guidelineLine} />
            <Text style={styles.guidelineText}>Do not intervene or confront anyone.</Text>
            <View style={styles.guidelineLine} />
          </View>
          
          <View style={styles.guidelineItem}>
            <Text style={styles.guidelineText}>Leave immediately if you feel unsafe.</Text>
            <View style={styles.guidelineLine} />
          </View>
          
          <View style={styles.guidelineItem}>
            <Text style={styles.guidelineText}>Contact authorities if the situation escalates.</Text>
          </View>
        </View>

        {/* Action Cards */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Icon name="eye-outline" size={32} color="#34495E" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Observe Only</Text>
              <Text style={styles.cardDescription}>Stay aware, keep distance.</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Icon name="door-open" size={32} color="#5D6D7E" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Leave Anytime</Text>
              <Text style={styles.cardDescription}>You can exit without explanation.</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Icon name="phone-in-talk" size={32} color="#5D6D7E" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Call Authorities</Text>
              <Text style={styles.cardDescription}>If anything feels unsafe.</Text>
            </View>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* Buttons */}
        <Button 
          title="Continue" 
          onPress={() => navigation.navigate('NearbyMap')} // Assuming flow continues to map
          variant="primary"
          fullWidth
          style={styles.continueButton}
        />
        
        <Button 
          title="I'm Not Available" 
          onPress={() => navigation.goBack()} 
          variant="outline"
          fullWidth
          style={styles.notAvailableButton}
          textStyle={styles.notAvailableText}
        />
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
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: '#A83A30', // Red color for Socius
    fontSize: 20,
    fontWeight: '700',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
    marginBottom: 24,
  },
  guidelinesContainer: {
    width: '100%',
    marginBottom: 32,
  },
  guidelineItem: {
    alignItems: 'center',
    width: '100%',
  },
  guidelineLine: {
    height: 1,
    backgroundColor: '#F0F0F0',
    width: '100%',
    marginVertical: 12,
  },
  guidelineText: {
    fontSize: 15,
    color: '#4A5568',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  cardsContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 32,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EEE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#7F8C8D',
  },
  spacer: {
    flex: 1,
  },
  continueButton: {
    backgroundColor: '#D3453D',
    borderRadius: 30,
    marginBottom: 12,
    shadowColor: '#D3453D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  notAvailableButton: {
    borderRadius: 30,
    borderColor: '#E0E0E0',
    backgroundColor: '#F8F9FA',
  },
  notAvailableText: {
    color: '#5D6D7E',
    fontWeight: '600',
  },
});

export default SafetyComesFirstScreen;
