import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import Button from '../../components/common/Button';

const { width } = Dimensions.get('window');

const WhatSociusIsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircles}>
            <View style={[styles.circle, styles.circleLeft]} />
            <View style={[styles.circle, styles.circleRight]} />
          </View>
          <Text style={styles.logoText}>Socius</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>What Socius Is</Text>
          
          <View style={styles.divider} />

          <Text style={styles.description}>
            Socius is a community awareness platform.
          </Text>
          
          <Text style={styles.description}>
            It helps people share information and stay{'\n'}
            connected during moments of concern or uncertainty.
          </Text>
          
          <Text style={styles.description}>
            When something feels wrong, Socius helps{'\n'}
            nearby people become aware —{'\n'}
            calmly and voluntarily.
          </Text>

          {/* Icons */}
          <View style={styles.iconsContainer}>
            <View style={styles.iconItem}>
              <View style={styles.iconCircle}>
                <Image
                  source={require('../../assets/icons/icon-05.png')}
                  style={styles.iconImage}
                />
              </View>
              <Text style={styles.iconLabel}>Information</Text>
            </View>

            <View style={styles.iconItem}>
              <View style={styles.iconCircle}>
                <Image
                  source={require('../../assets/icons/icon-06.png')}
                  style={styles.iconImage}
                />
              </View>
              <Text style={styles.iconLabel}>Awareness</Text>
            </View>

            <View style={styles.iconItem}>
              <View style={styles.iconCircle}>
                <Image
                  source={require('../../assets/icons/icon-07.png')}
                  style={[styles.iconImage, { width: 60 }]}
                />
              </View>
              <Text style={styles.iconLabel}>Calm Presence</Text>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <Button
          title="Continue"
          onPress={() => navigation.navigate('WhatSociusIsNot')}
          fullWidth
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoCircles: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  circleLeft: {
    backgroundColor: '#D85A51',
    marginRight: -12,
  },
  circleRight: {
    backgroundColor: '#EBA39E',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#D85A51',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 32,
    width: width - 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    color: '#5A6C7D',
    marginBottom: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  iconItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#BCC4CC',
  },
  iconImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  iconLabel: {
    fontSize: 13,
    color: '#5A6C7D',
    fontWeight: '500',
    textAlign: 'center',
  },
  eyeIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeOuter: {
    width: 36,
    height: 24,
    borderRadius: 18,
    borderWidth: 2.5,
    borderColor: '#E89892',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E89892',
  },
  eyeRay: {
    position: 'absolute',
    width: 2,
    height: 8,
    backgroundColor: '#E89892',
    top: -10,
  },
  eyeRay2: {
    transform: [{ rotate: '45deg' }],
    left: -6,
    top: -6,
  },
  eyeRay3: {
    transform: [{ rotate: '-45deg' }],
    right: -6,
    top: -6,
  },
  lotusIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lotusPetal: {
    width: 20,
    height: 24,
    backgroundColor: '#EFA7A2',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  lotusPetal2: {
    position: 'absolute',
    transform: [{ rotate: '30deg' }],
    opacity: 0.8,
  },
  lotusPetal3: {
    position: 'absolute',
    transform: [{ rotate: '-30deg' }],
    opacity: 0.8,
  },
});

export default WhatSociusIsScreen;
