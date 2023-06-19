import React from "react";
import { View } from "react-native";
import { icons } from "../../constants";
import * as Svg from "react-native-svg";
const StarRating = ({ rating }) => {
  return (
    <View className="rating flex-row px-2">
      <Svg.SvgXml xml={icons.fullStar} />
      <Svg.SvgXml xml={icons.fullStar} />
      <Svg.SvgXml xml={icons.fullStar} />
      <Svg.SvgXml xml={icons.fullStar} />
      <Svg.SvgXml xml={icons.fullStar} />
    </View>
  );
};

export default StarRating;
