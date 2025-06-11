import React from "react";
import { Text, View } from "react-native";

const CommunityChallangesCard = ({
  index,
  lightTheme,
}: {
  index: number;
  lightTheme: boolean;
}) => {
  return (
    <View
      key={index}
      className={`w-[300px] h-[250px] me-2 flex justify-center items-center ${
        lightTheme ? "bg-light-surface" : "bg-dark-surface"
      }`}
    >
      <Text
        className={
          lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
        }
      >
        {index}
      </Text>
    </View>
  );
};

export default CommunityChallangesCard;
