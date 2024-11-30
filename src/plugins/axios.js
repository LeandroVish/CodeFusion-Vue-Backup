import axios from 'axios'

axios.defaults.baseURL = 'http://0.0.0.0:19003/api'

axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
