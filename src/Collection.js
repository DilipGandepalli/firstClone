import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from "react-native-responsive-fontsize";
import CollectioDetails from "../component/collectioDetails";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const CollectionGrid = () =>{
    return(
        <View style={styles.container}>
            <View>
                <View >
                    <Text style={styles.premiumText}>Premium Finds for You</Text>
                    <View>
                    <CollectioDetails imageData={require('../assets/shoe.png')} imageContent='Sports Shoes' imageSubtext='Grab on Gone'/> 
                    </View>
                    
                </View>

                <View style={styles.collectionContainer}>
                    <View style={styles.collectionContainerFlex}>
                        <View style={styles.collectionHorizontalGrid}>
                            <View style={styles.shoeContianer}>
                                <Image style={styles.image} source={require('../assets/shoe.png')}/>
                                <Text style={styles.containerText}>Sports Shoes</Text>
                                <Text style={styles.containerSubText}>Grab Or Gone</Text>
                            </View>
                            <View style={styles.safetyContianer}>    
                                <Image style={styles.image} source={require('../assets/safetyguards.png')}/> 
                                <Text style={styles.containerText}>Handlebar Hand Guards</Text>
                                <Text style={styles.containerSubText}>Top Collection</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={styles.collectionHorizontalGrid}>
                            <View style={styles.bedContianer}>    
                                <Image style={styles.image} source={require('../assets/bed.png')}/> 
                                <Text style={styles.containerText}>Stickers</Text>
                                <Text style={styles.containerSubText}>Don't Miss</Text>
                            </View>
                            <View style={styles.glovesContianer}>    
                                <Image style={styles.image} source={require('../assets/gloves.png')}/> 
                                <Text style={styles.containerText}>Gym Gloves</Text>
                                <Text style={styles.containerSubText}>New Range</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:0.25,
        backgroundColor:'#f5c4e0'
    },

    collectionContainerFlex:{
        flex:0.5
    },

    collectionContainer:{
        felx:1,
        flexDirection:'column'
    },

    collectionHorizontalGrid:{
        flex:1,
        flexDirection:'row',
        margin:'2%'
    },

    premiumText:{
        fontSize:RFPercentage(2.8),
        fontWeight:'700',
        color:'#000',
        paddingVertical:'2%',
        paddingHorizontal:'5%'
    },

    shoeContianer:{
        flex:0.5,
        padding:'3%',
        margin:'1.5%',
        backgroundColor:'#fff',
        borderRadius:8
    },

    safetyContianer:{
        flex:0.5,
        padding:'3%',
        backgroundColor:'#fff',
        margin:'1.5%',
        borderRadius:8
    },
    
    bedContianer:{
        flex:0.5,
        padding:'3%',
        backgroundColor:'#fff',
        margin:'1.5%',
        borderRadius:8
    },
    
    glovesContianer:{
        flex:0.5,
        padding:'3%',
        backgroundColor:'#fff',
        margin:'1.5%',
        borderRadius:8
    },

    containerText:{
        fontSize:RFPercentage(2.4),
        color:'#000',
        fontWeight:'600'
    },

    containerSubText:{
        fontSize:RFPercentage(2.3),
        fontWeight:'700',
        color:'#04bf04'
    },

    image:{
        height:Height * 0.30,
        width: Width*0.40
    }


});

export default CollectionGrid;