import client from './client';
const endpoint = '/peaple-mob-pe';
const getListing41 = (id) => client.get(endpoint+'/'+id);
export default{getListing41};