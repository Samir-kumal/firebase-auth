// This component is used to render the package selectors and the content of the package selector.

import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import PackagesContent from "../../components/packages/PackageContent";

const Packages = () => {
  const [showComponent, setShowComponent] = useState(true);
  const [pressedButton, setPressedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    if (buttonName === pressedButton) {
      setShowComponent(false);
      setPressedButton(null);
    } else {
      setShowComponent(true);
      setPressedButton(buttonName);
    }
  };

  return (
    <View>
      <View style={styles.packageSelectorWrapper}>
        <Text
          onPress={() => handleButtonPress("Popular")}
          style={[
            styles.selectorButton,
            pressedButton === "Popular" && styles.pressedButton,
          ]}
        >
          Popular
        </Text>
        <Text
          onPress={() => handleButtonPress("Day 1")}
          style={[
            styles.selectorButton,
            pressedButton === "Day 1" && styles.pressedButton,
          ]}
        >
          Day 1
        </Text>
        <Text
          onPress={() => handleButtonPress("Day 2")}
          style={[
            styles.selectorButton,
            pressedButton === "Day 2" && styles.pressedButton,
          ]}
        >
          Day 2
        </Text>
        <Text
          onPress={() => handleButtonPress("Day 3")}
          style={[
            styles.selectorButton,
            pressedButton === "Day 3" && styles.pressedButton,
          ]}
        >
          Day 3
        </Text>
      </View>
      <View>{showComponent && <PackagesContent />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  packageSelectorWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  selectorButton: {
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    flex: 1,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: 5,
    marginRight: 5,
    fontWeight: "bold",
  },
  pressedButton: {
    backgroundColor: "#876CF0",
    color: "white",
  },
});

export default Packages;
