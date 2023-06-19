import { useRouter, useSegments } from "expo-router";
import React, { useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/welcome");
    } else if (user && inAuthGroup) {
      router.replace("/home");
    }
  }, [user, segments]);
}

export function Provider(props) {
  const [user, setAuth] = React.useState(null);

  useProtectedRoute(user);

  const signIn = () => {
    setAuth({});
  };
  const signOut = async () => {
    await AsyncStorage.removeItem("@user");
    setAuth(null);
    console.log("sign out");
  };

  const meMomizedValue = useMemo(
    () => ({
      signIn,
      signOut,
      user,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={meMomizedValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
