import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ImageUploader from "../../components/ImageUploader/ImageUploader";

const Explore = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <SafeAreaView
      className={`${lightTheme ? "bg-light-background" : "bg-dark-background"} w-screen h-screen flex flex-col justify-start items-center`}
    >
      <Header route={"Explore"} />
      <View className="w-full ">
        <ImageUploader />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
