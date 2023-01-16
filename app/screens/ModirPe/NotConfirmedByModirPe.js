import React,{useState,useEffect} from 'react';
import {StyleSheet} from 'react-native';
import ListItem3 from './ListItem1';
import Constants from 'expo-constants';
import Screen from '../../components/Screen'
import HiddenActionManeger17 from './HiddenActionManeger17';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";
import Header29 from "./Header29";
import ActivityIndicator from '../../components/ActivityIndicator2';

function NotConfirmedByModirPe({route}) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Montserrat: require('../../components/assets/fonts/Vazir-Regular.ttf'),
    });
    const [listings,setListings]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
        setListings(route.params.request1);
      },1500);   
    },[isFocused]);
     

    return (
    <Screen>
      <Header29/>
      {
        loading ? <ActivityIndicator/> :
        <SwipeListView
          data={listings.results}
          keyExtractor={listing=>listing.id_ef.toString()}
          renderItem={({item})=><ListItem3
          id_ef={item.id_ef}
          title={item.title}
          company={item.company}
          date1={item.date_shamsi}
          onPress={()=>handleSend(item)}
      />}
          renderHiddenItem={(listing)=><HiddenActionManeger17 data2={listing}/>}
          rightOpenValue={-130}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          marginTop={15}
               
      />
}
    </Screen>
    
    );
}
const styles = StyleSheet.create({
  screen:{
    //paddingTop:Platform.OS==='android' ? StatusBar.currentHeight : null
    paddingTop:Constants.statusBarHeight
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
},
backTextWhite: {
    color: '#FFF',
},
rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 40,
},
rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginTop:3,
    marginBottom:10,
},
backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75
},
backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
},
backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
},
backRightBtnCenter: {
    backgroundColor: 'green',
    right: 0,
},
header:{
  backgroundColor:"#6D1015",
  width:"100%",
  height:80,
  alignItems:'center',
  justifyContent:'center',
  marginBottom:15,
  marginTop:10,
}
})
export default NotConfirmedByModirPe;