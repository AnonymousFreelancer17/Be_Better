import React from "react";
import { Alert, Pressable, Text } from "react-native";

const RoundedOrangeButton = ({
  action,
  buttonText,
  pressableStyle,
  textStyle,
}: {
  action: any;
  buttonText: string;
  pressableStyle: string;
  textStyle: string;
}) => {

  return (
    <Pressable
      className={pressableStyle}
      onPress={() => {
        action
      }}
    >
      <Text className={textStyle}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default RoundedOrangeButton;
