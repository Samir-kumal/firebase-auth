import { View, Text } from "react-native";
import {React,useState,useEffect} from "react";
import { data } from "../../Api/data";
import PopularCard from "./PopularCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PopularLists = () => {
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@liked_items");
      if (jsonValue != null) {
        setLikedItems(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@liked_items", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleLike = async (item) => {
    const isLiked = likedItems.some((likedItem) => likedItem.id === item.id);

    if (isLiked) {
      const newLikedItems = likedItems.filter(
        (likedItem) => likedItem.id !== item.id
      );
      setLikedItems(newLikedItems);
      await storeData(newLikedItems);
    } else {
      const newLikedItems = [...likedItems, item];
      setLikedItems(newLikedItems);
      await storeData(newLikedItems);
    }
  };

  useEffect(() => {}, [likedItems]);

  return (
    <View className="flex flex-row flex-wrap items-center justify-center">
      {data.map((item) => (
        <PopularCard
          key={item.id}
          item={item}
          isLiked={likedItems.some((likedItem) => likedItem.id === item.id)}
          toggleLike={toggleLike}
        />
      ))}
    </View>
  );
};

export default PopularLists;
