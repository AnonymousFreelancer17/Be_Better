import Slider from "@/components/Slider/Slider";
import WelcomeScreenAuthTrue from "@/components/Welcome/WelcomeScreenAuthTrue";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  PanResponder,
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

  // panresponder

 const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 10,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          setActiveSlide((prev) => (prev > 0 ? prev - 1 : 0));
        } else if (gestureState.dx < -50) {
          setActiveSlide((prev) => (prev < sliderData.length - 1 ? prev + 1 : sliderData.length - 1));
        }
      },
    })
  ).current;

  return (
    <SafeAreaView
      className={`${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      } w-screen h-screen flex justify-center items-center`}
    >
       {(!isAuthenticated && !token) ?  <View className="w-11/12 h-full flex justify-between items-center">
        <View className="w-full flex-1 flex flex-row justify-start items-center relative  overflow-hidden"
          {...panResponder.panHandlers}
        >
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
       <WelcomeScreenAuthTrue lightTheme={lightTheme} />
      }
    </SafeAreaView>
  );
};

export default index;
