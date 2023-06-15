import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({scrollRef}) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pathname, scrollRef]);

  return null;
}

export default ScrollToTop;