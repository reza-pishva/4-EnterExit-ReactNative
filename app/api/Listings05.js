import client from './client';
const endpoint = '/mob-level3-eq';
const getListing12 = () => client.get(endpoint);
export default{getListing12};