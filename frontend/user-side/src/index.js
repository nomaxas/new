import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './assets/css/open-iconic-bootstrap.min.css';
import './assets/css/animate.css';
// import './assetsa/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/aos.css';
import './assets/css/ionicons.min.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/jquery.timepicker.css';
import './assets/css/flaticon.css';
import './assets/css/icomoon.css';
import './assets/css/style.css';

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
