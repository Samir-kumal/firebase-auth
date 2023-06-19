// This component is used to render the content of the package selector.
// It is called by the buttons in PackageSelectorWrapper.js.

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const PackageContent = () => {
  const data = [
    { id: 1, text: "Howdie boys Popular" },
    { id: 2, text: "Hola Amigos Day 1" },
    { id: 3, text: "Namaste sathiharu Day 2" },
    { id: 4, text: "Bonjour les amis Day 3" },
  ];

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.packagesContent}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  packagesContent: {
    height: "100%",
    backgroundColor: "lightblue",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
});

export default PackageContent;
