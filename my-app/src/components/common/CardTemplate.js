import { TouchableOpacity, View } from "react-native";
import React from "react";

const CardTemplate = (props) => {
  return (
    <TouchableOpacity
      className="w-[40%] mx-3 shadow-xl h-16 flex flex-row justify-center items-center rounded-xl bg-white"
      onPress={()=>props.onPress()}
    >
      <View className="flex flex-row items-center gap-3 justify-center">
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

export default CardTemplate;
