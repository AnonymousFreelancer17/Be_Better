import { toggleNotificationModalVisibility } from "@/store/slices/settingSlice";
import { RootState } from "@/store/store";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "./Buttons/CloseButton";

const NotificationModal = ({}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const dispatch = useDispatch();

  return (
    <View
      className={`w-screen h-[100vh] flex justify-center items-center`}
    >
      <TouchableOpacity
        className={`w-screen h-full flex justify-end items-end backdrop-blur-md bg-black/80 absolute top-0 z-30`}
        onPress={() => {
          dispatch(toggleNotificationModalVisibility());
        }}
      >
        <View></View>
      </TouchableOpacity>
      <View
        className={`${
          lightTheme ? "bg-light-surface" : "bg-dark-surface"
        } w-full h-[80vh] flex flex-col justify-center items-center relative z-50`}
      >
        <CloseButton
          pressableStyle={"top-0 right-0 absolute z-30 p-2"}
          imageStyle={""}
          action={() => {
            dispatch(toggleNotificationModalVisibility());
          }}
        />

        <View className="w-full h-full relative flex flex-1 flex-col justify-start items-center">
          <View className="w-full h-[40px] bg-red-400 flex justify-center items-center">
            <Text
              className={`${lightTheme ? "text-[#000000]" : "text-[#fff]"}`}
            >
              Notification
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationModal;
