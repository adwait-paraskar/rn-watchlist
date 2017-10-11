import { AVConfig } from '../env';

export function getTimeSeriesFetchUrl(series, ticker) {
    return `${AVConfig.BASE_URL}?apikey=${AVConfig.API_KEY}&function=${series}&symbol=${ticker}`;
}
