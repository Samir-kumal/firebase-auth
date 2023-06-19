import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PopularLists from "./PopularLists";
import { Link } from "expo-router";
 
const PopularSites = ({ ratings }) => {
  return (
    <View className="  bg-white  rounded-xl mt-3  ">
      <Text className="font-bold text-2xl my-5 pl-5">Popular Sights</Text>

      <View className="imageWrapper">
        <PopularLists />
      </View>

      <View className="w-full mt-4  mb-4 px-3">
        <View className="  h-12 flex items-center bg-white justify-center border border-primary rounded-[10px]">
          <Link href={"/location"} className="text-xl">
            See All Popular Places
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  additionalContainer: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flexDirection: "row",
    gap: 10,

    alignItems: "flex-start",
  },
});

export default PopularSites;
