import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
//  importing components
import SectionHeader from "./SectionHeader";
import SectionFooter from "./SectionFooter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
      className={`${sectionHeight} ${sectionWidth} flex flex-col justify-center items-center`}
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
                <View
                  key={index}
                  className={`w-[45vw] h-[48%] ${
                    lightTheme ? "bg-light-surface" : "bg-dark-surface"
                  } ${
                    index === 0 || index === 2 ? "mr-1 mb-1" : ""
                  } flex justify-center items-center rounded-md`}
                >
                  <Text
                    className={`${lightTheme ? "text-black" : "text-white"}`}
                  >
                    Box {index}
                  </Text>
                </View>
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
                  <View
                    key={index}
                    className={`w-full ${
                      taskExpanded && d.id === taskExpandedId
                        ? "h-[120px]"
                        : "h-[60px]"
                    } flex flex-row justify-start items-center
                        ${
                          index ===
                          (viewAllEvents ? upcomingTasksData.length - 1 : 3)
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
                      className={`w-[20%] h-full flex flex-col justify-center items-center border-r ${
                        lightTheme
                          ? " border-light-border"
                          : " border-dark-border"
                      }`}
                    >
                      <View className="flex flex-row justify-center items-center">
                        {d.eventType === "fitness" && (
                          <FontAwesome
                            name="heartbeat"
                            color={"#fb923c"}
                            className=" px-2 me-2"
                            size={16}
                          />
                        )}
                        {d.eventType === "meals" && (
                          <FontAwesome
                            name="cutlery"
                            color={"#fb923c"}
                            className=" px-2 me-2"
                            size={16}
                          />
                        )}
                        {d.eventType === "schedule" && (
                          <FontAwesome
                            name="clock-o"
                            color={"#fb923c"}
                            className=" px-2 me-2"
                            size={16}
                          />
                        )}
                        <Text
                          className={`${
                            lightTheme
                              ? "text-light-primaryText"
                              : "text-dark-primaryText"
                          }`}
                        >
                          {d.time.slice(5, 7)}
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
                        onPress={() => {
                          setTaskExpanded(!taskExpanded);
                          setTaskExpandedId(d.id);
                        }}
                        className="flex-1 flex flex-col justify-start items-center px-1"
                      >
                        <Text
                          className={`w-full font-medium ${
                            lightTheme
                              ? "text-light-primaryText"
                              : "text-dark-primaryText"
                          }`}
                        >
                          {d.title}
                        </Text>
                        {taskExpanded && taskExpandedId === d.id && (
                          <Text
                            className={`font-light text-xs ${
                              lightTheme
                                ? "text-light-primaryText"
                                : "text-dark-primaryText"
                            }`}
                          >
                            {d.description}
                          </Text>
                        )}
                      </Pressable>

                      <View className="w-[40%] h-full flex flex-row justify-evenly items-center">
                        <Pressable onPress={() => {}}>
                          {d.completionStatus ? (
                            <FontAwesome
                              name="check"
                              color={"#4ade80"}
                              size={14}
                            />
                          ) : (
                            <FontAwesome
                              name="times"
                              color={"#ef4444"}
                              size={14}
                            />
                          )}
                        </Pressable>
                        <Pressable onPress={() => {}}>
                          <FontAwesome
                            name="times"
                            color={"#ef4444"}
                            size={14}
                          />
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
              })}
          </View>
        )}

        {sectionType === "order-products" && (
          <ScrollView className={` w-11/12 m-0 p-0`} horizontal={true}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, index) => {
              return (
                <View
                  key={index}
                  className={`w-[150px] h-[250px] flex flex-col justify-center items-center ${
                    lightTheme ? "bg-light-surface" : "bg-dark-surface"
                  } me-1 rounded-lg`}
                >
                  <View>
                    <Text
                      className={`${
                        lightTheme
                          ? "text-light-primaryText"
                          : "text-dark-primaryText"
                      }`}
                    >
                      {index}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
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
