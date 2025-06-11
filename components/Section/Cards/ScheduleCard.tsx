import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";

const ScheduleCard = ({
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
  status

}: {
  lightTheme: boolean;
  index: number;
  taskExpanded: boolean;
  taskExpandedId: string;
  viewAllEvents: boolean;
  data: Array<any>;
  eventType: string;
  id: string;
  title: string;
  time: string;
  action: any;
  description: string;
  status: boolean
}) => {
  return (
    <View
      key={index}
      className={`w-full ${
        taskExpanded && id === taskExpandedId ? "h-[120px]" : "h-[60px]"
      } flex flex-row justify-start items-center bg-red-400
                        ${
                          index === (viewAllEvents ? data.length - 1 : 3)
                            ? "border-0 rounded-br-lg rounded-bl-lg"
                            : "border-b"
                        } 
                        ${index === 0 ? "rounded-tr-lg rounded-tl-lg" : ""} 
                         
                        ${
                          lightTheme
                            ? "bg-light-surface border-light-border"
                            : "bg-dark-surface border-dark-border"
                        }`}
    >
      <View
        className={`w-[20%] h-full flex flex-col ${taskExpanded ? "justify-center" :"justify-center"} items-center border-r ${
          lightTheme ? " border-light-border" : " border-dark-border"
        }`}
      >
        <View className="flex flex-row justify-center items-center">
          {eventType === "fitness" && (
            <FontAwesome
              name="heartbeat"
              color={"#fb923c"}
              className=" px-2 me-2"
              size={16}
            />
          )}
          {eventType === "meals" && (
            <FontAwesome
              name="cutlery"
              color={"#fb923c"}
              className=" px-2 me-2"
              size={16}
            />
          )}
          {eventType === "schedule" && (
            <FontAwesome
              name="clock-o"
              color={"#fb923c"}
              className=" px-2 me-2"
              size={16}
            />
          )}
          <Text
            className={`${
              lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
            }`}
          >
            {time.slice(5, 7)}
          </Text>
        </View>
        <View className="w-full flex justify-center items-end px-2 ">
          <Text
            className={`font-semibold text-xs ${
              lightTheme
                ? "text-light-primaryText border-light-border"
                : "text-dark-primaryText border-dark-border"
            }`}
          >
            Feb
          </Text>
        </View>
      </View>
      <View className="flex-1 h-full flex flex-row justify-center items-center">
        <Pressable
          onPress={action}
          className="flex-1 flex flex-col justify-start items-center px-1"
        >
          <Text
            className={`w-full font-medium ${
              lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
            }`}
          >
            {title}
          </Text>
          {taskExpanded && taskExpandedId === id && (
            <Text
              className={`font-light text-xs ${
                lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
              }`}
            >
              {description}
            </Text>
          )}
        </Pressable>

        <View className="w-[40%] h-full flex flex-row justify-evenly items-center">
          <Pressable onPress={() => {}}>
            {status ? (
              <FontAwesome name="check" color={"#4ade80"} size={14} />
            ) : (
              <FontAwesome name="times" color={"#ef4444"} size={14} />
            )}
          </Pressable>
          <Pressable onPress={() => {}}>
            <FontAwesome name="times" color={"#ef4444"} size={14} />
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
