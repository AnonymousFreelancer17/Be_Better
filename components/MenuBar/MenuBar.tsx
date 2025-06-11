import React, { useState } from "react";
import MenuButton from "./MenuButton";
import { Text, View } from "react-native";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, router } from "expo-router";

import {
  toggleNotificationModalVisibility,
  toggleTheme,
} from "@/store/slices/settingSlice";
import { logout } from "@/store/slices/AuthSlice";
import FontAwesome from "@expo/vector-icons/FontAwesome";



const MenuBar = () => {

  const dispatch = useDispatch();
  const { isAuthenticated, token, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme, notificationVisibility } = useSelector(
    (state: RootState) => state.setting
  );
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  return (
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
          {user?.profilePic !== undefined ? (
            <></>
            // <Image source={{ uri: user?.profilePic }} />
          ) : (
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
          )}
        </View>
        <View className="w-[70%] h-full flex justify-center items-center">
          <Text
            className={`${
              lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
            } font-medium`}
          >
            {user?.name}
          </Text>
          <Text
            className={`w-full text-center ${
              lightTheme
                ? "text-light-secondaryText"
                : "text-dark-secondaryText"
            }`}
          >
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
              setShowMenuBar(false);
              setIsLoading(true);
              setModalMessage("logging out..");
              setModalType("loading");
              setTimeout(() => {
                dispatch(logout());
                setModalMessage("Successfully Logged out!");
                setModalType("success");
                setIsLoading(false);
                router.replace("/auth/login");
              }, 3000);
            }

            return () => {
              setModalMessage("");
              setModalType("");
              setIsLoading(false);
            };
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
            dispatch(toggleTheme());
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
          title="Location"
          icon="globe"
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
  );
};

export default MenuBar;
