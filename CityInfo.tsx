import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CityInfoProps {
  city: 'Calgary' | 'Edmonton';
}

const cityFacts: { [key in CityInfoProps['city']]: string[] } = {
  Calgary: [
    "Calgary is known for the Calgary Stampede.",
    "It hosted the 1988 Winter Olympics.",
    "Calgary has a large number of skyscrapers."
  ],
  Edmonton: [
    "Edmonton is known as Canada's Festival City.",
    "It is home to North America's largest mall, West Edmonton Mall.",
    "Edmonton has over 30 festivals each year."
  ]
};

const CityInfo: React.FC<CityInfoProps> = ({ city }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Interesting Facts about {city}</Text>
      {cityFacts[city].map((fact, index) => (
        <View key={index} style={styles.factContainer}>
          <Icon name="arrow-right" size={20} color="#000" style={styles.icon} />
          <Text style={styles.infoText}>{fact}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  factContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  icon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
  },
});

export default CityInfo;
