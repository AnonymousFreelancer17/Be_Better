import { RootState } from "@/store/store";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import GlobalText from "../GlobalUI/GlobalText";

const SectionHeading = ({ title }: { title: any }) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <View
      className={`${
        title === "Task on timeline" ? "w-full" : "w-11/12"
      } flex flex-row justify-between items-center h-[40px]`}
    >
      <GlobalText
        fontStyle="font-medium"
        lightTheme={lightTheme}
        value={title}
      />

      {title === "Task on timeline" && (
        <GlobalText
          fontStyle={""}
          lightTheme={lightTheme}
          value="Set interval"
        />
      )}
    </View>
  );
};

export default SectionHeading;
