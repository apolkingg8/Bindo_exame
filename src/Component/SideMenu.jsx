import React from 'react'
import _ from 'lodash'

class SideMenu extends React.Component {

    static defaultProps = {
        items: [],
        onItemClick: ()=> {}
    }

    _renderItems = ()=> {
        let {items, onItemClick} = this.props,
            res = []

        _.forEach(items, (itemName, i)=> {
            res.push(
                <div key={i}
                     className="sub-menu__item"
                     onClick={()=> {onItemClick(itemName, i)}}
                >
                    {itemName}
                </div>
            )
        })

        return res
    }

    render = ()=> {

        return (
            <div className="side-menu">
                {this._renderItems()}
            </div>
        )
    }
}

export default SideMenu