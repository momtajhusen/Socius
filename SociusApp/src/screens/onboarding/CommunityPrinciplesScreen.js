import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const CommunityPrinciplesScreen = ({ navigation }) => {
  const principles = [
    {
      icon: 'handshake',
      title: "Respect First",
      description: "Treat everyone with dignity and patience."
    },
    {
      icon: 'dove',
      title: "No Escalation",
      description: "This platform exists to calm situations, not intensify them."
    },
    {
      icon: 'hand-open-variant',
      title: "Voluntary Participation",
      description: "No one is expected to act or respond."
    },
    {
      icon: 'lock',
      title: "Privacy Matters",
      description: "Respect personal boundaries and shared information."
    },
    {
      icon: 'walk',
      title: "Step Away When Needed",
      description: "Your safety comes first. Leaving is always okay."
    }
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

        {/* Main Card Container */}
        <View style={styles.cardContainer}>
          {/* Title */}
          <Text style={styles.pageTitle}>Our Community Principles</Text>
          
          {/* Divider */}
          <View style={styles.divider} />

          {/* Principles List */}
          <View style={styles.listContainer}>
            {principles.map((item, index) => (
              <View key={index} style={styles.principleItem}>
                <View style={styles.iconCircle}>
                  {index === 1 ? (
                    <Image 
                      source={require('../../assets/icons/icon-24.png')} 
                      style={styles.iconImage} 
                    />
                  ) : index === 2 ? (
                    <Image 
                      source={require('../../assets/icons/icon-25.png')} 
                      style={styles.iconImage} 
                    />
                  ) : (
                    <Icon name={item.icon} size={28} color="#DC5C69" />
                  )}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Footer Text */}
          <Text style={styles.footerText}>
            These principles apply to everyone using Socius.
          </Text>
        </View>
      </ScrollView>

      {/* Button Footer */}
      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={() => navigation.navigate('PhoneVerification')}
          fullWidth
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 140,
  },

  // ===== CARD CONTAINER =====
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 28,
  },

  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 16,
  },

  // ===== PRINCIPLES LIST =====
  listContainer: {
    marginVertical: 8,
  },

  principleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F5F1ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    flexShrink: 0,
  },
  iconImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },

  textContainer: {
    flex: 1,
    paddingTop: 4,
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
    lineHeight: 24,
  },

  itemDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
  },

  // ===== FOOTER TEXT =====
  footerText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  // ===== FOOTER BUTTON =====
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 24,
    backgroundColor: '#F8F9FA',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },
});

export default CommunityPrinciplesScreen;
