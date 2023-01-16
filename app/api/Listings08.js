import client from './client';
const endpoint = '/mob-level1-eq';
const getListing11 = (part) => client.get(endpoint+'/'+part);
export default{getListing11};