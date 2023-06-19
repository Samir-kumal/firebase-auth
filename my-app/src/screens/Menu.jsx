import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Svg from "react-native-svg";
import { icons } from "../constants";

export default function Menu() {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("window").height
  );
  return (
    <View className="absolute bottom-0 w-full z-50">
      <View
        className={` h-16 w-[${windowWidth}] bg-white flex-row items-center justify-around  rounded-xl`}
      >
        <Pressable onPress={() => router.push("(tabs)/home/")}>
          <Svg.SvgXml xml={icons.home} />
        </Pressable>
        <Pressable onPress={() => router.push("/location")}>
          <Svg.SvgXml xml={icons.location} />
        </Pressable>
        <Pressable onPress={() => router.push("/likes")}>
          <Svg.SvgXml xml={icons.heart} />
        </Pressable>
        <Pressable onPress={() => router.push("/gallery")}>
          <Svg.SvgXml xml={icons.gallery} />
        </Pressable>
      </View>
    </View>
  );
}
