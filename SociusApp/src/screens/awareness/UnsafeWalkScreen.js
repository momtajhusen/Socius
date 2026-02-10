import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UnsafeWalkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UnsafeWalkScreen</Text>
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

export default UnsafeWalkScreen;
