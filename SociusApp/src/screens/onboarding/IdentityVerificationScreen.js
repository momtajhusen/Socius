import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';

const IdentityVerificationScreen = ({ navigation }) => {
  const [governmentIDUploaded, setGovernmentIDUploaded] = useState(false);
  const [governmentIDImage, setGovernmentIDImage] = useState(null);
  const [selfieUploaded, setSelfieUploaded] = useState(false);
  const [selfieImage, setSelfieImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

  // Handle Document Upload (Gallery)
  const handleUploadDocument = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled && result.assets && result.assets[0]) {
        setGovernmentIDImage(result.assets[0].uri);
        setGovernmentIDUploaded(true);
        console.log('Government ID uploaded:', result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick document');
      console.log('Document pick error:', error);
    }
  };

  // Handle Take Selfie (Camera)
  const handleTakeSelfie = async () => {
    try {
      if (!permission?.granted) {
        const { granted } = await requestPermission();
        if (!granted) {
          Alert.alert('Camera Permission', 'Camera permission is required to take a selfie');
          return;
        }
      }
      setShowCamera(true);
    } catch (error) {
      Alert.alert('Error', 'Failed to access camera');
      console.log('Camera error:', error);
    }
  };

  // Capture Selfie
  const handleCaptureSelfie = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1,
          base64: false,
        });
        if (photo && photo.uri) {
          setSelfieImage(photo.uri);
          setSelfieUploaded(true);
          setShowCamera(false);
          console.log('Selfie captured:', photo.uri);
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to capture selfie');
      console.log('Capture error:', error);
    }
  };

  // Cancel Camera
  const handleCancelCamera = () => {
    setShowCamera(false);
  };

  // Remove Government ID
  const handleRemoveGovernmentID = () => {
    setGovernmentIDImage(null);
    setGovernmentIDUploaded(false);
  };

  // Remove Selfie
  const handleRemoveSelfie = () => {
    setSelfieImage(null);
    setSelfieUploaded(false);
  };

  const handleSubmitForReview = () => {
    if (governmentIDUploaded && selfieUploaded) {
      console.log('Submitting for verification review');
      console.log('Government ID:', governmentIDImage);
      console.log('Selfie:', selfieImage);
      navigation.navigate('BeforeContinue');
    }
  };

  const canSubmit = governmentIDUploaded && selfieUploaded;

  // Camera Screen
  if (showCamera) {
    return (
      <SafeAreaView style={styles.cameraContainer}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing="front"
        />
        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity
            style={styles.cameraCancelButton}
            onPress={handleCancelCamera}
          >
            <Text style={styles.cameraCancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraCapturerButton}
            onPress={handleCaptureSelfie}
          >
            <View style={styles.shutterButton} />
          </TouchableOpacity>
          <View style={styles.spacer} />
        </View>
      </SafeAreaView>
    );
  }

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
        <View style={styles.mainCard}>
          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.mainTitle}>Verify your identity</Text>
            <Text style={styles.subtitle}>
              This helps keep Socius safe and trusted{'\n'}for everyone.
            </Text>
          </View>

          {/* Government ID Section */}
          <View style={styles.verificationSection}>
            <View style={styles.iconTitleRow}>
              <View style={styles.iconBox}>
                <Icon name="credit-card" size={28} color="#4A5568" />
              </View>
              <View style={styles.titleColumn}>
                <Text style={styles.verificationTitle}>Government ID</Text>
                <Text style={styles.verificationSubtitle}>
                  Aadhaar, Passport, Driving License, or Voter ID
                </Text>
              </View>
            </View>

            {governmentIDImage ? (
              <View style={styles.imagePreviewContainer}>
                <Image
                  source={{ uri: governmentIDImage }}
                  style={styles.imagePreview}
                />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={handleRemoveGovernmentID}
                >
                  <Icon name="close-circle" size={24} color="#DC5C69" />
                </TouchableOpacity>
              </View>
            ) : null}

            <TouchableOpacity 
              style={[
                styles.uploadButton,
                governmentIDUploaded && styles.uploadButtonSuccess
              ]}
              onPress={handleUploadDocument}
            >
              <Text style={styles.uploadButtonText}>
                {governmentIDUploaded ? '✓ Uploaded' : 'Upload document'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Selfie Section */}
          <View style={styles.verificationSection}>
            <View style={styles.iconTitleRow}>
              <View style={styles.iconBox}>
                <Icon name="camera" size={28} color="#4A5568" />
              </View>
              <View style={styles.titleColumn}>
                <Text style={styles.verificationTitle}>Selfie verification</Text>
                <Text style={styles.verificationSubtitle}>
                  Used only to confirm identity
                </Text>
              </View>
            </View>

            {selfieImage ? (
              <View style={styles.imagePreviewContainer}>
                <Image
                  source={{ uri: selfieImage }}
                  style={styles.imagePreview}
                />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={handleRemoveSelfie}
                >
                  <Icon name="close-circle" size={24} color="#DC5C69" />
                </TouchableOpacity>
              </View>
            ) : null}

            <TouchableOpacity 
              style={[
                styles.uploadButton,
                selfieUploaded && styles.uploadButtonSuccess
              ]}
              onPress={handleTakeSelfie}
            >
              <Text style={styles.uploadButtonText}>
                {selfieUploaded ? '✓ Completed' : 'Take selfie'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.sectionDivider} />

          {/* Info Text */}
          <Text style={styles.infoText}>
            Your documents are securely stored and reviewed only{'\n'}for verification purposes.
          </Text>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.footer}>
        <Button 
          title="Submit for Review" 
          onPress={handleSubmitForReview}
          fullWidth
          disabled={!canSubmit}
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
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 130,
  },

  // ===== CAMERA SCREEN =====
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },

  camera: {
    flex: 1,
  },

  cameraButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
  },

  cameraCancelButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  cameraCancelText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  cameraCapturerButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  shutterButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#DC5C69',
  },

  spacer: {
    width: 70,
  },

 

  // ===== MAIN CARD =====
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },

  titleSection: {
    marginBottom: 24,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 26,
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

  // ===== VERIFICATION SECTIONS =====
  verificationSection: {
    marginBottom: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E8EAED',
  },

  iconTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#E8EAED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    flexShrink: 0,
  },

  titleColumn: {
    flex: 1,
  },

  verificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },

  verificationSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 19,
  },

  // ===== IMAGE PREVIEW =====
  imagePreviewContainer: {
    position: 'relative',
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },

  imagePreview: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    backgroundColor: '#E8EAED',
  },

  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
  },

  uploadButton: {
    backgroundColor: '#DC5C69',
    borderRadius: 20,
    paddingVertical: 11,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadButtonSuccess: {
    backgroundColor: '#27AE60',
  },

  uploadButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // ===== DIVIDER =====
  sectionDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 16,
    marginHorizontal: -14,
  },

  // ===== INFO TEXT =====
  infoText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 19,
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
    backgroundColor: '#F8F9FA',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },

  buttonStyle: {
  },
});

export default IdentityVerificationScreen;
