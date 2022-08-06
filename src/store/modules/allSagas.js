import { all } from  'redux-saga/effects'

import customerInfo from './customerInfo/sagas'

export default function* rootSaga() {
    return yield all([customerInfo])
}