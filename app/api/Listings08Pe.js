import client from './client';
const endpoint = '/level1-mob-pe';
const getListing21 = (part) => client.get(endpoint+'/'+part);
export default{getListing21};