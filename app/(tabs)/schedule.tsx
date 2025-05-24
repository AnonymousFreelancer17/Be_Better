import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

//  importing components here ---------------------------------------------------------------------------------------------------
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
 
const Schedule = () => {

  const { lightTheme } = useSelector((state: RootState) => state.setting);


  return (
    <SafeAreaView className={`w-screen h-screen flex justify-center items-center ${lightTheme ? "bg-light-background" : "bg-dark-background"}`}>
      <Header route={"Schedule"} />
      <ScrollView horizontal={false} className="flex flex-1 bg-red-400 h-full">
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
