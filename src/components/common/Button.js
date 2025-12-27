// src/components/common/Button.js
// Reusable button component matching design

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const Button = ({
  title,
  onPress,
  variant = 'primary', // primary, secondary, emergency, outline
  size = 'medium', // small, medium, large
  loading = false,
  disabled = false,
  fullWidth = false,
  icon = null,
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = {
      borderRadius: Spacing.radiusLarge,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal: Spacing.paddingLg,
      paddingVertical: Spacing.paddingMd,
    };

    if (fullWidth) {
      baseStyle.width = '100%';
    }

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: Colors.primary,
          paddingVertical: size === 'large' ? 14 : 12,
        };
      case 'emergency':
        return {
          ...baseStyle,
          backgroundColor: Colors.emergency,
          paddingVertical: size === 'large' ? 14 : 12,
        };
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: Colors.cardBg,
          borderWidth: 2,
          borderColor: Colors.primary,
        };
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: Colors.primary,
        };
      default:
        return baseStyle;
    }
  };

  const getTextStyle = () => {
    const color =
      variant === 'secondary' || variant === 'outline'
        ? Colors.primary
        : Colors.white;

    return {
      color,
      fontSize: size === 'large' ? 18 : 16,
      fontWeight: '600',
      marginLeft: icon ? 8 : 0,
    };
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {icon && <View>{icon}</View>}
      {loading ? (
        <ActivityIndicator
          color={variant === 'secondary' ? Colors.primary : Colors.white}
        />
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;