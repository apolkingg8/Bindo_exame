import React from 'react'
import _ from 'lodash'

import InputWithTitle from './InputWithTitle'

class Inventory extends React.Component {

    render = ()=> {

        return (
            <div className="content-page">
                <h1 className="content-page__title">
                    Inventory #123
                </h1>
                <div className="content-page__body">
                    <div className="content-page__body-top">
                        <div className="content-page__body-left">
                            <InputWithTitle title="123"/>
                            <InputWithTitle title="123"/>
                            <InputWithTitle title="123"/>
                        </div>
                        <div className="content-page__body-right">
                            <InputWithTitle title="123"/>
                            <InputWithTitle title="123"/>
                            <InputWithTitle title="123"/>
                        </div>
                    </div>
                    <div className="content-page__body-bottom">
                        <InputWithTitle title="123" type="textarea"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory