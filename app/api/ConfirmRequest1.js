import client from './client';

const endpoint = '/mob_confirm_req1_eq';

const confirmRequest1 = (id_exit) => {
    const data = new FormData();
    data.append('id_exit',id_exit);
    return client.post(endpoint,data);
};


export default{confirmRequest1};