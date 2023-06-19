import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <TouchableOpacity
      underlayColor="red"
      activeOpacity={0.7}
      onPress={props.onPress}
      className={`w-[85%] h-[7vh]  rounded-[10px] flex justify-center items-center bg-primary ${props.ClassName}`}
    >
      <Text className={`text-[17px] font-semibold ${props.textClassName}`}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
