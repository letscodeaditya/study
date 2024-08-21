import { useState } from "react";
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { style2 } from "./StyleComp";
import { Greet } from "./Greet";
const logo = require('../assets/adi.jpg')

export const CoreComponents = () => {
    const [modelState, setModelState] = useState(false);
    const [statusBarState, setStatusBarState] = useState(true);
  return (
    <View style={{padding:1,flex:1}}>

    {/* <Image source={logo} style={{height:300,width:300}}></Image>
    <Image source={{uri:'https://res.cloudinary.com/dq5bhyeii/image/upload/v1721234942/du06qvfwiv92pjjkdkz2.jpg'}} style={{height:300,width:300}}></Image> */}


    {/* <ImageBackground source={logo} style={{flex:1}}>
      <Text>image</Text>
    </ImageBackground> */}


      <ScrollView style={{padding:5}}>

      <Image source={logo} style={{height:300,width:300}}></Image>
      <Text>ahdgjkahdjkhajdhjahdhkahdkjahdhakdhkahdkhakdhkadkahdkhakdhkadhahdgjkahdjkhajdhjahdhkahdkjahdhakdhkahdkhakdhkadkahdkhakdhkadhahdgjkahdjkhajdhjahdhkahdkjahdhakdhkahdkhakdhkadkahdkhakdhkadhahdgjkahdjkhajdhjahdhkahdkjahdhakdhkahdkhakdhkadkahdkhakdhkadhahdgjkahdjkhajdhjahdhkahdkjahdhakdhkahdkhakdhkadkahdkhakdhkadh</Text>
      <Image source={logo} style={{height:300,width:300}}></Image>

      <Button title="press" onPress={()=>console.log('clicked')} color="blue" disabled/>


      <Pressable onPress={()=>console.log("press..")}>
      <Text style={{height:50, color:'blue'}}>this is a pressable text</Text>  
      </Pressable>
      <Pressable onPressIn={()=>console.log("press in..")}>
      <Text style={{height:50, color:'blue'}}>this is a pressable text</Text>  
      </Pressable>
      <Pressable onPressOut={()=>console.log("press out..")}>
      <Text style={{height:50, color:'blue'}}>this is a pressable text</Text>  
      </Pressable>
      <Pressable onLongPress={()=>console.log("long press in..")}>
      <Text style={{height:50, color:'blue'}}>this is a pressable text</Text>  
      </Pressable>

      {/* model  */}

      <Button title="click to open modal"onPress={()=>setModelState(true)}/>

      <Modal visible={modelState} onRequestClose={()=>setModelState(false)} animationType="slide" >
        <View style={{flex:1, backgroundColor:'yellow', padding:60}}>
        <Text>this is a modal</Text>
        <Button title="close" onPress={()=>setModelState(false)}/>
        </View>
      </Modal>


      {/* status bar  */}

      <StatusBar backgroundColor='blue' hidden={statusBarState}/>
      <Button title="status bar" color='black' onPress={()=>setStatusBarState(false)}/>


       {/* loading spin  */}

      <ActivityIndicator/>
      <ActivityIndicator size='large'/>
      <ActivityIndicator size='large' color='grey'/>
      <ActivityIndicator size='large' color='yellow' animating={true}/>


      {/* alert  */}

      <Button title="alert 1" onPress={()=>Alert.alert("Inavlid title", "description")}/>
      <Button title="alert 2" onPress={()=>Alert.alert("Inavlid title", "description", [{text:'Cancel', onPress:()=>console.log("cancel pressed")}, {text:'OK', onPress:()=>console.log("ok clicked")} ] )}/>

      <Greet name='aditya'/>


      

      <Text style={style2.title}>style from other</Text>











      
      </ScrollView>
  </View>
  )
}
