import axios from "axios";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { token, user } = useSelector((state: RootState) => state.auth);

  const pickImage = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "We need camera roll permissions to upload your photo!"
      );
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.Images],
      allowsEditing: true,
      aspect: [1, 1], // Square aspect ratio
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      setSelectedImage(image.uri);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      Alert.alert("No Image", "Please select an image first!");
      return;
    }

    const uriParts = selectedImage.split("/");
    const fileName = uriParts[uriParts.length - 1];
    const fileTypeMatch = /\.(\w+)$/.exec(fileName ?? "");
    const fileType = fileTypeMatch ? `image/${fileTypeMatch[1]}` : `image`;

    const formData = new FormData();
    formData.append("profilePic", {
      uri: selectedImage,
      name: fileName,
      type: fileType,
    } as any); // `as any` because FormData in React Native doesn't fully support types

    try {
      const response = await axios.post(
        `${process.envEXPO_PUBLIC_BACKEND_URL}/user/upload-profilePicture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      console.log("Upload Success:", response.data);
      Alert.alert("Success", "Profile picture uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      Alert.alert("Error", "Failed to upload image. Please try again.");
    }
  };
  return (
    <View className={`w-full flex flex-row justify-center items-center`}>
      <View className="w-1/3 h-[17vh] flex justify-center items-center relative">
        <View className="w-[80px] h-[80px] rounded-[50%] bg-black flex justify-center items-center border border-gray-500 relative">
          {selectedImage ? (
            <Image className="bg-white" source={{
              uri : selectedImage
            }} />
          ) : (
            <FontAwesome name="user" size={40} color={"#fff"} />
          )}

          <Pressable
            className="absolute z-10 top-0 right-0"
            onPress={pickImage}
          >
            <FontAwesome name="edit" size={24} color={"white"} />
          </Pressable>
        </View>
        {selectedImage && (
          <View className="h-[20%] w-full flex justify-center items-center">
            <Pressable onPress={uploadImage} className="border border-gray-500">
              <Text className="text-white">Upload</Text>
            </Pressable>
          </View>
        )}
      </View>

      <View className="flex-1 flex flex-col justify-center items-center bg-purple-200">
        <Text className="text-white">{user?.name}</Text>
        <Text className="text-white">{user?.email}</Text>
      </View>
    </View>
  );
};

export default ImageUploader;
