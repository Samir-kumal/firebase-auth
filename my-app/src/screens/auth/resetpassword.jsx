import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirming, setIsConfirming] = useState(false); // Added state for confirmation step
  const router = useRouter();

  const handleSubmit = () => {
    if (password === confirmPassword && isConfirming) {
      console.log("Form submitted");
      router.replace("/signin");
    } else {
      Alert.alert("Error", "Passwords do not match");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsConfirming(false);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setIsConfirming(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          editable={password !== ""}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.buttonContainer,
          password === confirmPassword && isConfirming && styles.buttonEnabled,
        ]}
        onPress={handleSubmit}
        disabled={!(password === confirmPassword && isConfirming)}
      >
        <Text style={styles.buttonText}>
          {password === confirmPassword && isConfirming
            ? "Submit"
            : "Passwords must match"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#8062F8",
    opacity: 0.5,
  },
  buttonEnabled: {
    opacity: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default PasswordForm;
