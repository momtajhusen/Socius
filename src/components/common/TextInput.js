// src/components/common/TextInput.js
// Reusable text input field

import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  error = null,
  icon = null,
  rightIcon = null,
  onRightIconPress,
  editable = true,
  maxLength,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputWrapperFocused,
          error && styles.inputWrapperError,
        ]}
      >
        {icon && <View style={styles.leftIcon}>{icon}</View>}

        <TextInput
          style={[styles.input, { paddingLeft: icon ? 8 : 12 }]}
          placeholder={placeholder}
          placeholderTextColor={Colors.textPlaceholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          editable={editable}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {rightIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={onRightIconPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.marginMd,
  },
  label: {
    ...Typography.label,
    color: Colors.textDark,
    marginBottom: Spacing.marginSm,
    fontWeight: '600',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Spacing.radiusLarge,
    paddingHorizontal: Spacing.paddingMd,
    paddingVertical: Spacing.paddingSm,
    minHeight: 48,
  },
  inputWrapperFocused: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  inputWrapperError: {
    borderColor: Colors.emergency,
  },
  input: {
    flex: 1,
    ...Typography.body,
    color: Colors.textDark,
    paddingVertical: Spacing.paddingSm,
  },
  leftIcon: {
    marginRight: Spacing.marginSm,
  },
  rightIcon: {
    padding: Spacing.paddingSm,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.emergency,
    marginTop: Spacing.marginSm,
  },
});

export default CustomTextInput;