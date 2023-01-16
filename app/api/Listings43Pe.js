import client from './client';
const endpoint = '/el-mob-pe';
const getListing43 = (id) => client.get(endpoint+'/'+id);
export default{getListing43};