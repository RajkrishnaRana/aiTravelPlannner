import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../../configs/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    if (email?.length > 0 && fullName?.length > 0 && password?.length > 0) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log({ user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({ errorMessage, errorCode });
        });
    } else {
      ToastAndroid.show("Please Enter all details", ToastAndroid.BOTTOM);
      return;
    }
  };

  return (
    <View style={styles.container}>
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
      <Text style={styles.header}>Create New Account</Text>

      <View style={{ marginTop: hp(3) }}>
        {/* Full Name */}
        <View style={{ marginTop: 30 }}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Full Name"
            onChangeText={(val) => setFullName(val)}
          />
        </View>
        {/* Email Section */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        {/* Password Section */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={(val) => setPassword(val)}
          />
        </View>
      </View>

      <>
        {/* Sign In button */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            onCreateAccount();
          }}
        >
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>
            Create Account
          </Text>
        </TouchableOpacity>

        {/* Create Account Button */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.replace("auth/sign-in")}
        >
          <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Colors.WHITE,
  },
  header: {
    fontFamily: "Outfit-Bold",
    fontSize: wp(10),
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
