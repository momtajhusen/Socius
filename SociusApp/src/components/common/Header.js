// src/components/common/Header.js
// Screen header with back button

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({
  title,
  subtitle = null,
  onBackPress,
  rightComponent = null,
  backButton = true,
  backIcon = 'arrow-left',
  backgroundColor = '#FFFFFF',
  style,
  titleStyle,
}) => {
  return (
    <SafeAreaView edges={['top']} style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.container, { backgroundColor }, style]}>
        <View style={styles.leftSection}>
          {backButton && onBackPress && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBackPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon name={backIcon} size={24} color="#A83A30" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.centerSection}>
          {title ? (
            <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
          ) : (
            <View style={styles.centerBrand}>
              <Image
                source={require('../../assets/icons/icon-04.png')}
                style={styles.logoImage}
              />
              <Text style={styles.brandText}>Socius</Text>
            </View>
          )}
        </View>

        <View style={styles.rightSection}>
          {rightComponent}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop:0
  },
  leftSection: {
    flex: 1,
  },
  centerSection: {
    flex: 2,
    alignItems: 'center',
  },
  centerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
  },
  logoImage: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  brandText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
  },
});

export default Header;
