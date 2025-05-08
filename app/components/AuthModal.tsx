import { RootState } from '@/store/store'
import { BlurView } from 'expo-blur'
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const AuthModal = ({modalMessage}:{modalMessage : any}) => {

    const {lightTheme} = useSelector((state:RootState)=> state.setting)

  return (
     <BlurView intensity={80} tint={lightTheme ? `dark` : 'light'} className={`w-screen h-screen absolute top-0 left-0 flex z-40 bg-black/50 justify-center items-center`}
             >
                     <View className={`${lightTheme ? "bg-light-surface" : "bg-dark-surface"} w-10/12 h-[300px] rounded-md flex justify-center items-center p-2`}>
                          <ActivityIndicator color={lightTheme ? "#000" : "#fff" } size={40} />
                          <Text className={`text-orange-400 font-medium mt-8 `}>
                             {modalMessage}
                          </Text> 
                     </View>
             </BlurView> 
  )
}

export default AuthModal