import axios from 'axios';
import cookies from 'js-cookie';

export const getInfo = function () {
    const token = cookies.get('rtt-token');
    return axios({
        method: 'get',
        url: '/api/users/current',
        headers: {
            'Authorization': 'Token ' + token
        }
    })
}

export const register = function (data) {
    console.log(data);
    axios.post('/api/users', {
        user: data
    })
        .then((res) => {
            login(data.email, data.password);
        });
}

export const login = function (email, password) {
    axios.post('/api/users/login', { user: { email, password } })
        .then(function (res) {
            cookies.set('rtt-token', res.data.user.token);
            console.log(cookies.get('rtt-token'));
        });
}

export const logout = function () {
    return axios.get('/api/users/logout')
}


export const setProperty = function (email, prop) {
    axios.post('/api/users/' + prop.prop, { email: email, value: prop.value })
        .then(alert(prop.prop + ' updated to ' + prop.value))
}

