import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const BeingAvailableScreen = ({ navigation }) => {
  const points = [
    'Available means you may see awareness requests nearby.',
    'You are never required to act or respond.',
    'You can turn this off at any time.'
  ];

  const handleUnderstand = () => {
    navigation.navigate('Permission');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Being Available" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
        titleColor="#DC5C69"
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Points List */}
        <View style={styles.pointsContainer}>
          {points.map((point, index) => (
            <View key={index} style={styles.pointRow}>
              <View style={styles.iconContainer}>
                <Icon name="heart" size={18} color="#DC5C69" />
              </View>
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Important Card */}
        <View style={styles.importantCard}>
          <Text style={styles.importantText}>
            It's okay to observe, ignore, or step away. Participation is always your choice.
          </Text>
        </View>

        {/* Bottom Text */}
        <Text style={styles.bottomText}>
          Your safety and comfort come first.
        </Text>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Understand Button - gradient primary */}
        <Button
          title="I Understand"
          onPress={handleUnderstand}
          variant="gradient"
          fullWidth
        />

        {/* Cancel Button - link style */}
        <Button
          title="Cancel"
          onPress={handleCancel}
          variant="link"
          fullWidth={false}
        />
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
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 30,
  },

  // ===== POINTS CONTAINER =====
  pointsContainer: {
    marginBottom: 24,
  },

  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEE8EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    marginTop: 2,
  },

  pointText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    lineHeight: 22,
    flex: 1,
    paddingTop: 6,
  },

  // ===== DIVIDER =====
  divider: {
    height: 1,
    backgroundColor: '#E8EAED',
    marginBottom: 24,
  },

  // ===== IMPORTANT CARD =====
  importantCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E8EAED',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  importantText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'center',
    lineHeight: 24,
  },

  // ===== BOTTOM TEXT =====
  bottomText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888888',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 24,
  },

  spacer: {
    flex: 1,
    minHeight: 20,
  },

 
});

export default BeingAvailableScreen;
