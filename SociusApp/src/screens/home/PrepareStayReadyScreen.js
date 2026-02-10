import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';

const PrepareStayReadyScreen = ({ navigation }) => {
  const items = [
    {
      icon: { name: 'message-outline', color: '#5A6F7D', bg: '#EEF3F6' },
      title: 'When to ask for presence',
      subtitle: "Early signs that it's okay to share awareness.",
      route: 'WhenToAskPresence',
    },
    {
      icon: { name: 'block-helper', color: '#C94D4D', bg: '#F8EAEA' },
      title: 'When not to use Socius',
      subtitle: 'Situations better handled by authorities or trusted contacts.',
      route: 'SafetyTips',
    },
    {
      icon: { name: 'shield-check', color: '#8B6F47', bg: '#F1EEE8' },
      title: 'Staying safe while helping',
      subtitle: 'Boundaries, distance, and personal safety.',
      route: 'SafetyTips',
    },
    {
      icon: { name: 'hand-peace', color: '#5A6F7D', bg: '#EEF3F6' },
      title: 'De-escalation basics',
      subtitle: 'How calm presence can reduce tension.',
      route: 'SafetyTips',
    },
    {
      icon: { name: 'medical-bag', color: '#C94D4D', bg: '#F8EAEA' },
      title: 'Emergency first steps',
      subtitle: 'What to do before professional help arrives.',
      route: 'SafetyTips',
    },
  ];

  const chips = [
    { label: 'Understanding stress & fear', icon: 'brain' },
    { label: 'Cultural sensitivity & respect', icon: 'earth' },
    { label: 'Helping without overstepping', icon: 'handshake' },
  ];

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
        <Text style={styles.pageTitle}>Prepare & Stay Ready</Text>
        <Text style={styles.pageSubtitle}>
          Knowing what to do — and when not to.
        </Text>

        {/* List Cards */}
        <View style={styles.listContainer}>
          {items.map((item, idx) => (
            <TouchableOpacity 
              key={idx} 
              style={styles.listCard}
              activeOpacity={0.85}
              onPress={() => navigation.navigate(item.route)}
            >
              <View style={[styles.iconCircle, { backgroundColor: item.icon.bg }]}>
                <Icon name={item.icon.name} size={24} color={item.icon.color} />
              </View>
              <View style={styles.listText}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.listSubtitle}>{item.subtitle}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#999999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Learn more */}
        <Text style={styles.learnTitle}>Learn more</Text>
        <View style={styles.divider} />

        <View style={styles.chipsRow}>
          {chips.map((chip, idx) => (
            <View key={idx} style={styles.chip}>
              <Icon name={chip.icon} size={18} color="#2C3E50" />
              <Text style={styles.chipText}>{chip.label}</Text>
            </View>
          ))}
        </View>

        {/* Footer text */}
        <Text style={styles.footerText}>
          Preparation reduces harm and misunderstanding.
        </Text>
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
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 6,
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 18,
  },
  listContainer: {
    marginBottom: 20,
    gap: 10,
  },
  listCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listText: {
    flex: 1,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 4,
  },
  listSubtitle: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
  },
  learnTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    marginTop: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginVertical: 12,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
    justifyContent:"center"
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F5F1ED',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
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
  },
  footerText: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
    marginTop: 6,
  },
});

export default PrepareStayReadyScreen;
