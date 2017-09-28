import { getCurrentPrice, getChartData } from './PriceDataHelper';

export const toggleStock = id => {
    return {
        type: 'TOGGLE_STOCK_SELECTION',
        id,
    }
};

export const viewStockDetails = id => {
    return {
        type: 'VIEW_STOCK_DETAILS',
        id,
    }
};

export const requestPriceData = id => {
    return {
        type: 'REQUEST_STOCK_PRICE_DATA',
        id
    }
};

//TODO:handle error here as separate dispatch action?
export const receivePriceData = (id, json) => {
    if (json["Meta Data"] && json["Time Series (Daily)"]) {
        return {
            type: 'RECEIVE_STOCK_PRICE_DATA',
            id,
            currentPrice: getCurrentPrice(json),
            chartData: getChartData(json),
        }
    }
    else{
        console.log("failed API response");
        return {
            type: 'RECEIVE_STOCK_PRICE_DATA_FAILURE',
            id,
        }
    }
    
}

const REQUEST_URL =
    'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=STUC6J6GO0NRGUH2&symbol=';

export function fechStockData(stockId, ticker) {
    return (dispatch, getState) => {
        dispatch(requestPriceData(stockId));

        let apiUrl = REQUEST_URL + ticker;
        return fetch(apiUrl)
            .then(
            (response) => response.json(),
            error => console.log('An error occured.', error)
            )
            .then((responseJson) => {
                dispatch(receivePriceData(stockId, responseJson));
            })
    }
};