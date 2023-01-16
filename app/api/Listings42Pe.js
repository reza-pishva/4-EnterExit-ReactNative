import client from './client';
const endpoint = '/car-mob-pe';
const getListing42 = (id) => client.get(endpoint+'/'+id);
export default{getListing42};