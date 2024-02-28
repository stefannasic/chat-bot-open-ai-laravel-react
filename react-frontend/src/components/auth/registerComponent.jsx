import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../context/authContext';
import './authStyles.css';

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const {register, errors} = useAuthContext();

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
        register({name, email, password, password_confirmation:passwordConfirmation});
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-content-wrapper">
                        <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Full Name" required />        
                    </div>
                    {errors.name && <div className='errors'>{errors.name}</div>}

                    <div className="form-content-wrapper">
                        <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Email Address" required />
                    </div>
                    {errors.email && <div className='errors'>{errors.email}</div>}

                    <div className="form-content-wrapper">
                        <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />    
                    </div>
                    {errors.password && <div className='errors'>{errors.password}</div>}

                    <div className="form-content-wrapper">
                        <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} placeholder="Confirm Password" required />
                    </div>
                    {errors.passwordConfirmation && <div className='errors'>{errors.passwordConfirmation}</div>}

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
