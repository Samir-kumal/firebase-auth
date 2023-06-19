import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import * as Svg from "react-native-svg";
import Button from "../../components/common/Button";
import { useRouter } from "expo-router";

const forgotpassword = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="h-screen w-full relative flex items-center justify-center bg-whitr">
      <View className="h-80 w-full  absolute top-28 flex flex-col justify-center items-center">
        <Text className="font-bold text-xl py-4">Forgot your password?</Text>
        <Text className="px-8 text-center py-2">
          Enter your registered email below to receive password reset
          instruction
        </Text>

        <View className="w-full justify-center   relative items-center">
          <Svg.SvgXml
            className="absolute top-[26px] left-10 z-10"
            xml={icons.sendBtn}
          />
          <TextInput
            className={
              "px-4 pl-12 my-2 border-[1.5px] w-[85%] m-2 rounded-lg py-4 border-primary  bg-[#ffffff]"
            }
            placeholder="Email"
            // value={values.email}
            // onChangeText={handleChange("email")}
            // onBlur={handleBlur("email")}
          />
        </View>
        <Button
          onPress={() => router.push("/otp")}
          // onPress={handleSubmit}
          ClassName="bg-primary mt-2"
          textClassName="text-white"
        >
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default forgotpassword;
