import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import { LinearGradient } from 'expo-linear-gradient';

const ClosingRequestScreen = ({ navigation }) => {
  const [resolved, setResolved] = useState(null);
  const [accountReturned, setAccountReturned] = useState(false);
  const [needMoreTime, setNeedMoreTime] = useState(false);
  const [reaction, setReaction] = useState(null); // 'good' | 'neutral' | 'alert'

  const handleDone = () => {
    navigation.navigate('Home');
  };
  const handleReportConcern = () => {
    navigation.navigate('ReportConcern');
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
        <Text style={styles.pageTitle}>Closing This Request</Text>

        <View style={styles.statusCard}>
          <View style={styles.statusTop}>
            <LinearGradient
              colors={['#EEF2F6', '#E5EAEE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.statusCircleLg}
            />
          </View>
          <Text style={styles.statusTitle}>This request is being closed.</Text>
          <Text style={styles.statusSubtitle}>Thanks for keeping things calm and respectful.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Was this resolved?</Text>
          <View style={styles.rowButtons}>
            <Button
              title="Yes, it’s resolved"
              onPress={() => setResolved(true)}
              variant="gradient"
              size="large"
              fullWidth={false}
              style={[styles.halfButton, resolved === true && {}]}
            />
            <Button
              title="No, I’m stepping away"
              onPress={() => setResolved(false)}
              variant="white"
              size="large"
              fullWidth={false}
              style={styles.halfButton}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Accountability</Text>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setAccountReturned(!accountReturned)}
            activeOpacity={0.85}
          >
            <View style={[styles.checkbox, accountReturned && styles.checkboxChecked]}>
              {accountReturned && <Icon name="check" size={16} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxText}>Returned / completed as agreed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setNeedMoreTime(!needMoreTime)}
            activeOpacity={0.85}
          >
            <View style={[styles.checkbox, needMoreTime && styles.checkboxChecked]}>
              {needMoreTime && <Icon name="check" size={16} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxText}>Needed more time</Text>
          </TouchableOpacity>
          <Text style={styles.helperText}>This helps build trust for future requests.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>How did this go?</Text>
          <View style={styles.reactionPill}>
            <TouchableOpacity
              style={[styles.reactionItem, reaction === 'good' && styles.reactionSelected]}
              onPress={() => setReaction('good')}
              activeOpacity={0.85}
            >
              <Icon name="thumb-up" size={22} color={reaction === 'good' ? '#DC5C69' : '#5A6F7D'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.reactionItem, reaction === 'neutral' && styles.reactionSelected]}
              onPress={() => setReaction('neutral')}
              activeOpacity={0.85}
            >
              <Icon name="emoticon-outline" size={22} color={reaction === 'neutral' ? '#DC5C69' : '#5A6F7D'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.reactionItem, reaction === 'alert' && styles.reactionSelected]}
              onPress={() => setReaction('alert')}
              activeOpacity={0.85}
            >
              <Icon name="alert-circle-outline" size={22} color={reaction === 'alert' ? '#DC5C69' : '#5A6F7D'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.linkRow} onPress={handleReportConcern} activeOpacity={0.85}>
            <Text style={styles.linkText}>Report a Concern</Text>
            <Icon name="chevron-right" size={20} color="#DC5C69" />
          </TouchableOpacity>
        </View>

        <View style={styles.noticeCard}>
          <View style={styles.noticeIcon}>
            <Text style={styles.noticeIndex}>1</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.noticeText}>
              Details from this request will no longer be visible. Location sharing ends now.
            </Text>
          </View>
        </View>

        <Button title="Done" onPress={handleDone} variant="gradient" size="large" fullWidth />
        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>
            Participation is voluntary. Thank you for being part of your community.
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
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    alignItems: 'stretch',
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 12,
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    alignItems: 'center',
  },
  statusTop: {
    alignItems: 'center',
    marginBottom: 10,
  },
  statusCircleLg: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
    textAlign: 'center',
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 14,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 10,
  },
  rowButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  halfButton: {
    flex: 1,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#DC5C69',
    borderColor: '#DC5C69',
  },
  checkboxText: {
    fontSize: 14,
    color: '#2C3E50',
  },
  helperText: {
    fontSize: 12,
    color: '#999999',
    marginTop: 6,
  },
  reactionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 8,
  },
  reactionItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactionSelected: {
    backgroundColor: '#FFF0F2',
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC5C69',
  },
  noticeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 18,
    paddingVertical: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 16,
  },
  noticeIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  noticeIndex: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5A6F7D',
  },
  noticeText: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
  },
  footerNote: {
    alignItems: 'center',
    marginTop: 8,
  },
  footerNoteText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default ClosingRequestScreen;
