import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { RootState } from "../../store/store";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import closeDark from "../../assets/images/close_dark.png";
import closeLight from "../../assets/images/close-light.png";
import { useRef } from "react";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated, token,user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const motivation = useRef(null);

  return (
    <SafeAreaView
      className={`flex-1 w-screen flex justify-start items-center ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      <ScrollView className="w-full flex-1">
        <Header />
        <View className="w-full flex-1 flex flex-col justify-center items-center">
          <View
            className="w-11/12 h-[150px] rounded-lg flex justify-center items-center bg-gray-400 relative mt-4"
            ref={motivation}
          >
            <Text
              className={`${
                lightTheme ? "text-[#eeeeee]" : "text-black"
              } relative`}
            >
              Hi {user.name}, Ready to crush your goals today?
            </Text>
            <Pressable
              className="absolute top-0 right-0 z-10"
              onPress={() => {
                motivation.current;
              }}
            >
              {lightTheme ? (
                <Image
                  source={require("../../assets/images/close-light.png")}
                />
              ) : (
                <Image source={require("../../assets/images/close_dark.png")} />
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
