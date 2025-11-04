import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLenisScroll from '../../hooks/useLenisScroll';
// Ensure this path correctly points to your custom hook

const ScrollToTopWithLenis = () => {
    // 1. Get the current route path
    const { pathname } = useLocation(); 
    
    // 2. Get the active Lenis instance from the hook
    const lenis = useLenisScroll(); 

    useEffect(() => {
        // Only run if Lenis is initialized
        if (lenis) {
            // 🛑 Use the Lenis scrollTo method to reset the position
            // target: 0 (top of the page)
            // immediate: true ensures the scroll is instant on navigation, 
            // preventing a slow scroll animation between pages.
            lenis.scrollTo(0, { immediate: true }); 
        }
    }, [pathname, lenis]); // Re-runs on every route change

    return null; // This component is only for side effects
};

export default ScrollToTopWithLenis;