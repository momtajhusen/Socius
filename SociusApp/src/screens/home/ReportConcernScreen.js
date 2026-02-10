import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const ReportConcernScreen = ({ navigation }) => {
  const reasons = [
    { label: 'Felt uncomfortable or unsafe', icon: 'emoticon-sad-outline' },
    { label: 'Personal boundaries crossed', icon: 'account-off-outline' },
    { label: 'Misuse of the platform', icon: 'alert-octagon-outline' },
    { label: 'False or unnecessary request', icon: 'alert-circle-outline' },
    { label: 'Something else', icon: 'comment-question-outline' },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Report a Concern" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitleText}>
          Share any concerns about this interaction so we can improve safety and fairness.
        </Text>

        <View style={styles.listContainer}>
          {reasons.map((item, idx) => {
            const selected = selectedIndex === idx;
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.reasonRow, selected && styles.reasonRowSelected]}
                onPress={() => setSelectedIndex(idx)}
                activeOpacity={0.8}
              >
                <View style={styles.reasonIconCircle}>
                  <Icon name={item.icon} size={22} color="#5A6F7D" />
                </View>
                <Text style={[styles.reasonLabel, selected && styles.reasonLabelSelected]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder="Add details (optional)"
            placeholderTextColor="#999999"
            value={details}
            onChangeText={setDetails}
            multiline
          />
          <Text style={styles.inputHint}>
            Do not include sensitive personal information.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Icon name="information" size={20} color="#666666" />
            <Text style={styles.infoText}>
              Reports are reviewed after incidents are closed. They are not monitored in real time.
            </Text>
          </View>
        </View>

        <Button
          title="Submit Report"
          onPress={handleSubmit}
          variant="primary"
          fullWidth
          style={styles.submitButton}
        />

        <Text style={styles.footerNote}>
          Reports help improve safety and accountability.
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
    paddingTop: 12,
    paddingBottom: 24,
  },
  subtitleText: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 12,
    textAlign: 'left',
  },
  listContainer: {
    marginBottom: 12,
    gap: 10,
  },
  reasonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  reasonRowSelected: {
    borderColor: '#DC5C69',
  },
  reasonIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F2F7F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  reasonLabel: {
    fontSize: 14,
    color: '#2C3E50',
    flex: 1,
  },
  reasonLabelSelected: {
    fontWeight: '700',
  },
  inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    fontSize: 14,
    color: '#2C3E50',
    minHeight: 44,
  },
  inputHint: {
    fontSize: 12,
    color: '#999999',
    marginTop: 6,
  },
  infoCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
    flex: 1,
  },
  submitButton: {
    borderRadius: 26,
    paddingVertical: 12,
    marginBottom: 10,
  },
  footerNote: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default ReportConcernScreen;
