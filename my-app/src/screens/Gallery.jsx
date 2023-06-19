import { Link } from "expo-router";
import { View, Text } from "react-native";
import Popular_Location from "./location/Popular_Location";
import Menu from "./Menu";
export default function Gallery() {
  return (
    <View className=" flex-1">
      <Popular_Location />
      <Menu />
    </View>
  );
}
