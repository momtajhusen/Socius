import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const SelfieVerificationScreen = ({ navigation }) => {
  const [photoTaken, setPhotoTaken] = useState(false);

  const handleTakePhoto = () => {
    // Logic to open camera
    setPhotoTaken(true);
  };

  const handleContinue = () => {
    navigation.navigate('BeforeContinue');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Socius" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 0 }}
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Take a selfie</Text>
        <Text style={styles.subtitle}>
          To match your ID.
        </Text>

        <View style={styles.cameraContainer}>
          {photoTaken ? (
            <View style={styles.photoPlaceholder}>
              <Icon name="account-circle" size={150} color="#757575" />
              <View style={styles.checkBadge}>
                <Icon name="check" size={24} color="#FFFFFF" />
              </View>
            </View>
          ) : (
            <View style={styles.cameraPlaceholder}>
              <Icon name="camera-outline" size={64} color="#757575" />
            </View>
          )}
        </View>

        <Text style={styles.instruction}>
          Make sure your face is clearly visible and well-lit.
        </Text>

        <View style={styles.spacer} />

        <Button 
          title={photoTaken ? "Continue" : "Take Photo"}
          onPress={photoTaken ? handleContinue : handleTakePhoto}
          fullWidth
          size="large"
          variant={photoTaken ? "primary" : "outline"}
        />

        <Button
          title="Continue" 
          onPress={handleContinue}
          fullWidth
          style={styles.buttonStyle}
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
    paddingHorizontal: 16,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    fontFamily: 'System',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: 'System',
    color: '#757575',
    textAlign: 'center',
    marginBottom: 40,
  },
  cameraContainer: {
    width: 280,
    height: 360,
    backgroundColor: '#F5F5F5',
    borderRadius: 140, // Oval shape or Circle
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 24,
    overflow: 'hidden',
  },
  cameraPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBadge: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    backgroundColor: '#4CAF50',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  instruction: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'System',
    color: '#757575',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  spacer: {
    flex: 1,
  },
});

export default SelfieVerificationScreen;
