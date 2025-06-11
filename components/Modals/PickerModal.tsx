import { Pressable, ScrollView, Text, View } from "react-native";

import React from "react";
import { BlurView } from "expo-blur";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function PickerModal({
  data,
  onSelect,
  width,
  height,
}: {
  data: Array<any>;
  onSelect: any;
  width: string;
  height: string;
}): React.ReactElement {
  const { lightTheme } = useSelector((state: RootState) => 
    state.setting
  );

  return (
    <BlurView
      intensity={80}
       tint={lightTheme ? `light` : "dark"}
      className={`w-screen h-screen absolute top-0 left-0 flex z-[1000] justify-start items-center`}
    >
      <ScrollView
        className={`w-[90vw] h-[40vh] rounded-md flex p-2
           z-[1001] mt-[100px] border ${lightTheme ? "bg-light-surface" : "bg-dark-surface" }`}
      > 
             
          {/* <Text>
               {JSON.stringify(data)}
          </Text> */}

        {[...data].map((item, index) => (
          <Pressable
            className={`${height} ${width}`}
            key={index}
            onPress={() => onSelect(item)}
            style={{ padding: 10 }}
          >
            <Text className={lightTheme ? "text-light-primaryText" : "text-dark-primaryText"}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </BlurView>
  );
}
