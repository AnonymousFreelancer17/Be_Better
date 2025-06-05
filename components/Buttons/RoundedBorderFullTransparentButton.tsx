import { RootState } from "@/store/store";
import React from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";

const RoundedBorderFullTransparentButton = ({
  action,
  text,
}: {
  action: any;
  text: string;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <Pressable
      className={`border ${lightTheme ? " border-light-border" : "border-dark-border"} rounded-full px-4 py-2 bg-transparent`}
      onPress={() => {
        action();
      }}
    >
        {text}
    </Pressable>
  );
};

export default RoundedBorderFullTransparentButton;
