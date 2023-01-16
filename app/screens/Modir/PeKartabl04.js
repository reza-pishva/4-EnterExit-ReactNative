import React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native';
import ButtonWithTitle from '../../components/ButtonWithTitle';
import {useNavigation} from '@react-navigation/native';
import EqRequestCover from './EqRequestCover';
import ListingsApi1 from '../../api/Listings01';
import ListingsApi2 from '../../api/Listings02';
import ListingsApi3 from '../../api/Listings03';
import { useIsFocused } from "@react-navigation/native";

function PeKartabl04() {
    const isFocused = useIsFocused();
    useEffect(()=>{
        loadListings1();
        loadListings2();
        loadListings3();
      },[isFocused]);
      const navigation = useNavigation();
      const [listings1,setListings1]=useState([]);
      const [listings2,setListings2]=useState([]);
      const [listings3,setListings3]=useState([]);
      
        const loadListings1=async()=>{
            const response= await ListingsApi1.getListing1();
            setListings1(response.data);
        }
        const loadListings2=async()=>{
            const response= await ListingsApi2.getListing2();
            setListings2(response.data);
        }
        const loadListings3=async()=>{
            const response= await ListingsApi3.getListing3();
            setListings3(response.data);
        }
        const onPress1=()=>{
            navigation.navigate("newrequestformanager",{request1:listings1})
        };
        const onPress2=()=>{
            navigation.navigate("newrequestforgaurds",{request1:listings2})
        };
        const onPress3=()=>{
            navigation.navigate("notconfirmedbymanager",{request1:listings3})
        };
    return (
       <EqRequestCover top_color="#1A5276"  text="کارتابل مدیرنیروگاه" text_color="white" back_color="#FEF9E7">

           <View style={styles.container1}>
             <ButtonWithTitle text="موارد جدید" text_color="white" top_color="white" bottom_color="#323BAE" img={require('../../pic/new-request2.png')} onPress1={onPress1}/>
             <ButtonWithTitle text="ارسالی برای حراست نیروگاه" text_color="white" top_color="white" bottom_color="#632B4C" img={require('../../pic/notconfirmed2.jpg')} onPress2={onPress2}/>
             <ButtonWithTitle text="تایید نشده مدیر نیروگاه" text_color="white" top_color="white" bottom_color="#587A57" img={require('../../pic/not-verified2.png')} onPress3={onPress3}/>
           </View>
      
       </EqRequestCover>
    );
}
const styles = StyleSheet.create({
    container1:{
        width:'90%',
        height:120,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:15,
    },
   
})
export default PeKartabl04;