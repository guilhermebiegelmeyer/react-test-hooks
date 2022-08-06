import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import allReducers from './modules/allReducers'
import allSagas from './modules/allSagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const store = createStore(allReducers, applyMiddleware(...middlewares))

sagaMiddleware.run(allSagas);

export default store