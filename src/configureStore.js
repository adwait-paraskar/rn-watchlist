import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import MyWatchlistApp from './reducers';

function configureStore(onComplete) {
    const store = createStore(
        MyWatchlistApp,
        undefined,
        compose(
            applyMiddleware(thunkMiddleware),
            autoRehydrate()
        ));
    persistStore(store, { storage: AsyncStorage }, onComplete);
    return store;
}

export default configureStore;
