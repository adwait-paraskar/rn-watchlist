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
import stockPriceData from './StockPriceData';

const MyWatchlistApp = combineReducers({
    nav,
    stocks,
    watchlist,
    stockPriceData,
});

export default MyWatchlistApp;