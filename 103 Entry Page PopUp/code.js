import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import './App.css';
import back from './Assets/Background.jpg';

const WelcomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenHomePopup');
        if (!hasSeenPopup) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenHomePopup', 'true');
    };

    return (
        <Modal
            title={<span className="popup-title">🎉 Welcome to Your Project!</span>}
            open={isVisible}
            onCancel={handleClose}
            width={900} 
            footer={[
                <Button key="ok" type="primary" onClick={handleClose} className="custom-button">
                    Got It!
                </Button>
            ]}
            className="custom-popup"
        >
            <div className="popup-image-container">
                <img src={back} alt="Welcome Banner" />
            </div>
            <p className="popup-message">
                Welcome to your homepage! 🚀  Enjoy exploring the app!
            </p>
        </Modal>
    );
};

export default WelcomePopup;



/* Modal Content */
.custom-popup .ant-modal-content {
  border-radius: 20px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
}

/* Header Styling */
.custom-popup .ant-modal-header {
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

/* Image Section */
.popup-image-container img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  max-height: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  /* margin-bottom: px; */
  animation: fadeIn 1.2s ease-in-out;
}

/* Popup Message Styling */
.popup-message {
  font-size: 1.3rem;
  line-height: 1.4;
  color: #e0e0e0;
  padding: 0 10px;
  animation: slideUp 1s ease;
}

/* Footer Button */
.custom-popup .ant-modal-footer {
  border-top: none;
  text-align: center;
}

.custom-popup .custom-button {
  background: linear-gradient(135deg, #4caf50, #45a049);
  border: none;
  border-radius: 30px;
  padding: 12px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.5);
}

.custom-popup .custom-button:hover {
  background: linear-gradient(135deg, #45a049, #3d8c43);
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.8);
}

.custom-popup .custom-button:active {
  transform: translateY(3px);
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.5);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Title Styling */
.popup-title {
  color: white;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.4);
  animation: glowPulse 1.5s infinite;
}

@keyframes glowPulse {
  0%, 100% { text-shadow: 0 2px 10px rgba(255, 255, 255, 0.4); }
  50% { text-shadow: 0 4px 20px rgba(255, 255, 255, 0.8); }
}
