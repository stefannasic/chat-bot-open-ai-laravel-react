import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './authStyles.css';

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (name.length < 3) {
                setError({ name: 'Name must be at least 3 characters long' });
                return;
            }

            if (!email.includes('@')) {
                setError({ email: 'Invalid email format' });
                return;
            }

            if (password.length < 6) {
                setError({ password: 'Password must be at least 6 characters long' });
                return;
            }

            if (password !== passwordConfirmation) {
                setError({ passwordConfirmation: 'Passwords do not match' });
                return;
            }

            await axios.post('http://localhost:8000/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            });
            setName('');
            setEmail('');
            setPassword('');
            setPasswordConfirmation('');
            navigate('/login');
        } catch (error) {
            setError({ general: 'Registration failed. Please try again.' });
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2>Register</h2>
                {error.general && <div className='errors'>{error.general}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-content-wrapper">
                        <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Full Name" required />
                        {error.name && <div className='errors'>{error.name}</div>}
                    </div>

                    <div className="form-content-wrapper">
                        <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Email Address" required />
                        {error.email && <div className='errors'>{error.email}</div>}
                    </div>

                    <div className="form-content-wrapper">
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                        {error.password && <div className='errors'>{error.password}</div>}
                    </div>

                    <div className="form-content-wrapper">
                        <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} placeholder="Confirm Password" required />
                        {error.passwordConfirmation && <div className='errors'>{error.passwordConfirmation}</div>}
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
