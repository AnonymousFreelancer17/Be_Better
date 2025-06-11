import Header from '@/components/Header'
import { RootState } from '@/store/store';
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

const index = () => {

  const { lightTheme } = useSelector((state: RootState) => state.setting);


  return (
    <SafeAreaView className={`w-screen h-screen flex justify-start items-center ${lightTheme ? "bg-light-background" :"bg-dark-background"}`}>
        <Header route={`Communities`} />
        <ScrollView horizontal={false} showsVerticalScrollIndicator>
           <Text>
              
           </Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index