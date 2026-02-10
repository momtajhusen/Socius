import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReminderScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ReminderScreen</Text>
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

export default ReminderScreen;
