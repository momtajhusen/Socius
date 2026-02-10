import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BeforeShareScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BeforeShareScreen</Text>
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

export default BeforeShareScreen;
