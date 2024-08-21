import React from 'react'
import { StyleSheet, View } from 'react-native'

export const StyleComp = () => {
  return (
    <View style={style1.container}>
        <Text style={style1.title}>title</Text>
    </View>
  )
}

const style1 = StyleSheet.create({
    container: {flex:1,backgroundColor:'blue'},
    title: {color:'black', height:100}
})

//without stylesheet we dont get suggestion 
export const style2 = {
    title: {color:'black', padding:10}
}
