import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();

        this.state = {
            email: '',
            password: ''
        }

    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.emailInputRef);
        // console.log(this.passwordInputRef);

        console.log('this.state :', this.state)
    }
    render() {

        return (
            <form className="login-form">
                <span className="login-signup-header">Login-In</span>
                <div className="field">
                    <input type="email" placeholder="Email" required
                        // ref={this.emailInputRef}
                        onChange={
                            this.handleEmailChange
                        }

                        value={this.state.email}
                    />
                </div>
                <div className="field">
                    <input className="password" placeholder="password" required
                        //  ref={this.passwordInputRef} 
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                    />
                </div>
                <div className="field">
                    <button onClick={this.handleFormSubmit}>Login</button>
                </div>

            </form>
        );
    }
}

export default Login;