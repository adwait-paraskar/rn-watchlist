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

const MyWatchlistApp = combineReducers({
    nav,
    stocks,
    watchlist,
});

export default MyWatchlistApp;