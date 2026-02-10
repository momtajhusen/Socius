import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotAloneScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NotAloneScreen</Text>
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

export default NotAloneScreen;
