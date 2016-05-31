import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Component/Header'
import Body from './Component/Body'

class Root extends React.Component {

    render = ()=> {

        return (
            <div style={{height: '100%'}}>
                <Header/>
                <Body/>
            </div>
        )
    }
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);