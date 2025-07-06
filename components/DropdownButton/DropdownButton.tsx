import React from "react";
import { Pressable, View } from "react-native";

const DropdownButton = ({
  lightTheme,
  buttonContent,
  endContent,
  options,
}: {
  lightTheme: boolean;
  buttonContent: any;
  endContent: any;
  options: Array<any>;
}) => {
  return (
    <View
      className={`w-auto h-auto relative bg-transparent flex flex-row justify-center items-center ${
        lightTheme ? "" : ""
      }`}
    >
      <View className="relative flex flex-row justify-center items-center">
        {buttonContent && (
          <Pressable onPress={() => {}}>{buttonContent}</Pressable>
        )}
        {endContent && endContent}
      </View>
      <View className=""></View>
    </View>
  );
};

export default DropdownButton;
