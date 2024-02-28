import React, { useState } from 'react';
import axios from '../../../api/axios';

const UpdatePasswordComponent = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [errors, setErrors] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put('/profile/updatePassword', {
                current_password: currentPassword,
                password: password,
                password_confirmation: passwordConfirmation
            });
            setCurrentPassword('');
            setPassword('');
            setPasswordConfirmation('');
            if (response.data.status === 'password-updated') {
                setPasswordUpdated(true);
                setTimeout(() => {
                    setPasswordUpdated(false);
                }, 3000);  
            }
        } catch (e) {
            if(e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    return (
        <div>
            <div>
                <h2>Update Password</h2>
                <p>Ensure your account is using a long, random password to stay secure.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="password" name="current_password" id="current_password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                    {errors.current_password && <div className='errors'>{errors.current_password}</div>}
                </div>

                <div>
                    <input type="password" name="password" id="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {errors.password && <div className='errors'>{errors.password}</div>}
                </div>

                <div>
                    <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
                </div>

                <div>
                    <button type="submit">Save</button>
                    {passwordUpdated && (
                        <p className="message">
                            Saved.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UpdatePasswordComponent;
