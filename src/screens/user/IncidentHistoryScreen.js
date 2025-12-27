// src/screens/user/IncidentHistoryScreen.js
// User's past incidents history

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

const IncidentHistoryScreen = ({ navigation }) => {
  const [filterTab, setFilterTab] = useState('all'); // all, resolved, cancelled

  // Mock incident data
  const incidents = [
    {
      id: 'INC-001',
      date: 'Apr 18, 2024',
      time: '2:30 PM',
      type: 'Medical Emergency',
      category: 'medical',
      status: 'resolved',
      icon: '🚑',
      volunteers: ['Anna', 'Peter'],
      duration: '12 minutes',
      location: 'Downtown Area',
      rating: 4.8,
      feedback: 'Very helpful and professional',
    },
    {
      id: 'INC-002',
      date: 'Apr 15, 2024',
      time: '9:24 PM',
      type: 'Suspicious Activity',
      category: 'suspicious',
      status: 'resolved',
      icon: '👁️',
      volunteers: ['Susan'],
      duration: '8 minutes',
      location: 'West End',
      rating: 4.5,
      feedback: 'Quick response',
    },
    {
      id: 'INC-003',
      date: 'Mar 27, 2024',
      time: '5:15 PM',
      type: 'Loud Noise',
      category: 'noise',
      status: 'cancelled',
      icon: '🔊',
      volunteers: [],
      duration: '2 minutes',
      location: 'Downtown Area',
      rating: null,
      feedback: null,
    },
    {
      id: 'INC-004',
      date: 'Mar 22, 2024',
      time: '11:45 AM',
      type: 'Medical Emergency',
      category: 'medical',
      status: 'resolved',
      icon: '🚑',
      volunteers: ['Anna', 'Peter', 'Susan'],
      duration: '15 minutes',
      location: 'Midtown',
      rating: 4.9,
      feedback: 'Excellent response and care',
    },
  ];

  const filteredIncidents = incidents.filter((inc) => {
    if (filterTab === 'all') return true;
    return inc.status === filterTab;
  });

  const getStatusColor = (status) => {
    if (status === 'resolved') return Colors.activeGreen;
    if (status === 'cancelled') return Colors.neutral;
    return Colors.warning;
  };

  const getStatusLabel = (status) => {
    if (status === 'resolved') return '✓ Resolved';
    if (status === 'cancelled') return '✕ Cancelled';
    return '⧖ Pending';
  };

  const renderIncidentCard = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('IncidentDetail', { incidentId: item.id })
      }
    >
      <Card style={styles.incidentCard} shadow="medium">
        {/* Header */}
        <View style={styles.cardHeader}>
          <View style={styles.headerLeft}>
            <Text style={styles.incidentIcon}>{item.icon}</Text>
            <View>
              <Text style={styles.incidentTitle}>{item.type}</Text>
              <Text style={styles.incidentTime}>
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
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Duration</Text>
            <Text style={styles.detailValue}>{item.duration}</Text>
          </View>

          {item.volunteers.length > 0 && (
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Volunteers</Text>
              <Text style={styles.detailValue}>{item.volunteers.length}</Text>
            </View>
          )}

          {item.rating && (
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Your Rating</Text>
              <Text style={styles.detailValue}>⭐ {item.rating}</Text>
            </View>
          )}
        </View>

        {/* Volunteers List */}
        {item.volunteers.length > 0 && (
          <View style={styles.volunteersList}>
            <Text style={styles.volunteersLabel}>Responders:</Text>
            <View style={styles.volunteersRow}>
              {item.volunteers.map((vol, index) => (
                <View key={index} style={styles.volunteerTag}>
                  <Text style={styles.volunteerName}>{vol}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Feedback */}
        {item.feedback && (
          <View style={styles.feedbackSection}>
            <Text style={styles.feedbackLabel}>Your Feedback:</Text>
            <Text style={styles.feedbackText}>"{item.feedback}"</Text>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          {item.status === 'resolved' && (
            <>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>📝 View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.actionButtonSecondary]}>
                <Text style={[styles.actionButtonText, { color: Colors.primary }]}>
                  ⭐ Rate
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>📋</Text>
      <Text style={styles.emptyTitle}>No incidents yet</Text>
      <Text style={styles.emptyText}>
        Your incident history will appear here
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Incident History"
        subtitle={`${filteredIncidents.length} incidents`}
      />

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
            filterTab === 'resolved' && styles.filterTabActive,
          ]}
          onPress={() => setFilterTab('resolved')}
        >
          <Text
            style={[
              styles.filterTabText,
              filterTab === 'resolved' && styles.filterTabTextActive,
            ]}
          >
            Resolved
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

      {/* Incidents List */}
      <FlatList
        data={filteredIncidents}
        renderItem={renderIncidentCard}
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
  incidentCard: {
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
  incidentIcon: {
    fontSize: 32,
    marginRight: Spacing.marginMd,
  },
  incidentTitle: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  incidentTime: {
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
  volunteersList: {
    marginBottom: Spacing.marginMd,
  },
  volunteersLabel: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.marginSm,
  },
  volunteersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.gapSm,
  },
  volunteerTag: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingSm,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  volunteerName: {
    ...Typography.caption,
    color: Colors.primary,
    fontWeight: '600',
  },
  feedbackSection: {
    backgroundColor: '#F0F8FF',
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingMd,
    marginBottom: Spacing.marginMd,
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
  actionRow: {
    flexDirection: 'row',
    gap: Spacing.gapMd,
  },
  actionButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: Spacing.radiusLarge,
    paddingVertical: Spacing.paddingSm,
    alignItems: 'center',
  },
  actionButtonSecondary: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  actionButtonText: {
    ...Typography.caption,
    color: Colors.white,
    fontWeight: '600',
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
    marginBottom: Spacing.marginSm,
  },
  emptyText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
  },
});

export default IncidentHistoryScreen;