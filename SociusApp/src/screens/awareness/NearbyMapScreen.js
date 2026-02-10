import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const NearbyMapScreen = ({ navigation }) => {
  const [isGuidanceExpanded, setIsGuidanceExpanded] = useState(true);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="Socius" 
        onBackPress={() => navigation.goBack()}
        style={styles.header}
        titleStyle={styles.headerTitle}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Map Placeholder */}
        <View style={styles.mapCard}>
          <View style={styles.mapPlaceholder}>
            {/* Simple map pattern simulation */}
            <View style={[styles.mapRoad, { top: 20, transform: [{ rotate: '15deg' }] }]} />
            <View style={[styles.mapRoad, { top: 60, transform: [{ rotate: '-10deg' }] }]} />
            <View style={[styles.mapRoad, { left: 100, width: 20, height: 150, transform: [{ rotate: '0deg' }] }]} />
            
            <View style={styles.mapPinContainer}>
              <Icon name="map-marker" size={40} color="#7F8C8D" />
            </View>
          </View>
          <View style={styles.distanceContainer}>
            <Text style={styles.distanceText}>Approximately <Text style={styles.boldText}>400 meters</Text> away.</Text>
          </View>
        </View>

        {/* Situation Details */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Situation shared nearby</Text>
          <View style={styles.divider} />
          <Text style={styles.situationText}>
            Situation: <Text style={styles.boldText}>Being followed</Text>
          </Text>
          <Text style={styles.situationNote}>
            Note: Walking alone near main road
          </Text>
        </View>

        {/* Let them know button */}
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
          <LinearGradient
            colors={['#F0F0F0', '#E0E0E0']}
            style={styles.actionButtonGradient}
          >
            <Text style={styles.actionButtonText}>Let them know I may be nearby</Text>
            <Text style={styles.actionButtonSubtext}>This shares only your first name and photo.</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Safety Guidance */}
        <View style={styles.guidanceCard}>
          <TouchableOpacity 
            style={styles.guidanceHeader} 
            onPress={() => setIsGuidanceExpanded(!isGuidanceExpanded)}
          >
            <View style={styles.guidanceHeaderLeft}>
              <View style={styles.dot} />
              <Text style={styles.guidanceTitle}>Safety guidance <Text style={styles.tapToView}>(tap to view)</Text></Text>
            </View>
            <Icon name={isGuidanceExpanded ? "chevron-up" : "chevron-down"} size={20} color="#7F8C8D" />
          </TouchableOpacity>

          {isGuidanceExpanded && (
            <View style={styles.guidanceContent}>
              <View style={styles.guidanceRow}>
                {/* DO Column */}
                <View style={styles.guidanceColumn}>
                  <Text style={styles.columnHeader}>Do</Text>
                  <View style={styles.columnDivider} />
                  
                  <View style={styles.checkItem}>
                    <Icon name="check-circle" size={16} color="#7DA47B" style={styles.checkIcon} />
                    <Text style={styles.checkText}>Stay visible and calm</Text>
                  </View>
                  <View style={styles.checkItem}>
                    <Icon name="check-circle" size={16} color="#7DA47B" style={styles.checkIcon} />
                    <Text style={styles.checkText}>Keep distance</Text>
                  </View>
                  <View style={styles.checkItem}>
                    <Icon name="check-circle" size={16} color="#7DA47B" style={styles.checkIcon} />
                    <Text style={styles.checkText}>Ask "Are you okay?"</Text>
                  </View>
                  <View style={styles.checkItem}>
                    <Icon name="check-circle" size={16} color="#7DA47B" style={styles.checkIcon} />
                    <Text style={styles.checkText}>Contact authorities if unsure</Text>
                  </View>
                </View>

                {/* Vertical Divider */}
                <View style={styles.verticalDivider} />

                {/* DON'T Column */}
                <View style={styles.guidanceColumn}>
                  <Text style={styles.columnHeader}>Don't</Text>
                  <View style={styles.columnDivider} />
                  
                  <View style={styles.checkItem}>
                    <View style={styles.xIconContainer}>
                      <Icon name="arrow-up" size={10} color="#FFFFFF" style={{ transform: [{ rotate: '45deg' }] }} />
                    </View>
                    <Text style={styles.checkText}>Don't confront or chase</Text>
                  </View>
                  <View style={styles.checkItem}>
                    <View style={styles.xIconContainer}>
                      <Icon name="arrow-up" size={10} color="#FFFFFF" style={{ transform: [{ rotate: '45deg' }] }} />
                    </View>
                    <Text style={styles.checkText}>Don't detain anyone</Text>
                  </View>
                  <View style={styles.checkItem}>
                    <View style={styles.xIconContainer}>
                      <Icon name="arrow-up" size={10} color="#FFFFFF" style={{ transform: [{ rotate: '45deg' }] }} />
                    </View>
                    <Text style={styles.checkText}>Don't use force</Text>
                  </View>
                  <View style={styles.checkItem}>
                    <View style={styles.xIconContainer}>
                      <Icon name="arrow-up" size={10} color="#FFFFFF" style={{ transform: [{ rotate: '45deg' }] }} />
                    </View>
                    <Text style={styles.checkText}>Don't put yourself at risk</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Open Navigation Button */}
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
          <LinearGradient
            colors={['#F8F9FA', '#F1F2F3']}
            style={styles.actionButtonGradient}
          >
            <Text style={styles.actionButtonText}>Open navigation <Text style={styles.normalText}>(external app)</Text></Text>
            <Text style={styles.actionButtonSubtext}>Use only if you feel safe.</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Bottom Emergency Bar */}
        <View style={styles.emergencyBar}>
          <TouchableOpacity style={styles.emergencyItem}>
            <Icon name="shield-account" size={20} color="#7F8C8D" />
            <Text style={styles.emergencyText}>Police</Text>
          </TouchableOpacity>
          
          <View style={styles.barDivider} />
          
          <TouchableOpacity style={styles.emergencyItem}>
            <View style={styles.plusIconBox}>
              <Icon name="plus" size={12} color="#FFFFFF" />
            </View>
            <Text style={styles.emergencyText}>Ambulance</Text>
          </TouchableOpacity>
          
          <View style={styles.barDivider} />
          
          <TouchableOpacity style={styles.emergencyItem}>
            <Icon name="phone" size={20} color="#7F8C8D" />
            <Text style={styles.emergencyText}>Helpline</Text>
          </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    color: '#A83A30',
    fontSize: 18,
    fontWeight: '600',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  mapCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    height: 140,
    backgroundColor: '#E5E7E9',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  mapRoad: {
    position: 'absolute',
    height: 20,
    width: '120%',
    backgroundColor: '#FFFFFF',
    left: -20,
  },
  mapPinContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  distanceContainer: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  distanceText: {
    fontSize: 14,
    color: '#5D6D7E',
  },
  boldText: {
    fontWeight: '700',
    color: '#2C3E50',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5D6D7E',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: 12,
  },
  situationText: {
    fontSize: 15,
    color: '#2C3E50',
    marginBottom: 6,
  },
  situationNote: {
    fontSize: 14,
    color: '#5D6D7E',
  },
  actionButton: {
    marginBottom: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 2,
  },
  normalText: {
    fontWeight: '400',
    fontSize: 14,
  },
  actionButtonSubtext: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  guidanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  guidanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  guidanceHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D35400', // Orange/Red dot
    marginRight: 8,
  },
  guidanceTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2C3E50',
  },
  tapToView: {
    fontWeight: '400',
    color: '#7F8C8D',
    fontSize: 12,
  },
  guidanceContent: {
    padding: 12,
  },
  guidanceRow: {
    flexDirection: 'row',
  },
  guidanceColumn: {
    flex: 1,
  },
  columnHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },
  columnDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: 8,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 8,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  checkIcon: {
    marginTop: 1,
    marginRight: 6,
  },
  xIconContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#C0392B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    marginRight: 6,
  },
  checkText: {
    fontSize: 11,
    color: '#2C3E50',
    flex: 1,
    lineHeight: 16,
  },
  emergencyBar: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  emergencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  emergencyText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginLeft: 6,
    fontWeight: '500',
  },
  barDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#D5D8DC',
  },
  plusIconBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#7F8C8D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NearbyMapScreen;
