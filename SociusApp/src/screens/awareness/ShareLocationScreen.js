import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const ShareLocationScreen = ({ navigation, route }) => {
  const { reason } = route.params || {};
  const [note, setNote] = useState('');

  const getTitle = () => {
    switch (reason) {
      case 'being_followed': return 'Being Followed';
      case 'unsafe_walk': return 'Unsafe Walk';
      case 'night_travel': return 'Night Travel';
      case 'public_intimidation': return 'Public Intimidation';
      default: return 'Share Location';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBtn}>
          <Icon name="arrow-left" size={24} color="#666666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{getTitle()}</Text>
        <View style={styles.headerBtn} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        
        {/* Input Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Add one line <Text style={styles.optional}>(optional)</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Anything helpful others should know (optional)"
            placeholderTextColor="#999999"
            value={note}
            onChangeText={setNote}
            multiline
          />
          <Text style={styles.helperText}>Keep it short. Do not include names or accusations.</Text>
        </View>

        {/* Location Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="map-marker" size={24} color="#C94444" style={styles.cardIcon} />
            <View>
              <Text style={styles.cardTitle}>Share your current location</Text>
              <Text style={styles.cardSubtitle}>Only with people who choose to view this request.</Text>
            </View>
          </View>
          <View style={styles.locationBox}>
            <View style={styles.mapLine} />
            <Text style={styles.locationText}>Near Oakwood Ave</Text>
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="file-document-outline" size={24} color="#7F8C8D" style={styles.cardIcon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>You're sharing information voluntarily.</Text>
              <Text style={styles.cardSubtitle}>Nothing is sent until you confirm. You can cancel at any time.</Text>
            </View>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.actionButton} 
          activeOpacity={0.9}
          onPress={() => {
             navigation.navigate('RequestShared');
          }}
        >
          <LinearGradient
            colors={['#D84D42', '#B93A30']}
            style={styles.gradientBtn}
          >
            <Text style={styles.btnText}>Share Presence Request</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Footer */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.footerLink}>
          <Text style={styles.footerText}>Cancel and go back</Text>
        </TouchableOpacity>

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
  headerBtn: {
    padding: 8,
    width: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  scroll: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  optional: {
    fontWeight: '400',
    color: '#999999',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E8EAED',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#2C3E50',
    minHeight: 48,
    textAlignVertical: 'top',
    marginBottom: 8,
  },
  helperText: {
    fontSize: 11,
    color: '#666666',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cardIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
  },
  locationBox: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8EAED',
    height: 48,
    flexDirection: 'row',
  },
  mapLine: {
    // Simulated map line
    position: 'absolute',
    left: 10,
    right: 10,
    height: 2,
    backgroundColor: '#E0E0E0',
    top: '50%',
    zIndex: -1,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
  },
  actionButton: {
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 30,
    shadowColor: '#D84D42',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  gradientBtn: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  footerLink: {
    alignItems: 'center',
    padding: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
    textDecorationLine: 'none', 
  },
});

export default ShareLocationScreen;
