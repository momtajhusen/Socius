// src/theme/theme.js
// Complete theme with all configurations

import { Colors, DarkColors } from './colors';
import { Typography } from './typography';
import { Spacing } from './spacing';

// ===== LIGHT THEME =====
export const lightTheme = {
  isDark: false,
  
  // Colors
  colors: {
    ...Colors,
    background: Colors.lightBg,
    surface: Colors.cardBg,
    text: Colors.textDark,
    textSecondary: Colors.textMuted,
    border: Colors.borderLight,
  },
  
  // Typography
  typography: Typography,
  
  // Spacing
  spacing: Spacing,
  
  // Border Radius
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    xl: 16,
    round: 999,
  },
  
  // Shadows (Glassmorphism effect)
  shadows: {
    small: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 4,
      elevation: 3,
    },
    large: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
    xl: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.18,
      shadowRadius: 12,
      elevation: 8,
    },
  },
  
  // Input styles
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: Colors.borderLight,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.textDark,
  },
  
  // Button styles
  button: {
    primary: {
      backgroundColor: Colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emergency: {
      backgroundColor: Colors.emergency,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
    secondary: {
      backgroundColor: Colors.cardBg,
      borderWidth: 1,
      borderColor: Colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
  },
  
  // Card styles
  card: {
    backgroundColor: Colors.cardBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    ...shadowMedium,
  },
};

// ===== DARK THEME =====
export const darkTheme = {
  isDark: true,
  
  colors: {
    ...DarkColors,
    background: DarkColors.background,
    surface: DarkColors.cardBg,
    text: DarkColors.text,
    textSecondary: DarkColors.textSecondary,
    border: Colors.borderDark,
  },
  
  typography: Typography,
  spacing: Spacing,
  
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    xl: 16,
    round: 999,
  },
  
  shadows: {
    small: {
      shadowColor: '#FFFFFF',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: '#FFFFFF',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    },
    large: {
      shadowColor: '#FFFFFF',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
  },
  
  input: {
    backgroundColor: '#1A1A1A',
    borderColor: '#444444',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: DarkColors.text,
  },
  
  button: {
    primary: {
      backgroundColor: DarkColors.primary,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
    emergency: {
      backgroundColor: '#FF6B6B',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
  },
  
  card: {
    backgroundColor: DarkColors.cardBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
};

// ===== SHADOW SHORTCUTS =====
export const shadowSmall = lightTheme.shadows.small;
export const shadowMedium = lightTheme.shadows.medium;
export const shadowLarge = lightTheme.shadows.large;