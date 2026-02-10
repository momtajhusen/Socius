import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const MultiplePeopleScreen = ({ navigation }) => {
  const handleContinue = () => navigation.navigate('AwarenessProgress');
  const handleStepAway = () => navigation.navigate('SteppedAway');

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
        <Text style={styles.title}>Multiple People Are Aware</Text>

        <View style={styles.heroWrap}>
          <Image
            source={require('../../assets/images/awareness/01.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoPanel}>
          <Text style={styles.panelTitle}>Others nearby have also seen this request.</Text>
          <Text style={styles.panelSub}>You are part of a visible group — not acting alone.</Text>
        </View>

        <View style={styles.listWrap}>
          <View style={styles.listRow}><Icon name="map-marker" size={18} color="#DC5C69" /><Text style={styles.listText}>Stay in public, open areas</Text></View>
          <View style={styles.listRow}><Icon name="home-outline" size={18} color="#999999" /><Text style={styles.listText}>Avoid private or isolated spaces</Text></View>
          <View style={styles.listRow}><Icon name="eye-outline" size={18} color="#999999" /><Text style={styles.listText}>Let others remain within view</Text></View>
          <View style={styles.listRow}><Icon name="shield-outline" size={18} color="#999999" /><Text style={styles.listText}>Collective presence reduces risk</Text></View>
        </View>

        <Text style={styles.helperText}>Socius encourages visibility, not isolation.</Text>
        <Text style={[styles.helperText, { marginBottom: 16 }]}>No one is expected to act alone.</Text>

        <Button title="Continue" onPress={handleContinue} variant="gradient" size="large" fullWidth />
        <Button title="Step Away" onPress={handleStepAway} variant="white" size="large" fullWidth />

        <View style={styles.sectionDivider} />
        <Text style={styles.footerNote}>You may leave at any time without explanation.</Text>
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
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroWrap: {
    alignItems: 'center',
    marginBottom: 12,
  },
  heroImage: {
    width: '100%',
    height: 180,
  },
  infoPanel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  panelTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
  },
  panelSub: {
    fontSize: 12,
    color: '#666666',
  },
  listWrap: {
    marginBottom: 8,
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
    fontSize: 13,
    color: '#666666',
    marginBottom: 4,
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

export default MultiplePeopleScreen;
