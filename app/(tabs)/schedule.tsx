import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

//  importing components here ---------------------------------------------------------------------------------------------------
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import DaySlider from "@/components/DateAndTime/DaySlider";
import Section from "@/components/Section/Section";

const Schedule = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <SafeAreaView
      className={`w-screen flex flex-1 justify-start items-center ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      <Header route={"Schedule"} />
      <ScrollView horizontal={false} className="w-11/12 flex flex-1 h-auto">
        <DaySlider />

        <Section
          sectionHeight={"flex-1"}
          sectionWidth={"w-full"}
          sectionHeading="Task on timeline"
          sectionFooterVisibility={true}
          sectionFooterButtonVisibility={true}
          sectionType="schedule-timeline"
          sectionHeaderVisibility={true}
          sectionFooterAction={() => {}}
          sectionFooterButtonText="View More"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
