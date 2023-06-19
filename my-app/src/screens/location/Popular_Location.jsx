import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import MainWrapper from "../../components/common/MainWrapper";
import { icons } from "../../constants";
import * as Svg from "react-native-svg";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Panauti village",
    description: "Panauti is a wonderful place",
    image:
      "https://cdn.discordapp.com/attachments/1115513410893914142/1115513798351134752/03.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    description: "Panauti is a wonderful place",
    image:
      "https://cdn.discordapp.com/attachments/1115513410893914142/1115513798741217372/04.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Fourth Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Fifth Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d78",
    title: "Sixth Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d79",
    title: "Seventh Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7e",
    title: "Seventh Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29r79",
    title: "Seventh Item",
    description: "Panauti is a wonderful place",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
  },
});

const Item = ({ title, description }) => (
  <View className="h-fit mx-2  rounded-lg bg-[#f2f2f2]">
    <Image
      className="h-52 rounded w-full"
      source={{
        uri: "https://cdn.discordapp.com/attachments/1115513410893914142/1115513798351134752/03.png",
      }}
    />
    <Text style={styles.title}>{title}</Text>
    {/* <Text className="px-2">{description}</Text> */}
  </View>
);
const Popular_Location = () => {
  return (
    <MainWrapper>
      <View className="Popular-places-container-wrapper flex flex-row justify-between px-4 py-4">
        <View>
          <Text className="text-xl  font-semibold">Popular Places</Text>
        </View>
        <View className="Popular-places-sorting">
          <Pressable>
            <Svg.SvgXml xml={icons.filterSearch} />
          </Pressable>
        </View>
      </View>
      <View>
        <FlatList
          data={DATA}
          keyExtractor={(image) => image.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <Item title={item.title} description={item.description} />
            </View>
          )}
        />
      </View>
    </MainWrapper>
  );
};

export default Popular_Location;
