import client from './client';
const endpoint = '/mob-level2p-eq';
const getListing12 = (part) => client.get(endpoint+'/'+part);
export default{getListing12};