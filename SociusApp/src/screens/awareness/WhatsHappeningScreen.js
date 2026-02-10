import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import { LinearGradient } from 'expo-linear-gradient';

const WhatsHappeningScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const navigateToCreate = (category) => {
    navigation.navigate('CreateAwareness', { category });
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
        <Text style={styles.title}>What’s happening right now?</Text>
        <Text style={styles.subtitle}>Choose the closest option or search directly.</Text>

        <View style={styles.searchWrap}>
          <Icon name="magnify" size={22} color="#999999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search (e.g. unsafe walk, blood, car issue)"
            placeholderTextColor="#9AA1A9"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => navigateToCreate('calm_presence')}>
          <LinearGradient colors={["#F6C7C4", "#E96A5C"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.iconPill}>
            <Icon name="account-group" size={22} color="#FFFFFF" />
          </LinearGradient>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>I need calm presence</Text>
            <Text style={styles.cardDesc}>Something feels off and I don’t want to be alone.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => navigateToCreate('care_support')}>
          <LinearGradient colors={["#F6C7C4", "#E96A5C"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.iconPill}>
            <Icon name="heart" size={22} color="#FFFFFF" />
          </LinearGradient>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Someone needs care or support</Text>
            <Text style={styles.cardDesc}>This is about care, comfort, or assistance.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => navigateToCreate('right_help')}>
          <LinearGradient colors={["#F6C7C4", "#E96A5C"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.iconPill}>
            <Icon name="link-variant" size={22} color="#FFFFFF" />
          </LinearGradient>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>We need the right help</Text>
            <Text style={styles.cardDesc}>Specific help or resources are needed.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => navigateToCreate('prevent_fix')}>
          <LinearGradient colors={["#F6C7C4", "#E96A5C"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.iconPill}>
            <Icon name="wrench" size={22} color="#FFFFFF" />
          </LinearGradient>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Let’s prevent or fix something</Text>
            <Text style={styles.cardDesc}>A local issue that could become a problem.</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.footerNoteWrap}>
          <View style={styles.sectionDivider} />
          <Text style={styles.footerNote}>Nothing is shared until you confirm.</Text>
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 12,
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#2C3E50',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  iconPill: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#666666',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 10,
  },
  footerNoteWrap: {
    alignItems: 'center',
    marginTop: 6,
  },
  footerNote: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default WhatsHappeningScreen;
