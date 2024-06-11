import React, { useState, useEffect } from 'react';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) { // หากเลื่อนหน้าจอลงมามากกว่า 100px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed-plugin">
      {isVisible && (
        <a
          className="fixed-plugin-button text-dark position-fixed px-3 py-2"
          style={{
            backgroundColor: '#fff',
            borderRadius: '50%',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            bottom: '20px', // ปรับตำแหน่งของปุ่มไปที่ขอบล่างของหน้า
            right: '20px' // ปรับตำแหน่งของปุ่มไปที่ขอบขวาของหน้า
          }}
          onClick={scrollToTop}
        >
          <i className="fas fa-caret-up" style={{ fontSize: '1.5rem' }}></i>
        </a>
      )}
    </div>
  );
}
