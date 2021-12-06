// import axios from "axios";

// const instance = axios.create({
//   withCredentials : true
// });

// instance.interceptors.request.use(
//   function (config) {
//     const token = getAuthToken();

//     if (token) config.headers.Authorization = `Bearer ${token}`;

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { message, response } = error;

//     if (response && response.status === 401) deleteUserData();

//     console.log("------------------");

//     if (response) console.log("status: ", response.status);

//     console.log("message: ", message);
//     console.log("------------------");
//     return Promise.reject(error);
//   }
// );

// export default instance;
