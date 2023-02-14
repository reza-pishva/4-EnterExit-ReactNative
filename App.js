
import AlertComponent from './app/components/AlertComponent';
import Login from './app/components/Login';
import EqTitle from './app/components/EqTitle';
import PeTitle from './app/components/PeTitle';
import PeKartabl02 from './app/screens/Modir2Pe/PeKartabl02';
import PeKartabl04 from './app/screens/ModirPe/PeKartabl04';
import PeKartabl05 from './app/screens/HerasatPe/PeKartabl05';
import EqKartabl02 from './app/screens/Modir2/EqKartabl02';
import EqKartabl03 from './app/screens/Herasat/EqKartabl03';
import EqKartabl04 from './app/screens/Modir/EqKartabl04';
import NewRequestForManager from './app/screens/Modir/NewRequestForManager';
import NewRequestForGaurds from './app/screens/Modir/NewRequestForGaurds';
import NotConfirmedByManeger from './app/screens/Modir/NotConfirmedByManeger';
import NotConfirmedByModir from './app/screens/Herasat/NotConfirmedByModir';
import NotConfirmedByHerasat from './app/screens/Herasat/NotConfirmedByHerasat';
import NotConfirmedByHerasat2 from './app/screens/Modir2/NotConfirmedByHerasat2';
import NotConfirmedByHerasat2Pe from './app/screens/Modir2Pe/NotConfirmedByHerasat2Pe';
import NotConfirmedByHerasat5Pe from './app/screens/HerasatPe/NotConfirmedByHerasat5Pe';
import NotConfirmedByModirPe from './app/screens/ModirPe/NotConfirmedByModirPe';
import NotConfirmedByModir5Pe from './app/screens/HerasatPe/NotConfirmedByModir5Pe';
import NotConfirmedByModir2 from './app/screens/Modir2/NotConfirmedByModir2';
import NotConfirmedByModir2Pe from './app/screens/Modir2Pe/NotConfirmedByModir2Pe';
import Notconfirmedbymanager5Pe from './app/screens/HerasatPe/NotConfirmedByManeger5Pe';
import ConfirmedByHerasat from './app/screens/Herasat/ConfirmedByHerasat';
import ConfirmedByHerasat5Pe from './app/screens/HerasatPe/ConfirmedByHerasat5Pe';
import ConfirmedByModir2 from './app/screens/Modir2/ConfirmedByModir2';
import ConfirmedByModir2Pe from './app/screens/Modir2Pe/ConfirmedByModir2Pe';
import ConfirmedByModirPe from './app/screens/ModirPe/ConfirmedByModirPe';
import NewRequestForHerasat from './app/screens/Herasat/NewRequestForHerasat';
import NewRequestForModir2 from './app/screens/Modir2/NewRequestForModir2';
import NewRequestForModir2Pe from './app/screens/Modir2Pe/NewRequestForModir2Pe';
import NewRequestForModirPe from './app/screens/ModirPe/NewRequestForModirPe';
import NewRequestForHerasat5Pe from './app/screens/HerasatPe/NewRequestForHerasat5Pe';
import ReturnToKartableForModir2 from './app/screens/Modir2/ReturnToKatableForModir2';
import ReturnToKartableForModir2Pe from './app/screens/Modir2Pe/ReturnToKartableForModir2Pe';
import ReturnToKatableForHerasat5Pe from './app/screens/HerasatPe/ReturnToKartableForHerasat5Pe';
import ReturnToKartableForModirPe from './app/screens/ModirPe/ReturnToKartableForModirPe';
import ReturnToKartableForManager from './app/screens/Modir/ReturnToKatableForManager';
import ReturnToKatableForHerasat from './app/screens/Herasat/ReturnToKatableForHerasat';



