import { RootState } from "@/store/store";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import {
  getMonthNames,
  getAllDaysOfMonth,
  getWeekdayName,
  getFormattedTime,
} from "../../utils/Calendar";

const DaySlider = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDayName = getWeekdayName(today);
  const currentMonthName = getMonthNames[currentMonth];
  const currentTime = getFormattedTime(today);

  const monthData = getAllDaysOfMonth(currentMonth, currentYear);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <>
      <View className="mb-2 flex flex-row justify-between items-center">
        <Text
          className={`font-bold text-lg pt-4 ${
            lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
          }`}
        >
          Today: {currentDayName}, {currentMonthName} {currentDate}
        </Text>

        <Text
          className={`font-bold text-lg pt-4 ${
            lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
          }`}
        >
          {currentTime}
        </Text>
      </View>

      <ScrollView
        horizontal
        className={`mt-3 h-[100px] flex flex-row w-full border-b pb-2 ${
          lightTheme ? "border-light-border" : "border-dark-border"
        }`}
      >
        {monthData.map((d, index) => {
          const isToday = d.dayNumber === currentDate;

          return (
            <TouchableOpacity
              key={index}
              className={`w-[60px] h-full rounded-full flex flex-col justify-center items-center me-2 ${
                lightTheme
                  ? "bg-light-surface"
                  : isToday
                  ? "bg-orange-500" 
                  : selectedDate === d.dayNumber ? "bg-dark-primary"
                  : "bg-dark-surface"
              }`}
              onPress={() => setSelectedDate(d.dayNumber)}
            >
              <Text
                className={`text-sm font-semibold ${
                  lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
                }`}
              >
                {d.weekday}
              </Text>
              <Text
                className={`text-xl font-bold ${
                  lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
                }`}
              >
                {d.dayNumber}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default DaySlider;
