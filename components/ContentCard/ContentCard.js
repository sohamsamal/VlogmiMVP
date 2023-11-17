import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContentCard = ({ title, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  cardDescription: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 5,
  },
});

export default ContentCard;
