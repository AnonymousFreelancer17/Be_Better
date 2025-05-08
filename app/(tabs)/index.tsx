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
        <Header route={"Home"} />
        <View className="w-full flex-1 flex flex-col justify-center items-center">
          <View
            className={`w-11/12 h-[150px] rounded-lg flex justify-center items-center relative my-4 ${lightTheme ? "bg-light-surface" : "bg-dark-surface"}`}
            ref={motivation}
          >
            <Text
              className={`${
                lightTheme ? "text-black" : "text-white"
              } relative`}
            >
              Hi {user?.name},
               Ready to crush your goals today?
            </Text>
            <Pressable
              className="absolute top-0 right-0 z-10 m-2 p-2"
              onPress={() => {
                motivation.current;
              }}
            >
              {!lightTheme ? (
                <Image
                  source={require("../../assets/images/close-light.png")}
                />
              ) : (
                <Image source={require("../../assets/images/close_dark.png")} />
              )}
            </Pressable>
          </View>

          <View className="w-11/12 h-[300px] flex flex-row justify-center items-center flex-wrap">
            {[[1,2,3],[1,2],[1,2],[1,2,3]]?.map((d,index)=>{
              return <View key={index} className={`w-[43vw] h-[48%] ${lightTheme ? "bg-light-surface" : "bg-dark-surface"} m-1 flex justify-center items-center rounded-md`}>
                 <Text className={`${lightTheme ? "text-black" : "text-white" }`}>Box {index}</Text>
              </View>
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
