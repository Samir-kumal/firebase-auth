import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Text, View, Image, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PlaceCard from "./PlaceCard";
import { images } from "../../constants";
import { useRouter } from "expo-router";

const FilteredDataComponent = () => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@liked_items");
      if (jsonValue !== null) {
        const likedItems = JSON.parse(jsonValue);
        setFilteredData(likedItems);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [filteredData]);

  // Memoize the filteredData to prevent unnecessary re-renders
  const memoizedFilteredData = useMemo(() => filteredData, [filteredData]);

  // Display a message if no wishlist items are found
  if (memoizedFilteredData.length === 0) {
    return (
      <View className="flex items-center justify-center mt-5">
        <Image source={images.notfound} className="h-[50vh] w-full" />
        <Text className="text-3xl font-bold flex-warp">
          No wishlist items found
        </Text>
        <Pressable
          className="h-12 w-[70%] bg-primary items-center justify-center mt-4 rounded-md "
          onPress={() => router.push("/location")}
        >
          <Text className="text-2xl text-white">Discover your Places</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      {memoizedFilteredData.map((item) => (
        <PlaceCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </View>
  );
};

export default FilteredDataComponent;

