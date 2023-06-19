import React from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
import Location from "../../screens/location/SearchPlaces";

export default function MapContainer() {
  return (
    <View>
      <MapView />
        <Location/>

    </View>
  );
}
