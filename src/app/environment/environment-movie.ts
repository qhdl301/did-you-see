import { BoxOfficeDetailInterface, BoxOfficeListInterface } from "./environment-interface";

const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + (today.getDate() - 1)).slice(-2);

export const BoxOfficeListConf : BoxOfficeListInterface = {
    serviceUrl : '/boxoffice/searchDailyBoxOfficeList.json?',
    token: '9430c2c33b50e50ac0a085c9774f6855',
    targetDt : `${year}${month}${day}`,
};

export const BoxOfficeDetailConf : BoxOfficeDetailInterface = {
    serviceUrl : '/movie/searchMovieInfo.json?',
    token: '9430c2c33b50e50ac0a085c9774f6855',
};