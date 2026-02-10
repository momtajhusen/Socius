import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AvailabilityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AvailabilityScreen</Text>
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

export default AvailabilityScreen;
