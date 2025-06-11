import React from "react";
import { Text, TouchableOpacity } from "react-native";

const MessageCard = ({
  index,
  lightTheme,
}: {
  index: number;
  lightTheme: boolean;
}) => {
  return (
    <TouchableOpacity
      key={index}
      className={`w-full h-[60px] 
     ${index === 0 ? "border-t border-b" : ""}
      border-b
       ${lightTheme ? "border-light-border" : "border-dark-border"}
        flex justify-center items-center`}
    >
      <Text>{index}</Text>
    </TouchableOpacity>
  );
};

export default MessageCard;
