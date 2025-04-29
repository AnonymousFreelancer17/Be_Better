import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import { RootState } from "../../store/store";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageUploader from "../components/ImageUploader";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated, token } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme } = useSelector((state: RootState) => state.setting);

  return (
    <SafeAreaView
      className={`flex-1 w-screen flex justify-start items-center ${
        !lightTheme ? "bg-primary" : "bg-[#eeeeee]"
      }`}
    >
      <ScrollView className="w-full flex-1">
        <Header />
        <Text className="text-red-400">Hello</Text>
        <ImageUploader />
      </ScrollView>
    </SafeAreaView>
  );
}
