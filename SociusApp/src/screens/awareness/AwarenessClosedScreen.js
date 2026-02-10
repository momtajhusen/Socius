import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const AwarenessClosedScreen = ({ navigation }) => {
  const handleReturnHome = () => navigation.navigate('HomeScreen');

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
        <Text style={styles.title}>Awareness Closed</Text>

        <View style={styles.heroWrap}>
          <Image
            source={require('../../assets/images/awareness/02.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.centerCard}>
          <Text style={styles.centerMain}>This awareness request has ended.</Text>
          <Text style={styles.centerSub}>No further action is expected.</Text>
        </View>

        <View style={styles.blockCard}>
          <Text style={styles.blockHeader}>Why this may happen</Text>
          <View style={styles.listRow}><Icon name="lock-outline" size={18} color="#999999" /><Text style={styles.listText}>The requester closed the request</Text></View>
          <View style={styles.listRow}><Icon name="clock-outline" size={18} color="#999999" /><Text style={styles.listText}>Time limit was reached</Text></View>
          <View style={styles.listRow}><Icon name="wifi-off" size={18} color="#999999" /><Text style={styles.listText}>The requester went offline</Text></View>
        </View>

        <View style={styles.blockCard}>
          <Text style={styles.blockHeader}>What you should do now</Text>
          <View style={styles.listRow}><Icon name="home-outline" size={18} color="#999999" /><Text style={styles.listText}>Resume your day</Text></View>
          <View style={styles.listRow}><Icon name="check-circle-outline" size={18} color="#999999" /><Text style={styles.listText}>No follow-up is required</Text></View>
          <View style={styles.listRow}><Icon name="phone-outline" size={18} color="#999999" /><Text style={styles.listText}>Use emergency contacts if you still have concerns</Text></View>
        </View>

        <Text style={styles.helperText}>Closing a request does not mean something went wrong.</Text>

        <Button title="Return Home" onPress={handleReturnHome} variant="gradient" size="large" fullWidth />

        <View style={styles.sectionDivider} />
        <Text style={styles.footerNote}>Socius does not keep incidents open after closure.</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#B23B35',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroWrap: {
    alignItems: 'center',
    marginBottom: 10,
  },
  heroImage: {
    width: '100%',
    height: 160,
  },
  centerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    alignItems: 'center',
  },
  centerMain: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
    textAlign: 'center',
  },
  centerSub: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  blockCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  blockHeader: {
    fontSize: 13,
    fontWeight: '700',
    color: '#999999',
    marginBottom: 10,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  listText: {
    fontSize: 14,
    color: '#2C3E50',
  },
  helperText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666666',
    marginBottom: 14,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 12,
  },
  footerNote: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999999',
  },
});

export default AwarenessClosedScreen;
