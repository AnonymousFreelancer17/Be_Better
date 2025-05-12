import { RootState } from "@/store/store";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const SectionHeading = ({title} : {title :any}) => {

  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <View className="w-11/12 flex justify-center items-start h-[40px]">
      <Text
        className={`${lightTheme ? "text-black" : "text-white"} font-medium `}
      >
        {title}
      </Text>
    </View>
  );
};

export default SectionHeading;
