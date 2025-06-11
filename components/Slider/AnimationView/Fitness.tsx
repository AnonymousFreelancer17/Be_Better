import React from "react";
import { Animated, Image, Text, View } from "react-native";

const Fitness = ({
  lightTheme,

}: {
  lightTheme: boolean;

}) => {
  return (

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
                lightTheme ? "border-light-border" : "border-dark-border"
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
                      source={require("../../../assets/images/demo_profile.png")}
                      className="h-[140%] w-full"
                    ></Image>
                  </View>
                </View>

                <View className="w-2/3 h-full flex justify-start items-start">
                  <View className="h-full flex flex-row justify-center items-center bg-orange-400 px-2 rounded-xl">
                    <View className="flex-1 flex justify-start items-start">
                      <View>
                        <Text className="font-bold text-sm">Progress</Text>
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
                        <Text className="font-medium text-xs">60%</Text>
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
  
  );
};

export default Fitness;
