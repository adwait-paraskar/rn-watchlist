const stockPriceData = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_STOCK_PRICE_DATA':
        case 'RECEIVE_STOCK_PRICE_DATA': 
            return Object.assign({}, state, {
                [action.id]: stocks(state[action.id], action)
            })
        default:
            return state;
    }
};

function stocks(
    state = {
        isFetching: false,
        series: []
    },
    action
) {
    switch (action.type) {
        case 'REQUEST_STOCK_PRICE_DATA':
            return Object.assign({}, state, {
                isFetching: true,
                series: [], //temporary fix
            })
        case 'RECEIVE_STOCK_PRICE_DATA': 
        console.log("RECEIVE_STOCK_PRICE_DATA",action);
        return Object.assign({}, state, {
            isFetching: false,
            series: action.priceData,
        })
        default: 
            return state;
    }
};
export default stockPriceData;