import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CATEGORY_TITLES = {
  calm_presence: 'Need Calm Presence',
  care_support: 'Care or Support',
  right_help: 'Need Right Help',
  prevent_fix: 'Prevent or Fix',
};

const CreateAwarenessScreen = ({ navigation, route }) => {
  const category = route?.params?.category || 'calm_presence';
  const [query, setQuery] = useState('');
  const [selectedChip, setSelectedChip] = useState(null);

  const chips = [
    { id: 'unsafe_walk', label: 'Unsafe walk', icon: 'shoe-print' },
    { id: 'being_followed', label: 'Being followed', icon: 'eye' },
    { id: 'night_travel', label: 'Night travel', icon: 'moon-waning-crescent' },
    { id: 'public_intimidation', label: 'Public space', icon: 'chat-processing' },
  ];

  const items = [
    {
      id: 'feel_unsafe_walk',
      title: 'Feeling unsafe while walking',
      desc: 'Someone nearby is making me uncomfortable.',
    },
    {
      id: 'being_followed',
      title: 'Being followed',
      desc: 'I feel someone may be following me.',
    },
    {
      id: 'public_intimidation',
      title: 'Public intimidation',
      desc: 'Someone is acting aggressively or intimidating.',
    },
    {
      id: 'shop_tension',
      title: 'Shop or workplace tension',
      desc: 'A situation at my shop or workplace feels tense.',
    },
    {
      id: 'late_night_unease',
      title: 'Late-night travel unease',
      desc: 'I don’t feel safe traveling alone right now.',
    },
  ];

  const handleSelect = (item) => {
    navigation.navigate('SafetyGuidance', { category, reason: item.id, query });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerBtn}>
          <Icon name="arrow-left" size={24} color="#A83A30" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Socius</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.headerBtn}>
          {/* Placeholder for spacing or settings if needed, keeping it empty or balanced */}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{CATEGORY_TITLES[category] || 'Need Calm Presence'}</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipsScroll}
          contentContainerStyle={styles.chipsRow}
          bounces={false}
          alwaysBounceHorizontal={false}
          overScrollMode="never"
        >
          {chips.map((chip) => (
            <TouchableOpacity key={chip.id} style={[styles.chip, selectedChip === chip.id && styles.chipActive]} activeOpacity={0.85} onPress={() => setSelectedChip(chip.id)}>
              <Icon name={chip.icon} size={18} color="#C94444" style={{ marginRight: 6 }} />
              <Text style={[styles.chipText, selectedChip === chip.id && styles.chipTextActive]}>{chip.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.searchWrap}>
          <Icon name="magnify" size={22} color="#999999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search within this category"
            placeholderTextColor="#9AA1A9"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        {items.map((item) => (
          <TouchableOpacity key={item.id} style={styles.listCard} activeOpacity={0.9} onPress={() => handleSelect(item)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listDesc}>{item.desc}</Text>
            </View>
            <Icon name="chevron-right" size={22} color="#9AA1A9" />
          </TouchableOpacity>
        ))}

        <View style={styles.footerNoteWrap}>
          <View style={styles.sectionDivider} />
          <Text style={styles.footerNote}>You can cancel anytime before sharing.</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  headerBtn: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#C94444',
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
    fontWeight: '600',
    color: '#666666',
    textAlign: 'center',
    marginBottom: 1,
  },
  chipsScroll: {
    marginBottom: 1,
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 0,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 36,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  chipActive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#2F80ED',
  },
  chipText: {
    fontSize: 13,
    color: '#C94444',
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#2F80ED',
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#2C3E50',
  },
  listCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },
  listDesc: {
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

export default CreateAwarenessScreen;