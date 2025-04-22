import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="fitness"
        options={{
          title: "Fitness",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
