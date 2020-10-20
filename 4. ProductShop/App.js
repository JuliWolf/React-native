import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

import ShopNavigation from './navigation/ShopNavigator';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if(!fontLoaded){
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={(err) => console.log(err)}
        />
    }

    return (
        <Provider store={store}>
            <ShopNavigation/>
        </Provider>
    );
}