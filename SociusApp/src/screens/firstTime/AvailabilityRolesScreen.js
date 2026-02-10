import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const AvailabilityRolesScreen = ({ navigation }) => {
  const cards = [
    {
      title: 'You can use Socius in different ways',
      description: 'You may use Socius to ask for awareness or choose to be available for others — or both.'
    },
    {
      title: 'Availability is optional',
      description: 'You decide when you are available. There is no obligation to respond to any request.'
    },
    {
      title: 'You stay in control',
      description: 'You can switch availability on or off at any time, without explanation or penalty.'
    }
  ];

  const bulletPoints = [
    'No obligation',
    'No penalties',
    'No expectations'
  ];

  const handleUnderstand = () => {
    navigation.navigate('BeingAvailable');
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Header */}
        <View style={styles.headerSection}>
          <View style={styles.logoIcon}>
            <Icon name="account-multiple" size={28} color="#DC5C69" />
          </View>
          <Text style={styles.logoText}>Socius</Text>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Availability & Roles</Text>
          <Text style={styles.subtitle}>How participation works on Socius</Text>
        </View>

        {/* Cards Container */}
        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <View style={styles.cardDivider} />
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
          ))}
        </View>

        {/* Bullet Points Card */}
        <View style={styles.bulletCard}>
          {bulletPoints.map((point, index) => (
            <View key={index} style={styles.bulletRow}>
              <View style={styles.bulletPoint} />
              <Text style={styles.bulletText}>{point}</Text>
            </View>
          ))}
        </View>

        {/* Understand Button */}
        <Button
          title="I Understand"
          onPress={handleUnderstand}
          variant="primary"
          fullWidth
        />

        {/* Footer Text */}
        <Text style={styles.footerText}>
          Socius never assigns responsibility or expects action.
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

  // ===== HEADER SECTION =====
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },

  logoIcon: {
    marginRight: 8,
  },

  logoText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#DC5C69',
  },

  // ===== TITLE SECTION =====
  titleSection: {
    marginBottom: 28,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2C3E50',
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

  // ===== CARDS CONTAINER =====
  cardsContainer: {
    marginBottom: 16,
    gap: 12,
  },

  card: {
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 12,
    lineHeight: 20,
  },

  cardDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginBottom: 12,
  },

  cardDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    lineHeight: 20,
  },

  // ===== BULLET POINTS CARD =====
  bulletCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2C3E50',
    marginRight: 12,
  },

  bulletText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    lineHeight: 20,
  },

  // ===== UNDERSTAND BUTTON =====
  understandButton: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },

  understandButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ===== FOOTER TEXT =====
  footerText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#888888',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default AvailabilityRolesScreen;
