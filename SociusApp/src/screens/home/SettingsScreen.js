import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';

const SettingsScreen = ({ navigation }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  const sections = [
    {
      id: 1,
      title: 'Participation',
      items: [
        {
          id: 'availability',
          label: 'Availability Status',
          subtitle: null,
          type: 'toggle',
          value: isAvailable,
          onToggle: setIsAvailable,
          rightLabel: 'Available'
        },
        {
          id: 'pause',
          label: 'Pause Participation',
          subtitle: 'Temporarily stop receiving awareness alerts.',
          type: 'nav',
        }
      ],
      footer: 'Participation is always voluntary.'
    },
    {
      id: 2,
      title: 'Privacy & Data',
      items: [
        {
          id: 'privacy',
          label: 'Privacy Policy',
          subtitle: null,
          type: 'nav',
        },
        {
          id: 'usage',
          label: 'Data Usage Summary',
          subtitle: null,
          type: 'nav',
        },
        {
          id: 'location',
          label: 'Location Sharing Rules',
          subtitle: 'Location is shared only during an active request.',
          type: 'nav',
        }
      ]
    },
    {
      id: 3,
      title: 'Safety & Conduct',
      items: [
        {
          id: 'guidelines',
          label: 'Community Guidelines',
          subtitle: null,
          type: 'nav',
        },
        {
          id: 'conduct',
          label: 'Volunteer Code of Conduct',
          subtitle: null,
          type: 'nav',
        },
        {
          id: 'notdo',
          label: 'What Socius Does Not Do',
          subtitle: null,
          type: 'nav',
        }
      ]
    },
    {
      id: 4,
      title: 'Legal',
      items: [
        {
          id: 'terms',
          label: 'Terms of Use',
          subtitle: null,
          type: 'nav',
        },
        {
          id: 'consent',
          label: 'Consent & Disclaimers',
          subtitle: null,
          type: 'nav',
        },
        {
          id: 'jurisdiction',
          label: 'Jurisdiction & Dispute Resolution',
          subtitle: null,
          type: 'nav',
        }
      ],
      footer: 'Socius is an information-sharing platform only.'
    },
    {
      id: 5,
      title: 'Account',
      items: [
        {
          id: 'profile',
          label: 'Update Profile Information',
          subtitle: null,
          type: 'nav',
        },
        {
          id: 'delete',
          label: 'Delete Account',
          subtitle: null,
          type: 'nav',
          isDestructive: true,
        }
      ],
      footer: 'Socius does not provide emergency response or enforcement services.'
    }
  ];

  const handleNavigation = (itemId) => {
    console.log('Navigate to:', itemId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Settings" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {sections.map((section) => (
          <View key={section.id} style={styles.sectionWrapper}>
            {/* Section Title */}
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {/* Section Card */}
            <View style={styles.sectionCard}>
              {section.items.map((item, index) => (
                <View key={item.id} style={styles.itemWrapper}>
                  {item.type === 'toggle' ? (
                    // Toggle Item
                    <View style={styles.toggleItem}>
                      <View style={styles.itemLabelContainer}>
                        <Text style={styles.itemLabel}>{item.label}</Text>
                      </View>
                      <View style={styles.toggleContainer}>
                        <Text style={styles.rightLabel}>{item.rightLabel}</Text>
                        <Switch
                          style={styles.toggle}
                          value={item.value}
                          onValueChange={item.onToggle}
                          trackColor={{ false: '#D0D5DD', true: '#27AE60' }}
                          thumbColor="#FFFFFF"
                        />
                      </View>
                    </View>
                  ) : (
                    // Navigation Item
                    <TouchableOpacity 
                      style={styles.navItem}
                      onPress={() => handleNavigation(item.id)}
                    >
                      <View style={styles.itemLabelContainer}>
                        <Text style={[
                          styles.itemLabel,
                          item.isDestructive && styles.itemLabelDestructive
                        ]}>
                          {item.label}
                        </Text>
                        {item.subtitle && (
                          <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                        )}
                      </View>
                      <Icon name="chevron-right" size={24} color="#CCCCCC" />
                    </TouchableOpacity>
                  )}

                  {/* Divider */}
                  {index < section.items.length - 1 && (
                    <View style={styles.itemDivider} />
                  )}
                </View>
              ))}
            </View>

            {/* Footer Text */}
            {section.footer && (
              <Text style={styles.sectionFooter}>{section.footer}</Text>
            )}
          </View>
        ))}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },

  sectionWrapper: {
    marginBottom: 12,
  },

  // ===== SECTION TITLE =====
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 7,
    marginLeft: 4,
  },

  // ===== SECTION CARD =====
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8EAED',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  itemWrapper: {
    width: '100%',
  },

  // ===== TOGGLE ITEM =====
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  // ===== NAV ITEM =====
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 9,
  },

  itemLabelContainer: {
    flex: 1,
    paddingRight: 12,
  },

  itemLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    lineHeight: 22,
  },

  itemLabelDestructive: {
    color: '#DC5C69',
  },

  itemSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
    marginTop: 4,
    lineHeight: 18,
  },

  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  rightLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#666666',
  },

  toggle: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },

  // ===== DIVIDER =====
  itemDivider: {
    height: 1,
    backgroundColor: '#F0F1F3',
    marginHorizontal: 16,
  },

  // ===== SECTION FOOTER =====
  sectionFooter: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
    lineHeight: 16,
  },

  // ===== SPACING =====
  bottomSpacing: {
    height: 20,
  },
});

export default SettingsScreen;