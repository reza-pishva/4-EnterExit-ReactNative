import client from './client';
const endpoint = '/mob_level2_pe';
const getListing22 = (part) => client.get(endpoint+'/'+part);
export default{getListing22};