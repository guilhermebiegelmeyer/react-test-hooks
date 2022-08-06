import React, {useRef, useState, useEffect} from 'react'

// import HomeHooksView from './HomeHooksView'
// import HomeHooksModel from './HomeHooksModel'

import CustomerAddressController from '../Components/CustomerAddress/CustomerAddressController'
import CustomerPhoneController from '../Components/CustomerPhone/CustomerPhoneController'

const HomeHooksController = () => {
    return (
        <div className="App">
            <CustomerAddressController />
            <CustomerPhoneController />
        </div>
    )

    // const homeHooksModel = useRef(null)
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     homeHooksModel.current = new HomeHooksModel()
    //     homeHooksModel.current.get()

    //     const timer = setInterval(() => {
    //         setCount(count => count + 1)
    //     }, 1000)

    //     return () => {
    //         console.log('nada')
    //         clearInterval(timer)
    //     }
    // }, [])

    // console.log('count', count)

    // return (
    //     <HomeHooksView params1={count}></HomeHooksView>
    // )
}

export default HomeHooksController