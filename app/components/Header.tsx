import { logout } from "@/store/slices/AuthSlice";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  NotificationModalVisibilityTogler,
  themeToggler,
} from "@/store/slices/settingSlice";
import { router } from "expo-router";
import NotificationModal from "./NotificationModal";

import { RouteProp } from "@react-navigation/native";

const Header = ({ route }: { route: any }) => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, token, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme, notificationVibility } = useSelector(
    (state: RootState) => state.setting
  );

  return (
    <>
      <View
        className={`w-[100%] h-[60px] flex flex-row justify-center items-center z-40  ${
          lightTheme
            ? "bg-light-background border-b border-light-border"
            : "bg-dark-background border-b border-dark-border"
        }`}
      >
        <View className="w-11/12 flex flex-row justify-start items-center">
          <View className="flex-1 flex flex-row justify-center items-center">
            <Pressable
              className="w-[40px] h-[40px] flex flex-col justify-center items-center"
              onPress={() => {}}
            >
              {lightTheme ? (
                <Image source={require("../../assets/images/Vector-1.png")} />
              ) : (
                <Image source={require("../../assets/images/Vector.png")} />
              )}
            </Pressable>
            <View className="flex-1 justify-center items-center">
              <Text
                className={`font-medium  ${
                  lightTheme ? "text-black" : "text-white"
                }`}
              >
                {route}
              </Text>
            </View>
          </View>
          <View className="w-[25%] flex flex-row justify-end items-center relative">
            <Pressable
              className="h-[50px] flex justify-center items-center relative me-2"
              onPress={() => {
                dispatch(themeToggler());
              }}
            >
              {!lightTheme ? (
                <FontAwesome name="sun-o" size={24} color={"#fff"} />
              ) : (
                <FontAwesome name="moon-o" size={24} color={"gray"} />
              )}
            </Pressable>

            <Pressable
              className="h-[50px] flex justify-center items-center relative me-2"
              onPress={() => {
                dispatch(NotificationModalVisibilityTogler());
              }}
            >
              <View className="w-[16px] h-[16px]  rounded-full absolute top-0 right-0 z-10 flex justify-center items-center my-2 bg-red-500">
                <Text className="text-white text-[8px]">5</Text>
              </View>
              <FontAwesome
                name="bell"
                size={24}
                color={!lightTheme ? "#fff" : "gray"}
              />
            </Pressable>

            <Pressable
              className={`w-[40px] h-[40px] flex justify-center items-center ${
                lightTheme
                  ? "bg-light-surface border-light-border"
                  : "bg-dark-surface"
              } rounded-full`}
              onPress={() => {
                if (token && isAuthenticated) {
                  dispatch(logout());
                  router.replace("/auth/login");
                }
              }}
            >
              <FontAwesome
                name="user"
                size={20}
                color={lightTheme ? "gray" : "#fff"}
              />
            </Pressable>
          </View>
        </View>
      </View>
      {notificationVibility && <NotificationModal />}
    </>
  );
};

export default Header;
