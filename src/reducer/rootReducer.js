import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import sagaReducer from './sagaReducer.js';

const rootReducer = combineReducers({
    data:combineReducers({
        datas:sagaReducer,
        router: routerReducer
    }),
})
export default rootReducer;
