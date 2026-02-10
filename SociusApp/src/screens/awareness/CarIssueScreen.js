import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarIssueScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CarIssueScreen</Text>
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

export default CarIssueScreen;
