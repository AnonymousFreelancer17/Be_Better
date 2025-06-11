import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

//  importing components here ---------------------------------------------------------------------------------------------------
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import DaySlider from "@/components/DateAndTime/DaySlider";

const Schedule = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <SafeAreaView
      className={`w-screen h-screen flex justify-center items-center ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      <Header route={"Schedule"} />
      <ScrollView horizontal={false} className="w-11/12 flex flex-1 h-full">
         <DaySlider />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
