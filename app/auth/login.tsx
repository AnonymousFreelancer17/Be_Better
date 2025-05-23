import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { login } from "@/store/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AuthModal from "../../components/Modal";

const Login = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [showForm, setShowForm] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setmodalType] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setmodalType("loading");
      setModalMessage("Logging in...");

      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        dispatch(
          login({
            token: response?.data.token,
          })
        );
        setmodalType("success");
        setModalMessage("Login successful! Redirecting...");
        setTimeout(() => {
          setModalMessage("");
          setmodalType("");
          router.replace("/(tabs)");
        }, 3000);
      }
      return response;
    } catch (error) {
      let message = "An unexpected error occurred!";
      if (axios.isAxiosError(error)) {
        message =
          error.response?.data?.message || "Server Error. Please try again.";
      }
      setmodalType("error");
      setModalMessage(message);
      setTimeout(() => {
        setLoading(false);
        setModalMessage("");
        setmodalType("");
      }, 2500);

      return error;
    }
  };

  const googleAuth = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_BACKEND_URL_LOCAL}/auth/google`
      );
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
    <SafeAreaView
      className={`flex-1 flex justify-center items-center ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      {/* modalLogic */}
      {isLoading && (
        <AuthModal modalMessage={modalMessage} modalType={modalType} />
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
            We got you covered! Presenting a completely free platform to help
            you become better!
          </Text>
        </View>
        {showForm && (
          <View className="w-full h-[40%] flex flex-col justify-center items-center mt-8 relative">
            <View className="w-10/12 flex flex-row items-center justify-center mb-4 ">
              <Text
                className={`flex-1 flex h-full ${
                  lightTheme ? "text-black" : "text-white"
                } text-center justify-center items-center text-xl font-medium py-2`}
              >
                Login using your e-mail
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
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor={"#c2c2c2"}
            />
            <TextInput
              className={`w-10/12 border rounded-md ${
                lightTheme
                  ? "text-black border-light-border"
                  : "text-white border-dark-border"
              } py-4 px-2 mb-4`}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={"#c2c2c2"}
            />

            <Text
              className={`w-10/12 ${
                lightTheme ? "text-black" : "text-white"
              } py-4 text-center bg-orange-400 rounded-md mb-4`}
              onPress={() => handleLogin()}
            >
              Submit
            </Text>

            <View className="w-10/12 text-center mb-4 flex flex-row justify-center items-center">
              <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
                Don't have an account ?
              </Text>
              <Link
                href="/auth/register"
                className="underline ms-1 font-medium text-orange-400"
              >
                Register here!
              </Link>
            </View>
          </View>
        )}
      </View>

      {!showForm && (
        <View className="h-[40%] w-full flex flex-col justify-center items-center ">
          <Text className="text-green-400 w-10/12 text-center mb-4">
            * Please login using following options
          </Text>
          <Text
            className={`bg-orange-400 ${
              lightTheme ? "text-black" : "text-white"
            } w-10/12 text-center py-4 rounded-md`}
            onPress={() => {
              setShowForm(!showForm);
            }}
          >
            Sign in with e-mail/ Mobile number
          </Text>
          <Text
            className={`${
              lightTheme ? "text-black" : "text-white"
            } w-10/12 text-center my-4 font-medium`}
          >
            Or
          </Text>
          <Pressable
            className={`${
              lightTheme ? "bg-light-surface" : "bg-dark-surface"
            } w-10/12 flex flex-row justify-center items-center text-center py-3 rounded-md mb-2`}
            onPress={() => {
              googleAuth();
            }}
          >
            <Image
              source={require("../../assets/images/icons8-google-48.png")}
              className="w-[28px] h-[28px] me-3"
            ></Image>
            <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
              Continue with Google
            </Text>
          </Pressable>

          <View
            className={`${
              lightTheme ? "bg-light-surface" : "bg-dark-surface"
            } w-10/12 flex flex-row justify-center items-center text-center py-3 rounded-md`}
          >
            <Image
              source={require("../../assets/images/icons8-facebook-48.png")}
              className="w-[29px] h-[29px] me-3"
            ></Image>
            <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
              Continue with Facebook
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
