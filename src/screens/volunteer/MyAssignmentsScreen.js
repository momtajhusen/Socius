// src/screens/volunteer/MyAssignmentsScreen.js
// Volunteer's assignment history

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const MyAssignmentsScreen = ({ navigation }) => {
  const [filterTab, setFilterTab] = useState('all'); // all, completed, cancelled

  // Mock assignments data
  const assignments = [
    {
      id: 'ASG-001',
      type: 'Medical Emergency',
      icon: '🚑',
      location: 'Downtown Area',
      date: 'Today',
      time: '2:30 PM',
      status: 'completed',
      duration: '12 min',
      person: 'Sarah Johnson',
      rating: 5,
      feedback: 'Very helpful and professional',
      resolution: 'Person stabilized, medical help provided',
    },
    {
      id: 'ASG-002',
      type: 'Safety Threat',
      icon: '⚠️',
      location: 'West End',
      date: 'Yesterday',
      time: '9:24 PM',
      status: 'completed',
      duration: '8 min',
      person: 'John Doe',
      rating: 4,
      feedback: 'Quick response',
      resolution: 'Authorities called, situation resolved',
    },
    {
      id: 'ASG-003',
      type: 'Lost Person',
      icon: '👤',
      location: 'Central Park',
      date: 'Mar 25',
      time: '3:45 PM',
      status: 'completed',
      duration: '22 min',
      person: 'Emily Chen',
      rating: 5,
      feedback: 'Found the person quickly',
      resolution: 'Person located and reunited with family',
    },
    {
      id: 'ASG-004',
      type: 'Noise Complaint',
      icon: '🔊',
      location: 'Downtown Area',
      date: 'Mar 22',
      time: '11:30 PM',
      status: 'cancelled',
      duration: null,
      person: null,
      rating: null,
      feedback: null,
      resolution: 'Situation resolved before arrival',
    },
  ];

  const filteredAssignments = assignments.filter((a) => {
    if (filterTab === 'all') return true;
    return a.status === filterTab;
  });

  const getStatusColor = (status) => {
    if (status === 'completed') return Colors.activeGreen;
    return Colors.neutral;
  };

  const getStatusLabel = (status) => {
    if (status === 'completed') return '✓ Completed';
    return '✕ Cancelled';
  };

  const renderAssignmentCard = ({ item }) => (
    <Card style={styles.assignmentCard} shadow="medium">
      {/* Header */}
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <Text style={styles.assignmentIcon}>{item.icon}</Text>
          <View>
            <Text style={styles.assignmentType}>{item.type}</Text>
            <Text style={styles.assignmentDate}>
              {item.date} • {item.time}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(item.status) + '20' },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: getStatusColor(item.status) },
            ]}
          >
            {getStatusLabel(item.status)}
          </Text>
        </View>
      </View>

      {/* Location */}
      <View style={styles.locationRow}>
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.locationText}>{item.location}</Text>
      </View>

      {/* Details Row */}
      {item.status === 'completed' && (
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Duration</Text>
            <Text style={styles.detailValue}>{item.duration}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Person</Text>
            <Text style={styles.detailValue}>{item.person}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Their Rating</Text>
            <Text style={styles.detailValue}>⭐ {item.rating}/5</Text>
          </View>
        </View>
      )}

      {/* Resolution */}
      {item.status === 'completed' && item.resolution && (
        <View style={styles.resolutionSection}>
          <Text style={styles.resolutionLabel}>Resolution:</Text>
          <Text style={styles.resolutionText}>{item.resolution}</Text>
        </View>
      )}

      {/* Feedback */}
      {item.status === 'completed' && item.feedback && (
        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackLabel}>Their Feedback:</Text>
          <Text style={styles.feedbackText}>"{item.feedback}"</Text>
        </View>
      )}

      {/* Cancellation Reason */}
      {item.status === 'cancelled' && (
        <View style={styles.cancellationSection}>
          <Text style={styles.cancellationText}>
            ℹ️ {item.resolution}
          </Text>
        </View>
      )}
    </Card>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>📋</Text>
      <Text style={styles.emptyTitle}>No assignments yet</Text>
      <Text style={styles.emptyText}>
        Your assignment history will appear here
      </Text>
    </View>
  );

  // Stats
  const stats = {
    total: assignments.length,
    completed: assignments.filter((a) => a.status === 'completed').length,
    cancelled: assignments.filter((a) => a.status === 'cancelled').length,
    avgRating: 4.7,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Assignments" subtitle={`${stats.total} total`} />

      {/* Stats Bar */}
      <View style={styles.statsBar}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Completed</Text>
          <Text style={styles.statValue}>{stats.completed}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Cancelled</Text>
          <Text style={styles.statValue}>{stats.cancelled}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Avg Rating</Text>
          <Text style={styles.statValue}>⭐ {stats.avgRating}</Text>
        </View>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterTabs}>
        <TouchableOpacity
          style={[
            styles.filterTab,
            filterTab === 'all' && styles.filterTabActive,
          ]}
          onPress={() => setFilterTab('all')}
        >
          <Text
            style={[
              styles.filterTabText,
              filterTab === 'all' && styles.filterTabTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterTab,
            filterTab === 'completed' && styles.filterTabActive,
          ]}
          onPress={() => setFilterTab('completed')}
        >
          <Text
            style={[
              styles.filterTabText,
              filterTab === 'completed' && styles.filterTabTextActive,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterTab,
            filterTab === 'cancelled' && styles.filterTabActive,
          ]}
          onPress={() => setFilterTab('cancelled')}
        >
          <Text
            style={[
              styles.filterTabText,
              filterTab === 'cancelled' && styles.filterTabTextActive,
            ]}
          >
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>

      {/* Assignments List */}
      <FlatList
        data={filteredAssignments}
        renderItem={renderAssignmentCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyState}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  statsBar: {
    backgroundColor: Colors.cardBg,
    flexDirection: 'row',
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingMd,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.marginXs,
  },
  statValue: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '700',
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.borderLight,
  },
  filterTabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
    backgroundColor: Colors.white,
  },
  filterTab: {
    flex: 1,
    paddingVertical: Spacing.paddingMd,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  filterTabActive: {
    borderBottomColor: Colors.primary,
  },
  filterTabText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    fontWeight: '500',
  },
  filterTabTextActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingXl,
  },
  assignmentCard: {
    backgroundColor: Colors.cardBg,
    marginBottom: Spacing.marginMd,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.marginMd,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  assignmentIcon: {
    fontSize: 32,
    marginRight: Spacing.marginMd,
  },
  assignmentType: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  assignmentDate: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  statusBadge: {
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingSm,
  },
  statusText: {
    ...Typography.caption,
    fontWeight: '600',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.marginMd,
    paddingBottom: Spacing.paddingMd,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: Spacing.marginSm,
  },
  locationText: {
    ...Typography.bodySmall,
    color: Colors.textDark,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: Spacing.marginMd,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.marginXs,
  },
  detailValue: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  resolutionSection: {
    marginBottom: Spacing.marginMd,
  },
  resolutionLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.marginXs,
  },
  resolutionText: {
    ...Typography.bodySmall,
    color: Colors.textDark,
  },
  feedbackSection: {
    backgroundColor: '#F0F8FF',
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingMd,
  },
  feedbackLabel: {
    ...Typography.caption,
    color: Colors.info,
    fontWeight: '600',
    marginBottom: Spacing.marginXs,
  },
  feedbackText: {
    ...Typography.caption,
    color: Colors.textDark,
    fontStyle: 'italic',
  },
  cancellationSection: {
    backgroundColor: '#F5F5F5',
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingMd,
  },
  cancellationText: {
    ...Typography.caption,
    color: Colors.textMuted,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.paddingLg,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: Spacing.marginMd,
  },
  emptyTitle: {
    ...Typography.h5,
    color: Colors.textDark,
    fontWeight: '600',
    marginBottom: Spacing.marginMd,
  },
  emptyText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
  },
});

export default MyAssignmentsScreen;