import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../../constants";
import * as Svg from "react-native-svg";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../context/Auth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Image
        source={images.cont_1}
        style={{
          width: 120,
          height: 120,
          marginBottom: 10,
          borderRadius: 100,
          position: "relative",
          left: 100,
        }}
      />
      <Text style={styles.text} className=" p-1">
        Hari Bahadur Thapa
      </Text>
      <Text style={[styles.text, styles.smallText]} className="p-1">
        Hari@gmail.com
      </Text>
      <Text style={[styles.text, styles.smallerText]} className="p-1">
        +977 9812345678
      </Text>
    </View>
  );
};

const removeData = async (router) => {
  try {
    const resp = await AsyncStorage.setItem("token", "");
    if (resp) {
      router.push("/sigin");
    }
    if (!resp) {
      console.log("fuck");
    }
  } catch (e) {
    console.log(e);
  }
};
const UserProfile2 = () => {
  const { signOut } = useAuth();
  const router = useRouter();
  const handleDetailsPress = () => {
    console.log("Deatils pressed !");
  };

  const handleAboutPress = () => {
    console.log("About pressed");
  };

  return (
    <View style={[styles.container, styles.additionalContainer]}>
      <TouchableOpacity style={styles.button} onPress={handleDetailsPress}>
        <View style={styles.buttonContent}>
          <View style={styles.myDetails}>
            <Svg.SvgXml xml={icons.profileCircle} />
            <Text style={styles.buttonText}>My Details</Text>
          </View>
          <View style={styles.arrow}>
            <Svg.SvgXml xml={icons.arrowRight} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAboutPress}>
        <View style={styles.buttonContent}>
          <View style={styles.myDetails}>
            <Svg.SvgXml xml={icons.about} />
            <Text style={styles.buttonText}>About</Text>
          </View>
          <View style={styles.arrow}>
            <Svg.SvgXml xml={icons.arrowRight} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signOut();
        }}
      >
        <View style={styles.buttonContent}>
          <View style={styles.myDetails}>
            <Svg.SvgXml xml={icons.logout} />
            <Text style={styles.buttonText}>Logout</Text>
          </View>
          <View style={styles.arrow}>
            <Svg.SvgXml xml={icons.arrowRight} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const UserProfiles = () => {
  const router = useRouter();
  return (
    <View>
      <UserProfile />
      <UserProfile2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 250,
    width: "auto",
    padding: 20,
    borderRadius: 10,
  },
  additionalContainer: {
    marginTop: 10,
    padding: 20,
    height: 420,
  },
  text: {
    color: "black",
    fontSize: 21,

    textAlign: "center",
    // fontFamily: "monospace",
  },
  smallText: {
    fontSize: 16,
  },
  smallerText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    color: "black",
    borderWidth: 1,
    borderColor: "#9370DB",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  myDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    color: "grey",
    fontSize: 18,

    textAlign: "center",
  },
  arrow: {
    marginLeft: 30,
  },
});

export default UserProfiles;
