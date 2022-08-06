import React from 'react'
import CustomerAddressView from './CustomerAddressView'

import {
    getNewInfo,
} from '../../store/modules/customerInfo/actions'

import { useDispatch, useSelector } from 'react-redux'

const CustomerAddressController = () => {
    const info = useSelector(state => state.customerInfo.info)
    const dispatch = useDispatch()

    const changeInfoSaga = () => {
        dispatch(getNewInfo())
    }

    return (
        <CustomerAddressView
            info={info}
            changeInfoSaga={changeInfoSaga}
        />
    )
}

export default CustomerAddressController