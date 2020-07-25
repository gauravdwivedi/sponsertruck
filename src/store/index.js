import {createStore,applyMiddleware} from ''
let store;

export function configureStore() {
    store = createStore(reducer, applyMiddleware(thunk));
    return store;
}