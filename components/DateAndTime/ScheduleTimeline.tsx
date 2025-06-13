import { generateTimeSlots } from "@/utils/Calendar";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalText from "../GlobalUI/GlobalText";
import GetInfoModal from "../Modals/GetInfoModal";

const ScheduleTimeline = ({ lightTheme }: { lightTheme: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedId, setIsExpandedId] = useState(-1);
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [interval, setInterval] = useState(30);
  const timeSlots = generateTimeSlots(interval);

  return (
   
      <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
      className={`w-full flex-1 flex h-[320px] rounded-xl overflow-hidden`}
      centerContent={true}
    >
      {timeSlots?.map((d, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setIsExpanded(!isExpanded);
              setIsExpandedId((prev) => (prev === index ? -1 : index));
            }}
            className={`w-11/12 ${index === 0 ? "" : ""}  ${
              isExpanded && isExpandedId === index ? "h-[80px]" : "h-[40px]"
            } border-b flex flex-row justify-center relative
             px-4
                 items-start ${
                   lightTheme
                     ? "border-light-border bg-light-surface"
                     : "border-dark-border bg-dark-surface"
                 }`}
          >
            <View
              className={`w-1/5 h-full border-r flex justify-center items-start  ${
                lightTheme ? "border-light-border" : "border-dark-border"
              }`}
            >
              <GlobalText
                fontStyle={"text-sm"}
                value={d}
                lightTheme={lightTheme}
              />
            </View>

            <TouchableOpacity className="w-4/5 h-full bg-red-400 flex justify-center items-center"
             onPress={()=>{
              setModalVisibility(!modalVisibility);
             }}
            >
              <GlobalText
                lightTheme={lightTheme}
                fontStyle="w-full h-auto bg-red-500 flex justify-center items-center"
                value="welcome"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}
    </ScrollView>

    
  );
};

export default ScheduleTimeline;
