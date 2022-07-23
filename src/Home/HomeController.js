import React from 'react'

import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends React.Component {
    constructor() {
        super()
        this.HomeModel = new HomeModel()
        this.HomeModel.get()

        this.state = {
            count: 0
        }

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)

    }
    render() {
        return (
            <HomeView params1={this.state.count} />
        )
    }
}

export default HomeController