import React from 'react';
import { useSpring, animated } from 'react-spring';

const BackToTop = () => {
  const props = useSpring({
    opacity: window.scrollY > 100 ? 1 : 0,
    transform: window.scrollY > 100 ? 'translateY(0)' : 'translateY(20px)',
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <animated.div
      className="back-to-top"
      style={props}
      onClick={scrollToTop}
    >
      &#8593; {/* Unicode arrow character */}
    </animated.div>
  );
};

export default BackToTop;
