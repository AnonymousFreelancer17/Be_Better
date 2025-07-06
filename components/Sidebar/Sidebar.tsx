import React from "react";
import { View } from "react-native";
import SidebarHeader from "./SidebarHeader";
import { toggleSidebarVisibility } from "@/store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Dimensions } from "react-native";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const options = [{ routes: [{}] }, {}];
  const screenHeight = Dimensions.get("window").height;

  return (
    <View
      className={`fixed top-0 left-0 w-[75vw] z-[49] border-r ${
        lightTheme
          ? "bg-light-background border-light-border"
          : "bg-dark-background border-dark-border"
      } flex justify-start items-center`}
      style={{
        height: screenHeight-60,
        
      }}
    >
      <SidebarHeader lightTheme={lightTheme} />
    </View>
  );
};

export default Sidebar;
