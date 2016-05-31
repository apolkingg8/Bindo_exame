import React from 'react'

import SideMenu from './SideMenu'
import Inventory from './Inventory'

class Body extends React.Component {

    state = {
        routeName: "Inventory"
    }

    _onItemClick = (itemName, i)=> {

        this.setState({
            routeName: itemName
        })
    }

    _renderContent = ()=> {
        let {routeName} = this.state,
            res

        switch(routeName) {
            case 'Sales':
                res = (
                    <div>
                        Sales
                    </div>
                )
                break

            case 'Inventory':
                res = (
                    <Inventory/>
                )
                break

            case 'Suppliers':
                res = (
                    <div>
                        Suppliers
                    </div>
                )
                break

            case 'Costumers':
                res = (
                    <div>
                        Costumers
                    </div>
                )
                break
        }

        return res
    }

    render = ()=> {


        return (
            <div className="body">
                <SideMenu
                    items={['Sales', 'Inventory', 'Suppliers', 'Costumers']}
                    onItemClick={this._onItemClick}
                />
                {this._renderContent()}
            </div>
        )
    }
}

export default Body