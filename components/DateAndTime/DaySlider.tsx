import { RootState } from "@/store/store";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useFocusEffect, useNavigationState } from "@react-navigation/native";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { useSelector } from "react-redux";

import {
  getMonthNames,
  getAllDaysOfMonth,
  getWeekdayName,
  getFormattedTime
} from "../../utils/Calendar";
import Time from "./Time";
import GlobalText from "../GlobalUI/GlobalText";

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
  const scrollRef = useRef<ScrollView>(null);
  const didUserSelectDateRef = useRef(false);
  const { width: screenWidth } = useWindowDimensions();

  const ITEM_WIDTH = 50 + 8;

  const scrollToToday = () => {
    const todayIndex = monthData.findIndex((d) => d.dayNumber === currentDate);
    const scrollX = todayIndex * ITEM_WIDTH - screenWidth / 2 + ITEM_WIDTH / 2;
    scrollRef.current?.scrollTo({
      x: scrollX > 0 ? scrollX : 0,
      animated: true,
    });
  };

  
    useFocusEffect(
    useCallback(() => {
      if (!didUserSelectDateRef.current) {
        scrollToToday();
      }

      return () => {
        if (!didUserSelectDateRef.current) {
          scrollRef.current?.scrollTo({ x: 0, animated: true });
        }
        didUserSelectDateRef.current = false;
      };
    }, [monthData])
  );

  return (
    <View className="w-full flex justify-center items-center">
      
      {/*  Header */}
      <View className="w-11/12 h-[40px] flex flex-row justify-between items-center">
        <GlobalText fontStyle={"font-bold text-md"} lightTheme={lightTheme} value={`Today: ${currentDayName}, ${currentMonthName} ${currentDate}`} />

        <Time lightTheme={lightTheme} fontStyle=" font-regular text-sm" />
      </View>

      <ScrollView
        horizontal
        ref={scrollRef}
        className={`w-11/12 mt-3 h-[100px] flex flex-row border-b pb-2 ${
          lightTheme ? "border-light-border" : "border-dark-border"
        }`}
      >
        {monthData.map((d, index) => {
          const isToday = d.dayNumber === currentDate;

          return (
            <TouchableOpacity
              key={index}
              className={`w-[50px] h-full rounded-full flex flex-col justify-center items-center me-2 ${
                lightTheme
                  ? "bg-light-surface"
                  : isToday
                  ? "bg-orange-500"
                  : selectedDate === d.dayNumber
                  ? "bg-dark-primary"
                  : "bg-dark-surface"
              }`}
              onPress={() => {
                setSelectedDate(d.dayNumber);
                didUserSelectDateRef.current = true // prevent scroll reset
              }}
            >
              <Text
                className={`text-sm font-semibold ${
                  lightTheme
                    ? "text-light-primaryText"
                    : "text-dark-primaryText"
                }`}
              >
                {d.weekday}
              </Text>
              <Text
                className={`text-xl font-bold ${
                  lightTheme
                    ? "text-light-primaryText"
                    : "text-dark-primaryText"
                }`}
              >
                {d.dayNumber}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DaySlider;
