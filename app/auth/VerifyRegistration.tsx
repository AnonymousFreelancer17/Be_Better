import { RootState } from "@/store/store";
import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

const VerifyRegistration = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <SafeAreaView
      className={`flex-1 flex justify-center items-center ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >    
         <Text
          className={lightTheme ? `text-light-primaryText` : `text-dark-primaryText`}
         >
            Please verify your aacount by entering the OTP recieved 
         </Text>
        <TextInput placeholder="" ></TextInput>
    </SafeAreaView>
  );
};

export default VerifyRegistration;
