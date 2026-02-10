import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const WhatSociusIsNotScreen = ({ navigation }) => {
  const notItems = [
    'Socius is not an emergency service',
    'Socius does not dispatch responders',
    'Socius does not direct or coordinate actions',
    'Socius does not replace police or authorities',
    'Socius does not ask anyone to intervene'
  ];

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

        {/* Main Card */}
        <View style={styles.card}>
          {/* Card Title */}
          <Text style={styles.sectionTitle}>What Socius is NOT</Text>
          
          {/* Divider */}
          <View style={styles.divider} />

          {/* Items Container */}
          <View style={styles.itemsContainer}>
            {notItems.map((item, index) => (
              <View key={index} style={styles.bulletItem}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Disclaimer Text */}
          <Text style={styles.disclaimer}>
            All participation is voluntary and based on personal judgment.
          </Text>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <Button 
          title="I Understand" 
          onPress={() => navigation.navigate('Principles')}
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
    paddingTop: 12,
    paddingBottom: 140,
  },
  
  // ===== HEADER SECTION =====
  headerSection: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 8,
  },
  
  logoContainer: {
    position: 'relative',
    width: 60,
    height: 40,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  logoDot1: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#DC5C69',
  },
  
  logoDot2: {
    position: 'absolute',
    left: 18,
    top: 2,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E8A8AC',
  },
  
  mainTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2C3E50',
  },

  // ===== CARD SECTION =====
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
  },
  
  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 16,
  },

  // ===== ITEMS SECTION =====
  itemsContainer: {
    marginVertical: 8,
  },
  
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingVertical: 4,
  },
  
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DC5C69',
    marginTop: 8,
    marginRight: 16,
    flexShrink: 0,
  },
  
  bulletText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    lineHeight: 24,
    flex: 1,
  },

  // ===== DISCLAIMER =====
  disclaimer: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 20,
  },

  // ===== FOOTER SECTION =====
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },
});

export default WhatSociusIsNotScreen;