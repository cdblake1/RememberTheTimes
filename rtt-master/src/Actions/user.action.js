export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = 'USER_LOGOUT_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const UPDATE_USER_DATA_FAILURE = 'UPDATE_USER_DATA_FAILURE';
export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';


function fetchUserData() {
    return {
        type: FETCH_USER_DATA
    }
}

function fetchUserDataFailure(err) {
    type: FETCH_USER_DATA_FAILURE,
        err
}

function fetchUserDataSuccess(res) {
    type: FETCH_USER_DATA_SUCCESS,
        res
}

function userLogin(email, password) {
    type: USER_LOGIN,
        email, password
}

function userLoginFailure(err) {
    type: USER_LOGIN_FAILURE,
        err
}

function userLoginSuccess(res) {
    type: USER_LOGIN_SUCCESS,
        res
}

function userLogout() {
    type: USER_LOGOUT
}

function receiveUserData(userData) {
    type: RECEIVE_USER_DATA,
        userData
}

function updateUserData(dataType, data) {
    type: UPDATE_USER_DATA,
        dataType, data
}

