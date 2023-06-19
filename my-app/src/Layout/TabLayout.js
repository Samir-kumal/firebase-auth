import React from "react";
import { Tabs, Link } from "expo-router";
import { View, Text } from "react-native";
import * as Svg from "react-native-svg";
import { icons } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MenuStore } from "../../store";

const MenuIcon = () => {
  const { isShown } = MenuStore.useState((s) => s);
  const handleMenuToggle = () => {
    if (isShown === "flex") {
      MenuStore.update((s) => {
        s.isShown = "none";
        s.setToogle = true;
      });
    } else if (isShown == "none") {
      MenuStore.update((s) => {
        s.isShown = "flex";
        s.setToogle = false;
      });
    }
  };
  return (
    <View className=" flex gap-5 flex-row pr-5 ">
      <Link href={"/notification"}>
        <TouchableOpacity>
          <Svg.SvgXml xml={icons.notification} />
        </TouchableOpacity>
      </Link>

      <TouchableOpacity onPress={handleMenuToggle}>
        <Svg.SvgXml xml={icons.menu} />
      </TouchableOpacity>
    </View>
  );
};

const UserProfile = () => {
  return (
    <View className=" pl-5 ">
      <Link href="/(user)/profile">
        <TouchableOpacity>
          <Svg.SvgXml xml={icons.profileCircle} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const HomeIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.home} />
    </View>
  );
};
const aboutIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.about} />
    </View>
  );
};
const likeIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.heart} />
    </View>
  );
};
const locationIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.location} />
    </View>
  );
};

export default function TabLayout() {
  const { isShown } = MenuStore.useState((s) => s);

  return (
    <Tabs
      screenOptions={{
        headerLeft: UserProfile,
        headerRight: MenuIcon,
        headerTitle: "",
        tabBarStyle: {
          backgroundColor: "#E9EEF2",
          height: 0,
        },
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: "#ffff",
        },
      }}
    >
      {/* <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: HomeIcon,
          headerShown: true,
          tabBarStyle: {
            display: isShown,
          },
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          tabBarIcon: locationIcon,
          tabBarStyle: {
            display: isShown,
          },
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          tabBarIcon: likeIcon,
          tabBarStyle: {
            display: isShown,
          },
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          tabBarIcon: aboutIcon,
          tabBarStyle: {
            display: isShown,
          },
        }}
      /> */}
    </Tabs>
  );
}
