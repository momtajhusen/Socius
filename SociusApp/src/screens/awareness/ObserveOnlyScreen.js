import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ObserveOnlyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ObserveOnlyScreen</Text>
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

export default ObserveOnlyScreen;
