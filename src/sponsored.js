import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Sponsored = () =>{
    return(
        <View style={styles.sponsored}>
            <Text style={styles.sponsoredText}>Sponsored</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    sponsored:{
        flex:0.05,
        backgroundColor:'#fff'
    },

    sponsoredText:{
        fontSize:RFPercentage(2.8),
        color:'#000',
        fontWeight:'bold',
        paddingHorizontal:'4.5%',
        paddingVertical:'1.5%'
    }
})

export default Sponsored;