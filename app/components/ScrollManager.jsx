'use client';

import { useEffect } from 'react';

export default function ScrollManager() {
  useEffect(() => {
    let timeout;

    const onScroll = () => {
      document.documentElement.classList.add('is-scrolling');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 800);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
