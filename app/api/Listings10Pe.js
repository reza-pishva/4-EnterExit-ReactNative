import client from './client';
const endpoint = '/level-1-mob-pe';
const getListing23 = (part) => client.get(endpoint+'/'+part);
export default{getListing23};