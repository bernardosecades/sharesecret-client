import React, { Component } from "react";

import ContentSecret from "./ContentSecret";
import ErrorSecret from "./ErrorSecret";

class SecretView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secretText: '',
            errorMessage: null,
        };
    }

    componentDidMount() {

        console.log(process.env.REACT_APP_URL_SECRET_SERVER);

        fetch(process.env.REACT_APP_URL_SECRET_SERVER + '/secret/' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                if (!data.content) {
                    throw new Error(data.error);
                }
                this.setState({ secretText: data.content })
            })
            .catch(error => {
                this.setState({errorMessage: error.toString()})
            })
    }

    render() {
        if (this.state.errorMessage !== null) {
            return (
                <ErrorSecret errorMessage={this.state.errorMessage}/>
            );
        } else {
            return (
                <div>
                    <h1>This message is for you:</h1>
                    <ContentSecret secretText={this.state.secretText} />
                    <p>Careful: we will only show it once</p>
                </div>
            );
        }
    }
}

export default SecretView;