import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import { createHashHistory } from 'history';
import './index.css';
import Home from './home';
import Intro from './intro';
import Rank from './rank';
// import Scroller from './Scroller';
import * as serviceWorker from './serviceWorker';

const history = createHashHistory()

const Router = () => (
    <HashRouter history={history}>
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/rank" component={Rank} />
    </HashRouter>
)
ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
