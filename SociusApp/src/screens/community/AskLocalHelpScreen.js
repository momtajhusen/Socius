import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const AskLocalHelpScreen = ({ navigation }) => {
  const handleRequestHelp = () => {
    navigation.navigate('HelpType');
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

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subtitle}>Small help, close by.</Text>

        {/* Ask for Local Help Card */}
        <View style={styles.card}>
          <View style={styles.iconBadge}>
            <Icon name="handshake" size={36} color="#DC5C69" />
          </View>
          <Text style={styles.cardTitle}>Ask for Local Help</Text>
          <Text style={styles.cardSubtext}>
            Request small, everyday help from people nearby. No money. No obligation.
          </Text>

          <Button
            title="Request Help"
            onPress={handleRequestHelp}
            variant="gradient"
            fullWidth
            style={{ borderRadius: 28, marginTop: 8 }}
          />
        </View>

        {/* Local Improvements Card */}
        <View style={styles.slimCard}>
          <View style={styles.slimHeaderRow}>
            <Text style={styles.slimTitle}>Local Improvements</Text>
          </View>
          <View style={styles.slimDivider} />
          <Text style={styles.slimSubtext}>
            Community cleanups and shared fixes. Coming soon.
          </Text>
        </View>

        <View style={styles.spacer} />
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
    paddingTop: 16,
    paddingBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'left',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDECEE',
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  cardSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 12,
  },

  slimCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  slimHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slimTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },
  slimDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 10,
  },
  slimSubtext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
  },

  spacer: {
    height: 20,
  },
});

export default AskLocalHelpScreen;
