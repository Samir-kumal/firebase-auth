// import React, { useState, useCallback } from "react";
// import { View, Text, TextInput, ActivityIndicator, Alert } from "react-native";
// import Button from "../../components/common/Button";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useRouter, Link } from "expo-router";
// import * as Svg from "react-native-svg";
// import { useFormik } from "formik";
// import { signinSchema } from "../../../schemas";
// import { useAuth } from "../../context/Auth";
// import GoogleBtn from "../../Api/expoAuth";
// import FaceBookBtn from "../../Api/expoAuthFb";
// import { icons } from "../../constants";

// import * as Google from "expo-auth-session/providers/google";
// import * as WebBrowser from "expo-web-browser";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithCredential,
// } from "firebase/auth";
// import { auth } from "../../../firebaseConfig";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// WebBrowser.maybeCompleteAuthSession();


// const Signin = () => {
//   console.log("check point -2: signin screen");
//   const { signIn } = useAuth();
//   const router = useRouter();
//   const [err, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
 
//   const [token, setToken] = useState("");
//   const [userInfo, setUserInfo] = React.useState();
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     iosClientId:
//       "833484929166-up0em00kop7t255kjpaq6on08esce8q2.apps.googleusercontent.com",
//     androidClientId:
//       "833484929166-2h4893uhbic1i11jambtbbbvjoiihppd.apps.googleusercontent.com",
//     expoClientId:
//       "833484929166-une407snklcutr7r8sam2osdlf9jqne7.apps.googleusercontent.com",
//   });

//   React.useEffect(() => {
//     if (response?.type === "success") {
//       setToken(response.authentication.accessToken);
//       getUserInfo();
//     }

//     return ()=>{
//       router.push("home")

//     }
//   }, [response, token]);

//   const getUserInfo = async () => {
//     try {
//       const response = await fetch(
//         "https://www.googleapis.com/userinfo/v2/me",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       const user = await response.json();
//       setUserInfo(user);
//     } catch (error) {
//       // Add your own error handler here
//     }
//   };

