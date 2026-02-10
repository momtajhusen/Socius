import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const YourDataAccountScreen = ({ navigation }) => {
  const handleDownloadData = () => {
    navigation.navigate('DataPrivacy');
  };

  const handleDataRetention = () => {
    navigation.navigate('DataPrivacy');
  };

  const handleRequestDeletion = () => {
    navigation.navigate('ReportConcern');
  };

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
        {/* Title */}
        <Text style={styles.pageTitle}>Your Data & Account</Text>

        {/* Intro Text */}
        <Text style={styles.introText}>
          You're in control of your data and account at all times.
        </Text>

        {/* Section: Data Access */}
        <Text style={styles.sectionTitle}>Data Access</Text>
        <View style={styles.cardList}>
          <TouchableOpacity style={styles.listCard} onPress={handleDownloadData} activeOpacity={0.85}>
            <View style={styles.listText}>
              <Text style={styles.listTitle}>Download my data</Text>
              <Text style={styles.listSubtitle}>Get a copy of the information linked to your account.</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#999999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listCard} onPress={handleDataRetention} activeOpacity={0.85}>
            <View style={styles.listText}>
              <Text style={styles.listTitle}>Data retention & usage</Text>
              <Text style={styles.listSubtitle}>Learn how long data is stored and why.</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#999999" />
          </TouchableOpacity>
        </View>

        {/* Section: Account actions */}
        <Text style={styles.sectionTitle}>Account actions</Text>
        <TouchableOpacity style={styles.listCard} onPress={handleRequestDeletion} activeOpacity={0.85}>
          <View style={styles.listText}>
            <Text style={styles.listTitle}>Request account deletion</Text>
            <Text style={styles.listSubtitle}>This permanently removes your account and associated data.</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#999999" />
        </TouchableOpacity>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTextEmphasis}>
            Account deletion is permanent and cannot be undone.
          </Text>
          <Text style={styles.infoTextSub}>
            Some records may be retained temporarily where required by law.
          </Text>
        </View>

        {/* Support Text */}
        <Text style={styles.supportText}>
          You can contact support if you have questions about your data.
        </Text>

        {/* CTA */}
        <Button 
          title="Request Deletion" 
          variant="gradient"
          onPress={handleRequestDeletion}
          fullWidth
        />
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
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 28,
  },
  introText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 10,
    marginTop: 8,
  },
  cardList: {
    marginBottom: 6,
  },
  listCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  listText: {
    flex: 1,
    paddingRight: 12,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
  },
  listSubtitle: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 6,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F1D1D1',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  infoTextEmphasis: {
    fontSize: 14,
    fontWeight: '700',
    color: '#C94D4D',
    marginBottom: 6,
  },
  infoTextSub: {
    fontSize: 13,
    color: '#C94D4D',
  },
  supportText: {
    fontSize: 12,
    color: '#888888',
    textAlign: 'left',
    marginBottom: 14,
  },
});

export default YourDataAccountScreen;
