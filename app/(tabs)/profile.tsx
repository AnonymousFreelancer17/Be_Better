import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ImageUploader from "../components/ImageUploader";

const Profile = () => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <View
      className={`${!lightTheme ? "bg-primary" : "bg-[#eeeeee]"} flex-1 flex flex-col justify-start items-center`}
    >
      <Header />
      <View className="w-full f">
        <ImageUploader />
      </View>
    </View>
  );
};

export default Profile;
