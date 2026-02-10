import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SomeoneConcernScreen = ({ navigation }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="Socius" 
        onBackPress={() => navigation.goBack()}
        style={styles.header}
        titleStyle={styles.headerTitle}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Main Alert Card */}
        <View style={styles.alertCard}>
          <View style={styles.cardHeaderRow}>
            <Icon name="information" size={24} color="#A93226" style={styles.icon} />
            <Text style={styles.cardTitle}>Someone nearby shared a concern</Text>
          </View>
          
          <Text style={styles.cardSubtitle}>
            This is an awareness alert. You are not required to respond.
          </Text>
          
          <View style={styles.divider} />
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Situation:</Text>
            <Text style={styles.detailValue}>Being followed</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Note:</Text>
            <Text style={styles.detailValue}>Walking alone, feels uncomfortable</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Approximate area:</Text>
            <Text style={styles.detailValue}>Within ~500 m of your location</Text>
          </View>
        </View>

        {/* Action Prompt */}
        <Text style={styles.promptText}>
          If you are nearby and feel safe, you may choose to view more details.
        </Text>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.viewDetailsButton}
            onPress={() => navigation.navigate('SafetyComesFirst')}
          >
            <Text style={styles.viewDetailsText}>View details</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.ignoreButton}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text style={styles.ignoreText}>Ignore</Text>
          </TouchableOpacity>
        </View>

        {/* Reminder Card */}
        <View style={styles.reminderCard}>
          <View style={styles.cardHeaderRow}>
            <Icon name="alert-circle" size={24} color="#A93226" style={styles.icon} />
            <Text style={styles.reminderTitle}>Reminder</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>Participation is voluntary.</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>Do not confront anyone.</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>Do not place yourself at risk.</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>Contact authorities if needed.</Text>
            </View>
          </View>
        </View>

        <View style={styles.spacer} />
        
        <Text style={styles.footerText}>
          Socius does not coordinate responses or interventions.
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
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    color: '#5D6D7E',
    fontSize: 18,
    fontWeight: '600',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  alertCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    // Circle background for icon could be added if needed, but image shows just icon
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A5568',
    flex: 1,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#718096',
    marginBottom: 12,
    lineHeight: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4A5568',
    width: 130, // Fixed width for alignment
  },
  detailValue: {
    fontSize: 14,
    color: '#4A5568',
    flex: 1,
    lineHeight: 20,
  },
  promptText: {
    fontSize: 15,
    color: '#4A5568',
    marginBottom: 16,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 16,
  },
  viewDetailsButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D0D3D4',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  viewDetailsText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
  },
  ignoreButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E6B0AA', // Light red border
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  ignoreText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#A93226', // Red text
  },
  reminderCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A5568',
  },
  bulletList: {
    marginTop: 4,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    fontSize: 18,
    color: '#4A5568',
    marginRight: 8,
    lineHeight: 22,
  },
  bulletText: {
    fontSize: 14,
    color: '#4A5568',
    flex: 1,
    lineHeight: 22,
  },
  spacer: {
    flex: 1,
  },
  footerText: {
    fontSize: 12,
    color: '#718096',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default SomeoneConcernScreen;
