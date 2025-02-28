import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import anime from 'animejs';

import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    // Faster fade-in effect
    gsap.to(bgRef.current, {
      opacity: 1,
      duration: 1, // Reduced from 2s to 1s
    });

    // Faster stroke animation
    anime({
      targets: outlineLogoRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 5000, // Reduced from 20000ms (20s) to 5000ms (5s)
      easing: 'easeInOutQuad', // Smoother acceleration
    });

    // Faster solid logo reveal
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2, // Reduced delay from 4s to 2s
        duration: 2, // Reduced from 4s to 2s
        rotation: 200,
        ease: 'power2.inOut', // Slightly faster ease
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <svg width="8000" height="8000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              ref={outlineLogoRef}
              d="M50 150 L100 20 L150 150 L130 150 L115 110 L85 110 L70 150 Z M93 95 L107 55 L122 95 Z"
              fill="black"
            />
          </svg>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
