import { combineReducers } from 'redux';
import nav from './Navigation';
import watchlist from './Watchlist';

const MyWatchlistApp = combineReducers({
    nav,
    watchlist,
});

export default MyWatchlistApp;