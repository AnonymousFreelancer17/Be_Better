import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import SidebarHeader from "./SidebarHeader";
import { toggleSidebarVisibility } from "@/store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Sidebar = () => {
  const dispatch = useDispatch();
  const {lightTheme} = useSelector((state: RootState) => state.setting);

  return (
    <View
      className={`w-screen min-h-screen flex flex-col justify-start items-start z-[1000000] fixed top-0 left-0 bg-transparent`}
    >
      <TouchableOpacity
        className="w-full h-full absolute top-0 left-0 bg-transparent"
        onPress={() => {
          dispatch(toggleSidebarVisibility());
        }}
      >
      </TouchableOpacity>
      
      <View className={`w-5/6 flex-1 ${lightTheme ? "bg-light-background" : "bg-dark-background"} flex justify-start items-center relative`}>
        <SidebarHeader />
      </View>

    </View>
  );
};

export default Sidebar;
