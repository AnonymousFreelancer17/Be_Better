import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotificationModalVisibility } from "@/store/slices/settingSlice";
import { Link } from "expo-router";

//  importing components
import NotificationModal from "./Modals/NotificationModal";
import Modal from "./Modals/Modal";
import MenuBar from "./MenuBar/MenuBar";

const Header = ({ route }: { route: any }) => {
  const dispatch = useDispatch();
  const { lightTheme, notificationVisibility } = useSelector(
    (state: RootState) => state.setting
  );
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  return (
    <>
      <View
        className={`w-[100%] h-[60px] flex flex-row justify-center items-center z-20 ${
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
              className="w-[40px] h-[40px] flex justify-center items-center relative me-2"
              onPress={() => {
                dispatch(toggleNotificationModalVisibility());
              }}
            >
              <View
                className="w-[16px] h-[16px] rounded-full absolute top-0 right-0 z-10 flex justify-center items-center bg-red-500"
                style={{
                  marginRight: 4,
                  marginTop: 2,
                }}
              >
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
      {notificationVisibility && <NotificationModal />}
      {isLoading && <Modal modalMessage={modalMessage} modalType={modalType} />}
      {showMenuBar && <MenuBar />}
    </>
  );
};

export default Header;
