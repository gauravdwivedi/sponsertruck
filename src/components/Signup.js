import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Sign-up</span>
                <div className="field">
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="field">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="field">
                    <input className="password" placeholder="password" required />
                </div>
                <div className="field">
                    <input className="password" placeholder="confirm-password" required />
                </div>
                <div className="field">
                    <button>Signup</button>
                </div>

            </form>
        );
    }
}

export default Signup;