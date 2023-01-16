import React,{useState,useEffect} from 'react';
import {View,StyleSheet,FlatList,Text} from 'react-native';
import Screen from '../../components/Screen';
import { ArabicNumbers } from 'react-native-arabic-numbers';
import AppText from '../../components/AppText';
import Header26 from './Header26';
import { ScrollView } from 'react-native-gesture-handler';
import ListingsApi41 from '../../api/Listings41Pe';
import ListingsApi42 from '../../api/Listings42Pe';
import ListingsApi43 from '../../api/Listings43Pe';
import ListingsApi44 from '../../api/Listings44Pe';
import ListItem4 from './ListItem4';
import ListItem5 from './ListItem5';
import ListItem6 from './ListItem6';
import ListItem7 from './ListItem7';
import { useIsFocused } from "@react-navigation/native";
import { useFonts } from 'expo-font';

function RequestDetails5Pe({route}) {
  const isFocused = useIsFocused();
  useEffect(()=>{
    loadListings41();
    loadListings42();
    loadListings43();
    loadListings44();
  },[isFocused]);


  var day=0;
  var month=0;
  var year=0;
  var date1=route.params.date_shamsi;
  year=date1.substr(0,4);
  month=date1.substr(4,2);
  day=date1.substr(6,2);
  var date_sh=year+'/'+month+'/'+day;


  const [listings11,setListings11]=useState([]);
  const [listings12,setListings12]=useState([]);
  const [listings13,setListings13]=useState([]);
  const [listings14,setListings14]=useState([]);

  const loadListings41=async()=>{
    const response= await ListingsApi41.getListing41(route.params.id_ef);
    setListings11(response.data);
  }
  const loadListings42=async()=>{
    const response= await ListingsApi42.getListing42(route.params.id_ef);
    setListings12(response.data);
  }
  const loadListings43=async()=>{
    const response= await ListingsApi43.getListing43(route.params.id_ef);
    setListings13(response.data);
  }
  const loadListings44=async()=>{
    const response= await ListingsApi44.getListing44(route.params.id_ef);
    setListings14(response.data);
  }


  const [loaded] = useFonts({
    Montserrat: require('../../components/assets/fonts/Vazir-Regular.ttf'),
  });


    return (
      <Screen>
        <Header26/> 
        <ScrollView>
        <View style={styles.itemcontainer1}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.id_ef)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>شماره درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.title)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>علت درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.company)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>از شرکت(مکان):</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.requester_name)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>درخواست کننده:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(date_sh)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>تاریخ درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer4}>
           <Text style={{fontFamily:'Montserrat',color:'white',fontSize:15}}>مشخصات افراد دعوت شده به نیروگاه</Text>  
        </View>
        <View style={styles.itemcontainer3}>
        <FlatList
            data={listings11.results}
            horizontal
            keyExtractor={listing=>listing.id_ep.toString()}
            renderItem={
            ({item})=><ListItem4 f_name={item.f_name} l_name={item.l_name} code_melli={item.code_melli}/>}
        />       
        </View>
        <View style={styles.itemcontainer4}>
           <Text style={{fontFamily:'Montserrat',color:'white',fontSize:15}}>مشخصات خودروها</Text>  
        </View>
        <View style={styles.itemcontainer5}>
        <FlatList
            data={listings12.results}
            horizontal
            keyExtractor={listing=>listing.id_ec.toString()}
            renderItem={
            ({item})=><ListItem5 car_name={item.car_name} driver_name={item.driver_name} car_no={item.car_no} area={item.area}/>}
        />       
        </View>
        <View style={styles.itemcontainer4}>
           <Text style={{fontFamily:'Montserrat',color:'white',fontSize:15}}>مشخصات وسایل الکترونیکی</Text>  
        </View>
        <View style={styles.itemcontainer6}>
        <FlatList
            data={listings13.results}
            horizontal
            keyExtractor={listing=>listing.id_ei.toString()}
            renderItem={
            ({item})=><ListItem6 description={item.description} serial_no={item.serial_no}/>}
        />       
        </View>
        <View style={styles.itemcontainer4}>
           <Text style={{fontFamily:'Montserrat',color:'white',fontSize:15}}>مشخصات وسایل کار</Text>  
        </View>
        <View style={styles.itemcontainer7}>
        <FlatList
            data={listings14.results}
            horizontal
            keyExtractor={listing=>listing.id_ee.toString()}
            renderItem={
            ({item})=><ListItem7 description={item.description}/>}
        />       
        </View>
        

        
      
        </ScrollView>
        
      
      </Screen>
    );
}
const styles = StyleSheet.create({
  itemcontainer:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#404F4A",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    
  },
  itemcontainer1:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#404F4A",
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    
  },
  itemcontainer2:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#4F496C",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    height:70,
    
  },
  itemcontainer3:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#404F4A",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    height:150,
    paddingBottom:5    
  },
  itemcontainer4:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#171946",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    height:40,
 
  },
  itemcontainer5:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#404F4A",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    height:180,
    paddingBottom:5    
  },
  itemcontainer6:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#404F4A",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    height:120,
    paddingBottom:5    
  },
  itemcontainer7:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#404F4A",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    height:100,
    paddingBottom:5    
  },
  subcontainer1:{
    flex:1,
    height:50,
  },
  subcontainer2:{
    flex:1,
    height:50,
  },
  subcontainer3:{
    flex:2,
    height:50,
  },
  image:{
      width:80,
      height:80,
      borderRadius:40,
  },
  textcontainer:{
    backgroundColor:"black",
    flex:1
  },
  title:{
    fontSize:15,
    marginTop:15,
    color:"white",
    width:300,
    marginRight:15,
  },
  subtitle:{
    fontSize:15,
    marginTop:15,
    color:"white",
    textAlign:'right',
  },
  date1:{
    fontSize:15,
    marginTop:15,
    color:"yellow",
    width:300,
    textAlign:"right"
  },
})
export default RequestDetails5Pe;