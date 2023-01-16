import client from './client';
const endpoint = '/goodstotal-eq';
const getRequestType = () => client.get(endpoint);
export default{getRequestType};