import { View, Text, Pressable } from "react-native";
import Speech from "../../components/speech/Speech";
import * as Svg from "react-native-svg";
import React from "react";
import { icons } from "../../constants";

// const text =
//   "hello i am developed by tech cafe and i am model to study the places description. Thank you!!";
const ItemBtns = ({ text }) => {
  return (
    <View className="flex-row  btnClass">
      <View className="justify-center items-center">
        <Pressable
          className="h-9 w-9 bg-primary rounded-full justify-center items-center mx-5"
          onPress={() => console.log("clicked")}
        >
          <Svg.SvgXml xml={icons.sendBtn} />
        </Pressable>
        <Text className="pt-1">Go</Text>
      </View>
      <View>
        <Speech text={text} className="mx-5" />
        <Text className="pt-1">Audio</Text>
      </View>
    </View>
  );
};

export default ItemBtns;
