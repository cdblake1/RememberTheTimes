import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Utilities/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Utilities/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.min.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Views/App/App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
