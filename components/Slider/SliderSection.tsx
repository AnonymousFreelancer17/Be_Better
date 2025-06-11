import { RootState } from "@/store/store";
import React from "react";
import { Animated, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Fitness from "./AnimationView/Fitness";

const SliderElement = ({
  index,
  screenWidth,
  line1,
  line2,
  description,
  animation,
}: {
  index: number;
  screenWidth: any;
  line1: string;
  line2: string;
  description: string;
  animation: string;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <View
      key={index}
      style={{ width: screenWidth }}
      className="h-full relative flex justify-between items-center"
    >
      <View className="flex-1 w-full  flex justify-center items-center relative">
        {animation === "fitness" && (
          <Fitness lightTheme={lightTheme} />
        )}

         {animation === "nutrition" && (
          <Fitness lightTheme={lightTheme} />
        )}

         {animation === "schedule" && (
          <Fitness lightTheme={lightTheme} />
        )}
      </View>
      <View className="w-full flex justify-center items-center">
        <View className="w-full flex justify-center items-center mr-10">
          <Text
            className={`text-[28px] ${
              lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
            }  font-bold`}
          >
            {line1}
          </Text>
          <Text
            className={`text-[28px] ${
              lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
            }  font-bold`}
          >
            {line2}
          </Text>
        </View>
        <View className="w-full flex justify-center items-center  mr-10">
          <Text
            className={` w-full text-center ${
              lightTheme
                ? "text-light-secondaryText"
                : "text-dark-secondaryText"
            }`}
          >
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SliderElement;
