import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction('StockSelectorScreen');
const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'WatchlistScreen':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'WatchlistScreen',
          params: action.params
        }),
        state
      );
      break;
    case 'StockDetailsScreen':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'StockDetailsScreen',
          params: action.params
        }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
  }
  return nextState || state;
};

export default nav;
