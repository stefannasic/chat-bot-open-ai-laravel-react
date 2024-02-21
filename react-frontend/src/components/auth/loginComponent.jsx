import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authStyles.css';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberChange = () => {
        setRemember(!remember);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-content-wrapper">
                        <input type="text" name="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
                    </div>

                    <div className="form-content-wrapper">
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                    </div>

                    <div className="form-content-wrapper">
                        <label htmlFor="remember_me">
                            <input id="remember_me" type="checkbox" checked={remember} onChange={handleRememberChange} />
                            <span>Remember me</span>
                        </label>
                    </div>

                    <div className="form-content-wrapper">
                        <button type="submit">Log in</button>
                    </div>

                    <div className="form-content-wrapper">
                        <Link to="/register">Don't have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;