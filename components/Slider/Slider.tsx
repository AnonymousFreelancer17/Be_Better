import { RootState } from "@/store/store";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

//  importing components ----------------------------------------------------------------------------------------------
import SliderSection from "../Slider/SliderSection";

// --------------------------------------------------------------------------------------

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
            <SliderSection
              key={index}
              index={index}
              screenWidth={screenWidth}
              line1={d.title.line1}
              line2={d.title.line2}
              description={d.description}
              animation={"fitness"}
            />
          );
        })}
    </Animated.View>
  );
};

export default Slider;
