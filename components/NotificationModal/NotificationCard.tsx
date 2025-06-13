import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import GlobalText from "../GlobalUI/GlobalText";

type SenderType = "system" | "bot" | "user" | "community";

interface Sender {
  id: string;
  name: string;
  type: SenderType;
  profilePic?: string;
}

interface NotificationCardProps {
  index: number;
  id: string;
  lightTheme: boolean;
  title: string;
  message: string;
  type: string;
  category: string;
  timeStamp: string;
  relatedTo: string;
  isRead: boolean;
  sender: Sender;
}

const NotificationCard = ({
  index,
  id,
  lightTheme,
  title,
  message,
  type,
  category,
  timeStamp,
  relatedTo,
  isRead,
  sender,
}: NotificationCardProps) => {
  return (
    <TouchableOpacity
      key={index}
      className={`w-11/12 min-h-[80px] px-3 py-2 my-1 rounded-xl flex-row items-center justify-between border-s-4
       ${
         category === "fitness"
           ? "border-fitness-accent"
           : category === "nutrition"
           ? "border-nutrition-accent"
           : category === "schedule"
           ? "border-schedule-accent"
           : ""
       } 
      ${lightTheme ? "bg-light-background" : "bg-dark-background"}
       border-t border-b`}
    >
      {/* Sender Icon or Image */}
      <View
        className={`w-[50px] h-[50px] rounded-full overflow-hidden justify-center items-center border mr-3
        ${
          lightTheme
            ? "bg-light-surface border-light-border"
            : "bg-dark-surface border-dark-border"
        }`}
      >
        {sender.profilePic ? (
          <Image
            source={{ uri: sender.profilePic }}
            className="w-full h-full"
            resizeMode="cover"
          />
        ) : (
          <FontAwesome
            name={
              sender.type === "system"
                ? "rocket"
                : sender.type === "user"
                ? "user"
                : sender.type === "bot"
                ? "android"
                : "group"
            }
            color={lightTheme ? "gray" : "white"}
            size={20}
          />
        )}
      </View>

      {/* Text Content */}
      <View className="flex-1 flex-col justify-center">
        <View className="w-full flex flex-row justify-between items-center">
          <GlobalText
            lightTheme={lightTheme}
            fontStyle={`text-sm font-semibold ${
              category === "fitness"
                ? "text-fitness-accent"
                : category === "nutrition"
                ? "text-nutrition-accent"
                : category === "schedule"
                ? "text-schedule-accent"
                : ""
            } `}
            value={sender.name}
          />
        </View>
        <GlobalText
          lightTheme={lightTheme}
          fontStyle="text-base"
          value={title}
        />
        <GlobalText
          lightTheme={lightTheme}
          fontStyle="text-xs text-gray-500"
          value={message}
        />
      </View>

      {/* Timestamp or Category */}
      <View className="ml-2">
        <GlobalText
          lightTheme={lightTheme}
          fontStyle="text-[10px] text-gray-400"
          value={new Date(timeStamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
