import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BeingHereChoiceScreen = ({ navigation }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="Your Safety Comes First" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 0 }}
        titleStyle={{ fontSize: 16, color: '#5D6D7E' }}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Main Card */}
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Being here is your choice.</Text>
          <View style={styles.separator} />
          <Text style={styles.cardSubtitle}>
            You are not required to stay, engage, or explain yourself.
          </Text>
        </View>

        {/* List Items */}
        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="door-open" size={20} color="#CD5C5C" />
            </View>
            <Text style={styles.listItemText}>You may leave at any time</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="message-text-outline" size={20} color="#CD5C5C" />
            </View>
            <Text style={styles.listItemText}>You do not owe anyone an explanation</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="clock-outline" size={20} color="#CD5C5C" />
            </View>
            <Text style={styles.listItemText}>Leaving early is not a failure</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="heart" size={20} color="#CD5C5C" />
            </View>
            <Text style={styles.listItemText}>Your presence alone may already be enough</Text>
          </View>
        </View>

        <View style={styles.dividerFull} />

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            Socius does not expect intervention.
          </Text>
          <Text style={styles.footerTextItalic}>
            You decide what feels safe for you.
          </Text>

          <Button 
            title="I Understand" 
            onPress={() => navigation.goBack()} 
            variant="primary" // Assuming primary is the red one or we override
            style={styles.primaryButton}
          />

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leaveButton}>
            <Text style={styles.leaveButtonText}>Leave Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
        
        <Text style={styles.bottomNote}>
          You can continue or leave without penalty.
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
    paddingTop: 20,
    paddingBottom: 40,
  },
  mainCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center', // Center text
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A5568', // Dark grey/slate
    marginBottom: 12,
    textAlign: 'center',
  },
  separator: {
    width: 40,
    height: 2,
    backgroundColor: '#E2E8F0',
    marginBottom: 12,
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 22,
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconBox: {
    width: 32,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  listItemText: {
    fontSize: 15,
    color: '#5D6D7E',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginLeft: 32, // Indent to match text start
  },
  dividerFull: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 24,
  },
  footerSection: {
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
  },
  footerTextItalic: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#D3453D', // Match the red button color
    borderRadius: 30,
    marginBottom: 10,
  },
  leaveButton: {
    paddingVertical: 10,
  },
  leaveButtonText: {
    fontSize: 16,
    color: '#D3453D',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  bottomSpacer: {
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    marginBottom: 20,
    width: '100%',
  },
  bottomNote: {
    fontSize: 13,
    color: '#7F8C8D',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default BeingHereChoiceScreen;
