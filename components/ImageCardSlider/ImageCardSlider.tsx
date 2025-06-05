import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Pressable, View } from "react-native";
import ImageCard from "../ImageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ImageCardSlider = () => {
  const [showMotivation, setShowMotivation] = useState(false);
  const [active, setActive] = useState(0);
  const { user } = useSelector((state: RootState) => state.auth);
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: -active * screenWidth,
      useNativeDriver: true,
    }).start();
  }, [active]);

  return (
    <View className="w-auto h-auto relative mt-3">
      <Animated.View className="w-auto relative flex flex-row justify-start items-start"
      style={{
        width: screenWidth * 3,
        transform: [{ translateX: slideAnim }],
      }}
      >
        {[1, 2, 3].map((d, index) => {
          return (
            <ImageCard
              key={index}
              cardHeight="h-[180px] bg-green-400"
              cardWidth="w-[90vw]"
              cardMarginTop="0"
              cardStyles={""}
              text={`Hi ${user?.name}, Ready to crush your goals today?`}
              imagePath={"../assets/images/sports1.jpg"}
              action={() => {
                setShowMotivation(!showMotivation);
              }}
            />
          );
        })}
      </Animated.View>

      <View className="w-full flex flex-row justify-center items-center py-4 absolute z-30 bottom-0">
        {[1, 2, 3].map((d, index) => {
          return (
            <Pressable
              key={index}
              className="mx-1 p-2"
              onPress={() => {
                setActive(index);
              }}
            >
              <FontAwesome
                name="circle"
                color={
                  lightTheme
                    ? active === index
                      ? "#fb923c"
                      : "gray"
                    : active === index
                    ? "#fb923c"
                    : "white"
                }
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default ImageCardSlider;
