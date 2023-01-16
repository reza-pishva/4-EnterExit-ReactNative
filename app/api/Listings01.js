import client from './client';
const endpoint = 'http://172.28.232.27:8000';
const getListing1 = () => client.get(endpoint);
export default{getListing1};