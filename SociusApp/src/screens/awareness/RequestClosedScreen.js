import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RequestClosedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RequestClosedScreen</Text>
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

export default RequestClosedScreen;
