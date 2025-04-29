import React from 'react'
import { ScrollView, Text, View } from 'react-native'

type ModalProps = {
  type: "notification" | string; // Extend this if you have more types
  closeBtn?: boolean;
  heading: string
};

const Modal:React.FC<ModalProps> = ({type ,closeBtn,heading}) => {
  return (
    <View className='z-30 absolute top-0 left-0 w-screen h-[100vh] flex justify-end items-end'>
        <View className='w-full h-[80vh] rounded-tr-3xl rounded-tl-3xl bg-white overflow-hidden'>
            <View className='text-center h-[60px] flex justify-center items-center bg-blue-200'>
               <Text className='font-medium text-xl'>{heading}</Text>
            </View>
            <ScrollView>
               {/*  loop thriough notification error */}
            </ScrollView>
        </View>
    </View>
  )
}

export default Modal