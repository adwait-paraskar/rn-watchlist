/*    
    watchlist: [stockId],
    priceDataByStock: {
        id: {
            isFetching: true,
            didInvalidate: false,
            lastUpdated: timestamp,
            series: {},            
        }
    },
    stocks: {
        1: {
            id: 1,
            ticker:AAPL,
            name: 'Apple Computers Inc',
            logo: logoUrl,
        }
    }
*/
import { combineReducers } from 'redux';
import nav from './Navigation';
import watchlist from './Watchlist';
import stocks from './Stocks';

const showDetailsOf = (state = null, action) => {
    console.log("showDetails Of ACTION", action);
    switch (action.type) {
        case 'StockDetailsScreen':
        return  {...state, id: action.params.id };
        default:
            return state;
    }
};

const MyWatchlistApp = combineReducers({
    nav,
    stocks,
    watchlist,    
    showDetailsOf, 
});

export default MyWatchlistApp;