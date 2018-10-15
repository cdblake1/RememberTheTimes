import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Utilities/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Utilities/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.min.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Views/App/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import master from './Reducers/master';


//Configure state storage
const store = createStore(master);
const unsubscribe = store.subscribe(() => console.log(store.getState()))

console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
