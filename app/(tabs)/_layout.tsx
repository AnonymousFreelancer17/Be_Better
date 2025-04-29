import React from "react";
import { View } from "react-native";
import { Redirect, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const _layout = () => {

  const { isAuthenticated } = useSelector((state:RootState) => state.auth);
  if (!isAuthenticated) {
    return <Redirect href="/auth/Login" />;
  }


  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        tabBarStyle:{
            backgroundColor : "#000000",
            borderColor : "#4a4a4a"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fitness"
        options={{
          title: "Fitness",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heartbeat" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cutlery" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="clock-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
