import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'


const AlbumDetail = ({album}) => {

 //destructing
  const { title, artist, thumbnail_image , image, url} = album

  

    return (
     <Card>
         <CardSection>
             <View style={styles.thumbnailContainerStyle}>
                <Image
                style={styles.thumbnailStyle}
                 source={{uri: thumbnail_image}}
                />
             </View>


             <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>
                {title}
                </Text>
                <Text>
                {artist}
                </Text>
             </View>

         </CardSection>


        <CardSection>
            <Image
            style={styles.albumImage}
            source={{uri:image}}
            />
        </CardSection>


        <CardSection>
            <Button  onPress={() => Linking.openURL(url)}> 
              Buy Now
            </Button>
        </CardSection>

     </Card>
  

    )
}

const styles = StyleSheet.create({

 headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',

 },
 headerTextStyle: {
     fontSize: 18
 },

 thumbnailStyle: {
        height: 50,
        width: 50
 },

 thumbnailContainerStyle: {
     justifyContent: 'center',
     alignItems: 'center',
     marginRight: 10,
     marginLeft: 10

 },
 albumImage: {
     height: 300,
     flex: 1,
     width: null
 }

})

export default AlbumDetail