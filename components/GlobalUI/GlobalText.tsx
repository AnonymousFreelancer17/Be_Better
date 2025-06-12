import React from "react";
import { Text } from "react-native";

const GlobalText = ({
  fontStyle,
  lightTheme,
  value
}: {
  fontStyle: string;
  lightTheme: boolean;
  value: string;
}) => {
  return (
    <Text
      className={`${fontStyle} ${
        lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
      }`}
    >
      {value}
    </Text>
  );
};

export default GlobalText;
