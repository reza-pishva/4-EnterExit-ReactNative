import axios, {create} from 'axios';
//import {https} from 'https';
const apiClient=axios.create({
     //baseURL:'http://172.28.232.27:8000',
     
     //baseURL:'https://www.rezapishva.ir',
     //baseURL:'https://stnt.mapnaom-kz.com',
     baseURL:'http://stnt.mapnaom-kz.com:8000',
     // httpAgent:new https.Agent({
     //      rejectUnauthorized:false
     // })

});
export default apiClient;