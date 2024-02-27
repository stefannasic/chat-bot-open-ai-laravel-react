import React, { useState } from 'react';
import axios from '../../../api/axios';

const DeleteUserComponent = () => {
    const [password, setPassword] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [errors, setErrors] = useState('');

    const handleOpenClick = () => {
        setShowConfirmation(true);
    };

    const handleCancelClick = () => {
        setShowConfirmation(false);
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        try {
            await axios.delete('/profile/destroy', { data: { password } });
            setPassword('');
            window.location.reload();
        } catch (e) {
            if (e.response.status === 422) {
                setErrors('Incorrect password');
            }
        }
    };

    return (
        <div>
            <div>
                <h2>Delete Account</h2>
                <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
            </div>

            {!showConfirmation ? <>
                <button onClick={handleOpenClick}>Delete Account</button>
            </> : <>
                <div>
                    <h2>Are you sure you want to delete your account?</h2>
                    <p>Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.</p>

                    <form onSubmit={handleDeleteAccount}>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        {errors && <div className='errors'>{errors}</div>}
                        <div>
                            <button type="button" onClick={handleCancelClick}>Cancel</button>
                            <button type="submit">Delete Account</button>
                        </div>
                    </form>
                </div>
            </>}
        </div>
    );
};

export default DeleteUserComponent;
