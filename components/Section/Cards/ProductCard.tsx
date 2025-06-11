import React from "react";
import { Text, View } from "react-native";

const ProductCard = ({
  index,
  lightTheme,
}: {
  index: number;
  lightTheme: boolean;
}) => {
  return (
    <View
      className={`w-[150px] h-[250px] flex flex-col justify-center items-center ${
        lightTheme ? "bg-light-surface" : "bg-dark-surface"
      } me-1 rounded-lg`}
    >
      <View>
        <Text
          className={`${
            lightTheme ? "text-light-primaryText" : "text-dark-primaryText"
          }`}
        >
          {index}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
