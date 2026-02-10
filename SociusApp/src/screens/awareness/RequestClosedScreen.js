import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RequestClosedScreen = ({ navigation }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header 
        title="Request Closed" 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 0 }}
        titleStyle={{ fontSize: 16 }}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../../assets/images/awareness/05.png')}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        {/* Info Card 1 - Main Status */}
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>This awareness request has ended.</Text>
          <Text style={styles.statusSubtitle}>No further action is expected.</Text>
        </View>

        {/* Info Card 2 - How closures happen */}
        <View style={styles.infoCard}>
          <Text style={styles.cardHeader}>How closures happen</Text>
          <View style={styles.divider} />
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="check" size={16} color="#7F8C8D" />
            </View>
            <Text style={styles.listItemText}>The requester closed the request.</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="clock-outline" size={16} color="#7F8C8D" />
            </View>
            <Text style={styles.listItemText}>A time limit was reached.</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="wifi-off" size={16} color="#7F8C8D" />
            </View>
            <Text style={styles.listItemText}>The requester went offline.</Text>
          </View>
        </View>

        {/* Info Card 3 - What to do now */}
        <View style={styles.infoCard}>
          <Text style={styles.cardHeader}>What to do now</Text>
          <View style={styles.divider} />
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="home-variant-outline" size={16} color="#7F8C8D" />
            </View>
            <Text style={styles.listItemText}>Resume your day.</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="check" size={16} color="#7F8C8D" />
            </View>
            <Text style={styles.listItemText}>No follow-up is required.</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconBox}>
              <Icon name="phone-outline" size={16} color="#7F8C8D" />
            </View>
            <Text style={styles.listItemText}>Use emergency contacts if you still have concerns.</Text>
          </View>
        </View>

        <Text style={styles.closureNote}>
          Closure does not mean something went wrong.
        </Text>

        <View style={styles.actionContainer}>
          <Button 
            title="Return Home" 
            onPress={() => navigation.navigate('HomeScreen')} 
            variant="primary"
            fullWidth
            style={styles.returnButton}
          />
        </View>

        <Text style={styles.footerNote}>
          Socius closes requests to prevent confusion or pressure.
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
    alignItems: 'center',
  },
  illustrationContainer: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  statusCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  iconBox: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  listItemText: {
    fontSize: 14,
    color: '#5D6D7E',
    flex: 1,
    lineHeight: 20,
  },
  closureNote: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  actionContainer: {
    width: '100%',
    marginBottom: 16,
  },
  returnButton: {
    backgroundColor: '#C05A5A', // Slightly darker/muted red based on design
    borderRadius: 25,
  },
  footerNote: {
    fontSize: 12,
    color: '#7F8C8D',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default RequestClosedScreen;
