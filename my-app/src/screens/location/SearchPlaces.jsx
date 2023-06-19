import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

import * as Svg from "react-native-svg";
import { icons, images } from "../../constants";
import ItemBtns from "../../components/common/ItemBtns";
import PlaceCard from "../../components/common/PlaceCard";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Panauti village",
    description:
      "Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place",
    image: images.cont_1,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    description:
      "Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place",
    image: images.krishnamandir,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    description:
      "Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place",
    image: images.scene_3,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Fourth Item",
    description:
      "Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place",
    image: images.scene_2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Fifth Item",
    description:
      "Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place",
    image: images.scene_1,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d78",
    title: "Sixth Item",
    description:
      "Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place",
    image: images.cont_4,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d79",
    title: "Seventh Item",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nulla magni perspiciatis ad perferendis hic porro ex deleniti voluptates nemo, quibusdam esse nihil aliquid cumque nisi distinctio sapiente iusto excepturi.",
    image: images.cont_3,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7e",
    title: "Seventh Item",
    description:
      "Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place Panauti is a wonderful place ",
    image: images.cont_2,
  },
];

const openMap = () => {
  const latitude = 27.5825208; // Replace with the desired latitude
  const longitude = 85.5030947; // Replace with the desired longitude

  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  Linking.openURL(url);
};

const SearchPlaces = () => {
  // the value of the search field
  const [name, setName] = useState("");

  // the search result
  const [foundPlaces, setfoundPlaces] = useState(DATA);

  const filter = (value) => {
    const keyword = value;

    if (keyword !== "") {
      const results = DATA.filter((location) => {
        return location.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setfoundPlaces(results);
    } else {
      setfoundPlaces(DATA);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <View className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-full  px-3 bg-white   "
      >
        <View className="w-full justify-center relative items-center">
          <Svg.SvgXml
            className="absolute top-[28px] left-4 z-10"
            xml={icons.search}
          />
          <TextInput
            className={
              "  px-4 pl-12 my-2 border-[1px] w-full m-2 rounded-lg py-4  border-primary   bg-white"
            }
            placeholder="Search places"
            value={name}
            onChangeText={filter}
          />
        </View>
      </KeyboardAvoidingView>
      {foundPlaces && foundPlaces.length > 0 ? (
        <View className="itemsbox">
          {foundPlaces.map((item) => (
            <PlaceCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </View>
      ) : (
        <View className="h-40 flex items-center justify-center ">
          <Text className="font-bold text-2xl"> No places found </Text>
        </View>
      )}
    </View>
  );
};

export default SearchPlaces;
