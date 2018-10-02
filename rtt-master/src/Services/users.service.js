
import axios from 'axios';

export const getInfo = function () {
    axios.get('/api/users/current')
        .then(res => res);
}

export const register = function (email, password) {
    axios.post('/api/users', {
        user: { email, password }
    })
        .then((res) => {
            login(email, password);
        });
}

export const login = function (email, password) {
    axios.post('/api/users/login', { user: { email, password } })
        .then(alert('Login successful for ' + email));
}


export const setProperty = function (email, prop) {
    axios.post('/api/users/' + prop.prop, { email: email, value: prop.value })
        .then(alert(prop.prop + ' updated to ' + prop.value))
}

