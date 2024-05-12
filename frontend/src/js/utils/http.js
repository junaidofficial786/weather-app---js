/*
  ! @Author: Muddusar Zulfiqar
  ! @Last Modified by: Muddusar Zulfiqar
  * Description: This file contains the http file for the application.
*/
import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    timeout: 5000
});

http.interceptors.request.use(
    (config) => {
        config.headers['X-Access-Token'] = localStorage.getItem("token")
            ? `${localStorage.getItem("token")}`
            : "";
        // config.headers.Cookie = document.cookie;

        return config;
    },
    (error) => {

        // check if error is section timeout
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {

        return response.data;
    },
    (error) => {

        // if (error?.response?.status === 401) {
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("user");
        //   window.location.reload();
        // }
        return Promise.reject(error);
    }
);

export default http;

// ? Path: src/utils/http.js