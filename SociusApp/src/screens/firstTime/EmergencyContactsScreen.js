import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
 
const EmergencyContactsScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: '', phone: '', relationship: '' }
  ]);

  const addContact = () => {
    setContacts([...contacts, { id: Date.now(), name: '', phone: '', relationship: '' }]);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const updateContact = (id, field, value) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, [field]: value } : contact
    ));
  };

  const handleSaveContinue = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Header */}
        <View style={styles.logoSection}>
          <View style={styles.logoIcon}>
            <Icon name="account-multiple" size={24} color="#DC5C69" />
          </View>
          <Text style={styles.logoText}>Socius</Text>
        </View>

        {/* Divider */}
        <View style={styles.headerDivider} />

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Emergency Contacts</Text>
          <Text style={styles.subtitle}>People we can notify if you choose escalation</Text>
        </View>

        {contacts.map((contact, index) => (
          <View key={contact.id} style={styles.contactsCard}>
            {index > 0 && (
              <View style={styles.cardHeader}>
                <TouchableOpacity 
                  style={styles.removeContactButton} 
                  onPress={() => removeContact(contact.id)}
                  hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
                >
                  <Icon name="close" size={18} color="#777777" />
                </TouchableOpacity>
              </View>
            )}
            <TextInput
              style={styles.input}
              placeholder="Contact name"
              placeholderTextColor="#AAAAAA"
              value={contact.name}
              onChangeText={(text) => updateContact(contact.id, 'name', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="#AAAAAA"
              keyboardType="phone-pad"
              value={contact.phone}
              onChangeText={(text) => updateContact(contact.id, 'phone', text)}
            />
            <TextInput
              style={[styles.input, styles.lastInput]}
              placeholder="Relationship (optional)"
              placeholderTextColor="#AAAAAA"
              value={contact.relationship}
              onChangeText={(text) => updateContact(contact.id, 'relationship', text)}
            />
          </View>
        ))}

        {/* Add Another Contact Button */}
        <TouchableOpacity style={styles.addContactButton} onPress={addContact}>
          <Icon name="plus" size={18} color="#2C3E50" />
          <Text style={styles.addContactText}>Add another contact</Text>
        </TouchableOpacity>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            These contacts are notified only if you choose to escalate a situation.
          </Text>
          <Text style={styles.infoText}>
            Socius does not notify them automatically.
          </Text>
        </View>

        {/* Save Button */}
        <Button
          title="Save & Continue"
          onPress={handleSaveContinue}
          variant="primary"
          fullWidth
        />

        {/* Footer Text */}
        <Text style={styles.footerText}>
          You can update or remove contacts at any time.
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

  // ===== LOGO SECTION =====
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  logoIcon: {
    marginRight: 8,
  },

  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#999999',
  },

  // ===== HEADER DIVIDER =====
  headerDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginBottom: 28,
  },

  // ===== TITLE SECTION =====
  titleSection: {
    alignItems: 'center',
    marginBottom: 24,
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

  // ===== CONTACTS CARD =====
  contactsCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  cardHeader: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    marginBottom: 10,
    height: 45,
  },

  lastInput: {
    marginBottom: 0,
  },

  removeContactButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  // ===== ADD CONTACT BUTTON =====
  addContactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E8EAED',
    marginBottom: 18,
    gap: 8,
  },

  addContactText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2C3E50',
  },

  // ===== INFO CARD =====
  infoCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  infoText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#555555',
    lineHeight: 20,
    marginBottom: 8,
  },

  // ===== SAVE BUTTON =====
  saveButton: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },

  saveButtonText: {
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

export default EmergencyContactsScreen;
