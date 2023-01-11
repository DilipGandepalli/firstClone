import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import TopContainer from "./src/topContainer";
import MiddleContainer from "./src/MiddleContainer";
import BottomContainer from "./src/bottomContainer";

const App = () =>{
  return(   
      <View style={styles.mainContainer}>
        <TopContainer/>
        <MiddleContainer/>
        <BottomContainer/>
      </View>
  )
}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#fff'
  }
})

export default App;