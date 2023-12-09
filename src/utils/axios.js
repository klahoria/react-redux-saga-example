// axiosInterceptor.js
import axios from 'axios';
// import { useSelector } from 'react-redux';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'https://api.denefits.com:3020/', // Replace with your API base URL
});

const persistedState = JSON.parse(localStorage.getItem('persist:root'));

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log(config)
    // You can modify the request config here, such as adding headers
    // const user = useSelector(state => state.Login)
    // const token = user;
    if (config.url === 'get_settings') {
      config.data = {
        "device_type": 0,
        "app_type": 10,
        "app_version": 130,
        "device_token": "Website",
        "device_id": "05060558537361200005373608141230241701975466669",
        "device_info": {
          "browser": {
            "isFirefox": false,
            "isChrome": true,
            "isSafari": false,
            "isOpera": false,
            "isIE": false,
            "isEdge": false
          },
          "platform": "Win32",
          "userAgent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        },
        "environment": "t1"
      }
    }
    else {
      config.data = {
        "device_type": 0,
        "app_type": 10,
        "app_version": 130,
        "device_token": "Website",
        "device_id": "05060558537361200005373608141230241701975466669",
        ...config.data
      }
    }


    let token = JSON.parse(persistedState.Login)

    if (token && token.profile) {
      config.data.access_token = token.profile[0].access_token;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response here
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
