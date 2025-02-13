import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import CityInfo from './CityInfo';

interface CityTabProps {
  city: 'Calgary' | 'Edmonton';
  link: string;
}

const CityTab: React.FC<CityTabProps> = ({ city, link }) => {
  const getImageURL = (city: 'Calgary' | 'Edmonton') => {
    if (city === 'Calgary') {
      return 'https://cdn.britannica.com/60/137760-050-9EFAB73A/Calgary-foreground-Pengrowth-Saddledome-Canada-Alberta.jpg';
    } else if (city === 'Edmonton') {
      return 'https://roadtripalberta.com/wp-content/uploads/2022/01/Edmonton-Feature-Image.-1024x683.jpg';
    }
  };

  return (
    <View style={styles.tabContainer}>
      <Text style={styles.cityName}>{city}</Text>
      <Image style={styles.cityImage} source={{ uri: getImageURL(city) }} />
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={styles.linkText}>Go to city page</Text>
      </TouchableOpacity>
      <CityInfo city={city} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cityImage: {
    width: 150,
    height: 150,
    marginVertical: 8,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default CityTab;