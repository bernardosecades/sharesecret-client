import React, { Component } from "react";
import ErrorSecret from "./ErrorSecret";
import SecretLink from "./SecretLink";

class SecretForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Secret content goes here...',
            secretUrl: null,
            errorMessage: null,
            isDisable: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        this.setState({
            isDisabled: true
        })

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: this.state.value })
        };

        fetch(process.env.REACT_APP_URL_SECRET_SERVER + '/secret', requestOptions)
            .then(res => res.json())
            .then(data => {
                if (!data.id) {
                    throw new Error(data.error);
                }
                this.setState({
                    secretUrl: process.env.REACT_APP_URL_SECRET_CLIENT + '/#/secret/' + data.id,
                    isDisabled: false,
                })
            })
            .catch(error => {
                this.setState({errorMessage: error.toString()})
            })
        event.preventDefault();
    }

    render() {

        if (this.state.errorMessage !== null) {
            return (
                <ErrorSecret errorMessage={this.state.errorMessage}/>
            );
        } else if (this.state.secretUrl !== null) {
            return (
                <SecretLink link={this.state.secretUrl} />
            );
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Paste a password, secret message or private link below.</p>
                        <textarea
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <p>Privacy Options</p>
                    <label>
                        <p>Password</p>
                        <input type="password"/>
                    </label>
                    <p>
                        <input type="submit" disabled={this.state.isDisable} value="Create a secret link" />
                    </p>
                </form>
            );
        }
    }
}

export default SecretForm;