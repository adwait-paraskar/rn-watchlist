const stockPriceData = (state = { isRefreshing: false }, action) => {
    switch (action.type) {
        case 'REQUEST_STOCK_PRICE_DATA':
            let isRefreshing = true;
        case 'RECEIVE_STOCK_PRICE_DATA':
        case 'RECEIVE_STOCK_PRICE_DATA_FAILURE':
            isRefreshing = false;
            return Object.assign({}, state, {
                isRefreshing,
                [action.id]: stocks(state[action.id], action)
            })
        default:
            return state;
    }
};

function stocks(
    state = {
        isFetching: false,
        error: false,
        currentPrice: [],
        chartData: { series: [], labels: [] }
    },
    action
) {
    switch (action.type) {
        case 'REQUEST_STOCK_PRICE_DATA':
            return Object.assign({}, state, {
                isFetching: true,
                error: false,
            })
        case 'RECEIVE_STOCK_PRICE_DATA':
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                currentPrice: action.currentPrice,
                chartData: action.chartData,
            })
        case 'RECEIVE_STOCK_PRICE_DATA_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: true,
            })
        default:
            return state;
    }
};
export default stockPriceData;