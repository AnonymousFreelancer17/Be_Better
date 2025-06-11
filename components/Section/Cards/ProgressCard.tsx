import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";

const ProgressCard = ({ lightTheme,index }: { lightTheme: boolean; index: number }  ) => {
  return (
    <>
    
        <View
        
          className={`w-[45vw] h-[48%] ${
            lightTheme ? "bg-light-surface" : "bg-dark-surface"
          } ${
            index === 0 || index === 2 ? "mr-1 mb-1" : ""
          } flex justify-center items-center rounded-md`}
        >
          <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
            Box {index}
          </Text>
        </View>
     
       
    </>
  );
};

export default ProgressCard;
