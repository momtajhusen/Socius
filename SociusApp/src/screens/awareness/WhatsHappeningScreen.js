import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WhatsHappeningScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WhatsHappeningScreen</Text>
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

export default WhatsHappeningScreen;
