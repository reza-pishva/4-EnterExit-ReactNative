import client from './client';
const endpoint = '/totalusers';
const getUsers = () => client.get(endpoint);
export default{getUsers};