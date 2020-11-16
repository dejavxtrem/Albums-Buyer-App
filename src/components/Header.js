import React, {useState} from 'react';
import { View, StyleSheet, Text } from "react-native";


const Header = (props) => {
    
 

    //object destructing 
    const { viewStyle, textStyle} = styles 


    return (
        <View style={viewStyle}>

         <Text style={textStyle}>
            {props.headerText}
        </Text>
        </View>

    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
       

    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    }

})

export default Header;