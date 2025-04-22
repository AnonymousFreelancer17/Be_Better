import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex flex-1 justify-center items-center bg-primary">
      <Text className="text-white">
        Edit app/index.tsx to edit this screen.
      </Text>

      <Link className="text-red-400" href="/auth/register">
        Register
      </Link>
      <Link className="text-red-400" href="/auth/login">
        Login
      </Link>
    </View>
  );
}
