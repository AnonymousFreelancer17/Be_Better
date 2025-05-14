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
        className={`w-[100%] h-[60px] flex flex-row justify-center items-center z-40 ${
          lightTheme
            ? "bg-light-background border-b border-light-border"
            : "bg-dark-background border-b border-dark-border"
        }`}
      >
        <View className="w-11/12 h-full flex flex-row justify-between items-center">
          <View className="h-full w-[70%] flex flex-row justify-center items-center">
            <View className="flex justify-center items-center">
              <Link
                href={"/(tabs)"}
                className="w-[40px] flex justify-center items-center relative"
              >
                <Text
                  className={`h-full flex justify-center items-center ${
                    lightTheme ? "text-black" : "text-white"
                  } font-bold`}
                >
                  LOGO
                </Text>
              </Link>
            </View>

            <View className="h-full flex-1 justify-center items-center">
              <Text
                className={`font-medium  ${
                  lightTheme ? "text-black" : "text-white"
                }`}
              >
                {route}
              </Text>
            </View>
          </View>
          <View className="w-[30%] h-full flex flex-row justify-end items-center relative ">
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
            lightTheme ? "bg-light-background" : "bg-dark-background"
          } w-3/4 flex justify-start items-center z-40 p-2`}
          style={{
            position: "absolute",
            top: 63,
            right: 0,
            height: 550,
            shadowOpacity: 0.25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 3.84,
            elevation: 5, // Only for Android
          }}
        >
          <View
            className={`w-full h-[140px] border-b flex flex-row justify-center items-center ${
              lightTheme ? "border-light-border" : "border-dark-border"
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
              <View
                className={`w-[60px] h-[60px] ${
                  lightTheme
                    ? "border border-light-border bg-light-surface"
                    : "border border-dark-border bg-dark-surface"
                } rounded-full flex justify-center items-center`}
              >
                <FontAwesome
                  name="user"
                  size={32}
                  color={lightTheme ? "gray" : "white"}
                />
              </View>
              {/* )} */}
            </View>
            <View className="w-[70%] h-full flex justify-center items-center">
              <Text
                className={`${
                  lightTheme ? "text-black" : "text-white"
                } font-medium`}
              >
                {user?.name}
              </Text>
              <Text className={`w-full text-center text-gray-500`}>
                {user?.email}
              </Text>
              <Link
                href={`/profile`}
                className={`flex justify-center items-center h-[25px]`}
              >
                <View className="h-full flex justify-center items-center mr-2">
                  <Text className="text-light-primary font-semibold underline">
                    View Profile
                  </Text>
                </View>
                <View
                  className="text-light-primary flex justify-center items-center"
                  style={{
                    height: "100%",
                    paddingLeft: 4,
                    marginTop: 4,
                  }}
                >
                  <FontAwesome
                    className="p-0 m-0"
                    name="external-link"
                    color={"#3B82F6"}
                  />
                </View>
              </Link>
            </View>
          </View>

          <View
            className={`w-full h-[140px] border-b flex flex-col justify-center items-center ${
              lightTheme ? "border-light-border" : "border-dark-border"
            }`}
            style={{
              height: 110,
            }}
          >
            <MenuButton
              title="Google"
              icon="google"
              iconColor={null}
              iconSize={24}
              iconRounded={false}
              action={null}
            />

            <MenuButton
              title="Logout"
              icon="sign-out"
              iconColor={null}
              iconSize={24}
              iconRounded={false}
              action={() => {
                if (token && isAuthenticated) {
                  setTimeout(() => {
                    dispatch(logout());
                    router.replace("/auth/login");
                  }, 3000);
                }
              }}
            />
          </View>
          <View
            className={`w-full h-[140px] flex flex-col justify-center items-center border-b ${
              lightTheme ? "border-light-border" : "border-dark-border"
            }`}
            style={{
              height: 110,
            }}
          >
            <MenuButton
              title="Language"
              icon="language"
              iconColor={null}
              iconSize={24}
              iconRounded={false}
              action={null}
            />

            <MenuButton
              title={lightTheme ? "Theme : Light" : "Theme : Dark (Default)"}
              icon={null}
              iconColor={null}
              iconSize={24}
              iconRounded={false}
              action={() => {
                dispatch(themeToggler());
              }}
            />
          </View>
          <View
            className={`w-full flex justify-center items-center border-b ${
              lightTheme ? "border-light-border" : "border-dark-border"
            }`}
            style={{
              height: 110,
            }}
          >
            <MenuButton
              title="Setting"
              icon="gear"
              iconColor={null}
              iconSize={24}
              iconRounded={false}
              action={null}
            />

            <MenuButton
              title="Setting"
              icon="gear"
              iconColor={null}
              iconSize={24}
              iconRounded={false}
              action={null}
            />
          </View>
          <View
            className={`w-full flex justify-center items-center`}
            style={{
              height: 110,
            }}
          >
            <MenuButton
              title={"Help"}
              icon={"question"}
              iconColor={null}
              iconSize={16}
              iconRounded={true}
              action={null}
            />

            <MenuButton
              title={"Send Feedback"}
              icon={"exclamation"}
              iconColor={null}
              iconSize={16}
              iconRounded={true}
              action={null}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Header;
