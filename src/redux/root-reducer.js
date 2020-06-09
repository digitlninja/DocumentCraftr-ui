import {combineReducers} from 'redux';
import documentsReducer from './documents/document-reducers';
import resourcesReducer from './resources/resource-reducers';

const rootReducer = combineReducers({
    documentData: documentsReducer,
    resourceData: resourcesReducer
});

export default rootReducer;