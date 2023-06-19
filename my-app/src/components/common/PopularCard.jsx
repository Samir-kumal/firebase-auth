import { View, Text, Image, Pressable } from "react-native";
import {React} from "react";

import * as Svg from "react-native-svg";
import { icons } from "../../constants";
import StarRating from "./StartRating";

const PopularCard = (props) => {
  const { item, isLiked, toggleLike } = props;

  const handleLike = async () => {
    toggleLike(item);
  };

  return (
    <View className="item-container  bg-card w-[160px]  mx-2 my-2 rounded-md">
      <View className="relative ">
        <Pressable onPress={handleLike} className="absolute z-10 right-2 top-2">
          <Svg.SvgXml
            xml={icons.whiteHeart}
            fill={isLiked ? "#ff0000" : "white"}
            stroke={"white"}
          />
        </Pressable>
        <Image
          className="rounded-md"
          source={item.image}
          style={{
            width: 160,
            height: 100,
            marginBottom: 5,
          }}
        />
      </View>
      <View className="h-12 w-full">
        <Text className="item-title text-[16px] font-bold absolute px-1 ">
          {item.title}
        </Text>
      </View>
      <StarRating />
      <Text className="items-desc  p-2 text-justify ">{item.description}</Text>
    </View>
  );
};

export default PopularCard;
