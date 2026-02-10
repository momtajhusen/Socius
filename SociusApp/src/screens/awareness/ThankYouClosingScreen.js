import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const ThankYouClosingScreen = ({ navigation }) => {
  const [selectedOutcome, setSelectedOutcome] = useState(null);
  const [feedback, setFeedback] = useState('');

  const outcomes = [
    'Resolved calmly',
    'No longer needed',
    'Chose another option',
    'Still concerned',
  ];

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="Socius" 
        onBackPress={() => navigation.goBack()} 
        backIcon="close"
        style={{ borderBottomWidth: 1 }}
        titleStyle={{ fontSize: 18, fontWeight: '600', color: '#5D6D7E' }}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.mainTitle}>Thanks for closing this.</Text>
          <Text style={styles.subTitle}>
            Your input helps keep the community calm and respectful.
          </Text>
        </View>

        {/* Outcome Selection */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How did this situation end?</Text>
          <View style={styles.chipContainer}>
            {outcomes.map((outcome) => (
              <TouchableOpacity
                key={outcome}
                style={[
                  styles.chip,
                  selectedOutcome === outcome && styles.chipSelected
                ]}
                onPress={() => setSelectedOutcome(outcome)}
              >
                <Text style={[
                  styles.chipText,
                  selectedOutcome === outcome && styles.chipTextSelected
                ]}>
                  {outcome}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Feedback Input */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Anything you want to share? <Text style={styles.optionalText}>(optional)</Text></Text>
          <TextInput
            style={styles.textInput}
            placeholder="Short feedback helps improve the platform"
            placeholderTextColor="#95A5A6"
            value={feedback}
            onChangeText={setFeedback}
            multiline
          />
          <Text style={styles.helperText}>Please avoid names or accusations.</Text>
        </View>

        {/* Info Cards */}
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>If you're still concerned</Text>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>Consider contacting local authorities.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>Reach out to someone you trust.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>You can start a new request anytime.</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>For volunteers</Text>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>You can step back now.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>No further action is expected.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>Thank you for being aware.</Text>
          </View>
        </View>

        <Button 
          title="Return to Home" 
          onPress={() => navigation.navigate('HomeScreen')} 
          variant="primary"
          fullWidth
          style={styles.returnButton}
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4A5568',
    marginBottom: 8,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 16,
    textAlign: 'center',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F7F9FC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: '48%', // Approx half width
    alignItems: 'center',
  },
  chipSelected: {
    backgroundColor: '#EBF5FF',
    borderColor: '#4299E1',
  },
  chipText: {
    fontSize: 13,
    color: '#4A5568',
    textAlign: 'center',
  },
  chipTextSelected: {
    color: '#2B6CB0',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 10,
  },
  optionalText: {
    color: '#A0AEC0',
    fontWeight: '400',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    height: 60,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#2D3748',
    marginBottom: 8,
  },
  helperText: {
    fontSize: 12,
    color: '#718096',
    fontStyle: 'italic',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 12,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#4A5568',
    marginRight: 8,
    lineHeight: 20,
  },
  bulletText: {
    fontSize: 14,
    color: '#4A5568',
    flex: 1,
    lineHeight: 20,
  },
  returnButton: {
    marginTop: 16,
    borderRadius: 30,
    backgroundColor: '#D3453D',
  },
});

export default ThankYouClosingScreen;
