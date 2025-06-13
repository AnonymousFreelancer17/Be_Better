import { toggleNotificationModalVisibility } from "@/store/slices/settingSlice";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "../Buttons/CloseButton";
import Picker from "../Picker/Picker";
import NotificationCard from "@/components/NotificationModal/NotificationCard";
import GlobalText from "../GlobalUI/GlobalText";

// Types
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
  const [pickerModalVisibility, setPickerModalVisibility] = useState(false);
  const [selectedFilterGroup, setSelectedFilterGroup] = useState<number>(-1);

  const [activeFilter, setActiveFilter] = useState("unread");
  const [pickerSelections, setPickerSelections] = useState<string[]>([
    "Unread",
    "High Priority",
    "Fitness",
    "Likes",
    "Today",
  ]);

  const filterGroups = [
    ["Unread", "Read", "All"],
    ["High Priority", "Normal", "Low"],
    ["Fitness", "Nutrition", "Schedule"],
    ["Likes", "Comments", "Mentions", "Follow"],
    ["Today", "Last 7 days", "This month", "Custom date range"],
  ];

  const handlePickerChange = (index: number, value: string) => {
    const newSelections = [...pickerSelections];
    newSelections[index] = value;
    setPickerSelections(newSelections);
  };

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
        type: "system",
      },
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
        type: "system",
      },
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
      sender: { id: "diet_bot", name: "Diet Planner AI", type: "bot" },
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
        type: "user",
      },
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
        type: "community",
      },
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
        type: "user",
      },
    },
  ];

  const applyFilters = (notifications: Notification[]) => {
    return notifications.filter((notif) => {
      const [
        readFilter,
        priorityFilter,
        categoryFilter,
        typeFilter,
        timeFilter,
      ] = pickerSelections;

      // Filter 1: Read status
      const matchesRead =
        readFilter === "All" ||
        (readFilter === "Unread" && !notif.isRead) ||
        (readFilter === "Read" && notif.isRead);

      // Filter 2: Priority - optional logic based on message content or type
      const matchesPriority =
        priorityFilter === "Normal" || // default
        (priorityFilter === "High Priority" &&
          ["alert", "reminder"].includes(notif.type)) ||
        (priorityFilter === "Low" &&
          ["update", "post_update", "dm"].includes(notif.type));

      // Filter 3: Category match
      const matchesCategory =
        categoryFilter === "All" ||
        notif.category.toLowerCase() === categoryFilter.toLowerCase();

      // Filter 4: Type (for example: "Likes", "Comments", etc.)
      const matchesType =
        typeFilter === "All" ||
        notif.type.toLowerCase().includes(typeFilter.toLowerCase());

      // Filter 5: Time (basic date comparison)
      const notifDate = new Date(notif.timestamp);
      const now = new Date();
      const matchesTime =
        timeFilter === "Today"
          ? notifDate.toDateString() === now.toDateString()
          : timeFilter === "Last 7 days"
          ? (now.getTime() - notifDate.getTime()) / (1000 * 60 * 60 * 24) <= 7
          : timeFilter === "This month"
          ? notifDate.getMonth() === now.getMonth() &&
            notifDate.getFullYear() === now.getFullYear()
          : true; // 'Custom date range' or All

      return (
        matchesRead &&
        matchesPriority &&
        matchesCategory &&
        matchesType &&
        matchesTime
      );
    });
  };

  return (
    <View className="w-screen h-[100vh] flex justify-center items-center">
      <TouchableOpacity
        className="w-screen h-full absolute top-0 z-30 bg-black/80"
        onPress={() => dispatch(toggleNotificationModalVisibility())}
      />

      <View
        className={`${
          lightTheme ? "bg-light-surface" : "bg-dark-surface"
        } w-full h-[80vh] flex flex-col justify-center items-center relative z-50`}
      >
        <CloseButton
          pressableStyle="top-0 right-0 absolute z-30 p-2"
          imageStyle=""
          action={() => dispatch(toggleNotificationModalVisibility())}
        />

        <View className="w-full h-full flex flex-col items-center">
          {/* Header */}
          <View
            className={`w-full h-[40px] justify-center items-center border-b ${
              lightTheme ? "border-light-border" : "border-dark-border"
            }`}
          >
            <GlobalText
              fontStyle="text-lg font-semibold"
              value="Notifications"
              lightTheme={lightTheme}
            />
          </View>

          <View className="w-full bg-purple-400 flex-1 flex flex-col justify-start items-center">
            {/* Filter Picker Row */}
            <ScrollView
              horizontal
              className=" py-2"
              showsHorizontalScrollIndicator={false}
            >
              {filterGroups.map((filterOptions, index) => (
                <Picker
                  key={index}
                  height="h-[30px]"
                  width=""
                  data={filterOptions}
                  pickerModalVisibility={pickerModalVisibility}
                  selectedValue={pickerSelections[index]}
                  action={() => {
                    const isSameGroup = selectedFilterGroup === index;
                    setPickerModalVisibility(
                      !pickerModalVisibility || !isSameGroup
                    );
                    setSelectedFilterGroup(isSameGroup ? -1 : index);
                  }}
                  onValueChange={(value: string) => {
                    handlePickerChange(index, value);
                    setPickerModalVisibility(false);
                    setSelectedFilterGroup(-1);
                  }}
                />
              ))}
            </ScrollView>

            {pickerModalVisibility && selectedFilterGroup !== -1 && (
              <ScrollView
                horizontal
                className="w-full h-[60px] px-2 pb-2"
              >
                <View className="w-full h-full flex-row">
                  {filterGroups[selectedFilterGroup]?.map((item, idx) => (
                    <Pressable
                      key={idx}
                      onPress={() => {
                        handlePickerChange(selectedFilterGroup, item);
                        setActiveFilter(item.toLowerCase());
                        setPickerModalVisibility(false);
                        setSelectedFilterGroup(-1);
                      }}
                      className="border rounded-md px-4 py-2 me-2"
                    >
                      <GlobalText
                        fontStyle="text-sm"
                        lightTheme={lightTheme}
                        value={item}
                      />
                    </Pressable>
                  ))}
                </View>
              </ScrollView>
            )}

            {/* Notifications */}
            <ScrollView horizontal={false} showsHorizontalScrollIndicator className="flex-1 ">  
              {mockData?.map((d, index) => (
                <NotificationCard
                  key={d.id}
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
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationModal;
