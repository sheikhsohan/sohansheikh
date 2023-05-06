import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { useState, useEffect } from 'react';

function CallButton({ phoneNumber }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeout;

    if (isHovered) {
      timeout = setTimeout(() => {
        setIsHovered(false);
      }, 1000);
    } else {
      timeout = setTimeout(() => {
        setIsHovered(true);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isHovered]);

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '450px',
    right: '10px',
    transform: 'translateY(-130%)',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    display: isVisible ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    zIndex: 10,
  };

  const buttonTextStyles = {
    position: 'fixed',
    bottom: '464px',
    right: '37px',
    transform: 'translateY(-50%)',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.2rem',
    borderRadius: '5px',
    display: isVisible ? 'block' : 'none',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 10,
  };

  return (
    <div>
      <button
        className="flex items-center floating-button"
        style={buttonStyle}
        onClick={handleCallClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <IoMdCall size={20} />
      </button>

      <div className="call-now-text" style={buttonTextStyles}>
        Call Me
      </div>
    </div>
  );
}

export default CallButton;
