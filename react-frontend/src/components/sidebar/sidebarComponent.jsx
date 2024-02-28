import React from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../context/authContext';
import './sidebarStyles.css';

const SidebarComponent = () => {

    const {logout} = useAuthContext();

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
            <Link to="/" className="sidebar-link" id="preferencesLink">
            <img src="assets/images/options.svg" alt="" />
            <p> Preferences </p>
            </Link>

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
