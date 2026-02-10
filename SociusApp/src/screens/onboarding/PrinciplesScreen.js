import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const PrinciplesScreen = ({ navigation }) => {
  const features = [
    {
      icon: 'account-voice',
      title: "Share what's happening",
      description: 'When something feels wrong, you can share information calmly and voluntarily.'
    },
    {
      icon: 'account-multiple',
      title: 'People nearby become aware',
      description: 'People in your area may see the information and decide for themselves how to respond.'
    },
    {
      icon: 'hand-left',
      title: 'Access help when needed',
      description: 'You always have the option to contact emergency services or local support.'
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

        {/* Feature Cards */}
        <View style={styles.cardsContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardContent}>
                {/* Icon */}
                <View style={styles.iconContainer}>
                  {index === features.length - 1 ? (
                    <Image
                      source={require('../../assets/icons/help-access-02.png')}
                      style={styles.iconImage}
                    />
                  ) : (
                    <Icon 
                      name={feature.icon} 
                      size={48} 
                      color="#DC5C69"
                    />
                  )}
                </View>

                {/* Text Content */}
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{feature.title}</Text>
                  <Text style={styles.cardDescription}>{feature.description}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Text */}
        <View style={styles.bottomTextSection}>
          <Text style={styles.bottomText1}>Socius shares information.</Text>
          <Text style={styles.bottomText2}>People choose their actions.</Text>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={() => navigation.navigate('CommunityPrinciples')}
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
  
  // ===== CARDS CONTAINER =====
  cardsContainer: {
    marginVertical: 12,
  },

  // ===== CARD SECTION =====
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  // ===== ICON SECTION =====
  iconContainer: {
    width: 60,
    height: 60,
    marginRight: 16,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  iconImage: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
  },

  // ===== TEXT CONTENT =====
  textContainer: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
    lineHeight: 24,
  },
  
  cardDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 21,
  },

  // ===== BOTTOM TEXT =====
  bottomTextSection: {
    marginBottom: 24,
    paddingHorizontal: 12,
  },

  bottomText1: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
  },

  bottomText2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'center',
    lineHeight: 24,
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
    backgroundColor: '#F8F9FA',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },
});

export default PrinciplesScreen;
