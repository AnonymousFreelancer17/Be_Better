import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import languageList from "../../utils/language.json";
import countryList from "../../utils/country.json";

const MenuButton = ({
  icon,
  title,
  iconSize,
  iconColor,
  iconRounded,
  action,
}: {
  icon: any;
  title: any;
  iconSize: number;
  iconColor: any;
  iconRounded: boolean;
  action: any;
}) => {
  const { lightTheme } = useSelector((state: RootState) => state.setting);
  const [selectedLanguageValue, setSelectedLanguageValue] = useState("en");
  const [selectedCountryValue, setSelectedCountryValue] = useState("IN");

  return (
    <>
      {title !== "Language" && title !== "Location" && (
        <Pressable
          className="w-full h-[30px] mb-4 flex flex-row justify-start items-center"
          onPress={() => {
            action();
          }}
        >
          <View className="flex-1 h-full justify-center items-center ">
            <View
              className={`h-[30px] w-[30px] flex justify-center items-center  ${
                iconRounded
                  ? `border ${
                      lightTheme ? "border-light-border" : "border-dark-border"
                    } rounded-full`
                  : "border-0"
              } me-2`}
            >
              {icon && (
                <FontAwesome
                  name={icon}
                  color={iconColor ? iconColor : lightTheme ? "gray" : "white"}
                  size={iconSize || 16}
                />
              )}
              {icon === null && (
                <FontAwesome
                  name={`${lightTheme ? "sun-o" : "moon-o"}`}
                  size={20}
                  color={lightTheme ? "gray" : "white"}
                />
              )}
            </View>
          </View>
          <View className="w-[80%] h-full flex justify-center items-start ">
            <Text
              className={`${
                lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
              }`}
            >
              {title}
            </Text>
          </View>
        </Pressable>
      )}
      {title === "Language" && (
        <View className="w-full h-[30px] mb-4 flex flex-row justify-start items-center">
          <View className="flex-1 h-full justify-center items-center ">
            <View
              className={`h-[30px] w-[30px] flex justify-center items-center  ${
                iconRounded
                  ? `border ${
                      lightTheme ? "border-light-border" : "border-dark-border"
                    } rounded-full`
                  : "border-0"
              } me-2`}
            >
              {icon && (
                <FontAwesome
                  name={icon}
                  color={iconColor ? iconColor : lightTheme ? "gray" : "white"}
                  size={iconSize || 16}
                />
              )}
              {icon === null && (
                <FontAwesome
                  name={`${lightTheme ? "sun-o" : "moon-o"}`}
                  size={20}
                  color={lightTheme ? "gray" : "white"}
                />
              )}
            </View>
          </View>
          <View className="w-[80%] h-full flex flex-row justify-center items-start">
            <View className="w-[40%] h-full flex flex-row justify-start items-center">
              <Text
                className={`${
                  lightTheme
                    ? "text-light-primaryText"
                    : "text-dark-primaryText"
                }`}
              >
                {title} :
              </Text>
            </View>

            <View className="flex-1 h-full justify-center items-center overflow-hidden">
              <Picker
                dropdownIconColor={lightTheme ? "#1F2937" : "#F3F4F6"}
                style={{
                  width: "100%",
                  color: lightTheme ? "gray" : " white",
                }}
                selectedValue={selectedLanguageValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguageValue(itemValue)
                }
              >
                {languageList?.map((d, index) => {
                  return (
                    <Picker.Item
                      style={{
                        zIndex: 1000,
                        backgroundColor: lightTheme ? "#FFFFFF" : "#0F172A",
                        color: lightTheme ? "#1F2937" : "#F3F4F6",
                        fontSize: 14,
                      }}
                      key={index}
                      label={d.label}
                      value={d.value}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      )}
      {title === "Location" && (
        <View className="w-full h-[30px] mb-4 flex flex-row justify-start items-center">
          <View className="flex-1 h-full justify-center items-center ">
            <View
              className={`h-[30px] w-[30px] flex justify-center items-center  ${
                iconRounded
                  ? `border ${
                      lightTheme ? "border-light-border" : "border-dark-border"
                    } rounded-full`
                  : "border-0"
              } me-2`}
            >
              {icon && (
                <FontAwesome
                  name={icon}
                  color={iconColor ? iconColor : lightTheme ? "gray" : "white"}
                  size={iconSize || 16}
                />
              )}
              {icon === null && (
                <FontAwesome
                  name={`${lightTheme ? "sun-o" : "moon-o"}`}
                  size={20}
                  color={lightTheme ? "gray" : "white"}
                />
              )}
            </View>
          </View>
          <View className="w-[80%] h-full flex flex-row justify-center items-start">
            <View className="w-[40%] h-full flex flex-row justify-start items-center">
              <Text
                className={`${
                  lightTheme
                    ? "text-light-primaryText"
                    : "text-dark-primaryText"
                }`}
              >
                {title} :
              </Text>
            </View>

            <View className="flex-1 h-[30px] overflow-hidden flex justify-center items-center">
              <Picker
                dropdownIconColor={lightTheme ? "#1F2937" : "#F3F4F6"}
                style={{
                  width: "100%",
                  color: lightTheme ? "#1F2937" : " #F3F4F6",
                }}
                selectedValue={selectedCountryValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCountryValue(itemValue)
                }
              >
                {countryList?.map((d, index) => {
                  return (
                    <Picker.Item
                      style={{
                        zIndex: 1000,
                        fontSize: 14,
                        backgroundColor: lightTheme ? "#FFFFFF" : "#0F172A",
                        color: lightTheme ? "#1F2937" : "#F3F4F6",
                      }}
                      key={index}
                      label={d.name}
                      value={d.code}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default MenuButton;
