import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const AddDetailsScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [selectedTime, setSelectedTime] = useState('30 minutes');
  const [locationConfirmed, setLocationConfirmed] = useState(false);

  const timeOptions = [
    { id: 1, label: '10–15 minutes' },
    { id: 2, label: '30 minutes' },
    { id: 3, label: 'About 1 hour' },
  ];

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleConfirmLocation = () => {
    setLocationConfirmed(true);
  };

  const handleReviewRequest = () => {
    navigation.navigate('ReviewRequest');
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
          <Text style={styles.mainTitle}>Add a short detail</Text>
          <Text style={styles.subtitle}>One clear line helps nearby people understand.</Text>
        </View>

        {/* Text Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Example: Need a quick printout near the bus stop"
            placeholderTextColor="#999999"
            value={description}
            onChangeText={setDescription}
            maxLength={120}
            multiline={true}
          />
          <Text style={styles.charCount}>{description.length} / 120</Text>
        </View>

        {/* How Long Section */}
        <View style={styles.timeSection}>
          <Text style={styles.timeSectionTitle}>How long will this take?</Text>
          <View style={styles.timeButtonsContainer}>
            {timeOptions.map((option) => (
                <TouchableOpacity
                key={option.id}
                style={[
                  styles.timeButton,
                  selectedTime === option.label && styles.timeButtonActive
                ]}
                onPress={() => setSelectedTime(option.label)}
              >
                <Text style={[
                  styles.timeButtonText,
                  selectedTime === option.label && styles.timeButtonTextActive
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Location Card */}
        <View style={styles.locationCard}>
          <View style={styles.locationIconContainer}>
            <Icon name="map-marker" size={28} color="#DC5C69" />
          </View>
          <View style={styles.locationContent}>
            <Text style={styles.locationTitle}>Your current location will be shared with nearby helpers.</Text>
            <Text style={styles.locationSubtext}>Location is visible only during this request.</Text>
          </View>
        </View>

        {/* Confirm Location Button */}
        <Button
          title={`${locationConfirmed ? '✓ ' : ''}Confirm Location`}
          onPress={handleConfirmLocation}
          fullWidth
        />

        {/* Warning Box */}
        <View style={styles.warningBox}>
          <Icon name="information" size={24} color="#999999" />
          <View style={styles.warningContent}>
            <Text style={styles.warningText}>Please request only small, everyday help.</Text>
            <Text style={styles.warningSubtext}>This is not for emergencies.</Text>
          </View>
        </View>

        {/* Review Request Button */}
        <Button
          title="Review Request"
          onPress={handleReviewRequest}
          fullWidth
          disabled={!locationConfirmed || description.trim().length === 0}
        />

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
    paddingBottom: 80,
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
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
  },

  // ===== TEXT INPUT =====
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },

  textInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    minHeight: 80,
    backgroundColor: '#F9F9F9',
    textAlignVertical: 'top',
    paddingRight: 60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  charCount: {
    position: 'absolute',
    bottom: 12,
    right: 16,
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
  },

  // ===== TIME SECTION =====
  timeSection: {
    marginBottom: 24,
  },

  timeSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
  },

  timeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },

  timeButton: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  timeButtonActive: {
    backgroundColor: '#DC5C69',
    borderColor: '#DC5C69',
  },

  timeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
  },

  timeButtonTextActive: {
    color: '#FFFFFF',
  },

  // ===== LOCATION CARD =====
  locationCard: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  locationIconContainer: {
    marginRight: 14,
    justifyContent: 'flex-start',
    paddingTop: 2,
  },

  locationContent: {
    flex: 1,
  },

  locationTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
    lineHeight: 22,
  },

  locationSubtext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    lineHeight: 20,
  },

  // ===== CONFIRM BUTTON =====
  confirmButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  confirmButtonActive: {
    backgroundColor: '#F0F0F0',
  },

  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },

  // ===== WARNING BOX =====
  warningBox: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  warningContent: {
    flex: 1,
    marginLeft: 12,
  },

  warningText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 2,
    lineHeight: 22,
  },

  warningSubtext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#2C3E50',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  // ===== REVIEW BUTTON =====
  reviewButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  reviewButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999999',
  },

  bottomSpacer: {
    height: 40,
  },
});

export default AddDetailsScreen;
