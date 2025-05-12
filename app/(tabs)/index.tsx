import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import { RootState } from "../../store/store";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated, token, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [showMotivation, setShowMotivation] = useState(true);

  return (
    <SafeAreaView
      className={`flex-1 w-screen flex justify-start items-center ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        className="w-full flex-1"
      >
        <Header route={"Home"} />
        <View className="w-full flex-1 flex flex-col justify-center items-center mt-1">
          {showMotivation && (
            <ImageBackground
              className={`w-11/12 h-[150px] rounded-xl flex justify-center items-center relative mb-1 overflow-hidden ${
                lightTheme ? "bg-light-surface" : "bg-dark-surface"
              }`}
              source={require("../../assets/images/sports1.jpg")}
              resizeMode="cover"
            >
              <View className="bg-black/50 w-full flex-1 flex justify-center items-center">
                <Text
                  className={`w-10/12 text-center text-orange-200 relative`}
                >
                  Hi {user?.name}, Ready to crush your goals today?
                </Text>
                <Pressable
                  className="absolute top-0 right-0 z-10 m-2 p-2"
                  onPress={() => {
                    setShowMotivation(!showMotivation);
                  }}
                >
                  {!lightTheme ? (
                    <Image
                      source={require("../../assets/images/close-light.png")}
                    />
                  ) : (
                    <Image
                      source={require("../../assets/images/close_dark.png")}
                    />
                  )}
                </Pressable>
              </View>
            </ImageBackground>
          )}

          <SectionHeading title={"Progress Board"} />

          <View className="w-11/12 h-[200px] flex flex-row justify-center items-center flex-wrap">
            {[
              [1, 2, 3],
              [1, 2],
              [1, 2],
              [1, 2, 3],
            ]?.map((d, index) => {
              return (
                <View
                  key={index}
                  className={`w-[45vw] h-[48%] ${
                    lightTheme ? "bg-light-surface" : "bg-dark-surface"
                  } ${
                    index === 0 || index === 2 ? "mr-1 mb-1" : ""
                  } flex justify-center items-center rounded-md`}
                >
                  <Text
                    className={`${lightTheme ? "text-black" : "text-white"}`}
                  >
                    Box {index}
                  </Text>
                </View>
              );
            })}
          </View>
          <View className="w-11/12 flex justify-center items-end h-[40px]">
            <Pressable className="text-orange-400" onPress={() => {}}>
              <Text className="text-orange-400">Create More</Text>
            </Pressable>
          </View>

          <View className="w-full flex justify-center items-center ">
            <SectionHeading title={"Order Meals And Supplement"} />

            <ScrollView horizontal={true} className="w-11/12 h-[200px] flex ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((d, index) => {
                return (
                  <View
                    key={index}
                    className={`me-1 rounded-lg ${
                      lightTheme ? "bg-light-surface" : "bg-dark-surface"
                    }`}
                  >
                    <Text>Lorem ipsum dolor sit.</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>



          <View className="w-full flex justify-center items-center ">
            <SectionHeading title={"Order Meals And Supplement"} />

            <ScrollView horizontal={true} className="w-11/12 h-[200px] flex ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((d, index) => {
                return (
                  <View
                    key={index}
                    className={`me-1 rounded-lg ${
                      lightTheme ? "bg-light-surface" : "bg-dark-surface"
                    }`}
                  >
                    <Text>Lorem ipsum dolor sit.</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
