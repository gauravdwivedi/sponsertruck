import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();

    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.emailInputRef);
        console.log(this.passwordInputRef);
    }
    render() {

        return (
            <form className="login-form">
                <span className="login-signup-header">Login-In</span>
                <div className="field">
                    <input type="email" placeholder="Email" required ref={this.emailInputRef} />
                </div>
                <div className="field">
                    <input className="password" placeholder="password" required ref={this.passwordInputRef} />
                </div>
                <div className="field">
                    <button onClick={this.handleFormSubmit}>Login</button>
                </div>

            </form>
        );
    }
}

export default Login;