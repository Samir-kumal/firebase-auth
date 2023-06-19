import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

import ExpoAuth from "../Api/expoAuth";
export default function Search() {
  return (
    <View className=" flex-1">
      <Stack.Screen />
      <Text>Search menu</Text>

      <View>
        <ExpoAuth />
      </View>
    </View>
  );
}
