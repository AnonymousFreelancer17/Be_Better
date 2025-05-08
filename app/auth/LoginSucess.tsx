import { useEffect } from "react";
import { router } from "expo-router";
import axios from "axios";
import { ActivityIndicator, Text, View } from "react-native";
import { replace } from "expo-router/build/global-state/routing";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const LoginSuccess = () => {

  const {token} = useSelector((state:RootState) => state.auth);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:7000/api/auth/getUserDetails", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("User:", res.data);
          router.replace("/(tabs)");
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          router.replace("/auth/login");
        });
    } else {
      router.replace("/auth/login");
    }
  }, []);

  return (
    <View>
      <ActivityIndicator />
      <Text>Logging in...</Text>
    </View>
  );
};

export default LoginSuccess;
