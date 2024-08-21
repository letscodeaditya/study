import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Style01 = () => {
  return (
    <View style={styles.Container}>
        <View style={[styles.Box, styles.boxWithBlue, styles.BoxShadowIso]}>
            <Text style={styles.textColor}>blue<Text style={styles.textBold}> Bold</Text></Text>
        </View>
        <View style={[styles.Box,styles.boxWithyellow, styles.BoxShadowAndroid]}>
            <Text>yellow</Text>
        </View>

    </View>
  )
}

//borderradius on text dont work on ios but does on android so to use in iso wrap it in view and make view borderradius

export const styles = StyleSheet.create({
    Container: {flex:1, backgroundColor: 'plum', padding:100,height:700},
    Box: { width:100, height:100, paddingTop:20, paddingLeft:30, marginBottom:50, marginHorizontal:30, borderWidth:3, borderColor:'black',borderRadius:10},
    boxWithBlue: {backgroundColor: 'blue'},
    boxWithyellow: {backgroundColor:'yellow'},
    BoxShadowIso: {
        shadowColor: "white",
        shadowOffset: {
            width:6,
            height:6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    },
    BoxShadowAndroid: {
        elevation: 100,
        shadowColor: '#333333'
    },
    textColor: { color:'white'},
    textBold:{fontWeight:'bold'} 

})
