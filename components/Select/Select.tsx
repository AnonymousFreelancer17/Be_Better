import { RootState } from "@/store/store";
import { ChevronDownIcon } from "lucide-react-native";
import React from "react";
import { View, TextInput } from "react-native";
import { useSelector } from "react-redux";

const Select = ({
  endContent,
  options,
  lightTheme,
  defaultValue,
}: {
  endContent: any;
  options: Array<string>;
  lightTheme: boolean;
  defaultValue: string;
}) => {
  //   const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <View className="relative flex flex-col justify-center items-center">
      <View>
        <TextInput
        className="border-0 bg-transparent select-none relative"
        placeholder={defaultValue}
      />
      <ChevronDownIcon color={lightTheme? "gray" : "white"} size={25} />
      </View>

      <View
        className={` ${
          lightTheme ? "bg-light-background" : "bg-dark-background"
        }`}
      >
        {options?.map((d, index) => {
          return (
            <View
              key={index}
              className={`px-4 py-2 ${
                index + 1 === options.length ? "border-b" : "border-0"
              }`}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default Select;
