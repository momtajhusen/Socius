import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const StartConcernScreen = ({ navigation }) => {
  const reasons = [
    { id: 1, label: 'Felt unsafe', color: '#D84D42' },
    { id: 2, label: 'Boundary crossed', color: '#5A6F7D' },
    { id: 3, label: 'Misuse of request', color: '#8B6F47' },
    { id: 4, label: 'False or misleading information', color: '#5A6F7D' },
    { id: 5, label: 'Other', color: '#5A6F7D' },
  ];

  const [selectedReason, setSelectedReason] = useState(1);
  const [details, setDetails] = useState('');
  const maxChars = 500;

  const handleSubmit = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ padding: 8 }}>
            <Icon name="cog" size={24} color="#999999" />
          </TouchableOpacity>
        }
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Report a Concern</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoTopRow}>
            <View style={[styles.infoIconCircle, { backgroundColor: '#E7EFFC' }]}>
              <Icon name="information" size={18} color="#4A6FA5" />
            </View>
            <Text style={styles.infoTitle}>Reports are reviewed after incidents, not in real time.</Text>
          </View>
          <Text style={styles.infoSubtitle}>This helps keep the community safe and fair.</Text>
        </View>

        <Text style={styles.sectionTitle}>What best describes the concern?</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsHorizontal}>
          {reasons.map((r) => (
            <TouchableOpacity
              key={r.id}
              style={[styles.chip, styles.chipWide, selectedReason === r.id && styles.chipActive]}
              onPress={() => setSelectedReason(r.id)}
              activeOpacity={0.85}
            >
              <Text style={[styles.chipText, selectedReason === r.id && styles.chipTextActive]}>{r.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.textAreaCard}>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={6}
            placeholder="Add details (optional)"
            value={details}
            onChangeText={setDetails}
            maxLength={maxChars}
          />
          <Text style={styles.charCount}>{`${details.length} / ${maxChars}`}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoTopRow}>
            <View style={[styles.infoIconCircle, { backgroundColor: '#F1F5F9' }]}>
              <Icon name="account" size={18} color="#5A6F7D" />
            </View>
            <Text style={styles.infoTitle}>Reports are handled by humans.</Text>
          </View>
          <Text style={styles.infoSubtitle}>Submitting a report does not automatically penalize anyone.</Text>
        </View>

        <Text style={styles.footerNote}>Misuse of reporting may limit access.</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Submit Report" onPress={handleSubmit} variant="gradient" size="large" fullWidth />
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.85} style={styles.cancelWrap}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    alignItems: 'stretch',
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 14,
    shadowColor: '#8B3A36',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
  },
  infoTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  infoIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#2C3E50',
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#2C3E50',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  chipsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  chipsHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 6,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E8EAED',
  },
  chipWide: {
    paddingHorizontal: 14,
  },
  chipActive: {
    backgroundColor: '#E85555',
    borderColor: '#D84D42',
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  textAreaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
  },
  textAreaLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  textArea: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#E8EAED',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#2C3E50',
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF',
  },
  charCount: {
    textAlign: 'right',
    fontSize: 12,
    color: '#666666',
    marginTop: 6,
  },
  cancelWrap: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
  },
  footerNote: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
  },
});

export default StartConcernScreen;
