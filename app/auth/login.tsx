import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { login } from "@/store/slices/AuthSlice";
import { useDispatch } from "react-redux";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        dispatch(
          login({
            token: response?.data.token,
            user: {
              email: email,
            },
          })
        );
        router.replace("/");
      }
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Login Error:");
        console.log("Message:", error.message);
        console.log("Code:", error.code);
        console.log("Config:", error.config);
        console.log("Response:", error.response?.data);
        console.log("Status:", error.response?.status);
        console.log("Headers:", error.response?.headers);
        console.log("Request:", error.request);
      } else {
        console.log("Unexpected Error:", error);
      }
      return error;
    }
  };

  const googleAuth = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/google`);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Login Error:");
        console.log("Message:", error.message);
        console.log("Code:", error.code);
        console.log("Config:", error.config);
        console.log("Response:", error.response?.data);
        console.log("Status:", error.response?.status);
        console.log("Headers:", error.response?.headers);
        console.log("Request:", error.request);
      } else {
        console.log("Unexpected Error:", error);
      }
      return error;
    }
  };

  return (
    <SafeAreaView className="flex-1 flex justify-center items-center bg-primary">
      <View className="w-full flex-1 flex justify-center items-center">
        <View className="w-full flex flex-1 flex-col justify-center items-center">
          <Text className="text-white text-3xl font-medium">Be Better</Text>
          <Text className="text-orange-400 w-11/12 text-center text-xl my-2">
            Fitness . Nutirition . Schedule 
          </Text>
          <Text className="text-white/90 w-11/12 text-center">
            We got you covered! Presenting a completely free platform to help
            you become better!
          </Text>
        </View>
        {showForm && (
          <View className="w-full h-[40%] flex flex-col justify-center items-center mt-8 relative">
            <View className="w-10/12 flex flex-row items-center justify-center mb-4 ">
              <Text className="flex-1 flex h-full text-white text-center justify-center items-center text-xl font-medium py-2">
                Login using your e-mail
              </Text>
              <Text
                className=" p-2"
                onPress={() => {
                  setShowForm(false);
                }}
              >
                <FontAwesome name="close" size={28} color="#fff" />
              </Text>
            </View>
            <TextInput
              className="w-10/12 border border-white/70 rounded-md text-white py-4 mb-2 px-2"
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor={"#c2c2c2"}
            />
            <TextInput
              className="w-10/12 border border-white/70   rounded-md text-white py-4 px-2 mb-4"
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={"#c2c2c2"}
            />

            <Text
              className="w-10/12 text-white py-4 text-center bg-orange-400 rounded-md mb-4"
              onPress={() => handleLogin()}
            >
              Submit
            </Text>

            <Link
              href="/auth/register"
              className="w-10/12 text-white text-center mb-4"
            >
              Don't have an account ? Register here
            </Link>
          </View>
        )}
      </View>
      {!showForm && (
        <View className="h-[40%] w-full flex flex-col justify-center items-center ">
          <Text className="text-green-400 w-10/12 text-center mb-4">
            * Please begin with a simple registration
          </Text>
          <Text
            className="bg-orange-400 text-white w-10/12 text-center py-4 rounded-md"
            onPress={() => {
              setShowForm(!showForm);
            }}
          >
            Sign in with e-mail
          </Text>
          <Text className="text-white w-10/12 text-center my-4">Or</Text>
          <Pressable
            className="bg-white w-10/12 flex flex-row justify-center items-center text-center py-3 rounded-md mb-2"
            onPress={() => {
              googleAuth();
            }}
          >
            <Image
              source={require("../../assets/images/icons8-google-48.png")}
              className="w-[28px] h-[28px] me-3"
            ></Image>
            <Text className="text-black">Continue with Google</Text>
          </Pressable>

          <View className="bg-white w-10/12 flex flex-row justify-center items-center text-center py-3 rounded-md">
            <Image
              source={require("../../assets/images/icons8-facebook-48.png")}
              className="w-[29px] h-[29px] me-3"
            ></Image>
            <Text className="text-black">Continue with Facebook</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
