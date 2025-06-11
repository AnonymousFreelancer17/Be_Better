import { RootState } from '@/store/store'
import React from 'react'
import { Animated, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

const DaySlider = () => {

  const {lightTheme} = useSelector((state: RootState) => state.setting);

  const monthData =[];

  return (
    <Animated.View className={`mt-3 h-[100px] ${lightTheme ? "bg-light-surface" : "bg-dark-surface"} flex justify-start items-start`}
    style={{}}>
      
       
    </Animated.View>
  )
}

export default DaySlider