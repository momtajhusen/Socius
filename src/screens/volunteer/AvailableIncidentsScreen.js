// src/screens/volunteer/AvailableIncidentsScreen.js
// Show nearby incidents that need volunteers

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const AvailableIncidentsScreen = ({ navigation }) => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  // Mock available incidents
  const incidents = [
    {
      id: 'INC-2024-001',
      type: 'Medical Emergency',
      category: 'medical',
      icon: '🚑',
      location: '123 Main St, Downtown',
      distance: '0.4 mi',
      description: 'Person feeling unwell, needs support',
      people: 1,
      reported: '2 min ago',
      urgency: 'high',
      volunteers: 2,
    },
    {
      id: 'INC-2024-002',
      type: 'Safety Threat',
      category: 'safety',
      icon: '⚠️',
      location: '456 Park Ave',
      distance: '0.8 mi',
      description: 'Suspicious person in the area',
      people: 1,
      reported: '5 min ago',
      urgency: 'medium',
      volunteers: 1,
    },
    {
      id: 'INC-2024-003',
      type: 'Lost Person',
      category: 'lost',
      icon: '👤',
      location: '789 Oak Rd',
      distance: '1.2 mi',
      description: 'Missing elderly person, needs community search',
      people: 1,
      reported: '8 min ago',
      urgency: 'high',
      volunteers: 0,
    },
  ];

  const getUrgencyColor = (urgency) => {
    if (urgency === 'high') return Colors.emergency;
    if (urgency === 'medium') return Colors.warning;
    return Colors.info;
  };

  const getUrgencyLabel = (urgency) => {
    if (urgency === 'high') return '🔴 High Priority';
    if (urgency === 'medium') return '🟡 Medium Priority';
    return '🔵 Low Priority';
  };

  const renderIncidentCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedIncident(item.id)}
      style={styles.incidentCardWrapper}
    >
      <Card
        style={[
          styles.incidentCard,
          selectedIncident === item.id && styles.incidentCardSelected,
          { borderLeftWidth: 4, borderLeftColor: getUrgencyColor(item.urgency) },
        ]}
        shadow={selectedIncident === item.id ? 'large' : 'medium'}
      >
        {/* Header */}
        <View style={styles.cardHeader}>
          <View style={styles.headerLeft}>
            <Text style={styles.incidentIcon}>{item.icon}</Text>
            <View>
              <Text style={styles.incidentType}>{item.type}</Text>
              <Text style={styles.incidentTime}>Reported {item.reported}</Text>
            </View>
          </View>
          <View style={[styles.urgencyBadge, { backgroundColor: getUrgencyColor(item.urgency) + '20' }]}>
            <Text style={[styles.urgencyText, { color: getUrgencyColor(item.urgency) }]}>
              {item.urgency === 'high' ? '⚡' : '⏱️'}
            </Text>
          </View>
        </View>

        {/* Location */}
        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <View style={styles.locationContent}>
            <Text style={styles.locationText}>{item.location}</Text>
            <Text style={styles.distanceText}>{item.distance} away</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{item.description}</Text>

        {/* Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>👥</Text>
            <Text style={styles.detailText}>{item.people} person</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>🆘</Text>
            <Text style={styles.detailText}>{item.volunteers} volunteer{item.volunteers !== 1 ? 's' : ''}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>{getUrgencyLabel(item.urgency).split(' ')[0]}</Text>
            <Text style={styles.detailText}>{item.urgency}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        {selectedIncident === item.id && (
          <View style={styles.actionButtons}>
            <Button
              title="Accept & Respond"
              onPress={() => navigation.navigate('IncidentAccept', { incidentId: item.id })}
              variant="primary"
              fullWidth
              style={styles.acceptButton}
            />
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        )}
      </Card>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>✓</Text>
      <Text style={styles.emptyTitle}>All caught up!</Text>
      <Text style={styles.emptyText}>
        No incidents nearby. Make sure your availability is turned on
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Available Incidents"
        subtitle={`${incidents.length} nearby`}
        onBackPress={() => navigation.goBack()}
        backButton
      />

      {/* Filter/Info Bar */}
      <View style={styles.filterBar}>
        <Text style={styles.filterText}>
          📍 Within 2 km radius • 🔴 {incidents.filter(i => i.urgency === 'high').length} High Priority
        </Text>
      </View>

      {/* Incidents List */}
      <FlatList
        data={incidents}
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
  filterBar: {
    backgroundColor: Colors.cardBg,
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingMd,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  filterText: {
    ...Typography.caption,
    color: Colors.textDark,
    fontWeight: '500',
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.paddingLg,
    paddingVertical: Spacing.paddingXl,
  },
  incidentCardWrapper: {
    marginBottom: Spacing.marginMd,
  },
  incidentCard: {
    backgroundColor: Colors.cardBg,
  },
  incidentCardSelected: {
    backgroundColor: Colors.white,
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
    fontSize: 40,
    marginRight: Spacing.marginMd,
  },
  incidentType: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '700',
  },
  incidentTime: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  urgencyBadge: {
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingSm,
  },
  urgencyText: {
    fontSize: 16,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.marginMd,
    paddingBottom: Spacing.marginMd,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  locationIcon: {
    fontSize: 18,
    marginRight: Spacing.marginMd,
    marginTop: Spacing.marginXs,
  },
  locationContent: {
    flex: 1,
  },
  locationText: {
    ...Typography.label,
    color: Colors.textDark,
    fontWeight: '600',
  },
  distanceText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.marginXs,
  },
  description: {
    ...Typography.bodySmall,
    color: Colors.textDark,
    marginBottom: Spacing.marginMd,
    lineHeight: 18,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: Spacing.marginMd,
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 16,
    marginBottom: Spacing.marginXs,
  },
  detailText: {
    ...Typography.caption,
    color: Colors.textDark,
    fontWeight: '500',
  },
  actionButtons: {
    gap: Spacing.gapMd,
    paddingTop: Spacing.paddingMd,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  acceptButton: {
    paddingVertical: Spacing.paddingMd,
  },
  declineButton: {
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Spacing.radiusLarge,
    paddingVertical: Spacing.paddingMd,
    alignItems: 'center',
  },
  declineButtonText: {
    ...Typography.label,
    color: Colors.textMuted,
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
    marginBottom: Spacing.marginMd,
  },
  emptyText: {
    ...Typography.bodySmall,
    color: Colors.textMuted,
    textAlign: 'center',
  },
});

export default AvailableIncidentsScreen;