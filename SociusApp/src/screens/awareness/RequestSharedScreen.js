import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  withDelay,
  Easing 
} from 'react-native-reanimated';

const PulseRing = ({ delay, size }) => {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(1.5, {
          duration: 2000,
          easing: Easing.out(Easing.ease),
        }),
        -1,
        false
      )
    );
    opacity.value = withDelay(
      delay,
      withRepeat(
        withTiming(0, {
          duration: 2000,
          easing: Easing.out(Easing.ease),
        }),
        -1,
        false
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.pulseRing,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        animatedStyle,
      ]}
    />
  );
};

const RequestSharedScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancelPress = () => {
    setModalVisible(true);
  };

  const confirmCancel = () => {
    setModalVisible(false);
    navigation.navigate('RequestClosed');
  };

  const keepActive = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Cancel Request Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={keepActive}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cancel Request?</Text>
            
            <Text style={styles.modalDescription}>
              People nearby may have already seen your request.
              {'\n'}
              You can stop sharing awareness at any time.
            </Text>

            <TouchableOpacity 
              style={styles.modalKeepButton} 
              onPress={keepActive}
              activeOpacity={0.8}
            >
              <Text style={styles.modalKeepButtonText}>Keep Request Active</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.modalCancelButton} 
              onPress={confirmCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.modalCancelButtonText}>Cancel Request</Text>
            </TouchableOpacity>

            <View style={styles.modalDivider} />
            
            <Text style={styles.modalFooterText}>
              You can request awareness again anytime.
            </Text>
          </View>
        </View>
      </Modal>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#5A5A5A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Socius</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>
        
        {/* Pulse Animation Section */}
        <View style={styles.pulseContainer}>
          <PulseRing delay={0} size={100} />
          <PulseRing delay={500} size={100} />
          <PulseRing delay={1000} size={100} />
          <View style={styles.centerDot} />
        </View>

        <Text style={styles.mainTitle}>Your request has been shared.</Text>
        <Text style={styles.subTitle}>People nearby may choose to view it.</Text>

        {/* Info Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderTitle}>What this means</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.bulletItem}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>
                This is <Text style={{fontWeight: '700'}}>not</Text> an emergency dispatch.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>No one is required to respond.</Text>
            </View>
            <View style={styles.bulletItem}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>You can cancel at any time.</Text>
            </View>
            <View style={styles.bulletItem}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>You can contact authorities anytime.</Text>
            </View>
          </View>
        </View>

        {/* View Count */}
        <View style={styles.viewCountContainer}>
          <Icon name="eye" size={20} color="#78909C" />
          <Text style={styles.viewCountText}>Viewed by people nearby</Text>
        </View>
        <View style={styles.divider} />

        {/* Action Buttons */}
        <TouchableOpacity 
          style={styles.waitingButton} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AwarenessShared')}
        >
          <Text style={styles.waitingButtonText}>Continue waiting</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cancelButton} 
          activeOpacity={0.8}
          onPress={handleCancelPress}
        >
          <Text style={styles.cancelButtonText}>Cancel request</Text>
        </TouchableOpacity>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Bottom Emergency Bar */}
        <View style={styles.emergencyBar}>
          <TouchableOpacity style={styles.emergencyItem} onPress={() => navigation.navigate('EmergencyHelp')}>
            <Icon name="shield-account" size={20} color="#78909C" />
            <Text style={styles.emergencyText}>Police</Text>
          </TouchableOpacity>
          
          <View style={styles.verticalDivider} />
          
          <TouchableOpacity style={styles.emergencyItem} onPress={() => navigation.navigate('EmergencyHelp')}>
            <Icon name="ambulance" size={20} color="#78909C" />
            <Text style={styles.emergencyText}>Ambulance</Text>
          </TouchableOpacity>
          
          <View style={styles.verticalDivider} />
          
          <TouchableOpacity style={styles.emergencyItem} onPress={() => navigation.navigate('EmergencyHelp')}>
            <Icon name="phone" size={20} color="#78909C" />
            <Text style={styles.emergencyText}>Local Helpline</Text>
          </TouchableOpacity>
        </View>

      </View>
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
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  headerRight: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    alignItems: 'center',
    paddingBottom: 20,
  },
  pulseContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  centerDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EF5350', // Red color
    zIndex: 10,
    shadowColor: '#EF5350',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  pulseRing: {
    position: 'absolute',
    backgroundColor: '#FFEBEE', // Light red
    borderColor: '#FFCDD2',
    borderWidth: 1,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#37474F',
    marginBottom: 8,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    color: '#78909C',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#F5F7FA',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  cardHeaderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#37474F',
  },
  cardBody: {
    padding: 16,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#546E7A',
    marginRight: 10,
  },
  bulletText: {
    fontSize: 14,
    color: '#546E7A',
    flex: 1,
  },
  viewCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  viewCountText: {
    fontSize: 14,
    color: '#78909C',
    marginLeft: 8,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: 24,
  },
  waitingButton: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#CFD8DC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  waitingButtonText: {
    fontSize: 16,
    color: '#546E7A',
    fontWeight: '500',
  },
  cancelButton: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#FFCDD2',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEBEE', // Very light red tint
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#C62828', // Red text
    fontWeight: '500',
  },
  emergencyBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 8,
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  emergencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 6,
  },
  emergencyText: {
    fontSize: 13,
    color: '#546E7A',
    fontWeight: '500',
  },
  verticalDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#CFD8DC',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37474F',
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 15,
    color: '#546E7A',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  modalKeepButton: {
    width: '100%',
    backgroundColor: '#D32F2F', // Red color matching screenshot
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#D32F2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  modalKeepButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalCancelButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  modalCancelButtonText: {
    color: '#546E7A',
    fontSize: 16,
    fontWeight: '600',
  },
  modalDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 16,
  },
  modalFooterText: {
    fontSize: 13,
    color: '#90A4AE',
    textAlign: 'center',
  },
});

export default RequestSharedScreen;
