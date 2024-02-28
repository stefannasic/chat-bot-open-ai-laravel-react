import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../context/authContext';
import PreferencesComponent from './preferences/preferencesComponent';
import './sidebarStyles.css';

const SidebarComponent = () => {
    const [preferencesOpen, setPreferencesOpen] = useState(false);
    const { logout } = useAuthContext();

    const handlePreferencesClick = () => {
        setPreferencesOpen(!preferencesOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <div className="sidebar">
            <div className="top">
                <div className="logo">
                    <img src="assets/images/logo500.svg" alt="" />
                </div>

                <Link to="/" className="sidebar-link">
                    <img src="assets/images/home.svg" alt="" />
                    <p> Home </p>
                </Link>

                <Link to="/dashboard" className="sidebar-link">
                    <img src="assets/images/dashboard.svg" alt="" />
                    <p> Dashboard </p>
                </Link>
            </div>

            <div className="bottom">
                <div className={`preferences-container ${preferencesOpen ? 'active' : ''}`}>
                    <PreferencesComponent />
                </div>
                <button className="sidebar-link" onClick={handlePreferencesClick} id="preferencesLink">
                    <img src="assets/images/options.svg" alt="" />
                    <p> Preferences </p>
                </button>

                <Link to="/profile" className="sidebar-link">
                    <img src="assets/images/profile.svg" alt="" />
                    <p> Profile </p>
                </Link>

                <form onSubmit={handleSubmit}>
                    <button type="submit" className="sidebar-link">
                        <img src="assets/images/logout.svg" alt="" />
                        <p> Log Out </p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SidebarComponent;
