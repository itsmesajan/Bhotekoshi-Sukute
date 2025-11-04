import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis';

const useLenisScroll = () => {
   const [lenis, setLenis] = useState(null);

   useEffect(() => {
     const lenisInstance = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
     });

     const raf = (time) => {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
     };

     requestAnimationFrame(raf);
     setLenis(lenisInstance);

     return () => {
        lenisInstance.destroy();
     };
   }, []);

   // 💡 Expose the lenis instance
   return lenis;
};

export default useLenisScroll;