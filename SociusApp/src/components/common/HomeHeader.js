import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeHeader = ({ onSettingsPress, onLogoPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoSection} onPress={onLogoPress} activeOpacity={0.8}>
        <View style={styles.logoBubble}>
          <View style={styles.logoDot1} />
          <View style={styles.logoDot2} />
        </View>
        <Text style={styles.logoText}>Socius</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.settingsButton}
        onPress={onSettingsPress}
      >
        <Icon name="cog" size={24} color="#999999" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
    paddingTop:30,
  },

  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logoBubble: {
    position: 'relative',
    width: 32,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoDot1: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#DC5C69',
  },

  logoDot2: {
    position: 'absolute',
    left: 12,
    top: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E8A8AC',
  },

  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C3E50',
  },

  settingsButton: {
    padding: 8,
  },
});

export default HomeHeader;
