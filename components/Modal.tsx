import { RootState } from "@/store/store";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

type ModalProps = {
  type: string; // Extend this if you have more types
  closeBtn?: boolean;
  heading: string;
};

const Modal: React.FC<ModalProps> = ({ type, closeBtn, heading }) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <View
      className={`z-50 absolute top-0 left-0 w-screen h-[100vh] flex justify-end items-end backdrop-blur-md bg-black/80`}
    >
      <View
        className={`${
          type === "login" && "w-full h-[80vh] rounded-tr-3xl rounded-tl-3xl"
        } ${lightTheme ? "bg-white" : "bg-primary"} overflow-hidden`}
      >
        <View className="text-center h-[60px] flex justify-center items-center bg-blue-200">
          <Text className="font-medium text-xl text-white">{heading}</Text>
        </View>
        <ScrollView>{/*  loop thriough notification error */}</ScrollView>
      </View>

      {type === "loading" && (
        <View className="bg-white w-[300px] h-[300px] flex justify-center items-center ">
          <ActivityIndicator color={"#000"} />
        </View>
      )}

      {type === "success" && (
        <View className="bg-white w-10/12 h-[50vh] flex justify-center items-center ">
          <Text>Success!</Text>
        </View>
      )}
    </View>
  );
};

export default Modal;
