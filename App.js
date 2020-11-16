import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default function App() {

 const headerTitle = "Album Buyer"

  return (
     <View style={{flex: 1}}>
      <Header  headerText={headerTitle}/>
      <AlbumList/>
    </View>

  );
}

