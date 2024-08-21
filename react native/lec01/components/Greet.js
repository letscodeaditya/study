import React from 'react'
import { Text, View } from 'react-native'

export const Greet = ({name}) => {
  return (
    <View style={{padding:10}}>
        <Text>hello, {name}</Text>
    </View>
  )
}
