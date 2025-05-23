import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
  Image,
  RefreshControl,
} from "react-native";
import { RootState } from "../../store/store";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import SectionHeading from "../../components/SectionHeader";
import ImageCard from "@/components/ImageCard";
import Section from "@/components/Section";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated, token, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [showMotivation, setShowMotivation] = useState(true);
  const [viewAllEvents, setViewAllEvents] = useState(false);

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
          <ImageCard
            cardHeight="h-[150px]"
            cardWidth="w-11/12"
            cardMarginTop="mt-3"
            cardStyles={""}
            text={`Hi ${user?.name}, Ready to crush your goals today?`}
            imagePath={"../assets/images/sports1.jpg"}
            action={() => {
              setShowMotivation(!showMotivation);
            }}
          />
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
          sectionFooterAction={`setViewAllEvents(!viewAllEvents)`}
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
