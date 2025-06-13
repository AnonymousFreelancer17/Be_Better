import { RootState } from "@/store/store";
import { BlurView } from "expo-blur";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const GetInfoModal = ({
  modalType,
  lightTheme,
}: {
  modalType: string;
  lightTheme: boolean;
}) => {
  return (
    <BlurView
      intensity={80}
      tint={lightTheme ? `dark` : "light"}
      className={`w-screen h-screen absolute top-0 left-0 flex z-50 bg-black/50 justify-center items-center`}
    >
      <View
        className={`${
          lightTheme ? "bg-light-surface" : "bg-dark-surface"
        } w-10/12 h-[300px] rounded-md flex justify-center items-center p-2
             
             ${modalType === "success" && "border-2 border-green-500"}
             ${modalType === "loading" && "border-2 border-gray-500"}
             ${modalType === "error" && "border-2 border-red-500"}
             ${modalType === "" && ""}
             `}
      >
        {modalType === "createTaskOnTimeline" && (
          <View>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, et
              ratione recusandae aliquam aut obcaecati odio voluptate. Repellat,
              voluptatibus beatae. Cumque, placeat illo magni, non similique,
              nobis perspiciatis iusto iste ipsam fugiat numquam? Voluptate.
            </Text>
          </View>
        )}
      </View>
    </BlurView>
  );
};

export default GetInfoModal;
