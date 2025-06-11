import { useState } from "react";

import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//  importing redux reducers and states

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


// importing components here

import Header from "@/components/Header";
import ImageCard from "@/components/ImageCardSlider/ImageCard";
import Section from "@/components/Section/Section";
import ImageCardSlider from "@/components/ImageCardSlider/ImageCardSlider";
import { router } from "expo-router";

export default function Index() {
  const {user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [showMotivation, setShowMotivation] = useState(true);

  return (
    <SafeAreaView
      className={`h-auto w-screen flex justify-start items-center pb-[60px] ${
        lightTheme ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      <Header route={"Home"} />
      <ScrollView
        showsVerticalScrollIndicator={true}
        horizontal={false}
        className="w-full h-auto"
      >
        {showMotivation && (
           <ImageCardSlider />
        )}

        <Section
          sectionHeight={"flex-1"}
          sectionWidth={"w-full"}
          sectionHeading={"Progress Boards"}
          sectionType={"progress-board"}
          sectionHeaderVisibility={true}
          sectionFooterVisibility={true}
          sectionFooterButtonVisibility={true}
          sectionFooterButtonText={"Create More"}
          sectionFooterAction={() => {}}
        />

        <Section
          sectionHeight={"flex-1"}
          sectionWidth={"w-full"}
          sectionHeading={"Upcoming Events and Tasks"}
          sectionType={"upcoming-schedules"}
          sectionHeaderVisibility={true}
          sectionFooterVisibility={true}
          sectionFooterButtonVisibility={true}
          sectionFooterButtonText={"View More"}
          sectionFooterAction={`()=>{setViewAllEvents(!viewAllEvents)}`}
        />
        <Section
          sectionHeight={"flex-1"}
          sectionWidth={"w-full"}
          sectionHeading={"Community Challanges"}
          sectionType={"community-challanges"}
          sectionHeaderVisibility={true}
          sectionFooterVisibility={true}
          sectionFooterButtonVisibility={true}
          sectionFooterButtonText={"View More"}
          sectionFooterAction={()=>{router.navigate("/communities")}}
        />

        <Section
          sectionHeight={"flex-1"}
          sectionWidth={"w-full"}
          sectionHeading={"Products"}
          sectionType={"order-products"}
          sectionHeaderVisibility={true}
          sectionFooterVisibility={true}
          sectionFooterButtonVisibility={true}
          sectionFooterButtonText={"View More"}
          sectionFooterAction={``}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
