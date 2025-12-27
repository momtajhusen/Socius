// src/screens/volunteer/VolunteerProfileScreen.js
// Volunteer profile with ratings and badges

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { useAuth } from '../../state/hooks/useAuth';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const VolunteerProfileScreen = ({ navigation }) => {
  const { user, handleLogout } = useAuth();

  const volunteerStats = {
    rating: 4.8,
    reviews: 23,
    peopleHelped: 120,
    hoursContributed: 48,
    currentStreak: 12,
  };

  const badges = [
    { id: 'hero', icon: '🦸', name: 'Community Hero', earned: true },
    { id: 'rapid', icon: '⚡', name: 'Rapid Responder', earned: true },
    { id: 'caring', icon: '💚', name: 'Caring Soul', earned: true },
    { id: 'consistent', icon: '🎯', name: 'Consistent Volunteer', earned: false },
    { id: 'mentor', icon: '🎓', name: 'Mentor', earned: false },
  ];

  const specializations = [
    { id: 'medical', label: 'Medical Support', verified: true },
    { id: 'community', label: 'Community Peace', verified: true },
    { id: 'legal', label: 'Legal Support', verified: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Guardian Profile" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Header */}
        <Card style={styles.profileCard} shadow="medium">
          <View style={styles.profileTop}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>🧑‍🦰</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>
                {user?.name || 'Volunteer'}
              </Text>
              <Text style={styles.profileStatus}>✓ Verified Guardian</Text>
              <Text style={styles.profileSince}>
                Since January 2024
              </Text>
            </View>
          </View>

          {/* Rating */}
          <View style={styles.ratingSection}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingValue}>⭐ {volunteerStats.rating}</Text>
              <Text style={styles.ratingLabel}>
                Based on {volunteerStats.reviews} reviews
              </Text>
            </View>
          </View>
        </Card>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>👥</Text>
            <Text style={styles.statValue}>{volunteerStats.peopleHelped}</Text>
            <Text style={styles.statLabel}>People Helped</Text>
          </Card>

          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>⏱️</Text>
            <Text style={styles.statValue}>{volunteerStats.hoursContributed}</Text>
            <Text style={styles.statLabel}>Hours Contributed</Text>
          </Card>

          <Card style={styles.statCard} shadow="small">
            <Text style={styles.statIcon}>🔥</Text>
            <Text style={styles.statValue}>{volunteerStats.currentStreak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </Card>
        </View>

        {/* Badges Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Achievements</Text>

          <View style={styles.badgesGrid}>
            {badges.map((badge) => (
              <Card
                key={badge.id}
                style={[
                  styles.badgeCard,
                  !badge.earned && styles.badgeCardLocked,
                ]}
                shadow="small"
              >
                <Text style={styles.badgeIcon}>{badge.icon}</Text>
                <Text
                  style={[
                    styles.badgeName,
                    !badge.earned && styles.badgeNameLocked,
                  ]}
                >
                  {badge.name}
                </Text>
                {badge.earned && (
                  <Text style={styles.badgeEarned}>✓ Earned</Text>
                )}
                {!badge.earned && (
                  <Text style={styles.badgeLocked}>🔒 Locked</Text>
                )}
              </Card>
            ))}
          </View>
        </View>

        {/* Specializations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Specializations</Text>

          {specializations.map((spec) => (
            <Card key={spec.id} style={styles.specCard} shadow="small">
              <View style={styles.specContent}>
                <Text style={styles.specLabel}>{spec.label}</Text>
                {spec.verified && (
                  <Text style={styles.specVerified}>✓ Verified</Text>
                )}
                {!spec.verified && (
                  <Text style={styles.specPending}>⏳ Pending</Text>
                )}
              </View>
            </Card>
          ))}
        </View>

        {/* Recent Reviews */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Reviews</Text>

          <Card style={styles.reviewCard} shadow="small">
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>Sarah J.</Text>
              <Text style={styles.reviewRating}>⭐⭐⭐⭐⭐</Text>
            </View>
            <Text style={styles.reviewText}>
              Very helpful and professional. Arrived quickly and handled the situation calmly.
            </Text>
          </Card>

          <Card style={styles.reviewCard} shadow="small">
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>John D.</Text>
              <Text style={styles.reviewRating}>⭐⭐⭐⭐</Text>
            </View>
            <Text style={styles.reviewText}>
              Quick response and great support. Really appreciate the help.
            </Text>
          </Card>
        </View>

        {/* Volunteer Info */}
        <View style={styles.section}>
          <Card style={styles.infoCard} shadow="small">
            <Text style={styles.infoBold}>
              You're Making a Real Difference
            </Text>
            <Text style={styles.infoText}>
              Your dedication and compassion have positively impacted {volunteerStats.peopleHelped} people in your community. Thank you for being a guardian.
            </Text>
          </Card>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionSection}>
          <Button
            title="Edit Profile"
            onPress={() => alert('Edit profile')}
            variant="secondary"
            fullWidth
            style={styles.actionButton}
          />

          <Button
            title="Logout"
            onPress={handleLogout}
            variant="emergency"
            fullWidth
            style={styles.actionButton}
          />
        </View>

        <View style={{ height: Spacing.marginXxl }} />
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
  profileTop: {
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
  },
  profileName: {
    ...Typography.h5,
    color: Colors.textDark,
    fontWeight: '700',
  },
  profileStatus: {
    ...Typography.bodySmall,
    color: Colors.success,
    fontWeight: '600',
    marginTop: Spacing.marginXs,
  },
  profileSince: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  ratingSection: {
    paddingTop: Spacing.paddingMd,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  ratingBox: {
    alignItems: 'center',
  },
  ratingValue: {
    ...Typography.h4,
    color: Colors.primary,
    fontWeight: '700',
  },
  ratingLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
    marginBottom: Spacing.marginXxl,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
  },
  statIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  statValue: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginTop: Spacing.marginXs,
    textAlign: 'center',
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
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.gapMd,
  },
  badgeCard: {
    width: '31%',
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    paddingVertical: Spacing.paddingMd,
    borderWidth: 2,
    borderColor: Colors.success,
  },
  badgeCardLocked: {
    borderColor: Colors.borderLight,
    opacity: 0.6,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: Spacing.marginSm,
  },
  badgeName: {
    ...Typography.caption,
    color: Colors.textDark,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: Spacing.marginXs,
  },
  badgeNameLocked: {
    color: Colors.textMuted,
  },
  badgeEarned: {
    ...Typography.caption,
    color: Colors.success,
    fontWeight: '700',
  },
  badgeLocked: {
    ...Typography.caption,
    color: Colors.textMuted,
    fontWeight: '500',
  },
  specCard: {
    backgroundColor: Colors.cardBg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.marginMd,
  },
  specContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specLabel: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  specVerified: {
    ...Typography.caption,
    color: Colors.success,
    fontWeight: '700',
  },
  specPending: {
    ...Typography.caption,
    color: Colors.warning,
    fontWeight: '600',
  },
  reviewCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginMd,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.marginMd,
  },
  reviewName: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  reviewRating: {
    fontSize: 14,
  },
  reviewText: {
    ...Typography.caption,
    color: Colors.textDark,
    lineHeight: 16,
  },
  infoCard: {
    backgroundColor: '#F0F8FF',
  },
  infoBold: {
    ...Typography.label,
    color: Colors.info,
    fontWeight: '700',
    marginBottom: Spacing.marginMd,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.info,
    lineHeight: 16,
  },
  actionSection: {
    gap: Spacing.gapMd,
  },
  actionButton: {
    paddingVertical: Spacing.paddingMd,
  },
});

export default VolunteerProfileScreen;