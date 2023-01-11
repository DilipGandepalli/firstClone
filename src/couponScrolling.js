import React from "react";
import { View, Text, StyleSheet,Dimensions,ScrollView, FlatList, Pressable, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const data =[
    { name:'Coupons', image:require('../assets/coupon.png')},
    { name:'Credit', image:require('../assets/credit.png')},
    { name:'Live', image:require('../assets/live.png')},
    { name:'Whats New?', image:require('../assets/whatsnew.png')},
    { name:'Feed', image:require('../assets/feed.png')},
    { name:'Camera', image:require('../assets/camera.png')},
    { name:'Games', image:require('../assets/games.png')},
    { name:'Plus', image:require('../assets/goldplus.png')}
  ];

const x=Dimensions.get('window').width
const y=Dimensions.get('window').height



const Couponscrolling = () =>{
    return(
        <View style={styles.scrollingContainer}>
            
            <ScrollView>
                <View>
                    <FlatList
                    data={data}
                    horizontal= {true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) =>{
                        return(
                        <View>
                        <Pressable>
                            <Image source={item.image} style={styles.scrollingImage}/>
                            <Text style={styles.scrollingText}>{item.name}</Text>
                        </Pressable>
                        </View>
                        )
                    }}>
                    </FlatList>
                </View>
            </ScrollView>
      
        </View>
  
    )
}

const styles=StyleSheet.create({
    
  scrollingContainer:{
    padding:'4%',
    flex:0.15
    },

  scrollingImage:{
    width: y * 0.1,
    height: x * 0.12,
    borderRadius:25
    
  },

  scrollingText:{
    fontSize:RFPercentage(2),
    color:'black',
    fontWeight:'900',
    marginHorizontal:'5%',
    textAlign:'center'
  },


});

export default Couponscrolling;