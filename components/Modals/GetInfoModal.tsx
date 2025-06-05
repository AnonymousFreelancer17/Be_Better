import { RootState } from '@/store/store'
import { BlurView } from 'expo-blur'
import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

const GetInfoModal = ({modalType,} : {modalType: string,}) => {

    const {lightTheme} = useSelector((state: RootState) => state.setting );

  return (
      <BlurView
           intensity={80}
           tint={lightTheme ? `dark` : "light"}
           className={`w-screen h-screen absolute top-0 left-0 flex z-40 bg-black/50 justify-center items-center`}
         >
           <View
             className={`${
               lightTheme ? "bg-light-surface" : "bg-dark-surface"
             } w-10/12 h-[300px] rounded-md flex justify-center items-center p-2
             
             ${modalType === "success" && "border-2 border-green-500"}
             ${modalType === "loading" && "border-2 border-gray-500"}
             ${modalType === "error" && "border-2 border-red-500"}
             ${modalType === "" && ""}
             `}
           ></View>
    </BlurView>
  )
}

export default GetInfoModal