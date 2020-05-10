import { createStore, applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// 1st step : creating the store : 1. Reducer 2. State
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer , 
    initialState ,
    compose( 
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

export default store;