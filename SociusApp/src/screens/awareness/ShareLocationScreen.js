import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShareLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ShareLocationScreen</Text>
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

export default ShareLocationScreen;
