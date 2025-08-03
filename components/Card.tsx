import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  lightColor?: string;
  darkColor?: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  elevation?: number;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
}

export function Card({
  title,
  subtitle,
  children,
  style,
  lightColor,
  darkColor,
  padding = 16,
  margin = 8,
  borderRadius = 12,
  elevation = 2,
  shadowColor,
  shadowOffset = { width: 0, height: 2 },
  shadowOpacity = 0.1,
  shadowRadius = 4,
  ...otherProps
}: CardProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );
  const defaultShadowColor = useThemeColor({}, 'text');

  const cardStyle = {
    padding,
    margin,
    borderRadius,
    backgroundColor,
    elevation,
    shadowColor: shadowColor || defaultShadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
  };

  return (
    <ThemedView
      style={[styles.card, cardStyle, style]}
      lightColor={lightColor}
      darkColor={darkColor}
      {...otherProps}
    >
      {(title || subtitle) && (
        <View style={styles.header}>
          {title && <ThemedText type="subtitle">{title}</ThemedText>}
          {subtitle && <ThemedText>{subtitle}</ThemedText>}
        </View>
      )}
      {children && <View style={styles.content}>{children}</View>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    // Default card styling
  },
  header: {
    marginBottom: 8,
  },
  content: {
    // Content styling
  },
}); 