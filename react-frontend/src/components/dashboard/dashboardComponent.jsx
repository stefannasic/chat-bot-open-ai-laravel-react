import React, { useEffect, useState } from 'react';
import './dashboardStyles.css';

const DashboardComponent = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        setName("John Doe");
    }, []);

    return (
        <div className="right-container">
            <div className="dashboard-content">
                <div className="welcome-message">
                    Hi, {name}. How can I help you today?
                </div>

                <div className="messages">
                <div className="request"><img src="/assets/images/user.svg" alt="" /><div className="content"><p>message</p></div></div>
                <div className="response"><img src="/assets/images/robot.svg" alt="" /><div className="content"><p>response</p></div></div>
                </div>

                <div className="send">
                    <form id="message-form">
                        <input type="text" name="message" id="message" placeholder="Message..." autoComplete="off" required />
                        <button type="submit"><img src="/assets/images/send.svg" alt="" /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;