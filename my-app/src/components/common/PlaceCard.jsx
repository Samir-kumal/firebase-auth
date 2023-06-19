import { View, Text, Image, Pressable } from "react-native";
import React from "react";

import ItemBtns from "./ItemBtns";
import { useRouter } from "expo-router";
import StarRating from "./StartRating";
import * as Svg from "react-native-svg";
import { icons } from "../../constants";

const PlaceCard = ({ title, description, image, handleLike }) => {
  const router = useRouter();
  return (
    <View className=" p-2 w-full">
      <View className=" my-2 rounded-lg relative flex justify-between bg-[#f2f2f2] ">
        <Pressable
          className="h-36 rounded w-full"
          onPress={() => {
            router.push({
              pathname: "list/detail",
              params: { title, description, image },
            });
          }}
        >
          <Image className="h-full w-full rounded " source={image} />
        </Pressable>

        <View className="absolute z-10 right-2 top-2">
          <Pressable
          // onPress={handleLike}
          >
            <Svg.SvgXml
              xml={icons.whiteHeart}
              fill={"white"}
              stroke={"white"}
            />
          </Pressable>
        </View>

        <View className="flex-row justify-between mt-2 ">
          <View className="w-[60vw]">
            <Text className="text-2xl pl-2 flex flex-wrap">{title}</Text>
          </View>

          <View className="pr-5 ">
            <ItemBtns text={description} />
          </View>
        </View>
        <StarRating />
        <Text className="px-2 py-2 flex-wrap">{description}</Text>
      </View>
    </View>
  );
};

export default PlaceCard;
