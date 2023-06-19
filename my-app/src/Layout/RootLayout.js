
import React from "react";
import { Stack } from "expo-router";
import { Provider } from "../context/Auth";
const RootLayout = () => {
  return (
    <Provider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f8f8fa",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          gestureEnabled: true,
          gestureDirection: "vertical",
        }}
        initialRouteName="(tabs)"
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(auth)/welcome"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)/signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)/signup"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(setting)/notification"
          options={{ headerTitle: "Notification" }}
        />
        <Stack.Screen
          name="(user)/profile"
          options={{ headerTitle: "Profile" }}
        />

        <Stack.Screen
          name="(packages)/packages"
          options={{ headerTitle: "Packages" }}
        />
        <Stack.Screen
          name="list/detail"
          options={{
            headerTitle: "",
            headerShown: false,
          }}
        />

        <Stack.Screen name="(packages)/help" options={{ headerTitle: "" }} />
        <Stack.Screen
          name="(auth)/forgotpassword"
          options={{
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="(auth)/otp"
          options={{
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="(auth)/resetpassword"
          options={{
            headerTitle: "",
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
