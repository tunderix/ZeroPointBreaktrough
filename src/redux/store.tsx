import { createStore, combineReducers } from 'redux';
import counter from './reducers/counterReducer';

const rootReducer = combineReducers({
    counter
});

const configureStore = (): any => {
    return createStore(rootReducer);
};

export default configureStore;
