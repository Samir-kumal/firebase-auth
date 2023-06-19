import {
  View,
  Text,
  Animated,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React, { useRef, useMemo } from "react";
import { images, icons } from "../../constants";
import * as Svg from "react-native-svg";
import Speech from "../../components/speech/Speech";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import MapView, { Marker } from "react-native-maps";
import StarRating from "../../components/common/StartRating";

import { useLocalSearchParams } from "expo-router";

const initialRegion = {
  latitude: 27.5842371, // initial latitude
  longitude: 85.5130157, // initial longitude
  latitudeDelta: 0.0922, // latitude span
  longitudeDelta: 0.0421, // longitude span
};

const openMap = () => {
  const latitude = 27.5825208; // Replace with the desired latitude
  const longitude = 85.5030947; // Replace with the desired longitude

  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  Linking.openURL(url);
};

const IMAGE_SCALE_MAX = 100;
const LABEL_HEADER_MARGIN = 100;

const PlacesDetails = () => {
  const { title, description, image } = useLocalSearchParams();
  const [show, setShow] = React.useState(false);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["100%"], []);

  const pan = React.useRef(new Animated.ValueXY()).current;

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <ScrollView
      className="bg-white "
      scrollEventThrottle={1}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: pan.y } } }],
        {
          useNativeDriver: false,
        }
      )}
      showsVerticalScrollIndicator={false}
      //   alwaysBounceVertical={false}
    >
      <Animated.Image
        resizeMode="cover"
        className=" h-[60vh] justify-end w-full "
        source={image}
        style={{
          transform: [
            {
              translateY: pan.y.interpolate({
                inputRange: [-1000, 0],
                outputRange: [-100, 0],
                extrapolate: "clamp",
              }),
            },
            {
              scale: pan.y.interpolate({
                inputRange: [-3000, 0],
                outputRange: [IMAGE_SCALE_MAX, 1],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          transform: [
            {
              translateY: pan.y.interpolate({
                inputRange: [-1000, 0],
                outputRange: [IMAGE_SCALE_MAX * LABEL_HEADER_MARGIN, -80],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        {/* other children, except the image  */}
        <Text className="text-white text-3xl px-2 ">{title}</Text>
        <View
          className=" h-auto w-full rounded-xl  bg-white
        "
        >
          <View className="ratingWrapper  mt-5 flex-row  justify-around items-center">
            <StarRating />
            <View className="flex-row  btnClass">
              <View className="justify-center items-center">
                <Pressable
                  className="h-9 w-9 bg-primary rounded-full justify-center items-center mx-5"
                  onPress={openMap}
                >
                  <Svg.SvgXml xml={icons.sendBtn} />
                </Pressable>
                <Text className="pt-1">Go</Text>
              </View>
              <View>
                <Speech text={description} className="mx-5" />
                <Text className="pt-1">Audio</Text>
              </View>
            </View>
          </View>

          <View className="description px-3  mt-5">
            <Text className=" text-[16px]">{description}</Text>
          </View>

          <View className="button px-5 mt-3">
            <Pressable
              className="w-[30%]  bg-primary h-10 items-center justify-center rounded-md"
              onPress={handleShow}
            >
              <Text>READ MORE</Text>
            </Pressable>
          </View>
          <View className="location mt-3 border-primary">
            <MapView className="w-full h-52 " initialRegion={initialRegion}>
              <Marker
                coordinate={{
                  latitude: 27.5846706, // Replace with your latitude value 27.5846706,85.517088
                  longitude: 85.517079, // Replace with your longitude value
                }}
                title="Museum"
              />
            </MapView>
          </View>
        </View>
        {show && (
          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            onClose={handleShow}
            enablePanDownToClose={true}
          >
            <BottomSheetScrollView>
              <Text className="px-3 mt-5 text-xl">{description}</Text>
            </BottomSheetScrollView>
          </BottomSheet>
        )}
      </Animated.View>
    </ScrollView>
  );
};

export default PlacesDetails;
