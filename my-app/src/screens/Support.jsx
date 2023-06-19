import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import * as Svg from "react-native-svg";
import { icons, images } from "../constants";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MenuStore } from "../../store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../constants/themes";

export default function Supports() {
  const { setToogle } = MenuStore.useState((s) => s);

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["1%", "60%"], []);

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

  const phoneNumber = "+977-9812345678";
  const email = "info@panautimun.gov.np";

  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.support} className="w-full h-[28vh] " />
      <Text style={styles.headText}>Get support for this app</Text>
      <View style={styles.boxWrapper}>
        <View style={styles.box}>
          <View style={styles.iconHolder}>
            <Svg.SvgXml xml={icons.call} />
          </View>
          <View style={styles.textHolder}>
            <Text>Help center:{"\n"}+977 - 9812345678</Text>
          </View>
          <View style={styles.linkHolder}>
            <Text
              style={styles.linkHolderText}
              onPress={() => {
                Linking.openURL(`tel:${phoneNumber}`);
              }}
            >
              Call
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.iconHolder}>
            <Svg.SvgXml xml={icons.email} />
          </View>
          <View style={styles.textHolder}>
            <Text>info@panautimun.gov.np</Text>
          </View>
          <View style={styles.linkHolder}>
            <Text
              style={styles.linkHolderText}
              onPress={() => {
                Linking.openURL(`mailto:${email}`);
              }}
            >
              Send a mail
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.iconHolder}>
            <Svg.SvgXml xml={icons.viber} />
          </View>
          <View style={styles.textHolder}>
            <Text>Viber:{"\n"}+977 - 9812345678</Text>
          </View>
          <View style={styles.linkHolder}>
            <Text
              onPress={() => {
                Linking.openURL(`viber://chat?number=${phoneNumber}`);
              }}
              style={styles.linkHolderText}
            >
              Go to Viber
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.iconHolder}>
            <Svg.SvgXml xml={icons.globe} />
          </View>
          <View style={styles.textHolder}>
            <Text>https://www.panautimun.gov.np/</Text>
          </View>
          <View style={styles.linkHolder}>
            <Text
              style={styles.linkHolderText}
              onPress={() => {
                Linking.openURL(`https://www.panautimun.gov.np/`);
              }}
            >
              Visit Website
            </Text>
          </View>
        </View>
      </View>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  boxWrapper: {
    width: "100%",
    flex: 1,
  },
  box: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderColor: "#876CF0",
    borderWidth: 1,
    height: 50,
  },
  iconHolder: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 15,
  },
  textHolder: {
    flex: 4,
    isplay: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  linkHolder: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  linkHolderText: {
    fontWeight: "bold",
    color: "blue",
  },
  headText: {
    width: "100%",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },
});
