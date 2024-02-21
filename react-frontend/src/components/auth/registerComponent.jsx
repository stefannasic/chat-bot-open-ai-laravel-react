import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authStyles.css';

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-content-wrapper">
                        <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Full Name" required />
                    </div>

                    <div className="form-content-wrapper">
                        <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Email Address" required />
                    </div>

                    <div className="form-content-wrapper">
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                    </div>

                    <div className="form-content-wrapper">
                        <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} placeholder="Confirm Password" required />
                    </div>

                    <div className="form-content-wrapper">
                        <button type="submit">REGISTER</button>
                    </div>

                    <div className="form-content-wrapper">
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterComponent;