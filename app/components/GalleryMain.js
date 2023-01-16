
import React, { useEffect } from 'react';
import { StyleSheet,View,Text,ImageBackground,Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from './Screen';
import Header6 from './Header6';
// import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import ListingsApi from '../api/Listings';
import * as Font from 'expo-font';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Gallery from './Gallery';
import { useState } from 'react';
import axios from 'axios';
import { Linking } from 'react-native';

const datas=[
  {id:1,description:"نیروگاه کازرون بازدید مسیر داغ",image:require('../pic/kz.png')},
  {id:2,description:"نیروگاه کازرون بازدید اتاق احتراق واحد دو بخار",image:require('../pic/p6.jpg')},
  {id:3,description:"نیروگاه کازرون تعمیرات اساسی واحد سه گازی",image:require('../pic/p8.jpg')},
  {id:4,description:"نیروگاه کازرون بازدید مسیر داغ واحد دو بخار",image:require('../pic/power3.jpg')}
]

function GalleryMain(props) {
  // const [listings,setListings]=useState([]);
  // useEffect(()=>{
  //   loadListings();
  // },[]);
  //   const loadListings=async()=>{
  //     const response= await ListingsApi.getListing();
  //     setListings(response.data);
  //     console.log(listings.results[0].id_exit);
  //   }



  const [loaded] = useFonts({
     Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Screen>
     
      <ImageBackground style={styles.container} source={require('../pic/bg23.jpg')}>
        <View style={styles.rowflat}>
          <FlatList
            data={datas}
            keyExtractor={data=>data.id.toString()}
            renderItem={
             ({item})=><Gallery image={item.image} description={item.description} />}
          />
          {/* <FlatList
            data={listings.results}
            keyExtractor={listing=>listing.id_exit.toString()}
            renderItem={({item})=><Text style={{color:'yellow',fontSize:20,marginTop:200}}>{item.id_exit}</Text>}
          /> */}
        </View>


       
       <Header6/>
      </ImageBackground>
     
    </Screen>  
            
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#19B7A9',
  },
  rowflat:{
    marginTop:60,
  }
  
})
export default GalleryMain;