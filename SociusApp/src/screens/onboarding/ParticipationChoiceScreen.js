import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const ParticipationChoiceScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState('Community Member');
  const [selectedNotifications, setSelectedNotifications] = useState([
    'Community Safety',
    'Women\'s Safety'
  ]);

  const roles = [
    {
      id: 'Community Member',
      title: 'Community Member',
      icon: 'account',
      description: 'Use Socius to share information and stay aware of what\'s happening nearby.'
    },
    {
      id: 'Available to Help',
      title: 'Available to Help',
      subtitle: '(Optional)',
      icon: 'account-multiple',
      description: 'Be notified about situations you\'re comfortable being aware of.'
    }
  ];

  const notificationTypes = [
    'Calm Presence',
    'Community Safety',
    'Elder Support',
    'Women\'s Safety',
    'Medical Assistance',
    'Language Help',
    'Blood Donation',
    'General Support'
  ];

  const toggleNotification = (type) => {
    setSelectedNotifications(prev => 
      prev.includes(type) 
        ? prev.filter(item => item !== type)
        : [...prev, type]
    );
  };

    const handleContinue = () => {
    navigation.navigate('IdentityVerification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="" 
        onBackPress={() => navigation.goBack()} 
        style={{ borderBottomWidth: 0 }}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>How would you like to participate?</Text>
          <Text style={styles.subtitle}>
            You can change this anytime. There is no obligation to respond.
          </Text>
        </View>

        {/* Role Selection Cards */}
        <View style={styles.rolesContainer}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.roleCard,
                selectedRole === role.id && styles.roleCardSelected
              ]}
              onPress={() => setSelectedRole(role.id)}
            >
              <View style={styles.roleHeader}>
                <View style={[
                  styles.roleIcon,
                  selectedRole === role.id && styles.roleIconSelected
                ]}>
                  {role.id === 'Community Member' ? (
                    <Image
                      source={require('../../assets/icons/icon-25.png')}
                      style={styles.roleIconImage}
                    />
                  ) : (
                    <Image
                      source={require('../../assets/icons/icon-10.png')}
                      style={styles.roleIconImage}
                    />
                  )}
                </View>
              </View>

              <View style={styles.roleTextContent}>
                <View style={styles.roleTitleContainer}>
                  <Text style={styles.roleTitle}>{role.title}</Text>
                  {role.subtitle && (
                    <Text style={styles.roleSubtitle}>{role.subtitle}</Text>
                  )}
                </View>
                <Text style={styles.roleDescription}>{role.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notification Types Section */}
        <View style={styles.notificationSection}>
          <Text style={styles.notificationTitle}>What would you like to be notified about?</Text>
          
          <View style={styles.tagsContainer}>
            {notificationTypes.map((type) => {
              const isSelected = selectedNotifications.includes(type);
              return (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.tag,
                    isSelected && styles.tagSelected
                  ]}
                  onPress={() => toggleNotification(type)}
                >
                  <Text style={[
                    styles.tagText,
                    isSelected && styles.tagTextSelected
                  ]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Info Text */}
        <Text style={styles.infoText}>
          You will only see requests related to what you select.
        </Text>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={handleContinue}
          fullWidth
        />
      </View>
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
    paddingTop: 16,
    paddingBottom: 130,
  },

 

  // ===== TITLE SECTION =====
  titleSection: {
    marginBottom: 28,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 32,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },

  // ===== ROLE CARDS =====
  rolesContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  roleCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#E8EAED',
    borderRadius: 18,
    padding: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  roleCardSelected: {
    borderColor: '#DC5C69',
    borderWidth: 2,
  },

  roleHeader: {
    marginBottom: 12,
    alignItems: 'center',
  },

  roleIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  roleIconSelected: {
    backgroundColor: '#FEE8EA',
  },
  roleIconImage: {
    width: 62,
    height: 62,
    resizeMode: 'contain',
  },

  roleTextContent: {
    alignItems: 'center',
  },

  roleTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  roleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
  },

  roleSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    marginLeft: 4,
    textAlign: 'center',
  },

  roleDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 19,
  },

  // ===== NOTIFICATION SECTION =====
  notificationSection: {
    marginBottom: 20,
  },

  notificationTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 16,
    textAlign: 'center',
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 16,
  },

  tag: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E8EAED',
  },

  tagSelected: {
    backgroundColor: '#DC5C69',
    borderColor: '#DC5C69',
  },

  tagText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
  },

  tagTextSelected: {
    color: '#FFFFFF',
  },

  // ===== INFO TEXT =====
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 12,
  },

  // ===== FOOTER BUTTON =====
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingBottom: 22,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },

  buttonStyle: {
    borderRadius: 26,
    height: 50,
    backgroundColor: '#DC5C69',
  },
});

export default ParticipationChoiceScreen;
