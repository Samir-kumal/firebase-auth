import React from "react";

import { Text, Image } from "react-native";
import SignUpTemplate from "../components/common/CardTemplate";
import { images } from "../constants";
// import { useAuth } from "../../src/context/Auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { promptAsync } from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";

import { auth } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession();

function GoogleAuth(props) {
  const [userInfo, setUserInfo] = React.useState();
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   iosClientId:
  //     "833484929166-up0em00kop7t255kjpaq6on08esce8q2.apps.googleusercontent.com",
  //   androidClientId:
  //     "833484929166-2h4893uhbic1i11jambtbbbvjoiihppd.apps.googleusercontent.com",
  //   expoClientId:
  //     "833484929166-une407snklcutr7r8sam2osdlf9jqne7.apps.googleusercontent.com",
  // });

  // React.useEffect(() => {
  //   if (response?.type === "success") {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //   }
  // }, [response]);

  return (
    <SignUpTemplate onPress={props.promptAsync}>
      <Image className="h-6 w-6" source={images.google} />
      <Text className="text-xl">Google</Text>
    </SignUpTemplate>
  );
}
export default GoogleAuth;
