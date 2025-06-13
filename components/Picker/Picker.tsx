import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState, useEffect } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PickerModal from "../Modals/PickerModal";
import GlobalText from "../GlobalUI/GlobalText";

const Picker = ({
  height,
  width,
  data,
  selectedValue,
  pickerModalVisibility,
  action,
  onValueChange,
}: {
  height: string;
  width: string;
  data: string[];
  selectedValue: string;
  pickerModalVisibility: boolean;
  action: any;
  onValueChange: any;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
 
      <Pressable
        onPress={action}
        className={`px-4 me-2 ${height} flex flex-row justify-between items-center rounded-full relative border ${
          lightTheme ? "border-light-border" : "border-dark-border"
        }`}
      >
        <Text
          className={`${
            lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
          }`}
        >
          {selectedValue}
        </Text>
        <FontAwesome
          name="sort-down"
          className="mx-2 mb-2"
          size={16}
          color={lightTheme ? "gray" : "white"}
        />
      </Pressable>
 
  );
};

export default Picker;
