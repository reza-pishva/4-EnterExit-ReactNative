import client from './client';
const endpoint = '/mob_getuserinfo';
const getUser = (user,pass) => client.get(endpoint+'/'+user+'/'+pass);
export default{getUser};