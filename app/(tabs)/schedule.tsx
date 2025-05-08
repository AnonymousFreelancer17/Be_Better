import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
 
const Schedule = () => {
  return (
    <SafeAreaView className="w-screen h-screen flex justify-center items-center">
      <Header route={"Schedule"} />
      <ScrollView className="flex flex-1 bg-red-400">
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
