import { toggleNotificationModalVisibility } from "@/store/slices/settingSlice";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "../Buttons/CloseButton";
import Picker from "../Picker/Picker";
import NotificationCard from "@/components/NotificationModal/NotificationCard";
import GlobalText from "../GlobalUI/GlobalText";

// Define strict SenderType and related types
type SenderType = "system" | "bot" | "user" | "community";

type Sender = {
  id: string;
  name: string;
  type: SenderType;
  profilePic?: string;
};

type Notification = {
  id: string;
  title: string;
  message: string;
  category: string;
  type: string;
  timestamp: string;
  isRead: boolean;
  relatedTo: string;
  sender: Sender;
};

const NotificationModal = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("unread");

  const mockData: Notification[] = [
    {
      id: "notif_001",
      title: "Workout Reminder",
      message: "Time for your Full Body Workout. Don’t forget to warm up!",
      category: "fitness",
      type: "reminder",
      timestamp: "2025-06-11T07:00:00Z",
      isRead: false,
      relatedTo: "Full Body Routine",
      sender: {
        id: "system_fitness",
        name: "Fitness Scheduler",
        type: "system"
      }
    },
    {
      id: "notif_002",
      title: "Hydration Alert",
      message: "You haven’t logged your water intake today. Stay hydrated!",
      category: "nutrition",
      type: "alert",
      timestamp: "2025-06-11T08:30:00Z",
      isRead: false,
      relatedTo: "Water Intake",
      sender: {
        id: "system_nutrition",
        name: "Nutrition Tracker",
        type: "system"
      }
    },
    {
      id: "notif_003",
      title: "Meal Plan Available",
      message: "Your custom vegetarian diet for the day is ready to view.",
      category: "nutrition",
      type: "update",
      timestamp: "2025-06-11T06:00:00Z",
      isRead: true,
      relatedTo: "Daily Diet Plan",
      sender: {
        id: "diet_bot",
        name: "Diet Planner AI",
        type: "bot"
      }
    },
    {
      id: "notif_009",
      title: "New Message from John",
      message: "Hey! Can we reschedule today’s sync to 5 PM?",
      category: "personal",
      type: "dm",
      timestamp: "2025-06-11T09:10:00Z",
      isRead: false,
      relatedTo: "Direct Message",
      sender: {
        id: "user_104",
        name: "John Doe",
        profilePic: "https://example.com/profiles/john.png",
        type: "user"
      }
    },
    {
      id: "notif_010",
      title: "Community Post: #WellnessTips",
      message: "5-Minute Daily Meditation Tips just posted in Wellness Group.",
      category: "community",
      type: "post_update",
      timestamp: "2025-06-11T08:00:00Z",
      isRead: false,
      relatedTo: "Wellness Group",
      sender: {
        id: "group_123",
        name: "Wellness Community",
        type: "community"
      }
    },
    {
      id: "notif_011",
      title: "Event Invite: Virtual Yoga",
      message: "You’ve been invited to ‘Evening Yoga with Priya’ at 6 PM.",
      category: "community",
      type: "event_invite",
      timestamp: "2025-06-11T07:15:00Z",
      isRead: false,
      relatedTo: "Yoga Sessions",
      sender: {
        id: "user_203",
        name: "Priya Sharma",
        profilePic: "https://example.com/profiles/priya.png",
        type: "user"
      }
    }
  ];

  

  const filters = [
    ["Unread", "Read", "All"],
    ["High Priority", "Normal", "Low"],
    ["Fitness", "Nutrition", "Schedule"],
    ["Likes", "Comments", "Mentions", "Follow"],
    ["Today", "Last 7 days", "This month", "Custom date range"]
  ];

  return (
    <View className="w-screen h-[100vh] flex justify-center items-center">
      <TouchableOpacity
        className="w-screen h-full flex justify-end items-end backdrop-blur-md bg-black/80 absolute top-0 z-30"
        onPress={() => {
          dispatch(toggleNotificationModalVisibility());
        }}
      >
        <View />
      </TouchableOpacity>

      <View
        className={`${
          lightTheme ? "bg-light-surface" : "bg-dark-surface"
        } w-full h-[80vh] flex flex-col justify-center items-center relative z-50`}
      >
        <CloseButton
          pressableStyle="top-0 right-0 absolute z-30 p-2"
          imageStyle=""
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
            <GlobalText
              fontStyle=""
              value="Notifications"
              lightTheme={lightTheme}
            />
          </View>

          <ScrollView
            className="flex-1 w-full relative"
            horizontal={false}
            showsVerticalScrollIndicator
          >
            {/* Filter View */}
            <ScrollView
              horizontal
              className="w-full fixed top-0 flex flex-row ms-2 py-2"
            >
              {filters.map((d, index) => (
                <Picker
                  key={index}
                  height="h-[30px]"
                  width="w-auto"
                  data={d}
                />
              ))}
            </ScrollView>

            {/* Notification Cards */}
            <View className="w-full flex-1 flex justify-start items-center">
              {mockData.map((d, index) => (
                <NotificationCard
                  key={index}
                  index={index}
                  lightTheme={lightTheme}
                  isRead={d.isRead}
                  id={d.id}
                  title={d.title}
                  message={d.message}
                  relatedTo={d.relatedTo}
                  category={d.category}
                  type={d.type}
                  timeStamp={d.timestamp}
                  sender={d.sender}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default NotificationModal;
