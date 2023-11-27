import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ContentCard = ({ title, description, onPress }) => {
  return (
    <Pressable onPress={() => { onPress && onPress() }} >
      {({ pressed }) =>
        <LinearGradient colors={pressed ? ["#1A1A1A", "#444444"] : ["#161616", "#353535"]} style={{
          borderRadius: 40,
        }}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>🔥🔥🔥</Text>
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image style={{
                width: 24,
                height: 24,
              }}
                source={require('../../assets/icons/chat_search.png')} // Replace with your local logo image path
              />
              <Image style={{
                width: 24,
                height: 24,
              }}
                source={require('../../assets/icons/favorite.png')} // Replace with your local logo image path
              />
            </View>
          </View>
        </LinearGradient>
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    paddingLeft: 44,
    paddingRight: 44,
    paddingTop: 20,
    paddingBottom: 25,

  },
  cardTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    textAlign: "center"
  },
});

export default ContentCard;
