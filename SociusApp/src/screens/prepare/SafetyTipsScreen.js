import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SafetyTipsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SafetyTipsScreen</Text>
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

export default SafetyTipsScreen;
