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

/*
export const requestStockPriceData = id => {
    return {
        type: 'REQUEST_STOCK_PRICE_DATA',
        id
    }
};

export const receiveStockPriceData = (id, json) => {
    return{
        type: 'RECEIVE_STOCK_PRICE_DATA',
        id, 
        //needs modification
        priceData: json.data.children.map(child => child.data), 
    }    
}

fechStockPriceData = (stockId) => {
    return (dispatch, getState) => {    
    //dispatch requestPriceData
    //get ticker from ID
    //call API to get series data 
    //dispatch recievePriceData with id and json        
    }
};
*/