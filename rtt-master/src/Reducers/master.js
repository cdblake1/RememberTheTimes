import userData from './user.reducer';
import { combineReducers } from 'redux';


const master = combineReducers({
    userData
})

export { master as default }

