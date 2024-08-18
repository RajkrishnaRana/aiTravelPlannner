import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{
              paddingVertical: hp(2),
              width: wp(15),
              borderRadius: 50,
            }}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <Text style={styles.header}>Let's Sign You In</Text>
          <Text style={styles.subHeader}>Welcome Back.</Text>
          <Text style={styles.subHeader}>You've been missed!</Text>
        </View>

        <View style={{ marginTop: hp(3) }}>
          {/* Email Section */}
          <View style={{ marginTop: 30 }}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter Email" />
          </View>
          {/* Password Section */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Enter Password"
            />
          </View>
        </View>

        <>
          {/* Sign In button */}
          <TouchableOpacity style={styles.signInButton} onPress={() => { }}>
            <Text style={[styles.buttonText, { color: Colors.WHITE }]}>
              Sign In
            </Text>
          </TouchableOpacity>

          {/* Create Account Button */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => router.replace("auth/sign-up")}
          >
            <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    marginTop: hp(1),
  },
  header: {
    fontFamily: "Outfit-Bold",
    fontSize: wp(10),
    marginBottom: hp(2),
  },
  subHeader: {
    fontFamily: "Outfit-Regular",
    fontSize: wp(7),
    color: Colors.GRAY,
  },
  label: {
    fontFamily: "Outfit-Regular",
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "Outfit-Regular",
  },
  signInButton: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 50,
  },
  createButton: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginTop: hp(2),
    borderWidth: 1.5,
    borderColor: Colors.PRIMARY,
  },
  buttonText: {
    color: Colors.PRIMARY,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    fontSize: wp(4),
  },
});
