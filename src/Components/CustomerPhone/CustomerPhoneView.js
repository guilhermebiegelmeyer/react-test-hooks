import React from 'react'

const CustomerPhoneView = props => {
    return (
        <div>
            <div>Info: {props.info}</div>
            <button onClick={() => props.changeInfoSaga()}>Alterar Info Reducer</button>
        </div>
    )
}

export default CustomerPhoneView