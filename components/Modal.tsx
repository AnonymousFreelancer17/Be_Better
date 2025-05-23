import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { BlurView } from "expo-blur";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Modal = ({
  modalMessage,
  modalType,
}: {
  modalMessage: any;
  modalType: any;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <BlurView
      intensity={80}
      tint={lightTheme ? `dark` : "light"}
      className={`w-screen h-screen absolute top-0 left-0 flex z-40 bg-black/50 justify-center items-center`}
    >
      <View
        className={`${
          lightTheme ? "bg-light-surface" : "bg-dark-surface"
        } w-10/12 h-[300px] rounded-md flex justify-center items-center p-2
        
        ${modalType === "success" && "border-2 border-green-500"}
        ${modalType === "loading" && "border-2 border-gray-500"}
        ${modalType === "error" && "border-2 border-red-500"}
        ${modalType === "" && ""}
        `}
      >
        {modalType === "loading" && (
          <ActivityIndicator color={lightTheme ? "gray" : "#fff"} size={40} />
        )}
        {modalType === "success" && (
          <FontAwesome name="check-circle" color={"green"} size={40} />
        )}
        {modalType === "error" && (
          <FontAwesome name="close" color={"red"} size={40} />
        )}

        <Text
          className={`
            ${modalType === "success" && "text-green-400"} 
            ${modalType === "error" && "text-red-400"} 
            ${modalType === "loading" && "text-gray-400"} 
           font-medium mt-8 `}
        >
          {modalMessage}
        </Text>




        {/*  close_button */}
      </View>
    </BlurView>
  );
};

export default Modal;
