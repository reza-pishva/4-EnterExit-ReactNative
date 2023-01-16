import client from './client';
const endpoint = '/level-5-mob-pe';
const getListing25 = () => client.get(endpoint);
export default{getListing25};