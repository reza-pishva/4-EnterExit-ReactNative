import client from './client';
const endpoint = '/mob-level3-eq';
const getListing1 = () => client.get(endpoint);
export default{getListing1};