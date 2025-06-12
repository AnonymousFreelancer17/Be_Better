import { getFormattedTime } from "@/utils/Calendar";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Time = ({
  lightTheme,
  fontStyle,
}: {
  lightTheme: boolean;
  fontStyle: string;
}) => {
   const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(formatted);
    };

    updateClock(); // Call once immediately
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <View>
      <Text
        className={`${fontStyle} ${
          lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
        }`}
      >
        {currentTime}
      </Text>
    </View>
  );
};

export default Time;
