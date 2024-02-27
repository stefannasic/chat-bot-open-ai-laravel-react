import React, { useState } from 'react';
import useAuthContext from '../../../context/authContext';
import axios from '../../../api/axios';

const UpdateProfileComponent = () => {
    const {user} = useAuthContext();
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [profileUpdated, setProfileUpdated] = useState(false);
    const [errors, setErrors] = useState('');

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/profile/update', {
                name: name,
                email: email,
            });
            if (response.data.status === 'profile-updated') {
                setProfileUpdated(true);
                setTimeout(() => {
                    setProfileUpdated(false);
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
                <h2>Profile Information</h2>
                <p>Update your account's profile information and email address.</p>
            </div>

            <form onSubmit={handleProfileUpdate}>
                <div>
                    <input id="name" name="name" type="text" value={name || user.name} onChange={(e) => setName(e.target.value)} required autoFocus />
                    {errors.name && <div className='errors'>{errors.name}</div>}
                </div>

                <div>
                    <input id="email" name="email" type="email" value={email || user.email} onChange={(e) => setEmail(e.target.value)} required />
                    {errors.email && <div className='errors'>{errors.email}</div>}
                </div>

                <div>
                    <button type="submit">Save</button>
                    {profileUpdated && (
                        <p className="message">
                            Saved.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UpdateProfileComponent;
