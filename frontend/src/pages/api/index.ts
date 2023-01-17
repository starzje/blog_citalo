import axios from 'axios';
const url = 'http://localhost:1337/api/posts?populate=*';
export const readForum = () => axios.get(url);
// axios.post(url);
