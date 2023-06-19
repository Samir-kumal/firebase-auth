import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import * as Svg from "react-native-svg";
import { icons, images } from "../constants";
import { Link } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

import { MenuStore } from "../../store";
import MapView, { Marker } from "react-native-maps";
import SearchPlaces from "./location/SearchPlaces";
import Menu from "./Menu";
import { KeyboardAvoidingView } from "react-native";

export default function Location() {
  const { setToogle } = MenuStore.useState((s) => s);

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["10%", "60%"], []);
  const forMap = useMemo(() => ["17%", "100%"], []);

  const handleSheetChanges = useCallback((index) => {
    MenuStore.update((s) => {
      s.setToogle = false;
      s.isShown = "flex";
    });
  }, []);

  const handleOnSheetIndex = useCallback((index) => {
    if (index == 0) {
      MenuStore.update((s) => {
        s.setToogle = false;
        s.isShown = "flex";
      });
    }
  }, []);

  const initialRegion = {
    latitude: 27.5842371, // initial latitude
    longitude: 85.5130157, // initial longitude
    latitudeDelta: 0.0922, // latitude span
    longitudeDelta: 0.0421, // longitude span
  };

  //   panauti ghat 27.585596,85.5186823
  // meusem 27.5849303,85.5173471
  // temple 27.58517,85.5174999
  // durbar 27.5849387,85.5155973
  // ghroak nath temp 27.5872614,85.5196153
  // khopasi hydro 27.5631171,85.5360758
  // Roshi waterfall 27.558488,85.4617351
  // bhaleshwor 27.5669224,85.4744462
  // shahid park 27.5825208,85.5030947

  return (
    <View className="flex-1 relative">
      <SafeAreaView className="mapcontainer  w-full">
        <MapView
          className="w-full h-full"
          showsMyLocationButton={true}
          initialRegion={initialRegion}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: 27.5907014, // Replace with your latitude value
              longitude: 85.5069845, // Replace with your longitude value
            }}
            title="Muncipality"
          />
          <Marker
            coordinate={{
              latitude: 27.585596, // Replace with your latitude value
              longitude: 85.5186823, // Replace with your longitude value
            }}
            title="Panauti Ghat"
          />
          <Marker
            coordinate={{
              latitude: 27.5846706, // Replace with your latitude value 27.5846706,85.517088
              longitude: 85.517079, // Replace with your longitude value
            }}
            title="Museum"
          />
        </MapView>

        <BottomSheet ref={bottomSheetRef} index={setToogle ? 1 : 0} snapPoints={forMap}>
          <BottomSheetScrollView>
            <SearchPlaces />
          </BottomSheetScrollView>
        </BottomSheet>
      </SafeAreaView>

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
    </View>
  );
}
