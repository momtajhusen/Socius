import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const RequestReviewScreen = ({ navigation }) => {
  const [explanation, setExplanation] = useState('');
  const [documentUploaded, setDocumentUploaded] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);

  const handleUploadDocument = () => {
    setDocumentUploaded(true);
  };

  const handleUploadSelfie = () => {
    setSelfieUploaded(true);
  };

  const handleSubmitReview = () => {
    navigation.navigate('ReviewSubmitted');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Info Text */}
        <Text style={styles.infoText}>
          Your account is currently limited or under review.
        </Text>
        
        <Text style={styles.infoText}>
          If you believe this is a mistake, you may request a review.
        </Text>

        {/* Explanation TextInput */}
        <View style={styles.fieldGroup}>
          <TextInput
            style={styles.textInput}
            placeholder="Explain your request (optional)"
            placeholderTextColor="#AAAAAA"
            value={explanation}
            onChangeText={setExplanation}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>

        {/* Info Text */}
        <Text style={styles.warningText}>
          Please keep your explanation factual and respectful.
        </Text>

        {/* Optional Supporting Documents */}
        <Text style={styles.sectionTitle}>Optional supporting documents</Text>

        {/* Upload Buttons */}
        <View style={styles.uploadContainer}>
          <Button
            title="Upload updated document"
            onPress={handleUploadDocument}
            variant="outline"
            icon={<Icon name="file-document-outline" size={20} color="#2C3E50" />}
          />

          <Button
            title="Upload recent selfie"
            onPress={handleUploadSelfie}
            variant="outline"
            icon={<Icon name="camera-outline" size={20} color="#2C3E50" />}
          />
        </View>

        {/* Info Text */}
        <Text style={styles.infoSubText}>
          These help us verify your account details.
        </Text>

        {/* Important Notice */}
        <View style={styles.noticeCard}>
          <Text style={styles.noticeText}>
            Reviews are handled by humans and may take some time. You'll be notified once a decision is made.
          </Text>
        </View>

        {/* Submit Button */}
        <Button
          title="Submit Review Request"
          onPress={handleSubmitReview}
          variant="primary"
          fullWidth
        />

        {/* Footer Text */}
        <Text style={styles.disclaimerText}>
          Submitting a review does not guarantee a change in account status.
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
    paddingTop: 16,
    paddingBottom: 30,
  },

  // ===== INFO TEXT =====
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 14,
  },

  // ===== TEXT INPUT FIELD =====
  fieldGroup: {
    marginBottom: 14,
    marginTop: 8,
  },

  textInput: {
    backgroundColor: '#F8F9FA',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    height: 120,
    textAlignVertical: 'top',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  // ===== WARNING TEXT =====
  warningText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#888888',
    textAlign: 'left',
    lineHeight: 19,
    marginBottom: 22,
    marginTop: 12,
  },

  // ===== SECTION TITLE =====
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 14,
  },

  // ===== UPLOAD BUTTONS =====
  uploadContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },

  uploadButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E8EAED',
    gap: 8,
  },

  uploadButtonText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'center',
  },

  // ===== INFO SUB TEXT =====
  infoSubText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#888888',
    textAlign: 'left',
    lineHeight: 19,
    marginBottom: 16,
  },

  // ===== NOTICE CARD =====
  noticeCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  noticeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    textAlign: 'left',
    lineHeight: 21,
  },

  // ===== SUBMIT BUTTON =====
  submitButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 26,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },

  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ===== DISCLAIMER TEXT =====
  disclaimerText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#888888',
    textAlign: 'center',
    lineHeight: 19,
  },
});

export default RequestReviewScreen;
