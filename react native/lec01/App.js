import {  ScrollView, View } from "react-native";
import { Greet } from "./components/Greet";
import { CoreComponents } from "./components/CoreComponents";
import { Style01 } from "./components/Style01";
export default function App(){

  return(
    <View>
      <ScrollView>

      {/* <CoreComponents/> */}
      <Style01/>


      </ScrollView>
    </View>
  )
}
