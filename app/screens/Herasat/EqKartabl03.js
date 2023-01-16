import React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native';
import ButtonWithTitle from '../../components/ButtonWithTitle';
import {useNavigation} from '@react-navigation/native';
import EqRequestCover from './EqRequestCover';
import ListingsApi1 from '../../api/Listings04';
import ListingsApi2 from '../../api/Listings05';
import ListingsApi3 from '../../api/Listings06';
import ListingsApi4 from '../../api/Listings07';
import { useIsFocused } from "@react-navigation/native";
import ActiveIndicator from '../../components/ActivityIndicator';


function EqKartabl03() {

    const navigation = useNavigation();
    const [listings1,setListings1]=useState([]);
    const [listings2,setListings2]=useState([]);
    const [listings3,setListings3]=useState([]);
    const [listings4,setListings4]=useState([]);
    const [loading,setLoading]=useState(true);


    const loadListings1=async()=>{
        const response= await ListingsApi1.getListing11();
        setListings1(response.data);
    }
    const loadListings2=async()=>{
        const response= await ListingsApi2.getListing12();
        setListings2(response.data);
    }
    const loadListings3=async()=>{
        const response= await ListingsApi3.getListing13();
        setListings3(response.data);
    }
    const loadListings4=async()=>{
        const response= await ListingsApi4.getListing14();
        setListings4(response.data);
    }

    const isFocused = useIsFocused();
    useEffect(()=>{
        // setTimeout(()=>{
        //     setLoading(false);
        //     loadListings1();
        //     loadListings2();
        //     loadListings3();
        //     loadListings4();
        // },1500);   
        loadListings1();
        loadListings2();
        loadListings3();
        loadListings4();     
      },[isFocused]);

        const onPress1=()=>{
            navigation.navigate("newRequestForHerasat",{request1:listings1})
        };
        const onPress2=()=>{
            navigation.navigate("confirmedByHerasat",{request1:listings2})
        };
        const onPress3=()=>{
            navigation.navigate("notConfirmedByHerasat",{request1:listings3})
        };
        const onPress4=()=>{
            navigation.navigate("notConfirmedByModir",{request1:listings4})
        };

    return (
        
       <EqRequestCover top_color="#1A5276"  text="کارتابل مسئول حراست" text_color="white" back_color="#FEF9E7">
           
           <View style={styles.container1}>
             <ButtonWithTitle text="موارد جدید" text_color="white" top_color="white" bottom_color="#323BAE" img={require('../../pic/new-request2.png')} onPress1={onPress1}/>
             <ButtonWithTitle text="ارسالی برای مدیر نیروگاه" text_color="white" top_color="white" bottom_color="#632B4C" img={require('../../pic/notconfirmed2.jpg')} onPress2={onPress2}/>
             <ButtonWithTitle text="تایید نشده از طرف شما" text_color="white" top_color="white" bottom_color="#587A57" img={require('../../pic/not-verified3.png')} onPress3={onPress3}/>
           </View>
           <View style={styles.container1}>
             <ButtonWithTitle text="تایید نشده مدیر نیروگاه" text_color="white" top_color="white" bottom_color="#91152A" img={require('../../pic/not-verified2.png')} onPress4={onPress4}/>
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
export default EqKartabl03;