import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


const Offerdeals = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/gadgets.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.gadgetsText}>Top Gadget Deals</Text>
                        <Text style={styles.gadgetsDiscounText}>Up to 80% off</Text>
                    </View>
                </View>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/realme.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.realmeText}>realme C33</Text>
                        <Text style={styles.realmeEmiText}>Pay Only ₹ 667/m </Text>
                    </View>
                </View>
                <View style={styles.gadgetDetails}>
                    <Image style={styles.image} source={require('../assets/almonds.png')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.snacksText}>Up to 40% Off</Text>
                        <Text style={styles.snacksDetails}>Dry Fruits, Nuts & more</Text>
                    </View>
                </View>
            
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:0.08,
        flexDirection:'row',
        
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

    
    snacksText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:RFPercentage(2.7),
        paddingRight:'0.8%',
        color:'#000000',
    },
    snacksDetails:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:RFPercentage(1.5)
    }
})


export default Offerdeals;