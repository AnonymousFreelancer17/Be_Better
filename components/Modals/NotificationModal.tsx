import { toggleNotificationModalVisibility } from "@/store/slices/settingSlice";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "../Buttons/CloseButton";
// import { Picker } from "@react-native-picker/picker";
import Picker from "../Picker/Picker";
import MessageCard from "@/app/NotificationModal/MessageCard";

const NotificationModal = ({}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("unread");

  const filters = [
    ["Unread", "Read", "All"],
    ["HIgh Priority", "Normal", "Low"],
    ["Likes", "Comments", "Mentions", "Follow"],
    ["Today", "Last 7 days", "This month", "Custom date range"],
  ];

  return (
    <View className={`w-screen h-[100vh] flex justify-center items-center`}>
      <TouchableOpacity
        className={`w-screen h-full flex justify-end items-end backdrop-blur-md bg-black/80 absolute top-0 z-30`}
        onPress={() => {
          dispatch(toggleNotificationModalVisibility());
        }}
      >
        <View></View>
      </TouchableOpacity>
      <View
        className={`${
          lightTheme ? "bg-light-surface" : "bg-dark-surface"
        } w-full h-[80vh] flex flex-col justify-center items-center relative z-50`}
      >
        <CloseButton
          pressableStyle={"top-0 right-0 absolute z-30 p-2"}
          imageStyle={""}
          action={() => {
            dispatch(toggleNotificationModalVisibility());
          }}
        />

        <View className="w-full h-full relative flex flex-1 flex-col justify-start items-center">
          <View
            className={`w-full h-[40px] flex justify-center items-center border-b ${
              lightTheme ? "border-light-border" : "border-dark-border"
            }`}
          >
            <Text
              className={`${lightTheme ? "text-[#000000]" : "text-[#fff]"}`}
            >
              Notification
            </Text>
          </View>

          <ScrollView
            className="flex-1 w-full relative bg-purple-400"
            horizontal={false}
            showsVerticalScrollIndicator
          >

            {/* filter view */}
            <ScrollView
              horizontal
              className="w-full fixed top-0 flex flex-row ms-2 py-2"
            >
              {filters?.map((d, index) => {
                return (
               
                  <Picker
                    key={index}
                    height="h-[30px]"
                    width="w-auto"
                    data={d}             
                  />
                );
              })}
            </ScrollView>

            {[1, 2, 3, 4, 5, 6].map((d, index) => {
              return <MessageCard key={index} index={index} lightTheme={lightTheme} />;
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default NotificationModal;
