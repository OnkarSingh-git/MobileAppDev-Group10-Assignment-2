import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CityTab from './CityTab';

const WelcomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to City App</Text>
      <CityTab city="Calgary" link="https://www.calgary.ca/home.html" />
      <CityTab city="Edmonton" link="https://www.edmonton.ca/" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default WelcomeScreen;