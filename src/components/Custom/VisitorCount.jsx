import React, { useState, useEffect } from 'react';

function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Fetch visitor count from server-side API
    fetch('/api/visitor-count')
      .then(response => response.json())
      .then(data => setVisitorCount(data.count))
      .catch(error => console.error(error));

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove scroll event listener on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      setShow(true);
    }
  };

  return (
    <>
      {show && (
        <div className="fixed bottom-0 left-1 bg-white-550 text-gray-800 p-2 rounded-lg shadow-md items-center flex">
          <svg
            className="w-6 h-6 mr-2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-8a1 1 0 110-2 1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          <span>Visitor count:</span>
          <span className="ml-1 font-bold">{visitorCount}</span>
        </div>
      )}
    </>
  );
}

export default VisitorCount;
