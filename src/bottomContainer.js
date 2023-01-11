import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons"



const BottomContainer = () =>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.mainContainer1}>  
                <View style={styles.container}>
                    <View>
                        <Text>
                            <Feather name='home' style={{color:'black', fontSize:RFPercentage(5)}}/>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.iconText}>Home</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>
                            <AntDesign name='appstore-o' style={{color:'black', fontSize:RFPercentage(5)}}/>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.iconText}>Categories</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>
                            <SimpleLineIcons name='bell' style={{color:'black', fontSize:RFPercentage(5)}}/>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.iconText}>Notifications</Text>
                    </View>
                </View>

                
                <View style={styles.container}>
                    <View>
                        <Text>
                            <MaterialCommunityIcons name='account-circle-outline' style={{color:'black', fontSize:RFPercentage(5)}}/>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.iconText}>Account</Text>
                    </View>
                </View>
                
                <View style={styles.container}>
                    <View>
                        <Text>
                            <EvilIcons name='cart' style={{color:'black', fontSize:RFPercentage(6.5)}}/>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.iconText}>Cart</Text>
                    </View>
                </View>
            </View> 
        </View>
    )
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:0.12,
        flexDirection:'row',
        paddingVertical:'2%'

    },

    mainContainer1:{
        flex:1,
        flexDirection:'row',
        paddingVertical:'2%'

    },

    container:{
        flex:0.2,
        alignItems:'center',
        paddingHorizontal:'0.5%'
    },

    iconText:{
        fontSize:RFPercentage(2),
        color:'#000',
        fontWeight:'500'
    }

})

export default BottomContainer;