import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

const MenuButton = ({
  icon,
  title,
  iconSize,
  iconColor,
  iconRounded
}: {
  icon: any;
  title: any;
  iconSize: number;
  iconColor : any;
  iconRounded : boolean
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <Pressable className="w-full h-[30px] mb-4 flex flex-row justify-start items-center">
      <View className="flex-1 h-full justify-center items-center ">
        <View className={`h-[30px] w-[30px] flex justify-center items-center  ${iconRounded ? "border border-white rounded-full" : ""} me-2`}>
          <FontAwesome
            name={icon}
            color={iconColor ? iconColor : lightTheme ? "gray" : "white"}
            size={iconSize || 16}
          />
        </View>
      </View>
      <View className="w-[80%] h-full flex justify-center items-start ">
        <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default MenuButton;
