import client from './client';
const endpoint = '/eq-mob-pe';
const getListing44 = (id) => client.get(endpoint+'/'+id);
export default{getListing44};