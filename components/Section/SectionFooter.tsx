import React from "react";
import { Alert, Text, View } from "react-native";
import RoundedOrangeButton from "../Buttons/RoundedOrangeButton";

const SectionButtonGroup = ({
  action,
  buttonVisibility,
  buttonText,
}: {
  action: any;
  buttonVisibility: boolean;
  buttonText: string;
}) => {

// Alert.alert(action)


  return (
    <View className="w-11/12 flex justify-center items-end h-[40px]">
      {buttonVisibility && (
        <RoundedOrangeButton
          pressableStyle={"bg-orange-400 px-4 py-2 rounded-full"}
          textStyle={"text-white"}
          buttonText={buttonText}
          action={action}
        />
      )}
    </View>
  );
};

export default SectionButtonGroup;
