import axios from "axios";


let axiosInstance=axios.create({baseURL: "https://jsonplaceholder.typicode.com/users"})

const getUsers=()=> axiosInstance('').then(value => value)

const getPostsUser=(id)=>axiosInstance('/'+ id +'/posts')


export {getUsers,getPostsUser}