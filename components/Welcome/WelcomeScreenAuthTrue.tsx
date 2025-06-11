import React from 'react'
import { Text, View } from 'react-native'

const WelcomeScreenAuthTrue = ({lightTheme} : {lightTheme: boolean}) => {
  return (
     <View className="w-full h-[150px] flex flex-row justify-center items-center">
                   <Text className={`text-2xl ${lightTheme ? "text-light-primaryText" : "text-dark-primaryText" } `}>Be Better</Text>
                   <Text className="text-2xl text-orange-400">.</Text>
            </View>
  )
}

export default WelcomeScreenAuthTrue