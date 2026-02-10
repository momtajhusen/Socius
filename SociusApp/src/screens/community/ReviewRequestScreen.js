import React from 'react';
 import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const ReviewRequestScreen = ({ navigation, route }) => {
  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleShareRequest = () => {
    navigation.navigate('RequestActive');
  };

  const handleEditDetails = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <TouchableOpacity onPress={handleSettings} style={{ padding: 8 }}>
            <Icon name="cog" size={24} color="#999999" />
          </TouchableOpacity>
        }
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Review your request</Text>
          <Text style={styles.subtitle}>This is what nearby people will see.</Text>
        </View>

        {/* Request Detail Card */}
        <View style={styles.requestCard}>
          <Text style={styles.requestLabel}>Request</Text>
          <Text style={styles.requestText}>Need a quick printout near the bus stop</Text>
        </View>

        {/* Category Item */}
        <View style={styles.itemContainer}>
          <Icon name="flower" size={24} color="#DC5C69" />
          <Text style={styles.itemText}>Everyday Help</Text>
        </View>

        {/* Time Item */}
        <View style={styles.itemContainer}>
          <Icon name="clock-outline" size={24} color="#DC5C69" />
          <Text style={styles.itemText}>10–15 minutes</Text>
        </View>

        {/* Location Item */}
        <View style={styles.itemContainer}>
          <Icon name="map-marker" size={24} color="#DC5C69" />
          <Text style={styles.itemText}>Current location (shared temporarily)</Text>
        </View>

        {/* Info Box 1 */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>This request will be visible only to nearby available people. You can cancel it anytime.</Text>
        </View>

        {/* Info Box 2 */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>This is for small, everyday help. For emergencies, use <Text style={styles.emergencyLink}>Emergency Contacts</Text>.</Text>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Buttons Container */}
        <View style={styles.buttonsContainer}>
          <Button
            title="Share Request"
            onPress={handleShareRequest}
            variant="gradient"
          />

          <Button
            title="Edit Details"
            onPress={handleEditDetails}
            variant="white"
          />
        </View>

        <View style={styles.bottomSpacer} />
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
    paddingTop: 24,
    paddingBottom: 100,
  },

  // ===== TITLE SECTION =====
  titleSection: {
    alignItems: 'center',
    marginBottom: 28,
  },

  mainTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
  },

  // ===== REQUEST CARD =====
  requestCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  requestLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
    marginBottom: 6,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },

  requestText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginTop: 8,
    lineHeight: 26,
  },

  // ===== ITEM CONTAINER =====
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
    marginLeft: 12,
  },

  // ===== INFO BOX =====
  infoBox: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    textAlign: 'center',
    lineHeight: 22,
  },

  emergencyLink: {
    fontWeight: '600',
    color: '#2C3E50',
  },

  // ===== SPACER =====
  spacer: {
    height: 20,
  },

  // ===== BUTTONS CONTAINER =====
  buttonsContainer: {
    gap: 12,
    marginBottom: 20,
  },

  shareButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 28,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },

  shareButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  editButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  editButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },

  bottomSpacer: {
    height: 20,
  },
});

export default ReviewRequestScreen;
