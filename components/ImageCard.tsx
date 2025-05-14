import { RootState } from "@/store/store";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

const ImageCard = ({
  text,
  action,
  imagePath,
}: {
  action: any;
  text: string;
  imagePath: string;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <ImageBackground
      className={`w-11/12 h-[150px] rounded-xl flex justify-center items-center relative mb-1 overflow-hidden ${
        lightTheme ? "bg-light-surface" : "bg-dark-surface"
      }`}
      source={
        imagePath === "../assets/images/sports1.jpg" &&
        require("../assets/images/sports1.jpg")
      }
      resizeMode="cover"
    >
      <View className="bg-black/50 w-full flex-1 flex justify-center items-center">
        <Text className={`w-10/12 text-center text-orange-200 relative`}>
          {text}
        </Text>
        <Pressable
          className="absolute top-0 right-0 z-10 m-2 p-2"
          onPress={() => {
            action();
          }}
        >
          {!lightTheme ? (
            <Image source={require("../assets/images/close-light.png")} />
          ) : (
            <Image source={require("../assets/images/close_dark.png")} />
          )}
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default ImageCard;
