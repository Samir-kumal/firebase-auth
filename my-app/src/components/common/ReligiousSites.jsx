
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { icons, images } from "../../constants";
import * as Svg from "react-native-svg";
import StarRating from "./StartRating";
const data = [
  { image: images.cont_1 },
  { image: images.cont_2 },
  { image: images.cont_3 },
  { image: images.cont_4 },
  { image: images.scene_1 },
  { image: images.scene_2 },
  { image: images.scene_3 },
  { image: images.krishnamandir },
];
const ratings = [
  { id: 1, rating: 3 },
  { id: 2, rating: 4 },
  { id: 3, rating: 5 },
  // Add more rating objects here...
];

const ReligiousSites = ({ ratings }) => {
  return (
    <View className="  bg-white  rounded-xl mt-3  ">
      <Text className="font-bold text-2xl my-5 pl-5">Religious sites</Text>

      <View className="imageWrapper  flex-row gap-4 items-center justify-center flex-wrap">
        <View className=" flex flex-row  w-[160px]">
          <View className="item-container  bg-card rounded-md">
            <View className="relative ">
              <Pressable className="absolute z-10 right-2 top-2">
                <Svg.SvgXml xml={icons.heart} />
              </Pressable>
              <Image
                className="rounded-md"
                source={images.scene_1}
                style={{
                  width: 160,
                  height: 100,
                  marginBottom: 5,
                }}
              />
            </View>
            <Text className="item-title text-xl px-1 flex-wrap">
              Hanuman Dhoka
            </Text>
            <View className="rating flex-row">
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
            </View>
            <Text className="items-desc  p-2 text-justify ">
              Historical landmark and courtyard featuring a coronation platform.
            </Text>
          </View>
        </View>
        <View className=" flex flex-row  w-[160px]">
          <View className="item-container bg-card rounded-md">
            <View className="relative ">
              <Pressable className="absolute z-10 right-2 top-2">
                <Svg.SvgXml xml={icons.heart} />
              </Pressable>
              <Image
                className="rounded-md"
                source={images.scene_2}
                style={{
                  width: 160,
                  height: 100,
                  marginBottom: 5,
                }}
              />
            </View>
            <Text className="item-title text-xl px-1 flex-wrap">
              Hanuman Dhoka
            </Text>
            <View className="rating flex-row">
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
            </View>
            <Text className="items-desc  p-2 text-justify ">
              Historical landmark and courtyard featuring a coronation platform.
            </Text>
          </View>
        </View>
        <View className=" flex flex-row  w-[160px]">
          <View className="item-container bg-card rounded-md">
            <View className="relative ">
              <Pressable className="absolute z-10 right-2 top-2">
                <Svg.SvgXml xml={icons.heart} />
              </Pressable>
              <Image
                className="rounded-md"
                source={images.scene_3}
                style={{
                  width: 160,
                  height: 100,
                  marginBottom: 5,
                }}
              />
            </View>
            <Text className="item-title text-xl px-1 flex-wrap">
              Hanuman Dhoka
            </Text>
            <View className="rating flex-row">
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
            </View>
            <Text className="items-desc  p-2 text-justify ">
              Historical landmark and courtyard featuring a coronation platform.
            </Text>
          </View>
        </View>
        <View className=" flex flex-row  w-[160px]">
          <View className="item-containe bg-card rounded-md">
            <View className="relative ">
              <Pressable className="absolute z-10 right-2 top-2">
                <Svg.SvgXml xml={icons.heart} />
              </Pressable>
              <Image
                className="rounded-md"
                source={images.cont_1}
                style={{
                  width: 160,
                  height: 100,
                  marginBottom: 5,
                }}
              />
            </View>
            <Text className="item-title text-xl px-1 flex-wrap">
              Hanuman Dhoka
            </Text>
            <View className="rating flex-row">
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
              <Svg.SvgXml xml={icons.fullStar} />
            </View>
            <Text className="items-desc  p-2 text-justify ">
              Historical landmark and courtyard featuring a coronation platform.
            </Text>
          </View>
        </View>
      </View>

      <View className="w-full mt-4  mb-4 px-3">
        <View className="  h-12 flex items-center bg-white justify-center border border-primary rounded-[10px]">
          <Text className="text-xl">See All Religious sites</Text>
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

export default ReligiousSites;
