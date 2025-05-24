import { RootState } from "@/store/store";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Slider = ({
  dataType,
  activeSlide,
}: {
  dataType: string;
  activeSlide: number;
}) => {
  //   const [activeSlide, setActiveSlide] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get("window").width;
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [data, setData] = useState([]);

  const sliderData = [
    {
      title: { line1: `Your Fitness`, line2: `Perfectly Planned!` },
      description: "Create . Customize . Continue",
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
    Animated.spring(slideAnim, {
      toValue: -activeSlide * screenWidth,
      useNativeDriver: true,
    }).start();
  }, [activeSlide]);

  return (
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
      {dataType === "intro" &&
        sliderData?.map((d, index) => {
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
                                  <Text className="text-xs">12 days left</Text>
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
                            className={`w-full text-sm font-normal ${
                              lightTheme
                                ? "text-dark-secondaryText"
                                : "text-light-secondaryText"
                            }`}
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
    </Animated.View>
  );
};

export default Slider;
