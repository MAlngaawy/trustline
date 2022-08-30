import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default request;
