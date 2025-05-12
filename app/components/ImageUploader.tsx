// import axios from "axios";
// import React, { useState } from "react";
// import { Alert, Image, Pressable, Text, View } from "react-native";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import * as DocumentPicker from "expo-document-picker";
// import AuthModal from "./AuthModal";

// const ImageUploader = () => {
//   const { token, user } = useSelector((state: RootState) => state.auth);
//   const [selectedImage, setSelectedImage] = useState<DocumentPicker.DocumentPickerAsset | null>(null);
//   const [imageData, setImageData] = useState()
//   const [isLoading, setIsLoading] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const { lightTheme } = useSelector((state: RootState) => state.setting);

//   const pickImage = async () => {
//     const result = await DocumentPicker.getDocumentAsync({
//       type: "image/*",
//     });
//     console.log(result);

//     if (result.assets) {
//       setImageData(result.assets[0]);
//       setSelectedImage(result.assets[0].uri)
//     } else {
//       Alert.alert("No assets found in the selected document");
//     }
//     uploadImage();
//   };

//   const uploadImage = async () => {
//     console.log(imageData,selectedImage);
//     setIsLoading(true);
//     setModalMessage("Loading....")

//     if (!imageData) return Alert.alert("No image selected");

//     const formData = new FormData();
//     formData.append("profilePic", imageData);
//     console.log("Image data : ", ImageData);
//     try {
//       const res = await axios.post(
//         `${process.env.EXPO_PUBLIC_BACKEND_URL}/user/upload-profilePicture`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Upload success:", res.data);
//       setModalMessage("Uploaded Successfully!");
//     } catch (err) {
//       console.error("Upload failed:", err);
//       setModalMessage("Upload Failed!")
//     }
//   };

//   return (
//     <View className={`w-11/12 flex flex-row justify-between items-center`}>

//       {isLoading && <AuthModal modalMessage={modalMessage} />}

//       <View className="w-1/3 h-[17vh] flex justify-center items-center relative">
//         <View className="w-[80px] h-[80px] rounded-[50%] bg-dark-surface flex justify-center items-center border border-gray-500 relative">
//           {selectedImage ? (
//             <Image
//               source={{ uri: selectedImage }}
//               style={{ width: 80, height: 80, borderRadius: 40 }}
//             />
//           ) : (
//             <FontAwesome name="user" size={40} color={"#fff"} />
//           )}

//           <Pressable
//             className="absolute z-10 top-0 right-0"
//             onPress={pickImage}
//           >
//             <FontAwesome name="edit" size={24} color={"white"} />
//           </Pressable>
//         </View>

//         {selectedImage && (
//           <View className="h-[20%] w-full flex justify-center items-center mt-2">
//             <Pressable
//             className="p-2 border border-gray-400 rounded-md"
//               onPress={() => {
//                 uploadImage()
//               }}

//             >
//               <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
//                 Upload
//               </Text>
//             </Pressable>
//           </View>
//         )}
//       </View>

//       <View className="flex-1 flex flex-col justify-center items-center bg-purple-200">
//         <Text className="text-white">{user?.name}</Text>
//         <Text className="text-white">{user?.email}</Text>
//       </View>
//     </View>
//   );
// };

// export default ImageUploader;

import axios from "axios";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as DocumentPicker from "expo-document-picker";
import AuthModal from "./AuthModal";

const ImageUploader = () => {
  const { token, user } = useSelector((state: RootState) => state.auth);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageData, setImageData] =
    useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { lightTheme } = useSelector((state: RootState) => state.setting);

  const pickImage = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      copyToCacheDirectory: true,
    });

    if (result.assets && result.assets.length > 0) {
      const file = result.assets[0];
      setImageData(file);
      setSelectedImage(file.uri);
    } else {
      Alert.alert("No image selected");
    }
  };

  const uploadImage = async () => {
    if (!imageData || !imageData.uri) {
      return Alert.alert("No image selected");
    }

    console.log(imageData, selectedImage , user?.id);

    setIsLoading(true);
    setModalMessage("Uploading...");

    const formData = new FormData();

    const fileName = imageData.name || `photo.jpg`;
    const fileType = imageData.mimeType || "image/jpeg";

    formData.append("profilePic", {
      uri: imageData.uri,
      name: fileName,
      type: fileType,
      userId: user?.id,
    } as any);

    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL_LOCAL}/user/upload-profilePicture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Upload success:", res.data);
      setModalMessage("Uploaded Successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      setModalMessage("Upload Failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="w-11/12 flex flex-row justify-between items-center">
      {isLoading && <AuthModal modalMessage={modalMessage} />}

      <View className="w-1/3 h-[17vh] flex justify-center items-center relative">
        <View className="w-[80px] h-[80px] rounded-full bg-dark-surface flex justify-center items-center border border-gray-500 relative">
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
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
          <View className="h-[20%] w-full flex justify-center items-center mt-2">
            <Pressable
              className="w-[80px] h-[30px] border border-gray-400 rounded-md flex justify-center items-center"
              onPress={uploadImage}
            >
              <Text className={`${lightTheme ? "text-black" : "text-white"}`}>
                Upload
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      <View className="flex-1 flex flex-col justify-center items-center bg-purple-200">
        <Text className="text-white">{user?.name}</Text>
        <Text className="text-white">{user?.email}</Text>
        <Text className="text-white">{user?.id}</Text>

      </View>
    </View>
  );
};

export default ImageUploader;
