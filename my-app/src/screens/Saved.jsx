
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import PlaceCard from "../components/common/PlaceCard";
import { images } from "../constants";
import FilteredDataComponent from "../components/common/FilteredDataComponent";
export default function Saves() {
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <StatusBar style="auto" />
      <ScrollView>
        {/* <PlaceCard
          title={"hello place card"}
          description={"sample card template or components."}
          image={images.cont_1}
        /> */}

        <FilteredDataComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

