import React from 'react'
import CustomerPhoneView from './CustomerPhoneView'

import {
    changeInfo,
} from '../../store/modules/customerInfo/actions'

import { useDispatch, useSelector } from 'react-redux'

const CustomerPhoneController = () => {
    const info = useSelector(state => state.customerInfo.info)
    const dispatch = useDispatch()

    const changeReducer = () => {
        dispatch(changeInfo('Info do Reducer'))
    }

    return (
        <CustomerPhoneView
            info={info}
            changeInfoSaga={changeReducer}
        />
    )
}

export default CustomerPhoneController