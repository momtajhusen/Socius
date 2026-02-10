import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { LinearGradient } from 'expo-linear-gradient';

const RequestConfirmationScreen = ({ navigation }) => {
  const handleKeepActive = () => {
    navigation.navigate('RequestActive');
  };

  const handleCancel = () => {
    navigation.navigate('CancelRequest');
  };

  const handleEmergency = () => {
    navigation.navigate('EmergencyHelp');
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
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>People Nearby Are Aware</Text>
          <Text style={styles.statusSubtitle}>This does not mean anyone is coming yet.</Text>
        </View>

        <View style={styles.hero}>
          <LinearGradient
            colors={['#EEF2F6', '#E5EAEE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroCircle}
          >
            <Icon name="account-group" size={56} color="#8C9199" />
          </LinearGradient>
          <Text style={styles.heroCaption}>Awareness shared locally</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoText}>People nearby may choose to check in.</Text>
          <Text style={styles.infoText}>They may also choose not to respond.</Text>
          <Text style={styles.infoText}>You are not obligated to wait.</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Keep Request Active"
            onPress={handleKeepActive}
            variant="gradient"
            size="large"
            fullWidth
          />
          <Button
            title="Cancel Request"
            onPress={handleCancel}
            variant="outline"
            size="large"
            fullWidth
          />
        </View>

        <TouchableOpacity style={styles.linkBlock} onPress={handleEmergency} activeOpacity={0.85}>
          <Text style={styles.linkBlockTitle}>Contact Emergency Services</Text>
          <Text style={styles.linkBlockSubtext}>Use if you feel unsafe or need immediate help.</Text>
        </TouchableOpacity>

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteSubtext}>
            Socius does not coordinate responses. This screen shows awareness only.
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
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  hero: {
    alignItems: 'center',
    marginBottom: 16,
  },
  heroCircle: {
    width: 164,
    height: 164,
    borderRadius: 82,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 12,
  },
  heroCaption: {
    fontSize: 13,
    color: '#666666',
  },
  infoBlock: {
    alignItems: 'center',
    marginBottom: 18,
  },
  infoText: {
    fontSize: 14,
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 4,
  },
  buttonsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  linkBlock: {
    alignItems: 'center',
    marginBottom: 10,
  },
  linkBlockTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  linkBlockSubtext: {
    fontSize: 13,
    color: '#666666',
  },
  footerNote: {
    alignItems: 'center',
    marginTop: 8,
  },
  footerNoteSubtext: {
    fontSize: 13,
    color: '#999999',
    textAlign: 'center',
  },
});

export default RequestConfirmationScreen;
