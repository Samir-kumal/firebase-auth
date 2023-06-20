import React from "react";
import { Text, Image } from "react-native";
import SignUpTemplate from "../components/common/CardTemplate";
import { images } from "../constants";
import { useAuth } from "../../src/context/Auth";

function GoogleAuth(props) {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await props.promptAsync();

      // Perform the necessary logic to trigger the Google sign-in flow
      // For example, you can call the `promptAsync` function if using Expo Google authentication
      // const result = await promptAsync();
      // if (result.type === "success") {
      //   const { id_token } = result.params;
      //   signInWithGoogle(id_token);
      // }
    } catch (error) {
      // Handle any errors that occur during the sign-in process
    }
  };

  return (
    <SignUpTemplate onPress={handleGoogleSignIn}>
      <Image style={{ height: 24, width: 24 }} source={images.google} />
      <Text style={{ fontSize: 20 }}>Google</Text>
    </SignUpTemplate>
  );
}

export default GoogleAuth;
