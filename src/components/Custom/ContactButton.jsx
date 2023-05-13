import React, { useState, useEffect } from 'react';

function ContactButton() {
  const [showButton, setShowButton] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(buttonTimer);
  }, []);

  useEffect(() => {
    if (showButton) {
      const promptTimer = setTimeout(() => {
        setShowPrompt(true);
      }, 500);
      return () => clearTimeout(promptTimer);
    }
  }, [showButton]);

  const phone = '1836141078'; // replace with your WhatsApp number
  const message = 'Hello, I have a question!'; // replace with your default message

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleIconClick = () => {
    setShowButton(false);
    setShowPrompt(false);
  };

  return (
    <>
      {showButton && (
        <div
          className={`fixed bottom-8 left-2 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-12 md:bottom-16 lg:left-2 ${
            showPrompt ? 'transform sm:transform-none' : 'transition-left duration-500'
          }`}
        >
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 110-16 8 8 0 010 16zm-1.75-5.25a1.25 1.25 0 111.768-1.768 1.25 1.25 0 01-1.768 1.768zm4.5-4.5a1.25 1.25 0 11-1.768 1.768 1.25 1.25 0 011.768-1.768zm-4.5-3a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                clipRule="evenodd"
              />
            </svg>
            Chat with Us on WhatsApp
            <span
              className="ml-2 text-gray-400 hover:text-gray-500 cursor-pointer"
              onClick={handleIconClick}
            >
              X
            </span>
          </button>
        </div>
      )}
    </>
  );
}

export default ContactButton;
