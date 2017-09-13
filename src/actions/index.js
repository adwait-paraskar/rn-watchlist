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

export const receivePriceData = (id, json) => {
    return {
        type: 'RECEIVE_STOCK_PRICE_DATA',
        id,        
        priceData: json, 
    }
}

const REQUEST_URL =
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=60min&apikey=STUC6J6GO0NRGUH2&symbol=';

export function fechStockData(stockId, ticker) {
    return (dispatch, getState) => {
        dispatch(requestPriceData(stockId));
        console.log("fetch state", getState());
        let apiUrl = REQUEST_URL + ticker;
        console.log("in fetchstockdata", stockId);
        return fetch(apiUrl)
            .then(
            (response) => response.json(),
            error => console.log('An error occured.', error)
            )
            .then((responseJson) => {
                //dispatch recievePriceData with id and json        
                console.log("responseJson", responseJson);
                dispatch(receivePriceData(stockId,responseJson));
            })
    }
};