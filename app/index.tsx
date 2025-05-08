import { RootState } from '@/store/store'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const index = () => {

    const {token,isAuthenticated} =  useSelector((state:RootState) => state.auth);
    const {lightTheme} =  useSelector((state:RootState) => state.setting);


    useEffect(() => {
       if(token && isAuthenticated){
        setTimeout(() => {
         router.replace('/(tabs)')
       },2000)
    }else{
        setTimeout(()=>{
         router.replace('/auth/login');
        },2000)
    }
        
    }, [isAuthenticated,token])
    

  return (
    <View className={`${lightTheme ? "bg-light-background" : "bg-dark-background" } w-screen h-screen flex justify-center items-center`}>
        <Text className={`${lightTheme ? "text-black" : "text-white"} text-2xl font-medium`} >
          Be Better
        </Text>
    </View>
  )
}

export default index