//   const onSubmit = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       signIn();
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       setError(error);
//     }
//   }, [signIn, router]);

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: {
//         email: "",
//         password: "",
//       },
//       validationSchema: signinSchema,
//       onSubmit,
//     });

//   return (
//     <SafeAreaView className="bg-[#E9EEF2] flex-1 h-full">
//       <View className="h-40 w-full  justify-center items-center ">
//         <Text className="text-black text-4xl font-bold  space-x-1">
//           Sign In
//         </Text>
//       </View>
//       <View className="flex justify-center flex-row">
//         <GoogleBtn promptAsync = {promptAsync}  />
//         <FaceBookBtn />
//       </View>

//       {/* sign up container */}
//       <View className=" flex justify-center  w-full h-72  items-center">
//         <View className="w-full justify-center relative items-center">
//           <Svg.SvgXml
//             className="absolute top-[26px] left-10 z-10"
//             xml={icons.email}
//           />
//           <TextInput
//             className={
//               errors.email && touched.email
//                 ? " px-4 pl-12 my-2  transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4 border-[1.5px] border-red  bg-[#FFE6E0]"
//                 : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4 focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
//             }
//             placeholder="Email"
//             value={values.email}
//             onChangeText={handleChange("email")}
//             onBlur={handleBlur("email")}
//           />
//           {errors.email && touched.email && (
//             <View className="h-fit w-full px-8 flex items-start ">
//               <Text className=" text-[#ff0000]">{errors.email}</Text>
//             </View>
//           )}
//         </View>
//         <View className="w-full justify-center relative items-center">
//           <Svg.SvgXml
//             className="absolute top-[26px] left-10 z-10"
//             xml={icons.key}
//           />
//           <TextInput
//             className={
//               errors.password && touched.password
//                 ? " px-4 pl-12 my-2  transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4 border-[1.5px] border-red  bg-[#FFE6E0]"
//                 : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4 focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
//             }
//             placeholder="Password"
//             secureTextEntry={true}
//             value={values.password}
//             onChangeText={handleChange("password")}
//           />
//           {errors.password && touched.password && (
//             <View className="h-fit w-full px-8 flex items-start ">
//               <Text className=" text-[#ff0000]">{errors.password}</Text>
//             </View>
//           )}
//           <Text>
//             {err && (
//               <View className="h-fit w-full px-8 flex items-start ">
//                 <Text className=" text-[#ff0000]">{err}</Text>
//               </View>
//             )}
//           </Text>
//         </View>

//         <Button
//           // onPress={handleSubmit}
//           onPress={() => signIn()}
//           ClassName="bg-primary mt-2"
//           textClassName="text-white"
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="#ffffff" />
//           ) : (
//             "Signin"
//           )}
//         </Button>

//         <View className="flex items-end mx-4 px-6 w-full translate-y-4 ">
//           <Link href={"/forgotpassword"} asChild>
//             <Text className="text-red-500">Forgot Password?</Text>
//           </Link>
//         </View>
//       </View>

//       <View className="flex items-center">
//         <Link href={"/SignupScreen"} asChild>
//           <Button  onPress = {()=>promptAsync()} ClassName="border-[1px] border-primary mt-8 bg-white">
//             Signin with phone
//           </Button>
//         </Link>
//       </View>
//       <View className="flex items-center mt-4 mx-4">
//         <Text>
//           Don't have account?,
//           <Link href={"/signup"}>
//             <Text className="font-bold  text-primary"> Signup</Text>
//           </Link>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Signin;

import React, { useState, useCallback } from "react";
import { View, Text, TextInput, ActivityIndicator, Alert } from "react-native";
import Button from "../../components/common/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Link } from "expo-router";
import * as Svg from "react-native-svg";
import { useFormik } from "formik";
import { signinSchema } from "../../../schemas";
import { useAuth } from "../../context/Auth";
import GoogleBtn from "../../Api/expoAuth";
import FaceBookBtn from "../../Api/expoAuthFb";
import { icons } from "../../constants";

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession();

const Signin = () => {
  console.log("check point -2: signin screen");
  const { signIn } = useAuth();
  const router = useRouter();
  const [err, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "833484929166-up0em00kop7t255kjpaq6on08esce8q2.apps.googleusercontent.com",
    androidClientId:
      "833484929166-2h4893uhbic1i11jambtbbbvjoiihppd.apps.googleusercontent.com",
    expoClientId:
      "833484929166-une407snklcutr7r8sam2osdlf9jqne7.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      signIn();
      setIsLoading(false);
      router.push("home"); // Pushing to the welcome screen
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, [signIn, router]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit,
  });

  return (
    <SafeAreaView className="bg-[#E9EEF2] flex-1 h-full">
      <View className="h-40 w-full  justify-center items-center ">
        <Text className="text-black text-4xl font-bold  space-x-1">
          Sign In
        </Text>
      </View>
      <View className="flex justify-center flex-row">
        <GoogleBtn promptAsync = {promptAsync}  />
        <FaceBookBtn />
      </View>

      {/* sign up container */}
      <View className=" flex justify-center  w-full h-72  items-center">
        <View className="w-full justify-center relative items-center">
          <Svg.SvgXml
            className="absolute top-[26px] left-10 z-10"
            xml={icons.email}
          />
          <TextInput
            className={
              errors.email && touched.email
                ? " px-4 pl-12 my-2  transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4 border-[1.5px] border-red  bg-[#FFE6E0]"
                : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4 focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
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
                ? " px-4 pl-12 my-2  transition ease-in-out animate-shake w-[85%] m-2 rounded-lg py-4 border-[1.5px] border-red  bg-[#FFE6E0]"
                : "  px-4 pl-12 my-2  w-[85%] m-2 rounded-lg py-4 focus:border-[1.5px] focus:border-primary  bg-[#ffffff]"
            }
            placeholder="Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange("password")}
          />
          {errors.password && touched.password && (
            <View className="h-fit w-full px-8 flex items-start ">
              <Text className=" text-[#ff0000]">{errors.password}</Text>
            </View>
          )}
          <Text>
            {err && (
              <View className="h-fit w-full px-8 flex items-start ">
                <Text className=" text-[#ff0000]">{err}</Text>
              </View>
            )}
          </Text>
        </View>

        <Button
          // onPress={handleSubmit}
          onPress={() => signIn()}
          ClassName="bg-primary mt-2"
          textClassName="text-white"
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            "Signin"
          )}
        </Button>

        <View className="flex items-end mx-4 px-6 w-full translate-y-4 ">
          <Link href={"/forgotpassword"} asChild>
            <Text className="text-red-500">Forgot Password?</Text>
          </Link>
        </View>
      </View>

      <View className="flex items-center">
        <Link href={"/SignupScreen"} asChild>
          <Button  onPress = {()=>promptAsync()} ClassName="border-[1px] border-primary mt-8 bg-white">
            Signin with phone
          </Button>
        </Link>
      </View>
      <View className="flex items-center mt-4 mx-4">
        <Text>
          Don't have account?,
          <Link href={"/signup"}>
            <Text className="font-bold  text-primary"> Signup</Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

