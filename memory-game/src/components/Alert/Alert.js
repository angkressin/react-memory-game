import React from "react";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <span>
                    {this.props.children}
                </span>
                <Alert stack={{limit: 3}} />
            </div>
        )
    }
}

export default Main;
