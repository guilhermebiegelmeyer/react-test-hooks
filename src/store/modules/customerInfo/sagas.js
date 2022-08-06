import { takeLatest, call, put, all } from "redux-saga/effects";

import {
    changeInfo
} from './actions'

function getInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                info: 'Info Saga',
            })
        }, 3000)
    })
}

function* getNewInfo() {
    console.log('Saga - getNewInfo')

    const dataReturn = yield call(getInfo)

    console.log('SAGA - Retorno do call GetInfo ', dataReturn.info)

    yield put(changeInfo(dataReturn.info))
}

export default all([
    takeLatest('customerInfo/GET_NEW_INFO', getNewInfo)
])