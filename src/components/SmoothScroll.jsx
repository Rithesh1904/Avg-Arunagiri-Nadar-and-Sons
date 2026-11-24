import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    // Only enable smooth wheel on non-reduced-motion environments
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Detect if device is primary touch (mobile/tablet)
    const isTouchOnly = window.matchMedia('(pointer: coarse) and (hover: none)').matches;

    // Highly calibrated, responsive scroll configuration
    // Uses lerp (linear interpolation) for instantaneous response, natural momentum, and zero sluggishness
    const lenis = new Lenis({
      lerp: 0.1, // Gold-standard responsive interpolation (instantaneous reaction, silky smooth settling)
      wheelMultiplier: 1.15, // Responsive 1:1.15 scroll speed so scrolling feels effortless and brisk
      touchMultiplier: 1.0,
      smoothWheel: !isTouchOnly, // Fluid wheel smoothing on laptops/desktops
      syncTouch: false, // Keep native 120Hz finger response on mobile/touch screens
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

