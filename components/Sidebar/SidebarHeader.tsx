import React from "react";
import { ImageBackground, Text, View } from "react-native";
import GlobalText from "../GlobalUI/GlobalText";

const SidebarHeader = ({ lightTheme }: { lightTheme: boolean }) => {
  return (
    <View className="w-full">
      <GlobalText lightTheme={lightTheme}  fontStyle={""} value={"Sidebar"}></GlobalText>
    </View>
  );
};

export default SidebarHeader;
