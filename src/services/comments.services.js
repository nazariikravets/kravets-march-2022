import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/comments',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }

})
const postComments=(post)=>axiosInstance.post('',post)

export {postComments}