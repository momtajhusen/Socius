import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SituationSharedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SituationSharedScreen</Text>
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

export default SituationSharedScreen;
