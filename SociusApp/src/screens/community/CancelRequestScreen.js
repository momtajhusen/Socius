import React from 'react';
 import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/common/Header';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/common/Button';

const CancelRequestScreen = ({ navigation }) => {
  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleCancelRequest = () => {
    navigation.navigate('Home');
  };

  const handleKeepActive = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <TouchableOpacity onPress={handleSettings} style={{ padding: 8 }}>
            <Icon name="cog" size={24} color="#999999" />
          </TouchableOpacity>
        }
        style={{ borderBottomWidth: 1, borderBottomColor: '#E8EAED' }}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Dialog Card */}
        <View style={styles.dialogCard}>
          {/* Pause Icon */}
          <View style={styles.iconContainer}>
            <LinearGradient
              colors={['#F2F4F7', '#E3E7EB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.pauseGradient}
            >
              <View style={styles.pauseBars}>
                <View style={styles.pauseBar} />
                <View style={[styles.pauseBar, { marginLeft: 8 }]} />
              </View>
            </LinearGradient>
          </View>

          {/* Title */}
          <Text style={styles.dialogTitle}>Cancel This Request?</Text>

          {/* Subtitle */}
          <Text style={styles.dialogSubtitle}>You can close this anytime.</Text>
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>People nearby may have already seen your request. Canceling simply ends awareness.</Text>
        </View>

        {/* Details Box */}
        <View style={styles.detailsBox}>
          <View style={styles.bulletPoint}>
            <Text style={styles.bulletText}>● Awareness will no longer be visible</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bulletText}>● No one is notified about the cancellation</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bulletText}>● You can request again anytime.</Text>
          </View>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Cancel Request Button */}
        <Button
          title="Cancel Request"
          onPress={handleCancelRequest}
          variant="gradient"
          fullWidth
        />

        {/* Keep Active Button */}
        <Button
          title="Keep Request Active"
          onPress={handleKeepActive}
          variant="white"
          fullWidth
        />

        {/* Footer Text */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Socius does not require follow-up.</Text>
          <Text style={styles.footerSubtext}>You remain in control.</Text>
        </View>

        <View style={styles.bottomSpacer} />
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
    paddingTop: 32,
    paddingBottom: 80,
  },

  // ===== DIALOG CARD =====
  dialogCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: 28,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },

  iconContainer: {
    marginBottom: 15,
  },

  pauseGradient: {
    width: 72,
    height: 72,
    borderRadius: 36,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pauseBars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pauseBar: {
    width: 10,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#9AA4B2',
  },

  dialogTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
  },

  dialogSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
  },

  // ===== INFO SECTION =====
  infoSection: {
    marginBottom: 20,
  },

  infoText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#2C3E50',
    textAlign: 'center',
    lineHeight: 24,
  },

  // ===== DETAILS BOX =====
  detailsBox: {
    backgroundColor: '#F0F4F7',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E8EAED',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 28,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  bulletText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C3E50',
    lineHeight: 22,
    marginLeft: 12,
  },

  // ===== SPACER =====
  spacer: {
    height: 20,
  },

  // ===== BUTTONS =====
  cancelButton: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#DC5C69',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#DC5C69',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },

  cancelButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

  keepButton: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  keepButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2C3E50',
    letterSpacing: 0.3,
  },

  // ===== FOOTER SECTION =====
  footerSection: {
    alignItems: 'center',
  },

  footerText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 4,
  },

  footerSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  bottomSpacer: {
    height: 40,
  },
});

export default CancelRequestScreen;
