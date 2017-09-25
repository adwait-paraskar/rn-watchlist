const stockPriceData = (state = { isRefreshing: false }, action) => {
    switch (action.type) {
        case 'REQUEST_STOCK_PRICE_DATA':
            let isRefreshing = true;
        case 'RECEIVE_STOCK_PRICE_DATA':
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
        currentPrice: [],
        chartData: { series: [], labels: [] }
    },
    action
) {
    switch (action.type) {
        case 'REQUEST_STOCK_PRICE_DATA':
            return Object.assign({}, state, {
                isFetching: true,
            })
        case 'RECEIVE_STOCK_PRICE_DATA':
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