import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import * as Svg from "react-native-svg";
import Button from "../../components/common/Button";
import { icons } from "../../constants";
import { useFormik } from "formik";

import { useRouter } from "expo-router";
import { signupSchema } from "../../../schemas";
const Signup = () => {
  console.log("check point -3: signup screen");

  const router = useRouter();

  const onSubmit = async () => {
    router.push("/signin");
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        cpassword: "",
      },
      validationSchema: signupSchema,
      onSubmit,
    });

  console.log(values);

  return (
    <View className="bg-[#E9EEF2] h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className=" flex justify-center  w-full h-fit  z-40 items-center"
      >
        <View className="h-40 w-full flex justify-center items-center ">
          <Text className="text-black translate-y-2 text-3xl">Sign Up</Text>
        </View>

        <View className="w-full justify-center relative items-center">
          <Svg.SvgXml
            className="absolute top-[26px] left-10 z-10"
            xml={icons.edit}
          />

          <TextInput
            className={
              errors.name && touched.name
                ? " px-4 pl-12 my-2 border-[1.5px] transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4  border-red  bg-[#FFE6E0]"
                : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4 focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
            }
            placeholder="Full Name"
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          {errors.name && touched.name && (
            <View className="h-fit w-full px-8 flex items-start ">
              <Text className=" text-[#ff0000]">{errors.name}</Text>
            </View>
          )}
        </View>

        <View className="w-full justify-center relative items-center">
          <Svg.SvgXml
            className="absolute top-[26px] left-10 z-10"
            xml={icons.sendBtn}
          />

          <TextInput
            className={
              errors.email && touched.email
                ? " px-4 pl-12 my-2 border-[1.5px] transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4  border-red  bg-[#FFE6E0]"
                : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4  focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
            }
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {errors.email && touched.email && (
            <View className="h-fit w-full px-8 flex items-start ">
              <Text className=" text-[#ff0000]">{errors.email}</Text>
            </View>
          )}
        </View>

        <View className="w-full justify-center relative items-center">
          <Svg.SvgXml
            className="absolute top-[26px] left-10 z-10"
            xml={icons.key}
          />

          <TextInput
            className={
              errors.password && touched.password
                ? " px-4 pl-12 my-2 border-[1.5px] transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4  border-red  bg-[#FFE6E0]"
                : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4  focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
            }
            placeholder="Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          {errors.password && touched.password && (
            <View className="h-fit w-full px-8 flex items-start ">
              <Text className=" text-[#ff0000]">{errors.password}</Text>
            </View>
          )}
        </View>

        <View className="w-full justify-center relative items-center">
          <Svg.SvgXml
            className="absolute top-[26px] left-10 z-10"
            xml={icons.key}
          />

          <TextInput
            className={
              errors.email && touched.email
                ? " px-4 pl-12 my-2 border-[1.5px] transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4  border-red  bg-[#FFE6E0]"
                : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4  focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
            }
            placeholder="Confirm password"
            secureTextEntry={true}
            value={values.cpassword}
            onChangeText={handleChange("cpassword")}
            onBlur={handleBlur("cpassword")}
          />
          {errors.cpassword && touched.cpassword && (
            <View className="h-fit w-full px-8 flex items-start ">
              <Text className=" text-[#ff0000]">{errors.cpassword}</Text>
            </View>
          )}
        </View>

        <Button onPress={handleSubmit} ClassName="bg-[#8062F8] mt-4">
          Signup
        </Button>
      </KeyboardAvoidingView>

      <View className="flex items-center mx-4 my-6">
        <Text>
          Already have account?,{" "}
          <Text
            className="font-bold text-primary"
            onPress={() => router.push("/signin")}
          >
            Signin
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
