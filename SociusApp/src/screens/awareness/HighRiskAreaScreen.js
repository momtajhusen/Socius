import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HighRiskAreaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HighRiskAreaScreen</Text>
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

export default HighRiskAreaScreen;
