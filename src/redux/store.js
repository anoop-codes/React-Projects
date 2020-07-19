import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { statisticsReducer } from './statistics/statistics-reducer';

const rootReducer = combineReducers({
    statisticsData: statisticsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))