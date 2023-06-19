import React, { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import { Text, Image } from "react-native";
import SignUpTemplate from "../components/common/CardTemplate";
import { images } from "../constants";

export default function FacebookAuth() {
  const [token, setToken] = useState("");
  const [user, setData] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "221840395407-jqslp4jrbr2ncdn24utjok9h1t4h2pe1.apps.googleusercontent.com",
    iosClientId:
      "221840395407-8fa54v6m9cl8ujifisu5fct8gqnf1p2f.apps.googleusercontent.com",
    expoClientId:
      "221840395407-322152l5oj6fj0sf0gsgk2vsre0nar62.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
    }
  }, [response]);
  const getUserData = async () => {
    const user = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    user
      .json()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {});
  };

  return (
    <SignUpTemplate>
      <Image className="h-6 w-6" source={images.facebook} />
      <Text className="text-xl">Facebook</Text>
    </SignUpTemplate>
  );
}
