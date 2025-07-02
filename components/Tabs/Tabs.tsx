import React from 'react'
import TabsHeader from './TabsHeader'
import TabsBody from './TabsBody'
import TabsFooter from './TabsFooter'
import { View } from 'react-native'

const Tabs = () => {
  return (
     <View className=''>
      <TabsHeader />
      <TabsBody />
      <TabsFooter />
     </View>
  )
}

export default Tabs