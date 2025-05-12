import { logout } from "@/store/slices/AuthSlice";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  NotificationModalVisibilityTogler,
  themeToggler,
} from "@/store/slices/settingSlice";
import { Link, router } from "expo-router";
import NotificationModal from "./NotificationModal";
import { BlurView } from "expo-blur";
import MenuButton from "./MenuButton";

const Header = ({ route }: { route: any }) => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, token, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme, notificationVibility } = useSelector(
    (state: RootState) => state.setting
  );
  const [showMenuBar, setShowMenuBar] = useState(false);

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
          <View className="w-auto h-full flex flex-row justify-end items-center relative">
            {/* <Pressable
              className="w-[40px] h-[40px] flex justify-center items-center relative bg-red-400"
              onPress={() => {
                dispatch(themeToggler());
              }}
            >
              {!lightTheme ? (
                <FontAwesome name="sun-o" size={20} color={"#fff"} />
              ) : (
                <FontAwesome name="moon-o" size={20} color={"gray"} />
              )}
            </Pressable> */}

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
                size={20}
                color={!lightTheme ? "#fff" : "gray"}
              />
            </Pressable>

            <Pressable
              className={`w-[40px] h-[40px] flex justify-center items-center ${
                lightTheme
                  ? "bg-light-surface border-light-border"
                  : "bg-dark-surface"
              } rounded-full`}
              // onPress={() => {
              //   if (token && isAuthenticated) {
              //     dispatch(logout());
              //     router.replace("/auth/login");
              //   }
              // }}
              onPress={() => {
                setShowMenuBar(!showMenuBar);
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
      {showMenuBar && (
        <View
          className={`${
            lightTheme ? "bg-light-surface" : "bg-dark-surface"
          } w-3/4 flex justify-start items-center z-40`}
          style={{
            position: "absolute",
            top: 60,
            right: 0,
            height: 550,
            shadowColor: lightTheme ? "rgba(0,0,0)" : "rgba(1,1,1)",
            shadowOpacity: 0.5,
          }}
        >
          <View
            className={`w-full h-[140px] border-b flex flex-row justify-center items-center ${
              lightTheme ? "border-light-card" : "border-dark-card"
            }`}
            style={{
              height: 110,
              borderBottomWidth: 1,
              borderBottomColor: lightTheme ? "red" : "green",
            }}
          >
            <View className="h-full flex flex-1 justify-center items-center">
              {/* {user?.profilePic === "" ? (
                <Image source={require(user?.profilePic)} />
              ) : ( */}
             <View className={`w-[60px] h-[60px] ${lightTheme ? "border border-light-card" : "border border-dark-card" } rounded-full flex justify-center items-center`}>
               <FontAwesome
                name="user"
                size={32}
                color={lightTheme ? "gray" : "white"}
              />
             </View>
              {/* )} */}
            </View>
            <View className="w-[70%] h-full flex justify-center items-center">
              <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
                {user?.name}
              </Text>
              <Text
                className={`w-10/12 text-center ${
                  lightTheme ? "text-black" : "text-white"
                }`}
              >
                {user?.email}
              </Text>
              <Link href={`/profile`} className={`text-light-primary`}>
                View Profile
              </Link>
            </View>
          </View>

          <View
            className={`w-full h-[140px] border-b flex flex-row justify-center items-center ${
              lightTheme ? "border-light-card" : "border-dark-card"
            }`}
            style={{
              height: 110,
            }}
          >
            <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, aliquam rem. Quos doloribus co 
            </Text>
          </View>
          <View
            className={`w-full h-[140px] flex flex-col justify-center items-center ${
              lightTheme ? "border-light-card" : "border-dark-card"
            }`}
            style={{
              height: 110,
            }}
          >
           <MenuButton title="Setting" icon="gear" iconColor={null} iconSize={24} iconRounded={false} />

            <MenuButton title="Setting" icon="gear" iconColor={null} iconSize={24} iconRounded={false} />
          </View>
          <View
            className={`w-full flex justify-center items-center border-t ${
              lightTheme ? "border-t border-light-card" : "border-dark-card"
            }`}
            style={{
              height: 110,
            }}
          >
           <MenuButton title="Setting" icon="gear" iconColor={null} iconSize={24} iconRounded={false} />

           <MenuButton title="Setting" icon="gear" iconColor={null} iconSize={24} iconRounded={false} />

          </View>
          <View
            className={`w-full flex justify-center items-center border-t ${
              lightTheme ? "border-t border-light-card" : "border-t border-dark-card"
            }`}
            style={{
              height: 110,
            }}
          >
            <MenuButton title={"Help"} icon={"question"} iconColor={null} iconSize={16} iconRounded={true}  />

            <MenuButton title={"Send Feedback"} icon={"exclamation"} iconColor={null} iconSize={16} iconRounded={true}  />

          </View>
        </View>
      )}
    </>
  );
};

export default Header;
