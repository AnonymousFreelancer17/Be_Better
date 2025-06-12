import GlobalText from "@/components/GlobalUI/GlobalText";
import { formatDateTime } from "@/utils/Calendar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface ScheduleCardProps {
  lightTheme: boolean;
  index: number;
  taskExpanded: boolean;
  taskExpandedId: string | null;
  viewAllEvents: boolean;
  data: Array<any>;
  eventType: string;
  id: string;
  title: string;
  time: string;
  action: () => void;
  description: string;
  status: boolean;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  lightTheme,
  index,
  taskExpanded,
  taskExpandedId,
  viewAllEvents,
  data,
  eventType,
  id,
  title,
  time,
  action,
  description,
  status,
}) => {
  const isExpanded = taskExpandedId === id;
  const isLast =
    index === (viewAllEvents ? data.length - 1 : Math.min(data.length - 1, 3));
  const isFirst = index === 0;

  const formattedDateAndTime = JSON.parse(formatDateTime(time));

  return (
    <View
      key={index}
      className={`w-full ${isExpanded ? "h-[120px]" : "h-[60px]"} 
        flex flex-row justify-start items-center overflow-hidden
        ${isLast ? "border-0 rounded-br-lg rounded-bl-lg" : "border-b"}
        ${isFirst ? "rounded-tr-lg rounded-tl-lg" : ""}
        ${
          lightTheme
            ? "bg-light-surface border-light-border"
            : "bg-dark-surface border-dark-border"
        }`}
    >
      {/* Left section (time + icon) */}
      <View
        className={`w-[20%] h-full flex flex-col 
        ${isExpanded ? "justify-start py-4" : "justify-center"}
         items-center
        ${
          eventType === "fitness"
            ? "border-s-4 border-fitness-accent"
            : eventType === "meals"
            ? "border-s-4 border-nutrition-accent"
            : "border-s-4 border-schedule-accent"
        }`}
      >
        <View className="flex-1 flex flex-col justify-center items-center">
          <View
            className={`flex flex-row justify-center items-center`}
          >
            <FontAwesome
              name={
                eventType === "fitness"
                  ? "heartbeat"
                  : eventType === "meals"
                  ? "cutlery"
                  : "clock-o"
              }
              color={
                eventType === "fitness"
                  ? "#34D399"
                  : eventType === "meals"
                  ? "#FCD34D"
                  : "#4F46E5"
              }
              size={16}
              style={{ paddingHorizontal: 8 }}
            />
            <GlobalText
              fontStyle={"text-md font-medium"}
              lightTheme={lightTheme}
              value={formattedDateAndTime.day}
            />
          </View>

          <View
            className={`min-w-full px-3 ${
              isExpanded ? "flex-1" : ""
            } flex justify-start items-end`}
          >
            <GlobalText
              fontStyle={"text-xs"}
              lightTheme={lightTheme}
              value={formattedDateAndTime.month}
            />
          </View>
        </View>

        {isExpanded && (
          <View className="">
            <GlobalText
              fontStyle={"text-xs"}
              lightTheme={lightTheme}
              value={formattedDateAndTime.time}
            />
          </View>
        )}
      </View>

      {/* Right section (content) */}
      <View
        className={`
          flex-1 h-full flex flex-row 
        ${isExpanded ? "justify-start py-4" : "justify-center"}
         items-center border-s 
        ${lightTheme ? "border-light-border" : "border-dark-border"}`}
      >
        <Pressable
          onPress={action}
          className={`flex-1 h-full flex flex-col 
             ${isExpanded ? "justify-start" : "justify-center"} 
            items-center px-1  `}
        >
          <Text
            className={`w-full font-medium ${
              lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
            }`}
          >
            {title}
          </Text>
          {isExpanded && (
            <Text
              className={`font-light text-xs ${
                lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
              }`}
            >
              {description}
            </Text>
          )}
        </Pressable>

        {/* Actions */}
        <View className="w-[40%] h-full flex flex-row justify-evenly items-center">
          <Pressable onPress={() => {}}>
            <FontAwesome
              name={status ? "check" : "times"}
              color={status ? "#4ade80" : "#ef4444"}
              size={14}
            />
          </Pressable>
          <Pressable onPress={() => {}}>
            <FontAwesome name="times" color="#ef4444" size={14} />
          </Pressable>
          <Pressable onPress={() => {}}>
            <FontAwesome
              name="ellipsis-v"
              color={lightTheme ? "#1F2937" : "#F3F4F6"}
              size={14}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ScheduleCard;
