import * as actions from '../Actions/user.action';
import stateTypes from '../Constants/stateTypes';
import stateResponses from '../Constants/stateResponses';
import { combineReducers } from 'redux';

function fetchingUserData(state = {}, action) {
    switch (action.type) {
        case actions.FETCH_USER_DATA:
            return { ...state, [stateTypes.fetchingUserData]: stateResponses.open }
        default:
            return state
    }
}

function fetchUserDataFailure(state = {}, action) {
    switch (action.type) {
        case actions.FETCH_USER_DATA_FAILURE:
            return { ...state, [stateTypes.fetchingUserData]: stateResponses.close }
        default:
            return state;
    }
}


function fetchUserDataSuccess(state = {}, action) {
    switch (action.type) {
        case actions.FETCH_USER_DATA_FAILURE:
            return { ...state, [stateTypes.fetchingUserData]: stateResponses.close }
        default:
            return state;
    }
}

function userLogin(state = {}, action) {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, [stateTypes.attemptingToLogin]: stateResponses.open }
        default:
            return state;
    }
}

function userLoginFailure(state = {}, action) {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, [stateTypes.attemptingToLogin]: stateResponses.close }
        default:
            return state;
    }
}

function userLoginSuccess(state = {}, action) {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, [stateTypes.attemptingToLogin]: stateResponses.close, [stateTypes.loggedin]: stateResponses.USER_LOGIN_SUCCESS }
        default:
            return state;
    }
}

function receiveUserdata(state = {}, action) {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, [stateTypes.userData]: action.userData }
        default:
            return state;
    }
}

function updatingUserData(state = {}, action) {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, [stateTypes.updatingUserData]: action.open }
        default:
            return state;
    }
}

function updateUserDataFailure(state = {}, action) {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, [stateTypes.updatingUserData]: action.close }
        default:
            return state;
    }
}

function updateUserDataSuccess(state = {}, action) {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, [stateTypes.updatingUserData]: action.close }
        default:
            return state;
    }
}



const userReducer = combineReducers({
    fetchingUserData: fetchingUserData,
    fetchUserDataFailure: fetchUserDataFailure,
    fetchUserDataSuccess: fetchUserDataSuccess,
    userLogin: userLogin,
    userLoginFailure: userLoginFailure,
    userLoginSuccess: userLoginSuccess,
    receiveUserdata: receiveUserdata,
    updatingUserData: updatingUserData,
    updateUserDataFailure: updateUserDataFailure,
    updateUserDataSuccess: updateUserDataSuccess

})

export { userReducer as default };