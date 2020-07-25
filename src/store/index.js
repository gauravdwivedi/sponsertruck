import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import logger from 'react-logger';
import reducer from '../reducers';
let store;

export function configureStore() {
    store = createStore(reducer, applyMiddleware(thunk));
    return store;
}