const Stack = createStackNavigator();
const StackNavigator = () =>{
  return(
    <Stack.Navigator initialRouteName="eqKartabl03">
      <Stack.Screen name="alert11" component={AlertComponent} options={{headerShown:false}}/>
      <Stack.Screen name="reza" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="eqTitle2" component={EqTitle} options={{headerShown:false}}/>
      <Stack.Screen name="peTitle2" component={PeTitle} options={{headerShown:false}}/>
      <Stack.Screen name="newrequestformanager" component={NewRequestForManager} options={{headerShown:false}}/>
      <Stack.Screen name="newrequestforgaurds" component={NewRequestForGaurds} options={{headerShown:false}}/>
      <Stack.Screen name="newRequestForHerasat" component={NewRequestForHerasat} options={{headerShown:false}}/>
      <Stack.Screen name="newRequestForModir2" component={NewRequestForModir2} options={{headerShown:false}}/>
      <Stack.Screen name="newRequestForModir2Pe" component={NewRequestForModir2Pe} options={{headerShown:false}}/>
      <Stack.Screen name="newRequestForModirPe" component={NewRequestForModirPe} options={{headerShown:false}}/>
      <Stack.Screen name="newRequestForHerasat5Pe" component={NewRequestForHerasat5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirmedbymanager" component={NotConfirmedByManeger} options={{headerShown:false}}/>
      <Stack.Screen name="confirmedByHerasat" component={ConfirmedByHerasat} options={{headerShown:false}}/>
      <Stack.Screen name="confirmedByHerasat5Pe" component={ConfirmedByHerasat5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="confirmedByModir2" component={ConfirmedByModir2} options={{headerShown:false}}/>
      <Stack.Screen name="confirmedByModir2Pe" component={ConfirmedByModir2Pe} options={{headerShown:false}}/>
      <Stack.Screen name="confirmedByModirPe" component={ConfirmedByModirPe} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirmedbymanager5Pe" component={Notconfirmedbymanager5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByModir" component={NotConfirmedByModir} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByModirPe" component={NotConfirmedByModirPe} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByHerasat2" component={NotConfirmedByHerasat2} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByHerasat2Pe" component={NotConfirmedByHerasat2Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByHerasat5Pe" component={NotConfirmedByHerasat5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByHerasat" component={NotConfirmedByHerasat} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByModir2" component={NotConfirmedByModir2} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByModir2Pe" component={NotConfirmedByModir2Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notConfirmedByModir5Pe" component={NotConfirmedByModir5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="returntokartablemanager" component={ReturnToKartableForManager} options={{headerShown:false}}/>
      <Stack.Screen name="returnToKartableForHerasat" component={ReturnToKatableForHerasat} options={{headerShown:false}}/>
      <Stack.Screen name="returnToKatableForModir2" component={ReturnToKartableForModir2} options={{headerShown:false}}/>
      <Stack.Screen name="returnToKatableForModir2Pe" component={ReturnToKartableForModir2Pe} options={{headerShown:false}}/>
      <Stack.Screen name="returnToKatableForHerasat5Pe" component={ReturnToKatableForHerasat5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="returnToKatableForModirPe" component={ReturnToKartableForModirPe} options={{headerShown:false}}/>
      <Stack.Screen name="peKartabl02" component={PeKartabl02} options={{headerShown:false}}/>
      <Stack.Screen name="peKartabl04" component={PeKartabl04} options={{headerShown:false}}/>
      <Stack.Screen name="peKartabl05" component={PeKartabl05} options={{headerShown:false}}/>
      <Stack.Screen name="eqKartabl02" component={EqKartabl02} options={{headerShown:false}}/>
      <Stack.Screen name="eqKartabl03" component={EqKartabl03} options={{headerShown:false}}/>
      <Stack.Screen name="eqKartabl04" component={EqKartabl04} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails" component={RequestDetails} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails2" component={RequestDetails2} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails3" component={RequestDetails3} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails4" component={RequestDetails4} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails5" component={RequestDetails5} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails5Pe" component={RequestDetails5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails7Pe" component={RequestDetails7Pe} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails20Pe" component={RequestDetails20Pe} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails6" component={RequestDetails6} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails6Pe" component={RequestDetails6Pe} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails66Pe" component={RequestDetails66Pe} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails7" component={RequestDetails7} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails8Pe" component={RequestDetails8Pe} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails9Pe" component={RequestDetails9Pe} options={{headerShown:false}}/>
      <Stack.Screen name="requestdetails10Pe" component={RequestDetails10Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirm1" component={NotConfirm1} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirm2" component={NotConfirm2} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirm3" component={NotConfirm3} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirm3Pe" component={NotConfirm3Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirm4Pe" component={NotConfirm4Pe} options={{headerShown:false}}/>
      <Stack.Screen name="notconfirm5Pe" component={NotConfirm5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="confirm1" component={Confirm1} options={{headerShown:false}}/>
      <Stack.Screen name="confirm2" component={Confirm2} options={{headerShown:false}}/>
      <Stack.Screen name="confirm3" component={Confirm3} options={{headerShown:false}}/>
      <Stack.Screen name="confirm3Pe" component={Confirm3Pe} options={{headerShown:false}}/>
      <Stack.Screen name="confirm4Pe" component={Confirm4Pe} options={{headerShown:false}}/>
      <Stack.Screen name="confirm5Pe" component={Confirm5Pe} options={{headerShown:false}}/>
      <Stack.Screen name="mainPage" component={MainPage} options={{headerShown:false}}/>
      <Stack.Screen name="powerplant" component={PowerPlant} options={{headerShown:false}}/>
      <Stack.Screen name="pInfo" component={PInfo} options={{headerShown:false}}/>
      <Stack.Screen name="iInfo" component={IInfo} options={{headerShown:false}}/>
      <Stack.Screen name="galleryMain" component={GalleryMain} options={{headerShown:false}}/>
    </Stack.Navigator>
  )

};

export default function App() {
   return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
   );   
}



