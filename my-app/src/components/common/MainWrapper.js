import { SafeAreaView } from "react-native";

import React from "react";

const MainWrapper = (props) => {
  return (
    <SafeAreaView className="h-full w-full">{props.children}</SafeAreaView>
  );
};

export default MainWrapper;
