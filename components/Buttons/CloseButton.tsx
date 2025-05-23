import { RootState } from "@/store/store";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { useSelector } from "react-redux";

const CloseButton = ({
  action,
  pressableStyle,
  imageStyle,
}: {
  action: any;
  pressableStyle: string;
  imageStyle: string;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <Pressable
      className={pressableStyle}
      onPress={() => {
        action();
      }}
    >
      {lightTheme ? (
        <Image
          className={imageStyle}
          source={require("../../assets/images/close_dark.png")}
        ></Image>
      ) : (
        <Image
          className={imageStyle}
          source={require("../../assets/images/close-light.png")}
        ></Image>
      )}
    </Pressable>
  );
};

export default CloseButton;
