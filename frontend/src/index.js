import 'purecss/build/pure.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { Provider } from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
const store = createStore(
	reducer,
	composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(<BrowserRouter>
					<Provider store={ store }>
						<App />
					</Provider>
				</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
