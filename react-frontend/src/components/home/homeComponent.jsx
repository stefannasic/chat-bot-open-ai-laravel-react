import React from 'react';
import { Link } from 'react-router-dom';
import './homeStyles.css';

const HomeComponent = () => {
    const isLoggedIn = () => {
        return false;
    };

    return (
        <div>
            <div className="navbar">
                {isLoggedIn() ? (
                    <div>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">Log in</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </div>

            <div className="main">
                <img src="/assets/images/logo500.svg" alt="logo" />
                <h1>Chat Bot Open AI</h1>
                <p>Empowering Connections: Embark on a Journey with ChatBot OpenAI - Your Passport to Explore the World of Conversations</p>
                {isLoggedIn() ? (
                    <div>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">Log in</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeComponent;