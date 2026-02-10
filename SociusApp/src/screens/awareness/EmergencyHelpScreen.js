import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmergencyHelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>EmergencyHelpScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmergencyHelpScreen;
