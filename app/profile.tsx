import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Header from '../app/components/Header'
import ImageUploader from '../app/components/ImageUploader'

const profile = () => {
  return (
    <SafeAreaView>
        <Header route={"Profile"} />
        <ScrollView
         horizontal={false}
         className='w-screen flex'
        >
           <ImageUploader />
        </ScrollView>
    </SafeAreaView>
  )
}

export default profile