import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './statistics/news-reducer';

const rootReducer = combineReducers({
    newsData: newsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
