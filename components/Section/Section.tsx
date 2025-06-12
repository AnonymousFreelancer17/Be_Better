import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
//  importing components
import SectionHeader from "./SectionHeader";
import SectionFooter from "./SectionFooter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProgressCard from "./Cards/ProgressCard";
import ScheduleCard from "./Cards/ScheduleCard";
import ProductCard from "./Cards/ProductCard";
import CommunityChallangesCard from "./Cards/CommunityChallangesCard";
import ScheduleTimeline from "../DateAndTime/ScheduleTimeline";

const Section = ({
  sectionHeight,
  sectionWidth,
  sectionHeading,
  sectionType,
  sectionHeaderVisibility,
  sectionFooterVisibility,
  sectionFooterButtonVisibility,
  sectionFooterButtonText,
  sectionFooterAction,
}: {
  sectionHeight: string;
  sectionWidth: string;
  sectionHeading: string;
  sectionType: string;
  sectionHeaderVisibility: boolean;
  sectionFooterVisibility: boolean;
  sectionFooterButtonVisibility: boolean;
  sectionFooterButtonText: string;
  sectionFooterAction: any;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  const upcomingTasksData = [
    {
      id: "1",
      title: "Morning HIIT Workout",
      description:
        "Complete a 30-minute HIIT session focusing on core and cardio.",
      time: "2025-05-23T06:30:00",
      location: "Home Gym",
      eventType: "fitness",
      priority: "high",
      completionStatus: false,
    },
    {
      id: "2",
      title: "Team Standup Meeting",
      description: "Daily sync with the team to discuss goals and blockers.",
      time: "2025-05-23T09:00:00",
      location: "Zoom",
      eventType: "schedule",
      priority: "medium",
      completionStatus: false,
    },
    {
      id: "3",
      title: "Healthy Breakfast",
      description:
        "Prepare and eat a protein-rich breakfast with oats and fruits.",
      time: "2025-05-23T08:00:00",
      location: "Home Kitchen",
      eventType: "meals",
      priority: "high",
      completionStatus: false,
    },
    {
      id: "4",
      title: "Upper Body Strength Training",
      description: "Push, pull, and shoulder exercises for strength building.",
      time: "2025-05-23T18:00:00",
      location: "Local Gym",
      eventType: "fitness",
      priority: "medium",
      completionStatus: false,
    },
    {
      id: "5",
      title: "Lunch with Colleagues",
      description:
        "Team lunch at the new restaurant to discuss project updates.",
      time: "2025-05-23T13:00:00",
      location: "Urban Café",
      eventType: "meals",
      priority: "low",
      completionStatus: false,
    },
    {
      id: "6",
      title: "Client Presentation",
      description: "Present the final version of the proposal to the client.",
      time: "2025-05-23T15:00:00",
      location: "Client's Office",
      eventType: "schedule",
      priority: "high",
      completionStatus: false,
    },
    {
      id: "7",
      title: "Evening Walk",
      description: "Relaxing 20-minute walk to unwind and close activity ring.",
      time: "2025-05-23T19:00:00",
      location: "Neighborhood Park",
      eventType: "fitness",
      priority: "low",
      completionStatus: false,
    },
    {
      id: "8",
      title: "Dinner Prep",
      description: "Prepare grilled tofu with mixed veggies and brown rice.",
      time: "2025-05-23T20:00:00",
      location: "Home Kitchen",
      eventType: "meals",
      priority: "medium",
      completionStatus: false,
    },
  ];

  const [taskExpanded, setTaskExpanded] = useState(false);
  const [taskExpandedId, setTaskExpandedId] = useState("");
  const [viewAllEvents, setViewAllEvents] = useState(false);

  return (
    <View
      className={`${sectionHeight} ${sectionWidth} flex flex-col justify-center items-center `}
    >
      {/*  header */}
      {sectionHeaderVisibility && <SectionHeader title={sectionHeading} />}

      {/*  body */}
      <View className="w-full flex-1 flex justify-center items-center">
        {sectionType === "progress-board" && (
          <View className="w-11/12 h-[200px] flex flex-row justify-center items-center flex-wrap">
            {[
              [1, 2, 3],
              [1, 2],
              [1, 2],
              [1, 2, 3],
            ]?.map((d, index) => {
              return (
                <ProgressCard
                  key={index}
                  lightTheme={lightTheme}
                  index={index}
                />
              );
            })}
          </View>
        )}

        {sectionType === "upcoming-schedules" && (
          <View className="w-11/12 flex-1 flex justify-center items-center">
            {upcomingTasksData
              ?.slice(0, viewAllEvents ? upcomingTasksData.length : 4)
              .map((d, index) => {
                return (
                  <ScheduleCard
                    key={index}
                    index={index}
                    id={d.id}
                    title={d.title}
                    description={d.description}
                    lightTheme={lightTheme}
                    taskExpanded={taskExpanded}
                    taskExpandedId={taskExpandedId}
                    viewAllEvents={viewAllEvents}
                    data={upcomingTasksData}
                    eventType={d.eventType}
                    time={d.time}
                    action={() => {
                      setTaskExpandedId((prev) => (prev === d.id ? "" : d.id));
                      setTaskExpanded(!taskExpanded);
                    }}
                    status={d.completionStatus}
                  />
                );
              })}
          </View>
        )}

        {sectionType === "order-products" && (
          <ScrollView className={` w-11/12 m-0 p-0`} horizontal={true}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, index) => {
              return (
                <ProductCard
                  key={index}
                  index={index}
                  lightTheme={lightTheme}
                />
              );
            })}
          </ScrollView>
        )}

        {sectionType === "community-challanges" && (
          <ScrollView horizontal={true} className="flex-1 ms-4 flex">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d, index) => {
              return (
                <CommunityChallangesCard
                  key={index}
                  index={index}
                  lightTheme={lightTheme}
                />
              );
            })}
          </ScrollView>
        )}

        {sectionType === "schedule-timeline" && (
          <ScheduleTimeline lightTheme={lightTheme} />
        )}
      </View>

      {/*  footer */}
      {sectionFooterVisibility && (
        <SectionFooter
          action={
            sectionFooterAction === "()=>{setViewAllEvents(!viewAllEvents)}"
              ? () => {
                  setViewAllEvents(!viewAllEvents);
                }
              : sectionFooterAction
          }
          buttonVisibility={sectionFooterButtonVisibility}
          buttonText={sectionFooterButtonText}
        />
      )}
    </View>
  );
};

export default Section;
