import React, { useEffect } from "react";
import { Redirect, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "@/store/slices/AuthSlice";
import { RootState } from "@/store/store";
import axios from "axios";

const _layout = () => {
  const { isAuthenticated, user, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.post(
          `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/getUserDetails`,
          {token},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("User details:", res.data);
        // dispatch(fetchUserInfo(res.data));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [token, user, dispatch]);

  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000000",
          borderColor: "#4a4a4a",
        },
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
