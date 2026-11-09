import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    // Only enable smooth wheel on non-reduced-motion environments
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Detect if device is primary touch (mobile/tablet)
    const isTouchOnly = window.matchMedia('(pointer: coarse) and (hover: none)').matches;

    // Professional, silky, highly-calibrated scroll configuration
    const lenis = new Lenis({
      duration: 1.0, // Snappy & controlled: avoids endless floating while staying silky smooth
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like smooth exponential curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isTouchOnly, // Smooth wheel on laptops/desktops
      wheelMultiplier: 1.0, // Natural 1:1 scroll speed (never sluggish)
      touchMultiplier: 1.0,
      smoothTouch: false, // CRITICAL: NEVER smooth touch on mobile to preserve 120Hz native finger response
      infinite: false,
      autoResize: true,
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return null;
}
