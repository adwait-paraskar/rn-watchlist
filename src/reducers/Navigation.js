import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction('StockSelectorScreen');

const nav = (state = initialNavState, action) => {
    console.log("action", action);
    const nextState = AppNavigator.router.getStateForAction(action, state);

    return nextState || state;
};
export default nav;