import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


const PercentageDeals = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/allensolley.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.gadgetsText}>Trousers, Shirts...</Text>
                        <Text style={styles.gadgetsDiscounText}>40 - 60% off</Text>
                    </View>
                </View>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/woodland.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.realmeText}>Durable Footwear</Text>
                        <Text style={styles.realmeEmiText}>Min. 30% Off</Text>
                    </View>
                </View>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/wrogn.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.snacksText}>Casual Footwear</Text>
                        <Text style={styles.realmeEmiText1}>Min. 50% Off</Text>
                    </View>
                </View>
            
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:0.15
    },
    horizontal:{
        flex:1,
        flexDirection:'row',
        borderTopWidth:0.4,
        borderColor:'#b8c1cf',
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
        borderTopRightRadius:8,
        paddingTop:'2%'
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
        fontSize:RFPercentage(2.1),
        paddingRight:'1%'
    },
    realmeEmiText:{
        textAlign:'center',
        color:'#000000',
        fontWeight:'bold',
        fontSize:RFPercentage(2.2)
    },
    wrognText:{
        fontSize:RFPercentage(2)
    },
    
    realmeEmiText1:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:RFPercentage(2.2)
    },
})

export default PercentageDeals;