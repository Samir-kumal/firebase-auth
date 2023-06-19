import { View, Text, Image } from "react-native";
import React from "react";

const notification = () => {
  return (
    <View className="w-full h-fit">
      <View className="flex h-fit py-6 flex-row justify-around items-center bg-primary">
        <Image className=" rounded-full h-12 w-12 bg-[#f2f2f2]" />
        <Text className=" -translate-x-2 h-fit rounded-xl p-2 bg-[#f2f2f2]">
          Notification here
        </Text>
      </View>
    </View>
  );
};

export default notification;
