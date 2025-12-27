// src/screens/user/UserProfileScreen.js
// User profile, settings, and preferences

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useAuth } from '../../state/hooks/useAuth';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const UserProfileScreen = ({ navigation }) => {
  const { user, handleLogout } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [anonymousMode, setAnonymousMode] = useState(false);

  const handleLogoutPress = async () => {
    if (await handleLogout()) {
      // Navigation happens automatically via RootNavigator
      console.log('Logged out');
    }
  };

  const menuItems = [
    {
      id: 'emergency',
      icon: '📱',
      title: 'Emergency Contacts',
      subtitle: 'Police, Ambulance, etc.',
      onPress: () => navigation.navigate('EmergencyContacts'),
    },
    {
      id: 'subscriptions',
      icon: '💳',
      title: 'Subscription',
      subtitle: 'Manage your plan',
      onPress: () => alert('Subscriptions'),
    },
    {
      id: 'privacy',
      icon: '🔒',
      title: 'Privacy & Security',
      subtitle: 'Manage permissions',
      onPress: () => alert('Privacy settings'),
    },
    {
      id: 'help',
      icon: '❓',
      title: 'Help & Support',
      subtitle: 'FAQs, contact support',
      onPress: () => alert('Help'),
    },
    {
      id: 'about',
      icon: 'ℹ️',
      title: 'About',
      subtitle: 'App version, terms',
      onPress: () => alert('About'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Account" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Section */}
        <Card style={styles.profileCard} shadow="medium">
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>
                {user?.name || 'User Name'}
              </Text>
              <Text style={styles.profileRole}>Community Member</Text>
              <Text style={styles.profileSince}>
                Member since 2024
              </Text>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Requests Made</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>4.8</Text>
              <Text style={styles.statLabel}>Avg Rating</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Volunteers Helped</Text>
            </View>
          </View>

          {/* Edit Profile Button */}
          <Button
            title="Edit Profile"
            onPress={() => alert('Edit profile')}
            variant="secondary"
            fullWidth
            style={styles.editButton}
          />
        </Card>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          {/* Notifications Toggle */}
          <Card style={styles.settingCard} shadow="small">
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>🔔</Text>
                <View>
                  <Text style={styles.settingTitle}>Notifications</Text>
                  <Text style={styles.settingSubtitle}>
                    Help requests and updates
                  </Text>
                </View>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: Colors.borderLight, true: Colors.success }}
                thumbColor={Colors.white}
              />
            </View>
          </Card>

          {/* Location Sharing Toggle */}
          <Card style={styles.settingCard} shadow="small">
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>📍</Text>
                <View>
                  <Text style={styles.settingTitle}>Location Sharing</Text>
                  <Text style={styles.settingSubtitle}>
                    Share your live location with responders
                  </Text>
                </View>
              </View>
              <Switch
                value={locationSharing}
                onValueChange={setLocationSharing}
                trackColor={{ false: Colors.borderLight, true: Colors.success }}
                thumbColor={Colors.white}
              />
            </View>
          </Card>

          {/* Anonymous Mode Toggle */}
          <Card style={styles.settingCard} shadow="small">
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>🕵️</Text>
                <View>
                  <Text style={styles.settingTitle}>Anonymous Mode</Text>
                  <Text style={styles.settingSubtitle}>
                    Hide your profile from public view
                  </Text>
                </View>
              </View>
              <Switch
                value={anonymousMode}
                onValueChange={setAnonymousMode}
                trackColor={{ false: Colors.borderLight, true: Colors.success }}
                thumbColor={Colors.white}
              />
            </View>
          </Card>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={item.onPress}
              style={styles.menuItemWrapper}
            >
              <Card style={styles.menuItem} shadow="small">
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemIcon}>{item.icon}</Text>
                  <View style={styles.menuItemText}>
                    <Text style={styles.menuItemTitle}>{item.title}</Text>
                    <Text style={styles.menuItemSubtitle}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
                <Text style={styles.menuItemArrow}>›</Text>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {/* Danger Zone */}
        <View style={styles.section}>
          <Text style={styles.dangerTitle}>Danger Zone</Text>

          {/* Report Abuse */}
          <TouchableOpacity style={styles.menuItemWrapper}>
            <Card style={styles.dangerItem} shadow="small">
              <Text style={styles.dangerIcon}>⚠️</Text>
              <View style={styles.menuItemText}>
                <Text style={styles.dangerItemTitle}>Report an Issue</Text>
                <Text style={styles.dangerItemSubtitle}>
                  Report abuse or inappropriate behavior
                </Text>
              </View>
            </Card>
          </TouchableOpacity>

          {/* Logout */}
          <Button
            title="Logout"
            onPress={handleLogoutPress}
            variant="emergency"
            fullWidth
            style={styles.logoutButton}
          />

          {/* Delete Account */}
          <TouchableOpacity style={styles.deleteAccountButton}>
            <Text style={styles.deleteAccountText}>
              Delete Account Permanently
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>App Version 1.0.0</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingXl,
  },
  profileCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginXxl,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.marginXl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.marginMd,
  },
  avatarText: {
    fontSize: 40,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    ...Typography.h5,
    color: Colors.textDark,
    fontWeight: '700',
  },
  profileRole: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    marginTop: Spacing.marginXs,
  },
  profileSince: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  statsRow: {
    flexDirection: 'row',
    paddingVertical: Spacing.paddingMd,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
    marginBottom: Spacing.marginMd,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.borderLight,
  },
  editButton: {
    paddingVertical: Spacing.paddingMd,
  },
  section: {
    marginBottom: Spacing.marginXxl,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  settingCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginMd,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    fontSize: 24,
    marginRight: Spacing.marginMd,
  },
  settingTitle: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  settingSubtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  menuItemWrapper: {
    marginBottom: Spacing.marginMd,
  },
  menuItem: {
    backgroundColor: Colors.cardBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemIcon: {
    fontSize: 24,
    marginRight: Spacing.marginMd,
  },
  menuItemText: {
    flex: 1,
  },
  menuItemTitle: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  menuItemSubtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  menuItemArrow: {
    fontSize: 24,
    color: Colors.textMuted,
  },
  dangerTitle: {
    ...Typography.h5,
    color: Colors.emergency,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  dangerItem: {
    backgroundColor: '#FFE5E5',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.marginMd,
  },
  dangerIcon: {
    fontSize: 24,
    marginRight: Spacing.marginMd,
  },
  dangerItemTitle: {
    ...Typography.label,
    color: Colors.emergency,
    fontWeight: '600',
  },
  dangerItemSubtitle: {
    ...Typography.caption,
    color: Colors.emergency,
    opacity: 0.8,
    marginTop: Spacing.marginXs,
  },
  logoutButton: {
    marginBottom: Spacing.marginMd,
    paddingVertical: Spacing.paddingMd,
  },
  deleteAccountButton: {
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  deleteAccountText: {
    ...Typography.bodySmall,
    color: Colors.emergency,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: Spacing.paddingXl,
    marginTop: Spacing.marginXxl,
  },
  footerText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.marginMd,
  },
  footerLink: {
    ...Typography.caption,
    color: Colors.primary,
    textDecorationLine: 'underline',
    marginVertical: Spacing.marginSm,
  },
});

export default UserProfileScreen;