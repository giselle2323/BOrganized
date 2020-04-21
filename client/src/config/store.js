import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from '../reducers';


export default () => {
    const middlewares = applyMiddleware(thunk);
    const storeEnhancers = [middlewares];
    const composedEnhancer = composeWithDevTools(...storeEnhancers);
    const store = createStore(
        reducers,
        composedEnhancer,
    );
    return store;
}