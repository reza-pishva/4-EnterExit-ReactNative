import client from './client';
const endpoint = '/level-1-mob-eq';
const getListing13 = (part) => client.get(endpoint+'/'+part);
export default{getListing13};