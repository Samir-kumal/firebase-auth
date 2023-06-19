import React, { useState } from "react";
import { ImageBackground, Image, Text, View } from "react-native";
import Button from "../../components/common/Button";
import { Link, Redirect, useRouter } from "expo-router";
import { images } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = () => {
  const router = useRouter();
  const [token, setToken] = useState(undefined);

  React.useEffect(() => {
    console.log("check point -1: welcome screen");

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@user");
        if (value !== null) {
          console.log("we got the value");
          setToken(value);
        }
      } catch (e) {
        console.log("no token found", e);
      }
    };

    getData();
  }, [token]);

  if (token) {
    return <Redirect href={"(tabs)/home"} />;
  } else {
    return (
      <ImageBackground
        className="w-[full] h-[full]"
        source={images.panautiWelcomeScreen}
        resizeMode="cover"
        blurRadius={1.3}
      >
        <View className="h-full px-3 flex  items-center  justify-evenly w-full">
          <View className="w-full  items-center gap-2">
            <Image className=" h-52 w-[70%]  " source={images.logo2} />
            <Image className="h-20  w-full " source={images.logo1} />
          </View>
          <View className=" w-full flex mt-2 translate-y-7  ">
            <Text className=" text-white font-bold text-2xl text-justify drop-shadow-lg  shadow-primary ">
              Start Exploring Panauti with app
            </Text>
            <Text className="text-white text-justify mt-1 drop-shadow-lg shadow-2xl ">
              Panauti Municipality warmly welcomes you! Discover the enchanting
              charm of our town and embark on an unforgettable journey of
              cultural exploration through our mobile app designed exclusively
              for tourists.
            </Text>
          </View>
          <View className="flex w-full mb-5 translate-y-10 items-center">
            <Link href={"/signin"} asChild>
              <Button
                ClassName="bg-primary text-white"
                textClassName="text-white"
              >
                Explore Now
              </Button>
            </Link>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

export default Welcome;
