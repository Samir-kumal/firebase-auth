import { useRef, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Clipboard,
  ActivityIndicator,
} from "react-native";

const OTPContainer = ({ email }) => {
  const router = useRouter();
  const otpInputs = Array.from({ length: 6 }, () => useRef(null));
  const [activeInput, setActiveInput] = useState(0);
  const [resendTimer, setResendTimer] = useState(59);
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleOTPInputChange = (index, value) => {
    if (value === "") {
      if (index > 0) {
        otpInputs[index - 1].current.focus();
      }
    } else if (value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    } else if (value === "" && index > 0) {
      otpInputs[index - 1].current.focus();
      otpInputs[index - 1].current.clear();
    }
  };

  const handleOTPInputPaste = async () => {
    const otp = await Clipboard.getString();

    const otpDigits = otp.split("");

    otpDigits.forEach((digit, index) => {
      if (otpInputs[index] && otpInputs[index].current) {
        otpInputs[index].current.setNativeProps({ text: digit });
        handleOTPInputChange(index, digit);
      }
    });

    // Update the input values using useState
    const updatedValues = otpDigits.slice(0, otpInputs.length);
    setActiveInput(otpInputs.length - 1); // Set the active input to the last one
    updatedValues.forEach((value, index) => {
      otpInputs[index].current.value = value;
    });
  };

  useEffect(() => {
    otpInputs.forEach((input, index) => {
      const { current: textInput } = input;
      textInput.setNativeProps({ maxLength: 1 });
    });
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [resendTimer]);

  const handleInputFocus = (index) => {
    setActiveInput(index);
  };

  const handleOTPSubmit = () => {
    setIsLoading(true);

    // Perform any necessary API requests or actions here

    setTimeout(() => {
      setIsLoading(false);
      setIsRedirecting(true);
      setTimeout(() => {
        setIsRedirecting(false);
        router.push("/resetpassword");
      }, 2000); // Simulating a 2-second delay before redirecting
    }, 2000); // Simulating a 2-second loading delay
  };

  return (
    <View style={styles.container}>
      {isRedirecting ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={styles.redirectingText}>Redirecting...</Text>
        </View>
      ) : (
        <>
          <Text style={styles.message}>
            Enter the OTP sent to your registered email
          </Text>
          <Text style={styles.email}>{email}</Text>
          <View style={styles.otpContainer}>
            {otpInputs.map((input, index) => (
              <TextInput
                key={index}
                ref={input}
                style={[
                  styles.otpInput,
                  activeInput === index && styles.activeInput,
                ]}
                placeholder="*"
                keyboardType="numeric"
                onChangeText={(value) => handleOTPInputChange(index, value)}
                onPaste={handleOTPInputPaste}
                onFocus={() => handleInputFocus(index)}
              />
            ))}
          </View>
          <Button
            title="Submit"
            onPress={handleOTPSubmit}
            buttonStyle={styles.button}
            disabled={isLoading}
          />

          <Text style={styles.resendTimer}>
            {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  loadingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  redirectingText: {
    fontSize: 16,
    marginTop: 10,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  email: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "100%",
  },
  otpInput: {
    flex: 1,
    height: 50,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    marginHorizontal: 2,
  },
  activeInput: {
    borderColor: "blue",
  },
  button: {
    width: "100%",
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "blue",
  },
  resendTimer: {
    margin: 10,
    fontWeight: "bold",
  },
});

export default OTPContainer;
