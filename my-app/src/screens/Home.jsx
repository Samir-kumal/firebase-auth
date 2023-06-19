import React, { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import * as Svg from "react-native-svg";
import { icons, images } from "../constants";
import { Link } from "expo-router";
import {data} from "../Api/data"
import {
  View,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  Animated,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import HomeContainers from "../components/Carousel/HomeContainers";

import Carousel from "../components/Carousel/Carousel";
import { MenuStore } from "../../store";
import { StatusBar } from "expo-status-bar";
import Menu from "./Menu";


WebBrowser.maybeCompleteAuthSession();
export default function Home() {
  console.log("checkpoint -3: home screen");

  const { setToogle } = MenuStore.useState((s) => s);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const GetToken = async () => {
    const storedAuthToken = await SecureStore.getItemAsync("authToken");
    if (storedAuthToken) {
      setIsAuthenticated(!isAuthenticated);
      setIsLoading(!isLoading);
    }
    Alert.alert(storedAuthToken);
  };

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["10%", "60%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    MenuStore.update((s) => {
      s.setToogle = false;
      s.isShown = "flex";
    });
  }, []);
  // callbacks
  const handleOnSheetIndex = useCallback((index) => {
    if (index == 0) {
      MenuStore.update((s) => {
        s.setToogle = false;
        s.isShown = "flex";
      });
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 relative ">
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-16">
        <View style={{ position: "relative", width: "100%" }}>
          <Carousel data={data} autoPlay={true} pagination={true} />

          <HomeContainers />
        </View>
      </ScrollView>

      {setToogle && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onClose={handleSheetChanges}
          onChange={handleOnSheetIndex}
          enablePanDownToClose="true"
          enableHandlePanningGesture={true}
        >
          <View className="flex-1 gap-8 h-full pl-5 ">
            <Link href={"/profile"}>
              <View className="flex-row gap-5 items-center h-full ">
                <Svg.SvgXml xml={icons.profileCircle} />
                <Text className=" font-bold text-[16px] ">Profile</Text>
              </View>
            </Link>
            <Link href={"/help"}>
              <View className="flex-row gap-5 items-center h-full ">
                <Svg.SvgXml xml={icons.Help} />
                <Text className=" font-bold text-[16px] ">Help</Text>
              </View>
            </Link>
            <Link href={"/about"}>
              <View className="flex-row gap-5 items-center h-full ">
                <Svg.SvgXml xml={icons.about} />
                <Text className=" font-bold text-[16px] ">About</Text>
              </View>
            </Link>
            <Link href={"/setting"}>
              <View className="flex-row gap-5 items-center h-full ">
                <Svg.SvgXml xml={icons.setting2} />
                <Text className=" font-bold text-[16px] ">Setting</Text>
              </View>
            </Link>
            <Link href={"/logout"}>
              <View className="flex-row gap-5 items-center h-full ">
                <Svg.SvgXml xml={icons.logout} />
                <Text className=" font-bold text-[16px] ">Logout</Text>
              </View>
            </Link>
          </View>
        </BottomSheet>
      )}

      <Menu />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
