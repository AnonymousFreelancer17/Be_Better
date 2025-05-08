import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen name="register" />
      <Tabs.Screen name="login" />
    </Tabs>
  );
};

export default _layout;
