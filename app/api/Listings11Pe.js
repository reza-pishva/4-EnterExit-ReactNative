import client from './client';
const endpoint = '/level-4-mob-pe';
const getListing24 = (part) => client.get(endpoint+'/'+part);
export default{getListing24};