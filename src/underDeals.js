import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Width=Dimensions.get('window').width;
const Height=Dimensions.get('window').height;


const Underdeals = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.ImageContainer}>
                    <Image style={styles.image} source={require('../assets/iotLight.png')}/>
                    <Text style={styles.decorText}>Decor Lighting & Accessories</Text>  
                    <Text style={styles.underText}>Under ₹299</Text>
                
                </View>
                <View style={styles.cctvContainer}>
                    <Image style={styles.ccimage} source={require('../assets/cctv.png')}/>
                    <Text style={styles.decorText}>Security Cameras</Text>  
                    <Text style={styles.underText}>Under ₹1,999</Text>
                
                </View>
            </View>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:0.1,
        flexDirection:'row',
        backgroundColor:'#ffffff'
    },
    subContainer:{
        flex:1,
        flexDirection:'row',
        padding:'1.5%'
    },

    ImageContainer:{
        flex:0.5,
        flexDirection:'column',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#b8c1cf',
        marginHorizontal:'0.5%',
        paddingRight:'5%',
        borderRadius:8
    },
    
    image:{
        height:Height*0.30,
        width:Width*0.45
    },

    ccimage:{
        height:Height*0.30,
        width:Width*0.43
    },

    decorText:{
        fontSize:RFPercentage(2),
        color:'#000',
        fontWeight:'600',
        paddingHorizontal:'2%'
    },

    underText:{
        color:'green',
        fontSize:RFPercentage(3.5),
        fontWeight:'700',        
        paddingHorizontal:'5%'
    },
    cctvContainer:{
        flex:0.5,
        backgroundColor:'#ffffff',
        borderWidth:1,
        borderColor:'#b8c1cf',
        marginHorizontal:'0.5%',
        borderRadius:8
    }


});

export default Underdeals;