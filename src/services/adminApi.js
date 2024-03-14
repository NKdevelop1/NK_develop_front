import axios from "axios"

// const client = axios.create({
//   // baseURL: process.env.REACT_APP_API,
//   baseURL: "http://localhost:3001/",
//   headers: {
//       "Content-Type": "application/json",
//   },
// });

axios.defaults.withCredentials = true;

export const getAdMainNotice = async () =>{
  const data = await axios.get('/notice?_limit=8').then((res) => res.data);
  return data;
}

export const getAdMainStudent = async () =>{
  const data = await axios.get('/student?_limit=6').then((res) => res.data);
  return data;
}

export const getAdMainTeacher = async () =>{
  const data = await axios.get('/teacher?_limit=6').then((res) => res.data);
  return data;
}