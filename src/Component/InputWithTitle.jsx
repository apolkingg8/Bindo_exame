import React from 'react'
import _ from 'lodash'

class InputWithTitle extends React.Component {

    static defaultProps = {
        type: "text",
        title: ""
    }

    render = ()=> {

        if(this.props.type === "textarea") {
            return (
                <div className="input">
                    <div className="input__title">{this.props.title}</div>
                    <textarea/>
                </div>
            )
        }

        return (
            <div className="input">
                <div className="input__title">{this.props.title}</div>
                <input type={this.props.type}/>
            </div>
        )
    }
}

export default InputWithTitle