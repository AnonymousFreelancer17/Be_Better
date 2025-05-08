import { NotificationModalVisibilityTogler } from "@/store/slices/settingSlice";
import { RootState } from "@/store/store";
import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import closeDark from "../../assets/images/close-dark.png";
import closeLight from "../../assets/images/close-light.png";

type ModalProps = {
  type: string; // Extend this if you have more types
  closeBtn?: boolean;
  heading: string;
};

const NotificationModal = ({}) => {
  const { lightTheme } = useSelector(
    (state: RootState) => state.setting
  );
  const dispatch = useDispatch();

  return (
    <View
      className={`z-50 absolute top-0 left-0 w-screen h-[100vh] flex justify-end items-end backdrop-blur-md bg-black/80`}
    >
      <View className="bg-white w-full h-[80vh] flex justify-center items-center relative">
        <Pressable
          className="top-0 right-0 absolute p-2"
          onPress={() => {
            dispatch(NotificationModalVisibilityTogler());
          }}
        >
          {/* <Image
            source={{
              uri: lightTheme ? closeLight : closeDark,
            }}
          /> */}
        </Pressable>

        <View className="w-full h-full relative flex flex-1 flex-col justify-center items-center">
          <View className="w-full h-[40px] bg-red-400 flex justify-center items-center">
            <Text
              className={`${lightTheme ? "text-[#000000]" : "text-[#fff]"}`}
            >
              Notification
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationModal;
