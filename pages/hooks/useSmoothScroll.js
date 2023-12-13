import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const useSmoothScroll = () => {
  useEffect(() => {
    const navbarLinks = document.querySelectorAll('.navbar-link');

    navbarLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 70
          }
        });
      });
    });
  }, []);
};

export default useSmoothScroll;
