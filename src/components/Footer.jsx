import { useState, useEffect } from 'react';
import developer from '../assets/developer.jpg'

function Footer() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
      setShowImage(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`fixed bottom-0 right-0 w-full text-gray text-center p-2 sm:flex-row sm:w-auto ${showImage ? 'block' : 'hidden'}`}>
    Developed by <strong className='text-red-600'>&copy; Sohan</strong> <img src={developer} alt="Image Description" className="inline-block ml-2 w-9 h-9 rounded-[5px]" />
    </footer>
  );
}

export default Footer;
