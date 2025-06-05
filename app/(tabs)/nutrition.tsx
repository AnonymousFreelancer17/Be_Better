import Header from "@/components/Header";
import { RootState } from "@/store/store";
import React from "react";
import { View, Text ,ScrollView, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

const Nutrition = () => {

  const {lightTheme} = useSelector((state: RootState  )=> state.setting );

  return (
     <SafeAreaView className={`w-screen h-screen flex justify-center items-center ${lightTheme ? "bg-light-background" : "bg-dark-background"}`}>
      <Header route={"Nutrition"} />
      <ScrollView horizontal={false} className="flex flex-1 bg-red-400 h-full">
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default Nutrition;
