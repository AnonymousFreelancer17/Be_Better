import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BlurView } from "expo-blur";

const Register = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [userName, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  const handleRegistration = async () => {
    try {
      setisLoading(true);
      setModalMessage("Logging in...");
      console.log({
        userName: userName,
        email: email,
        password: password,
      });

      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/register`,
        {
          userName,
          email,
          password,
        }
      );
      console.log("Response", response.data);
      if (response.data.status === "success") {
        setModalMessage(response.data.message);
        setTimeout(() => {
          setModalMessage("");
          router.replace("/auth/login");
        }, 3000);
      }

      return response;
    } catch (error) {
      console.log("Error : ", error);

      let message = "An unexpected error occurred!";
      if (axios.isAxiosError(error)) {
        message =
          error.response?.data?.message || "Server Error. Please try again.";
      }
      console.log("Message", message);

      setModalMessage(message);
      setTimeout(() => {
        setisLoading(false);
        setModalMessage("");
      }, 2500);

      return error;
    }
  };

  const googleAuth = async () => {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/google`
    );
    console.log(response.data);
  };

  return (
    <SafeAreaView
      className={`flex-1 flex justify-center items-center ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      {isLoading && (
        <BlurView
          intensity={80}
          tint={lightTheme ? `dark` : "light"}
          className={`w-screen h-screen absolute top-0 left-0 flex z-40 bg-black/50 justify-center items-center`}
        >
          <View
            className={`${
              lightTheme ? "bg-light-surface" : "bg-dark-surface"
            } w-10/12 h-[300px] rounded-md flex justify-center items-center p-2`}
          >
            <ActivityIndicator color={lightTheme ? "#000" : "#fff"} size={40} />
            <Text className={`text-orange-400 font-medium mt-8 `}>
              {modalMessage}
            </Text>
          </View>
        </BlurView>
      )}

      <View className="w-full flex-1 flex justify-center items-center">
        <View className="w-full flex flex-1 flex-col justify-center items-center">
          <Text
            className={`${
              lightTheme ? "text-black" : "text-white"
            } text-3xl font-medium`}
          >
            Be Better
          </Text>
          <Text className="text-orange-400 w-11/12 text-center text-xl my-2">
            Fitness . Nutirition . Schedule
          </Text>
          <Text
            className={`${
              lightTheme ? "text-black/90" : "text-white/90"
            } w-11/12 text-center`}
          >
            We got you covered!
          </Text>
          <Text
            className={`${
              lightTheme ? "text-black/90" : "text-white/90"
            } w-11/12 text-center`}
          >
            Presenting a completely free platform to help you become better!
          </Text>
        </View>

        {showForm && (
          <View className="w-full h-[45%] flex flex-col justify-center items-center mt-8 relative mb-8">
            <View className="w-10/12 flex flex-row items-center justify-center mb-4 ">
              <Text
                className={`flex-1 flex h-full ${
                  lightTheme ? "text-black" : "text-white"
                } text-center justify-center items-center text-xl font-medium py-2`}
              >
                Register using your e-mail
              </Text>
              <Text
                className=" p-2"
                onPress={() => {
                  setShowForm(false);
                }}
              >
                {lightTheme ? (
                  <Image
                    source={require("../../assets/images/close_dark.png")}
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/close-light.png")}
                  />
                )}
              </Text>
            </View>
            <TextInput
              className={`w-10/12 border  rounded-md ${
                lightTheme
                  ? "text-black border-light-border"
                  : "text-white border-dark-border"
              } py-4 mb-2 px-2`}
              onChangeText={onChangeName}
              value={userName}
              placeholder="Name"
              placeholderTextColor={"#c2c2c2"}
            />
            <TextInput
              className={`w-10/12 border  rounded-md ${
                lightTheme
                  ? "text-black border-light-border"
                  : "text-white border-dark-border"
              } py-4 mb-2 px-2`}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor={"#c2c2c2"}
            />
            <TextInput
              className={`w-10/12 border  rounded-md ${
                lightTheme
                  ? "text-black border-light-border"
                  : "text-white border-dark-border"
              } py-4 mb-2 px-2`}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={"#c2c2c2"}
            />

            <Text
              className="w-10/12 text-white py-4 text-center bg-orange-400 rounded-md mb-4"
              onPress={() => handleRegistration()}
            >
              Submit
            </Text>

            <View
              className={`w-10/12 flex flex-row justify-center items-center`}
            >
              <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
                Already have an account?
              </Text>
              <Link
                className={`underline ms-2 text-orange-400 font-medium`}
                href={"/auth/login"}
              >
                Login here!
              </Link>
            </View>
          </View>
        )}
      </View>

      {!showForm && (
        <View className="h-[40%] w-full flex flex-col justify-center items-center ">
          <Text className="text-green-400 w-10/12 text-center mb-4">
            * Please register to get started!
          </Text>
          <Pressable
            className="bg-orange-400 w-10/12 text-center py-4 rounded-md flex justify-center items-center"
            onPress={() => {
              setShowForm(!showForm);
            }}
          >
            <Text className="text-white">Register using your e-mail</Text>
          </Pressable>
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

export default Register;
