import client from './client';
const endpoint = '/mob-level-2p-eq';
const getListing14 = (part) => client.get(endpoint+'/'+part);
export default{getListing14};