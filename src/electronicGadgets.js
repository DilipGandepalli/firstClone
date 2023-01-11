import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Electronic = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/noise.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.gadgetsText}>1.8" | BT Calling</Text>
                        <Text style={styles.gadgetsDiscounText}>Upto 70% off*</Text>
                    </View>
                </View>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/boult.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.realmeText}>32 Hrs Playtime</Text>
                        <Text style={styles.realmeEmiText}>Just ₹1,299</Text>
                    </View>
                </View>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/wings.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.wingsText}>Sale is Live</Text>
                        <Text style={styles.wingsTextDesc}>Just ₹999</Text>
                    </View>
                </View>
            
            </View>
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        flex:0.1,
        flexDirection:'row',
        marginVertical:'1%',
        borderBottomWidth:0.5,
        borderColor:'#b8c1cf'
        
    },

    horizontal:{
        flex:1,
        flexDirection:'row'
    },

    gadgetDetails:{
        flex:0.333,
        flexDirection:'column',
        backgroundColor:'#fff',
        paddingTop:'1.5%',
        paddingHorizontal:'2%',
        paddingVertical:'2%'
    },

    image:{
        height: Height*0.15,
        width:Width*0.29,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    textContainer:{
        borderWidth:0.8,
        borderColor:'#b8c1cf',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
        
    },
    gadgetsText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:RFPercentage(2.1),
        paddingRight:'0.8%'
    },
    gadgetsDiscounText:{
        textAlign:'center',
        color:'#000000',
        fontWeight:'bold',
        fontSize:RFPercentage(2.2)

    },
    
    realmeText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:RFPercentage(2.3 ),
        paddingRight:'0.8%'
    },
    realmeEmiText:{
        textAlign:'center',
        color:'#000000',
        fontWeight:'bold',
        fontSize:RFPercentage(2)
    },

    
    wingsText:{
        textAlign:'center',
        fontSize:RFPercentage(2),
        fontWeight:'bold',
        paddingRight:'0.8%'
    },
    wingsTextDesc:{
        textAlign:'center',
        color:'#000',
        fontWeight:'bold',
        fontSize:RFPercentage(2)
    }
})


export default Electronic;