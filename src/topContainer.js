import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, Pressable, TextInput} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


const TopContainer = () =>{
    return(
        <View style={styles.topContainer}>
            <View style={styles.container}>
                <View style={styles.banner}>
                    <View style={styles.horizontalBanner}>
                        <Pressable style={styles.flipkart}>
                            <Image style={styles.fkLogoImage} source={require('../assets/FlipkartLogo.png')}/>
                            <Text style={styles.flipkartName}>Flipkart</Text>
                        </Pressable>
                       
                        <Pressable style={styles.Groceryflipkart}>
                            <Image style={styles.groceryLogoImage} source={require('../assets/FlipkartLogo.png')}/>
                            <Text style={styles.groceryName}>Grocery</Text>
                        </Pressable>
                        
                    </View>
                </View>

                <View style={styles.searchBar}>
                    <View style={styles.horizontalBanner}>
                        <View style={styles.brandMail}>
                            <View>
                                <Text style={styles.brandMailText}>Brand Mail</Text>
                                <Text style={styles.brandMailTextOff}>⚪  OFF</Text>
                            </View>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={styles.searchIcon}>
                                <FontAwesome name="search" style={{fontSize:RFPercentage(4), fontWeight:'500'}}/>
                            </Text>
                            <TextInput style={styles.textInputBox} placeholder="Search for products"/>
                           
                            <Text style={styles.cameraIcon}>
                                <AntDesign name="camera" style={{ fontSize:RFPercentage(4), fontWeight:'600'}}/>
                            </Text>

                            
                            <Text style={styles.micIcon}>
                                <MaterialCommunityIcons name="microphone-outline" style={{fontSize:RFPercentage(4)}}/>
                            </Text>

                            
                            

                        </View>
                    </View>

                    <View>

                    </View>
                </View>
            </View>
        </View>
    )
} 

const styles=StyleSheet.create({
    topContainer:{
        flex:0.28,
        justifyContent:'flex-start',
        paddingVertical:'0.6%',
        
    },

    container:{
        flex:1,
        flexDirection:'column'
    },

    banner:{
        flex:0.5,
        flexDirection:'row'
    },
    horizontalBanner:{
        flex:1,
        flexDirection:'row'
    },

    flipkart:{
        flex:0.5,
        flexDirection:'row',
        paddingVertical:'3%',
        paddingHorizontal:'8%',
        backgroundColor:'#145ade',
        borderRadius:12,
        marginVertical:'1%',
        marginHorizontal:'2%',
        width:'50%',
        height:'90%'
    },

    fkLogoImage:{
        flex:0.5,
        height:Height*0.045
    
    },
    
    flipkartName:{
        flex:0.7,
        color:'#ffffff',
        fontSize:RFPercentage(3),
        fontWeight:'bold',
        fontStyle:'italic'
    },

    Groceryflipkart:{
        flex:0.5,
        flexDirection:'row',
        paddingVertical:'2.2%',
        paddingHorizontal:'8%',
        backgroundColor:'#d6d0d6',
        borderRadius:12,
        marginVertical:'1%',
        marginHorizontal:'2%',
        width:'50%',
        height:'90%'
    },

    groceryLogoImage:{
        flex:0.5,
        height:Height*0.045
    
    },
    

    groceryName:{
        flex:0.7,
        color:'#000',
        fontSize:RFPercentage(3),
        fontWeight:'bold',
        fontStyle:'italic'
    },
  
    searchBar:{
        flex:0.5,
        paddingTop:"2%"
    },

    brandMail:{
        flex:0.2,
        padding:'0.4%',
        marginHorizontal:'2%',
        marginVertical:'2.5%'
    },

    textInput:{
        flex:0.8,
        flexDirection:'row',        
        backgroundColor:'#d6d0d6',
        margin:'2%',
        borderRadius:5
    },

    brandMailText:{
        textAlign:'center',
        fontWeight:'900',
        fontSize:RFPercentage(1.8)
    },

    brandMailTextOff:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:RFPercentage(1.8),
        backgroundColor:'#d6d0d6',
        width:'70%',
        borderRadius:5,
        alignSelf:'center',
        marginVertical:'5%',
        color:'#000'
    },

    searchIcon:{
        padding:'3%'

    },

    cameraIcon:{
        marginVertical:'2.5%'
    },

    micIcon:{
        marginVertical:'2.5%'
    },

    textInputBox:{
        paddingHorizontal:'12%'
    }

})

export default TopContainer;