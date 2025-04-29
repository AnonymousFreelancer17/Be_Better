import { logout } from "@/store/slices/AuthSlice";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { themeToggler } from "@/store/slices/settingSlice";
import { router } from "expo-router";
import axios from "axios";

type HeaderProps = {
  lightTheme: boolean;
};

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, token, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [showNotification, setShowNotification] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/getUserDetails`,
        { token },
        {
          headers: {
            "Content-Type": "Application/JSON",
            Authorization: token,
          },
        }
      );
      console.log(response);
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

  useEffect(() => {
    if (token) {
      fetchUserDetails();
    }
  }, [token, user?.name]);

  return (
    <>
      <View
        className={`w-[100%] h-[60px] flex flex-row justify-center items-center z-40 border-b border-gray-700 ${
          lightTheme ? "bg-[#eeeeee]" : "bg-black"
        }`}
      >
        <View className="w-11/12 flex flex-row justify-center items-center">
          <View className="flex-1">
            <Text className="text-white">
              {process.env.EXPO_PUBLIC_BACKEND_URL}
            </Text>
          </View>
          <View className="w-[35%] flex flex-row justify-end items-center relative">
            <Pressable
              className="h-[50px] flex justify-center items-center relative me-2"
              onPress={() => {
                dispatch(themeToggler());
              }}
            >
              {!lightTheme ? (
                <FontAwesome name="sun-o" size={24} color={"#fff"} />
              ) : (
                <FontAwesome name="moon-o" size={24} color={"#fff"} />
              )}
            </Pressable>

            <Pressable
              className="h-[50px] flex justify-center items-center relative me-2"
              onPress={() => {
                setShowNotification(!showNotification);
              }}
            >
              <View className="w-[16px] h-[16px]  rounded-full absolute top-0 right-0 z-10 flex justify-center items-center my-2 bg-red-500">
                <Text className="text-white text-[8px]">5</Text>
              </View>
              <FontAwesome name="bell" size={24} color={"#fff"} />
            </Pressable>

            <Pressable
              className="w-[40px] h-[40px] flex justify-center items-center bg-gray-400 rounded-full"
              onPress={() => {
                if (token && isAuthenticated) {
                  dispatch(logout());
                  router.replace("/auth/Login");
                }
              }}
            >
              <FontAwesome name="user" size={20} color={"#fff"} />
            </Pressable>
          </View>
        </View>
      </View>
      {showNotification && (
        <Modal type={"notification"} closeBtn={true} heading="Notifications" />
      )}
    </>
  );
};

export default Header;
