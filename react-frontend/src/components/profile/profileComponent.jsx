import React from 'react';
import './profileStyles.css';
import SidebarComponent from '../sidebar/sidebarComponent';
import UpdateProfileComponent from './partials/updateProfileComponent';
import UpdatePasswordComponent from './partials/updatePasswordComponent';
import DeleteUserComponent from './partials/deleteUserComponent';

const ProfileComponent = () => {

    return (
        <div>
            <SidebarComponent />
            <div className="edit">
                <div className="right-container">
                    <div className="edit-container">
                        <div className="edit-wrapper">
                            <UpdateProfileComponent />
                        </div>
                    </div>

                    <div className="edit-container">
                        <div className="edit-wrapper">
                            <UpdatePasswordComponent />
                        </div>
                    </div>

                    <div className="edit-container">
                        <div className="edit-wrapper">
                            <DeleteUserComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ProfileComponent;