import React from "react";
import { View, ScrollView, Text, StatusBar, StyleSheet, Dimensions, Image } from "react-native";


const images=[
  ('https://res.cloudinary.com/duqujpeio/image/upload/v1669574313/scrollImage2_kexst5.jpg'),  
  ('https://res.cloudinary.com/duqujpeio/image/upload/v1669574313/scrollImage1_bga5gz.png'),
  ('https://res.cloudinary.com/duqujpeio/image/upload/v1669574314/scrollImage4_lne6he.png'),
  ('https://res.cloudinary.com/duqujpeio/image/upload/v1669574316/scrollImage6_hcmffc.png'),
  ('https://res.cloudinary.com/duqujpeio/image/upload/v1669574315/scrollImage3_zysdo7.png'),
  ('https://res.cloudinary.com/duqujpeio/image/upload/v1669574313/scrollImage5_ypf2fi.jpg')
]

const Width=Dimensions.get('window').width;
const Height=Dimensions.get('window').height;

const ImageScrolling = () =>{
  
  return(
  <View style={styles.imageScrollingContainer}>
    <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.Simage}
      >
        {
          images.map((e) => 
            <Image 
              key={e}
              resizeMode='stretch'
              style={styles.Simage}
              source={{uri:e}}
            />)
        }

      </ScrollView>
    </View>
  )
}


const styles=StyleSheet.create({
  imageScrollingContainer:{
    flex:0.1,
  },

  Simage:{
    width: Width,
    height:Height * 0.25,
  }
});

export default ImageScrolling;