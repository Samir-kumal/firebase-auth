import React from "react";
import { Pressable } from "react-native";

import * as Svg from "react-native-svg";
import { icons } from "../../constants";
import * as Speech from "expo-speech";

const TextToSpeechButton = ({ text }) => {
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <Pressable
      className="h-9 w-9 bg-primary rounded-full justify-center items-center"
      onPress={speak}
    >
      <Svg.SvgXml xml={icons.sound} />
    </Pressable>
  );
};

export default TextToSpeechButton;
