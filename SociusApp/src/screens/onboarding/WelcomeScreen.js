import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Button from '../../components/common/Button';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
          {/* Onboarding */}
          <Button
            title="Onboarding"
            onPress={() => navigation.navigate('WhatSociusIs')}
            fullWidth
          />
 
          {/* First Time Users */}
          <Button
            title="First Time Users"
            onPress={() => navigation.navigate('AvailabilityRoles')}
            fullWidth
          />

          {/* Guide for users */}
          <Button
            title="Guide for users"
            onPress={() => navigation.navigate('YourRole')}
            fullWidth
          />

          {/* Home Flow */}
          <Button
            title="Home Flow"
            onPress={() => navigation.navigate('MainApp')}
            fullWidth
          />
 
          {/* Dev Launcher */}
          <Button
            title="DevLauncher"
            onPress={() => navigation.navigate('DevLauncher')}
            fullWidth
            variant="gradient"
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
    flexGrow: 1,
    paddingBottom: 20,
    paddingHorizontal:30,
    justifyContent:'center',
  },
  headerGradient: {
    paddingTop: 40,
    paddingBottom: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  logoSubtext: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 4,
    opacity: 0.9,
  },
  illustrationSection: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  illustrationBox: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#E85D75',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  illustrationEmoji: {
    fontSize: 80,
  },
  contentSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 12,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
    marginBottom: 28,
  },
  featuresContainer: {
    gap: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  featureIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  featureIcon: {
    fontSize: 28,
  },
  featureTextBox: {
    flex: 1,
    paddingTop: 2,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 13,
    color: '#9CA3AF',
    lineHeight: 18,
  },
  buttonsSection: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 20,
  },
 
  secondaryButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    gap: 6,
  },
  secondaryButtonText: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  signInLink: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E85D75',
  },
  footerText: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  footerTextSmall: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: '#E85D75',
    fontWeight: '600',
  },
});

export default WelcomeScreen;
