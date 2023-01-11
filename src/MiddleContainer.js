import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageScrolling from "./middleContain/ImageScrollingMiddle";
import Offerdeals from "./offerDeals";
import Underdeals from "./underDeals";
import Sponsored from './sponsored'
import PercentageDeals from './percentageDeals'
import Electronic from './electronicGadgets';
import CollectionGrid from "./Collection";
import Couponscrolling from "./couponScrolling";


const MiddleContainer = () =>{
    return(
        <ScrollView  style={styles.middleContainer}>
            <View>
                <ImageScrolling/>
                <Couponscrolling/>
                <Offerdeals/>
                <Underdeals/>
                <Sponsored/>
                <PercentageDeals/>
                <Electronic/>
                <CollectionGrid/>

            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    middleContainer:{
        flex:0.75,
        backgroundColor:'white'
    },

});

export default MiddleContainer;

