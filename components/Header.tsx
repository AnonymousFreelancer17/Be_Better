import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleNotificationModalVisibility,
  toggleSidebarVisibility,
} from "@/store/slices/modalSlice";
import { Link } from "expo-router";
import { MenuIcon } from "lucide-react-native";

//  importing components
import NotificationModal from "./Modals/NotificationModal";
import Modal from "./Modals/Modal";
import MenuBar from "./MenuBar/MenuBar";
import GlobalText from "./GlobalUI/GlobalText";
import Sidebar from "./Sidebar/Sidebar";

const Header = ({ route }: { route: any }) => {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const { notificationVisibility, sidebarVisibility } = useSelector(
    (state: RootState) => state.modal
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
            <View className="flex flex-row justify-center items-center gap-x-4">
              <Pressable
                onPress={() => {
                  dispatch(toggleSidebarVisibility());
                }}
              >
                <MenuIcon color={lightTheme ? "gray" : "white"} />
              </Pressable>

              <Link
                href={"/(tabs)"}
                className="w-[40px] flex justify-center items-center relative"
              >
                <GlobalText
                  fontStyle="font-bold"
                  lightTheme={lightTheme}
                  value={"Logo"}
                />
              </Link>
            </View>

            <View className="h-full flex-1 justify-center items-center">
              <GlobalText
                fontStyle="font-medium"
                lightTheme={lightTheme}
                value={route}
              />
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
      {sidebarVisibility && <Sidebar />}
    </>
  );
};

export default Header;
