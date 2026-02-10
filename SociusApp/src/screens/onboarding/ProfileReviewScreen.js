import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const ProfileReviewScreen = ({ navigation }) => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        })
      ).start();
    };
    startRotation();
  }, [rotation]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="" 
        onBackPress={() => {}}
        style={{ borderBottomWidth: 0 }}
      />
      
      <View style={styles.content}>
        

        {/* Clock Icon with Animation */}
        <View style={styles.clockContainer}>
          <Animated.View style={[styles.clockIconWrapper, animatedStyle]}>
            <Icon name="clock-outline" size={80} color="#CCCCCC" />
          </Animated.View>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          <Text style={styles.mainTitle}>Your profile is under review</Text>
          
          <Text style={styles.description}>
            Thank you for completing your details. Our team is reviewing your information to help keep Socius safe and trusted for everyone.
          </Text>
          
          <View style={styles.spacer} />
          
          <Text style={styles.italicText}>
            This usually takes a short time.
          </Text>
          
          <Text style={styles.italicText}>
            You'll be notified once your account is ready.
          </Text>
        </View>
      </View>

      {/* Go to Home Button */}
      <View style={styles.footer}>
        <Button
          title="Go to Home"
          onPress={handleGoHome}
          fullWidth
          variant="white"
        />
      </View>

            {/* Go to Home Button */}
        <View
          style={[
            styles.footer,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
              marginBottom: 10,
            },
          ]}
        >
          <Button
            title="Attention Needed"
            onPress={() => navigation.navigate('VerificationAttention')}
          />

          <Button
            title="Request Submitted"
            onPress={() => navigation.navigate('RequestReview')}
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

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

 

  // ===== CLOCK SECTION =====
  clockContainer: {
    marginBottom: 40,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  clockIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ===== CONTENT CARD =====
  contentCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EAED',
    marginHorizontal: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 10,
  },

  mainTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 28,
  },

  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#555555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 12,
  },

  spacer: {
    height: 8,
  },

  italicText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 21,
    fontStyle: 'italic',
    marginBottom: 6,
  },

  // ===== FOOTER BUTTON =====
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    paddingBottom: 30,
  },

  homeButton: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
});

export default ProfileReviewScreen;
