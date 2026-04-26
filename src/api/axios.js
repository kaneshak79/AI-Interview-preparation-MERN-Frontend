// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api"
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export default API;


import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL:"https://ai-interview-preparation-mern-backend.onrender.com/api",
});

// ✅ Attach token to EVERY request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;