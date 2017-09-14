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
        currentPrice: [], 
        chartData: {series: [], labels: []} 
    },
    action
) {
    switch (action.type) {
        case 'REQUEST_STOCK_PRICE_DATA':
            return Object.assign({}, state, {
                isFetching: true,
                // currentPrice: [], //temporary fix
                // chartData: [],
            })
        case 'RECEIVE_STOCK_PRICE_DATA': 
        console.log("RECEIVE_STOCK_PRICE_DATA",action.currentPrice);
        console.log(action.chartData.series);
        console.log(action.chartData.labels);
        return Object.assign({}, state, {
            isFetching: false,
            currentPrice: action.currentPrice,
            chartData: action.chartData,
        })
        default: 
            return state;
    }
};
export default stockPriceData;