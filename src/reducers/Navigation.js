import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction('StockSelectorScreen');
const nav = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        // case 'StockSelectorScreen':
        // console.log("---->in nav to StockSelectorScreen");
        //     nextState = AppNavigator.router.getStateForAction(
        //         NavigationActions.back(),
        //         state
        //     );
        //     break;
        case 'WatchlistScreen':
            console.log("---->in nav to watchlist");
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'WatchlistScreen' }),
                state
            );            
            break;
        case 'StockDetailsScreen':
            console.log("---->in nav to stock details", action);
            console.log("---->in nav to stock details state", state);
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'StockDetailsScreen', 
                params: action.params }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
    }
    return nextState || state;
};


export default nav;