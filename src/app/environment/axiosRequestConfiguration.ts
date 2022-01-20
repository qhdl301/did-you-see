import { AxiosRequestConfig } from "axios";

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};