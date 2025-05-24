import Slider from "@/components/Slider";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import { useSelector } from "react-redux";

const index = () => {
  const { token, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get("window").width;

  const sliderData = [
    {
      title: { line1: `Your Fitness`, line2: `Perfectly Planned!` },
      description:
        "Create . Customize . Continue",
      animation: "fitness",
    },
    {
      title: { line1: `Healthy Diet,`, line2: `We Got You Covered!` },
      description: `Fitness and Nutrition always go hand in hand! `,
      animation: "nutrition",
    },
    {
      title: {
        line1: `Suffering from laziness,`,
        line2: `Schedule & improve!`,
      },
      description: `Understand `,
      animation: "schedule",
    },
  ];

  useEffect(() => {
    if (token && isAuthenticated) {
      setTimeout(() => {
        router.replace("/(tabs)");
      }, 2000);
    }
  }, [isAuthenticated, token]);

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: -activeSlide * screenWidth,
      useNativeDriver: true,
    }).start();
  }, [activeSlide]);

  return (
    <SafeAreaView
      className={`${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      } w-screen h-screen flex justify-center items-center`}
    >
       {(!isAuthenticated && !token) ?  <View className="w-11/12 h-full flex justify-between items-center">
        <View className="w-full flex-1 flex flex-row justify-start items-center relative  overflow-hidden">
          <View className="w-full h-[150px] flex flex-row justify-center items-center z-30 absolute top-0 bg-transparent">
            <Text
              className={`${
                lightTheme ? "text-black" : "text-white"
              } text-2xl font-medium`}
            >
              Be Better
            </Text>
            <Text className="text-orange-400 text-4xl">.</Text>
          </View>
{/* 
          <Animated.View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: 0,
              flexDirection: "row",
              width: screenWidth * sliderData.length,
              transform: [{ translateX: slideAnim }],
            }}
          >
            {sliderData?.map((d, index) => {
              return (
                <View
                  key={index}
                  style={{ width: screenWidth }}
                  className="h-full relative flex justify-between items-center"
                >
                  <View className="flex-1 w-full  flex justify-center items-center relative">
                    {d.animation === "fitness" && (
                      <Animated.View
                        className={`relative flex-1 w-full flex justify-center items-center`}
                      >
                        <View
                          className={`w-[200px] h-[190px] absolute top-[100px] left-[10px] rounded-xl overflow-hidden flex justify-center items-center py-2.5 ${
                            lightTheme ? "bg-dark-card" : "bg-light-card"
                          }`}
                        >
                          <View
                            className={`w-11/12 h-2/3 flex flex-col justify-center items-center border-b ${
                              lightTheme
                                ? "border-light-border"
                                : "border-dark-border"
                            }`}
                          >
                            <View className="h-1/2 flex flex-row justify-center items-center">
                              <View className="w-1/3 h-full flex justify-center items-center">
                                <View
                                  className="w-[55px] h-[55px] flex justify-start items-start bg-light-card rounded-xl overflow-hidden"
                                  style={{
                                    shadowOpacity: 0.35,
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowRadius: 3.84,
                                    elevation: 5, // Only for Android
                                  }}
                                >
                                  <Image
                                    source={require("../assets/images/demo_profile.png")}
                                    className="h-[140%] w-full"
                                  ></Image>
                                </View>
                              </View>

                              <View className="w-2/3 h-full flex justify-start items-start">
                                <View className="h-full flex flex-row justify-center items-center bg-orange-400 px-2 rounded-xl">
                                  <View className="flex-1 flex justify-start items-start">
                                    <View>
                                      <Text className="font-bold text-sm">
                                        Progress
                                      </Text>
                                    </View>
                                    <View>
                                      <Text className="text-xs">
                                        12 days left
                                      </Text>
                                    </View>
                                  </View>

                                  <View className="w-auto h-full flex justify-center items-center relative">
                                    <View className="absolute z-30 flex justify-center items-center">
                                      <View
                                        className={`w-[30px] h-[30px] rounded-full bg-transparent border-2 absolute ${
                                          lightTheme
                                            ? "border-light-border"
                                            : "border-dark-border"
                                        }`}
                                      ></View>
                                      <View className="w-[30px] h-[30px] rounded-full absolute border-2 border-green-400 z-10"></View>
                                    </View>
                                    <View className="relative">
                                      <Text className="font-medium text-xs">
                                        60%
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View className="h-1/2 w-full flex justify-center items-center px-2 mt-1">
                              <Text
                                className={`w-full text-sm font-bold ${
                                  lightTheme
                                    ? "text-dark-primaryText"
                                    : "text-light-primaryText"
                                }`}
                              >
                                Dia jones
                              </Text>
                              <Text
                                className={`w-full text-sm font-normal ${lightTheme ? "text-dark-secondaryText": "text-light-secondaryText" }`}
                              >
                                Age : 26
                              </Text>
                            </View>
                          </View>
                          <View className="h-1/3 flex justify-center items-center">
                            <Text>CalorieMeter</Text>
                          </View>
                        </View>
                        <View
                          className={`w-[200px] h-[250px] absolute bottom-[10px] left-[120px] rounded-xl p-2 ${
                            lightTheme ? "bg-dark-card" : "bg-light-card"
                          }`}
                          style={{
                            shadowOpacity: 0.25,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 3.84,
                            elevation: 5, // Only for Android
                          }}
                        >
                          <Text className="font-bold">Regime</Text>
                        </View>
                      </Animated.View>
                    )}
                  </View>
                  <View className="w-full flex justify-center items-center">
                    <View className="w-full flex justify-center items-center mr-10">
                      <Text
                        className={`text-[28px] ${
                          lightTheme
                            ? "text-light-primaryText"
                            : "text-dark-primaryText"
                        }  font-bold`}
                      >
                        {d.title.line1}
                      </Text>
                      <Text
                        className={`text-[28px] ${
                          lightTheme
                            ? "text-light-primaryText"
                            : "text-dark-primaryText"
                        }  font-bold`}
                      >
                        {d.title.line2}
                      </Text>
                    </View>
                    <View className="w-full flex justify-center items-center  mr-10">
                      <Text
                        className={` w-full text-center ${
                          lightTheme
                            ? "text-light-secondaryText"
                            : "text-dark-secondaryText"
                        }`}
                      >
                        {d.description}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </Animated.View> */}
          <Slider dataType="intro" activeSlide={activeSlide}  />
        </View>

        <View className="w-full h-1/5 flex justify-center items-center">
          <View className="h-[40px] w-full flex flex-row justify-center items-center">
            {sliderData?.map((d, index) => {
              return (
                <Pressable
                  key={index}
                  className="p-3"
                  onPress={() => {
                    setActiveSlide(index);
                  }}
                >
                  <FontAwesome
                    name="circle"
                    size={10}
                    color={activeSlide === index ? "orange" : "gray"}
                  />
                </Pressable>
              );
            })}
          </View>
          <View className="w-full flex-1 flex justify-center items-center">
            <Link
              href={"/auth/login"}
              style={{
                width: 200,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#fb923c",
                marginBottom: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View className="w-full h-full flex justify-center items-center">
                <Text className="text-white text-[14px] font-bold">
                  Get Started
                </Text>
              </View>
            </Link>
          </View>
        </View>
      </View> : 
       <View className="w-full h-[150px] flex flex-row justify-center items-center">
              <Text className={`text-2xl ${lightTheme ? "text-light-primaryText" : "text-dark-primaryText" } `}>Be Better</Text>
              <Text className="text-2xl text-orange-400">.</Text>
       </View>
      }
    </SafeAreaView>
  );
};

export default index;
