import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

const RoutesMapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const title = route?.params?.title || 'Flows';
  const routes = Array.isArray(route?.params?.routes) ? route.params.routes : [];

  const formatRouteName = useMemo(() => {
    return (name) => {
      return name
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title={title} 
        onBackPress={() => navigation.goBack()}
        style={{ borderBottomWidth: 0 }}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.list}>
          {routes.map((routeName, idx) => (
            <View key={routeName} style={styles.listItem}>
              <Button
                title={`${idx + 1}. ${formatRouteName(routeName)}`}
                onPress={() => {
                  if (routeName === 'ProfileScreen') {
                    navigation.navigate('MainApp', { screen: 'ProfileTab' });
                  } else {
                    navigation.navigate(routeName, { fromDevLauncher: true });
                  }
                }}
                variant="white"
                size="small"
                fullWidth
                style={{ borderRadius: 0 }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 0,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },
  list: {
    gap: 8,
  },
  listItem: {
    marginBottom: 2,
  },
});

export default RoutesMapScreen;
