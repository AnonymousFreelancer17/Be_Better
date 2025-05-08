// import axios from "axios";
// import React, { useState } from "react";
// import { Alert, Image, Pressable, Text, View } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import {launchImageLibrary} from 'react-native-image-picker';

// const selectImage = () => {
//   launchImageLibrary({mediaType: 'photo'}, response => {
//     if (response.assets && response.assets.length > 0) {
//       const image = response.assets[0];
//       console.log(image.uri);
//       uploadImage(image);
//     }
//   });
// };
//     // Open image picker
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: [ImagePicker.MediaType.Images],
//       allowsEditing: true,
//       aspect: [1, 1], // Square aspect ratio
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const image = result.assets[0];
//       setSelectedImage(image.uri);
//     }
//   };

//   const uploadImage = async (image: any) => {
//     const formData = new FormData();
//     formData.append('profilePic', {
//       uri: image.uri,
//       name: image.fileName || 'profile.jpg',
//       type: image.type || 'image/jpeg',
//     });

//     try {
//       const res = await axios.post(
//         `${process.env.EXPO_PUBLIC_BACKEND_URL}/upload/profile-pic`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log('Upload success:', res.data);
//     } catch (err) {
//       console.error('Upload failed:', err);
//     }
//   };

//   return (
//     <View className={`w-full flex flex-row justify-center items-center`}>
//       <View className="w-1/3 h-[17vh] flex justify-center items-center relative">
//         <View className="w-[80px] h-[80px] rounded-[50%] bg-dark-surface flex justify-center items-center border border-gray-500 relative">
//           {selectedImage ? (
//             <Image className="bg-white" source={{
//               uri : selectedImage
//             }} />
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
//           <View className="h-[20%] w-full flex justify-center items-center">
//             <Pressable onPress={uploadImage} className="border border-gray-500">
//               <Text className="text-white">Upload</Text>
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

import React from "react";
import { Text, View } from "react-native";

const ImageUploader = () => {
  return (
    <View>
      <Text>ImageUploader</Text>
    </View>
  );
};

export default ImageUploader;
