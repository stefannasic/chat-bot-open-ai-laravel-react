import React, { useState, useRef, useEffect } from 'react';
import useAuthContext from '../../context/authContext';
import SidebarComponent from '../sidebar/sidebarComponent';
import axios from '../../api/axios';
import './dashboardStyles.css';

const DashboardComponent = () => {
    const { user } = useAuthContext();
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsTyping(true);
            setMessages(prevMessages => [...prevMessages, { type: 'user', content: messageInput }]);
            const response = await axios.post('/send-message', { message: messageInput });
            setMessageInput('');
            const reply = response.data.response;
            setMessages(prevMessages => [...prevMessages, { type: 'robot', content: reply }]);
            setIsTyping(false);
        } catch (error) {
            console.error(error);
            setIsTyping(false);
        }
    };

    return (
        <div>
            <SidebarComponent />
            <div className="right-container">
                <div className="dashboard-content">
                    <div className="welcome-message">
                        Hi, {user ? user.name : 'User'}. How can I help you today?
                    </div>

                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type === 'user' ? 'request' : 'response'}>
                                <img src={`/assets/images/${msg.type === 'user' ? 'user' : 'robot'}.svg`} alt="" />
                                <div className="content">
                                    <p>{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="response">
                                <img src="/assets/images/robot.svg" alt="" />
                                <div className="content typing-dots"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="send">
                        <form onSubmit={handleSubmit} id="message-form">
                            <input type="text" name="message" id="message" placeholder="Message..." autoComplete="off" required value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
                            <button type="submit"><img src="/assets/images/send.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;
