import React from 'react'

const CustomerAddressView = props => {
    return (
        <div>
            <div>Info: {props.info}</div>
            <button onClick={() => props.changeInfoSaga()}>Alterar Info Saga</button>
        </div>
    )
}

export default CustomerAddressView