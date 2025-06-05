import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState, useEffect } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PickerModal from "../Modals/PickerModal";

const Picker = ({
  height,
  width,
  onChange,
  data,
}: {
  height: string;
  width: string;
  onChange: (val: string) => void;
  data: string[]; // assuming array of strings
}) => {
  const [pickerModalVisibility, setPickerModalVisibility] = useState(false);
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [selectedValue, setSelectedValue] = useState([...data][0]);

  return (
    <>
      <Pressable
        onPress={() => setPickerModalVisibility(true)}
        className={`px-4 me-2 ${height} flex flex-row justify-between items-center rounded-full border ${
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

      {pickerModalVisibility && (
        <PickerModal
          data={data}
          onSelect={(val: string) => {
            onChange(val); // update parent
            setPickerModalVisibility(false);
          }}
          width={`w-11/12`}
          height={`h-[90vh]`}
        />
      )}
    </>
  );
};

export default Picker;
