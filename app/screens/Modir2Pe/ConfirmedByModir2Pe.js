import React,{useState,useEffect} from 'react';
import {StyleSheet} from 'react-native';
import ListItem3 from './ListItem3';
import Constants from 'expo-constants';
import Screen from '../../components/Screen';
import HiddenActionManeger16 from './HiddenActionManeger16';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useFonts } from 'expo-font';
import Header27 from './Header27';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";
import ActivityIndicator from '../../components/ActivityIndicator2';

function ConfirmedByModir2Pe({route}) {
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
      <Header27/>
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
                renderHiddenItem={(listing)=><HiddenActionManeger16 data2={listing}/>}
                rightOpenValue={-135}
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
export default ConfirmedByModir2Pe;