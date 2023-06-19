import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import * as Svg from "react-native-svg";
import { icons } from "../../constants";
import PopularSites from "../common/PopularSites";
import ReligiousSites from "../common/ReligiousSites";
import { useRouter } from "expo-router";

const HomeStackBtn = () => {
  const router = useRouter();
  return (
    <View className="w-full h-30 flex flex-cols items-center justify-center     ">
      <View className="inner-row flex-row  justify-evenly ">
        <Pressable
          style={styles.BtnItems}
          onPress={() => router.push("/gallery")}
        >
          <Text>Gallery</Text>
          <Svg.SvgXml xml={icons.gallery} />
        </Pressable>
        <Pressable
          style={styles.BtnItems}
          onPress={() => router.push("/packages")}
        >
          <Text>Packages</Text>
          <Svg.SvgXml xml={icons.flag} />
        </Pressable>
      </View>
      <View className="inner-row flex-row items-center  justify-around  ">
        <Pressable
          style={styles.BtnItems}
          onPress={() => router.push("/location")}
        >
          <Text>Nearby </Text>
          <Svg.SvgXml xml={icons.eye} />
        </Pressable>
        <Pressable
          style={styles.BtnItems}
          onPress={() => router.push("/detail")}
        >
          <Text>Sights</Text>
          <Svg.SvgXml xml={icons.saved} />
        </Pressable>
      </View>
    </View>
  );
};

const HomeContainers = () => {
  return (
    <View className="">
      <HomeStackBtn />
      <PopularSites />
      <ReligiousSites />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: 400,
    height: 200,
    backgroundColor: "white",
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  BtnItems: {
    height: 50,
    width: 150,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0,
    shadowRadius: 4.25,
    elevation: 4,
  },
  PopularText: {
    fontFamily: "monospace",
    margin: 10,
    padding: 10,
    fontWeight: "bold",
    color: "black",
  },
});

export default HomeContainers;
