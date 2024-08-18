import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/login.png")}
        style={{ width: wp(100), height: hp(58) }}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>AI Travel Planner</Text>
        <Text style={styles.subHeading}>
          Discover your next adventure effortlessly. Personalized plans in your
          fingertips. Travel smarter with AI-driven insights.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: hp(100),
    padding: 10,
  },
  heading: {
    fontSize: wp(7),
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    marginTop: hp(3),
  },
  subHeading: {
    fontFamily: "Outfit-Regular",
    fontSize: wp(4),
    textAlign: "center",
    color: Colors.GRAY,
    marginTop: hp(2),
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 50,
    justifyContent: "flex-end",
  },
  buttonText: {
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY,
    padding: 12,
    borderRadius: 50,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    fontSize: wp(4.5),
  },
});
