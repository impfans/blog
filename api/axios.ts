// @ts-ignore
import axios from 'axios';
// 拦截器===request
// @ts-ignore
axios.interceptors.request.use(config => {

  return config;
});

// 拦截器===respone
// @ts-ignore
axios.interceptors.response.use(response => {
  return response;
},
  (error: any) => {
    if (error.response) {
    }
    return Promise.reject(error);
  }
);

axios.defaults.withCredentials = false;

export default axios;
