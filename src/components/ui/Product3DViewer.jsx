import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Rotate3d, FlipHorizontal, Play, Pause, RefreshCw, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Product3DViewer({ product, className }) {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0, rotY: 0, rotX: 0 });
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Normalize rotation to 0 - 360 deg
  const normalizedY = ((rotationY % 360) + 360) % 360;
  const isBackFacing = normalizedY > 90 && normalizedY < 270;

  // Auto-spin turntable loop
  useEffect(() => {
    if (!isAutoSpinning) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    let lastTime = performance.now();
    const spinLoop = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      setRotationY((prev) => prev + delta * 45); // 45 deg/sec
      animationFrameRef.current = requestAnimationFrame(spinLoop);
    };

    animationFrameRef.current = requestAnimationFrame(spinLoop);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isAutoSpinning]);

  // Pointer drag events for free cursor rotation
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setIsAutoSpinning(false);
    setHasInteracted(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotY: rotationY,
      rotX: rotationX,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    // Horizontal movement spins Y axis
    const newRotY = dragStartRef.current.rotY + deltaX * 0.75;
    // Vertical movement tilts X axis gently (clamped between -30 and 30 deg)
    const newRotX = Math.max(-25, Math.min(25, dragStartRef.current.rotX - deltaY * 0.4));

    setRotationY(newRotY);
    setRotationX(newRotX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Flip 180 degrees directly to back or front
  const handleQuickFlip = () => {
    setIsAutoSpinning(false);
    setHasInteracted(true);
    setRotationX(0);
    if (isBackFacing) {
      // Flip back to front (closest 0 or 360)
      const target = Math.round(rotationY / 360) * 360;
      setRotationY(target);
    } else {
      // Flip to back (closest 180 or -180)
      const base = Math.floor(rotationY / 360) * 360;
      setRotationY(base + 180);
    }
  };

  // Reset orientation
  const handleReset = () => {
    setIsAutoSpinning(false);
    setRotationY(0);
    setRotationX(0);
  };

  const frontImg = product.image || `https://picsum.photos/seed/${product.id}/800/600`;
  const backImg = product.backImage || '/images/backside/galvalume-back.jpg';
  const backDesc = product.backDetails || 'Protective Factory Primer Backer Surface';

  return (
    <div className={cn("flex flex-col select-none", className)}>
      {/* 3D Viewport Box */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={cn(
          "relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-industrial-100 to-industrial-200 border border-industrial-300/80 shadow-inner flex items-center justify-center touch-none",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{ perspective: '1200px' }}
      >
        {/* Subtle radial lighting backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_70%)] pointer-events-none" />

        {/* 3D Rotating Double-Sided Card Container */}
        <div
          className="relative w-full h-full transition-transform duration-75 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          }}
        >
          {/* ================= FRONT FACE ================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-white shadow-xl flex items-center justify-center border border-industrial-200/50"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <img
              src={frontImg}
              alt={`${product.name} Front`}
              className="w-full h-full object-cover pointer-events-none"
              onError={(e) => {
                e.currentTarget.src = `https://picsum.photos/seed/${product.id}/800/600`;
              }}
            />

            {/* Realistic Light Reflection Overlay */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `linear-gradient(${105 + (rotationY % 90)}deg, rgba(255,255,255,0.25) 0%, transparent 60%)`,
                opacity: Math.cos((normalizedY * Math.PI) / 180) > 0 ? 0.7 : 0,
              }}
            />

            {/* Front Badge */}
            <div className="absolute top-3.5 left-3.5 z-20 bg-industrial-900/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Front Face View</span>
            </div>
          </div>

          {/* ================= BACK FACE ================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-industrial-100 shadow-xl flex items-center justify-center border border-industrial-300/80"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <img
              src={backImg}
              alt={`${product.name} Backside`}
              className="w-full h-full object-cover pointer-events-none"
              onError={(e) => {
                e.currentTarget.src = '/images/backside/galvalume-back.jpg';
              }}
            />

            {/* Backside Metallic Glare Reflection */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `linear-gradient(${75 - (rotationY % 90)}deg, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                opacity: isBackFacing ? 0.8 : 0,
              }}
            />

            {/* Backside Badge */}
            <div className="absolute top-3.5 left-3.5 z-20 bg-amber-500/95 backdrop-blur-md text-industrial-950 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <Rotate3d size={13} />
              <span>Authentic Backside View</span>
            </div>

            {/* Technical Backer Banner */}
            <div className="absolute bottom-3 inset-x-3 z-20 bg-black/85 backdrop-blur-md text-white/95 text-xs p-2.5 rounded-xl border border-white/10 shadow-lg flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent-400 shrink-0" />
              <p className="line-clamp-2 leading-tight font-medium text-[11px] md:text-xs">
                {backDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Free-Spin Interaction Hint (Disappears after user drags) */}
        {!hasInteracted && (
          <div className="absolute bottom-4 z-30 pointer-events-none animate-bounce">
            <div className="bg-black/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-white/20">
              <Rotate3d size={15} className="text-accent-400 animate-spin" />
              <span>Click & Drag Cursor to Spin 360°</span>
            </div>
          </div>
        )}

        {/* Status Indicator Pill */}
        <div className="absolute top-3.5 right-3.5 z-30 bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10 shadow">
          {isBackFacing ? 'Showing: Back' : 'Showing: Front'} • {Math.round(normalizedY)}°
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 bg-industrial-50/90 rounded-xl border border-industrial-200">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {/* Quick Flip Button */}
          <button
            type="button"
            onClick={handleQuickFlip}
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-industrial-900 hover:bg-industrial-800 text-white rounded-lg text-[11px] sm:text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer hover:shadow"
            title="Flip to opposite side"
          >
            <FlipHorizontal size={13} className="text-accent-400" />
            <span>{isBackFacing ? 'Flip to Front' : 'Flip to Backside'}</span>
          </button>

          {/* Auto Spin Turntable */}
          <button
            type="button"
            onClick={() => {
              setHasInteracted(true);
              setIsAutoSpinning(!isAutoSpinning);
            }}
            className={cn(
              "px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border",
              isAutoSpinning
                ? "bg-accent-500 text-industrial-950 border-accent-600 shadow-sm"
                : "bg-white hover:bg-industrial-100 text-industrial-800 border-industrial-200"
            )}
            title="Auto-spin 360 degrees"
          >
            {isAutoSpinning ? (
              <>
                <Pause size={12} />
                <span>Pause Spin</span>
              </>
            ) : (
              <>
                <Play size={12} />
                <span>Auto Spin 360°</span>
              </>
            )}
          </button>
        </div>

        {/* Reset View Button */}
        <button
          type="button"
          onClick={handleReset}
          className="p-1.5 sm:p-2 text-industrial-600 hover:text-industrial-900 bg-white hover:bg-industrial-100 rounded-lg border border-industrial-200 text-[11px] sm:text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
          title="Reset to default front view"
        >
          <RefreshCw size={12} />
          <span className="inline">Reset</span>
        </button>
      </div>

      <p className="text-[11px] text-industrial-500 mt-2 text-center">
        💡 <strong>Tip:</strong> Drag horizontally to spin 360°, drag vertically to tilt, or click <strong>Flip to Backside</strong> to inspect real sheet coating.
      </p>
    </div>
  );
}

