import client from './client';
const endpoint = '/mob-level4-eq';
const getListing2 = () => client.get(endpoint);
export default{getListing2};