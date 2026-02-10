import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SomeoneConcernScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SomeoneConcernScreen</Text>
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

export default SomeoneConcernScreen;
