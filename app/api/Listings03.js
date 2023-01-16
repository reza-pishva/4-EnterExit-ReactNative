import client from './client';
const endpoint = '/mob-level-3-eq';
const getListing3 = () => client.get(endpoint);
export default{getListing3};