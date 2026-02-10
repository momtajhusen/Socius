import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, StatusBar, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AwarenessSharedScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleEmergency = () => navigation.navigate('EmergencyHelp');
  
  const handleCancelPress = () => {
    setModalVisible(true);
  };

  const confirmCancel = () => {
    setModalVisible(false);
    navigation.navigate('RequestClosed');
  };

  const keepActive = () => {
    setModalVisible(false);
  };

  // Placeholder data for community members
  const members = [
    { id: 1, name: 'Aman', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { id: 2, name: 'Riya', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { id: 3, name: 'Josh', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Cancel Request Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={keepActive}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cancel Request?</Text>
            
            <Text style={styles.modalDescription}>
              People nearby may have already seen your request.
              {'\n'}
              You can stop sharing awareness at any time.
            </Text>

            <TouchableOpacity 
              style={styles.modalKeepButton} 
              onPress={keepActive}
              activeOpacity={0.8}
            >
              <Text style={styles.modalKeepButtonText}>Keep Request Active</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.modalCancelButton} 
              onPress={confirmCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.modalCancelButtonText}>Cancel Request</Text>
            </TouchableOpacity>

            <View style={styles.modalDivider} />
            
            <Text style={styles.modalFooterText}>
              You can request awareness again anytime.
            </Text>
          </View>
        </View>
      </Modal>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#5A5A5A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Socius</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        
        <View style={styles.topContent}>
          <Text style={styles.title}>Awareness Shared</Text>
          <Text style={styles.subtitle}>People nearby may choose to stay aware.</Text>
        </View>

        {/* Status Card */}
        <View style={styles.statusCard}>
          <Text style={styles.statusCardTitle}>Some people nearby have seen this.</Text>
          <Text style={styles.statusCardDesc}>They may or may not choose to come.</Text>
        </View>

        {/* Community Members Section */}
        <View style={styles.membersSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.line} />
            <Text style={styles.sectionTitle}>Nearby community members</Text>
            <View style={styles.line} />
          </View>
          
          <View style={styles.membersRow}>
            {members.map((member) => (
              <View key={member.id} style={styles.memberItem}>
                <View style={styles.avatarContainer}>
                  <Image 
                    source={{ uri: member.image }} 
                    style={styles.avatarImage} 
                    blurRadius={15} // Strong blur effect
                  />
                </View>
                <Text style={styles.memberName}>{member.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>You can cancel this at any time.</Text>
          <Text style={styles.infoCardDesc}>
            You can also contact emergency services whenever needed.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.cancelButton} 
            activeOpacity={0.8}
            onPress={handleCancelPress}
          >
            <Text style={styles.cancelButtonText}>Cancel Awareness</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.emergencyButton} 
            activeOpacity={0.8}
            onPress={handleEmergency}
          >
            <Text style={styles.emergencyButtonText}>Contact Emergency Services</Text>
          </TouchableOpacity>
        </View>

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
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  headerRight: {
    width: 32,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  topContent: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#37474F',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#78909C',
    textAlign: 'center',
  },
  statusCard: {
    width: '100%',
    backgroundColor: '#FDF8F8', // Very light warm/reddish tint
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FBE9E7',
  },
  statusCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#37474F',
    marginBottom: 6,
    textAlign: 'center',
  },
  statusCardDesc: {
    fontSize: 14,
    color: '#78909C',
    textAlign: 'center',
  },
  membersSection: {
    width: '100%',
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#546E7A',
    marginHorizontal: 12,
  },
  membersRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  memberItem: {
    alignItems: 'center',
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ECEFF1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  memberName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#37474F',
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#F5F7FA',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  infoCardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#37474F',
    marginBottom: 6,
    textAlign: 'center',
  },
  infoCardDesc: {
    fontSize: 14,
    color: '#546E7A',
    textAlign: 'center',
    lineHeight: 20,
  },
  actionButtons: {
    width: '100%',
    gap: 12,
  },
  cancelButton: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#EF5350', // Red border
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEBEE', // Light red bg
    shadowColor: '#EF5350',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#C62828', // Red text
    fontWeight: '600',
  },
  emergencyButton: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#CFD8DC',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  emergencyButtonText: {
    fontSize: 16,
    color: '#546E7A',
    fontWeight: '600',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37474F',
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 15,
    color: '#546E7A',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  modalKeepButton: {
    width: '100%',
    backgroundColor: '#D32F2F', // Red color matching screenshot
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#D32F2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  modalKeepButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalCancelButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  modalCancelButtonText: {
    color: '#546E7A',
    fontSize: 16,
    fontWeight: '600',
  },
  modalDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 16,
  },
  modalFooterText: {
    fontSize: 13,
    color: '#90A4AE',
    textAlign: 'center',
  },
});

export default AwarenessSharedScreen;
