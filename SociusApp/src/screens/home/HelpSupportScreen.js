import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const HelpSupportScreen = ({ navigation }) => {
  const commonQuestions = [
    { 
      label: 'What happens when I press “Need Presence”?', 
      answer: 'Nearby volunteers see a discreet request to be aware. No public feed or exposure. You can cancel or end anytime.' 
    },
    { 
      label: 'Am I required to respond to alerts?', 
      answer: 'No. Participation is voluntary. If you cannot help or it feels unsafe, you can ignore the alert.' 
    },
    { 
      label: 'Can I cancel or leave anytime?', 
      answer: 'Yes. You can cancel a request or leave whenever you choose. Your safety and comfort come first.' 
    },
    { 
      label: 'Is Socius an emergency service?', 
      answer: 'No. Socius supports awareness and calm presence. For emergencies, contact local authorities or emergency services.' 
    },
  ];
  const [openIndices, setOpenIndices] = useState([]);
  const toggleIndex = (i) => {
    setOpenIndices(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const handleReportIssue = () => {
    navigation.navigate('ReportConcern');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Help & Support" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.iconCircle}>
              <Icon name="lifebuoy" size={22} color="#DC5C69" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.sectionTitle}>Need help understanding something?</Text>
            </View>
          </View>
          <Text style={styles.sectionSubtitle}>
            If you're unsure about how Socius works or what to do in a situation, you can start here.
          </Text>

          <View style={styles.buttonColumn}>
            <Button title="How Socius Works" onPress={() => navigation.navigate('WhatSociusIs')} fullWidth variant="white" style={styles.compactButton} textStyle={styles.compactButtonText} />
            <Button title="When to Use Socius" onPress={() => navigation.navigate('WhenToAskPresence')} fullWidth variant="white" style={styles.compactButton} textStyle={styles.compactButtonText} />
            <Button title="When NOT to Use Socius" onPress={() => navigation.navigate('WhatSociusIsNot')} fullWidth variant="white" style={styles.compactButton} textStyle={styles.compactButtonText} />
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={[styles.iconCircle, { backgroundColor: '#EAF7EF' }]}>
              <Icon name="shield-check" size={22} color="#4CAF50" />
            </View>
            <Text style={styles.sectionTitle}>Safety & Responsibility</Text>
          </View>

          <View style={styles.chipsRow}>
            <View style={styles.chip}><Text style={styles.chipText}>Volunteer Guidelines</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>Community Rules</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>Legal & Safety Boundaries</Text></View>
          </View>

          <Text style={styles.sectionFootnote}>
            Socius supports awareness and presence — not intervention.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={[styles.iconCircle, { backgroundColor: '#FFF4E6' }]}>
              <Icon name="comment-question-outline" size={22} color="#F59E0B" />
            </View>
            <Text style={styles.sectionTitle}>Common Questions</Text>
          </View>

          <View style={styles.listContainer}>
            {commonQuestions.map((q, idx) => {
              const open = openIndices.includes(idx);
              return (
                <View key={idx}>
                  <TouchableOpacity style={styles.listRow} onPress={() => toggleIndex(idx)}>
                    <Text style={styles.listRowText}>{q.label}</Text>
                    <Icon name={open ? 'chevron-up' : 'chevron-down'} size={20} color="#999999" />
                  </TouchableOpacity>
                  {open && (
                    <Text style={styles.answerText}>{q.answer}</Text>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={[styles.iconCircle, { backgroundColor: '#FEE8EA' }]}>
              <Icon name="alert" size={22} color="#DC5C69" />
            </View>
            <Text style={styles.sectionTitle}>Report a Concern</Text>
          </View>

          <Text style={styles.sectionSubtitle}>
            If something didn't feel right or you noticed misuse, you can let us know.
          </Text>

          <Button
            title="Report Issue"
            onPress={handleReportIssue}
            variant="primary"
            fullWidth
            style={{ borderRadius: 26 }}
          />

          <Text style={styles.sectionFootnote}>
            Reports are reviewed by the Socius team. No immediate action is taken automatically.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={[styles.iconCircle, { backgroundColor: '#EAF2FF' }]}>
              <Icon name="message-text-outline" size={22} color="#3B82F6" />
            </View>
            <Text style={styles.sectionTitle}>Contact Socius Support</Text>
          </View>

          <View style={styles.actionsRow}>
            <Button title="Email Support" onPress={() => {}} variant="white" style={styles.inlineButton} />
            <Button title="Send Feedback" onPress={() => {}} variant="white" style={styles.inlineButton} />
          </View>

          <Text style={styles.footerNote}>
            You are never required to act. Participation is always your choice.
          </Text>
        </View>
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
    gap: 14,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F2F7F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 10,
  },
  buttonColumn: {
    gap: 5,
  },
  compactButton: {
    borderRadius: 16,
    paddingVertical: 5,
    borderRadius:10,
  },
  compactButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  chipText: {
    fontSize: 13,
    color: '#2C3E50',
    fontWeight: '600',
  },
  sectionFootnote: {
    fontSize: 12,
    color: '#999999',
    marginTop: 8,
  },
  listContainer: {
    marginTop: 6,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
  },
  listRowText: {
    fontSize: 14,
    color: '#2C3E50',
  },
  answerText: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
    paddingVertical: 8,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 8,
  },
  inlineButton: {
    flex: 1,
    borderRadius: 26,
    paddingVertical: 12,
  },
  footerNote: {
    fontSize: 12,
    color: '#999999',
    marginTop: 12,
    textAlign: 'center',
  },
});

export default HelpSupportScreen;
