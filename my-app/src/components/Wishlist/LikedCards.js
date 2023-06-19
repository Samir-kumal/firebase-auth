import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { getLikedCards } from "../../context/getLikedCards";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Corrected import
const LikedCards = () => {
  const [likedCards, setLikedCards] = useState([]);

  useEffect(() => {
    const fetchLikedCards = async () => {
      try {
        const cards = await AsyncStorage.getItem("likedCards");
        setLikedCards(JSON.parse(cards) || []);
      } catch (error) {
        console.error("Error retrieving liked cards:", error);
        setLikedCards([]);
      }
    };

    fetchLikedCards();
  }, []);

  const handleClick = () => {
    console.log(likedCards);
  };

  return (
    <View>
      <Text>Liked Cards:</Text>
      {likedCards.map((card) => (
        <View key={card.id}>
          <Pressable onPress={handleClick}>
            <Text>Click here</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default LikedCards;

