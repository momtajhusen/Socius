import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PeopleListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PeopleListScreen</Text>
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

export default PeopleListScreen;
