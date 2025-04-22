import React from "react";
import { useRoute } from '@react-navigation/native';
import { useLocalSearchParams, usePathname } from 'expo-router';

import { View, Text } from "react-native";

const Register = () => {

  const route = useRoute();
  const params = useLocalSearchParams();
  const pathname = usePathname();

  return (
    <View className="flex-1 flex justify-center items-center bg-primary text-white">
      <Text className="text-white">Register </Text>
      <Text className="text-red-400">{pathname} </Text>
    </View>
  );
};

export default Register;
