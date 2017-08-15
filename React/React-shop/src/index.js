/* eslint-disable */
import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'

import reducers from 'reducers' // импортируем все редьюсеры из папки reducers
import Layout from 'containers/layout'
import Phones from 'containers/phones'
import Phone from 'containers/phone'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk) // т.о. все наши middleware применяться к Store
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones} />
            </Route>
            <Route path="phones/:id" component={Phone}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)