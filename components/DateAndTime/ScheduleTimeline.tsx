import { generateTimeSlots } from "@/utils/Calendar";
import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import GlobalText from "../GlobalUI/GlobalText";

const ScheduleTimeline = ({ lightTheme }: { lightTheme: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedId, setIsExpandedId] = useState(0);
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  const [interval, setInterval] = useState(30);
  const timeSlots = generateTimeSlots(interval);

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      className={`w-full flex-1 flex h-[320px] rounded-xl overflow-hidden`}
      centerContent={true}
    >
      {timeSlots?.map((d, index) => {
        return (
          <View
            key={index}
            className={`w-full ${index === 0 ? "" : ""}  ${
              isExpanded ? "h-[80px]" : "h-[40px]"
            } border-b flex justify-center relative
             px-4
                 items-start ${
                   lightTheme
                     ? "border-light-border bg-light-surface"
                     : "border-dark-border bg-dark-surface"
                 }`}
          >
            <View className={`w-1/5 h-full border-r flex justify-center items-start  ${lightTheme ? "border-light-border" : "border-dark-border"}`}>
              <GlobalText fontStyle={"text-sm"} value={d} lightTheme={lightTheme} />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ScheduleTimeline;
