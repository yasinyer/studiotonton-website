'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Eindeloze carrousel die traag vanzelf loopt, maar die je ook zelf kunt scrollen
 * (trackpad, touch) of met de muis kunt slepen. Stopt bij hover, tijdens slepen of
 * scrollen, met de pauzeknop en bij reduced motion. De inhoud staat er twee keer in;
 * de tweede kopie is verborgen voor schermlezers.
 */
export function Marquee({
  row,
  duration,
  paused = false,
  className = '',
}: {
  /** Eén rij inhoud; `hidden` is true voor de kopie */
  row: (hidden: boolean) => ReactNode;
  /** Seconden voor één volledige ronde */
  duration: number;
  paused?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const el = ref.current;
    const track = el?.firstElementChild as HTMLElement | null;
    if (!el || !track) return;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let pos = 0; // eigen positie, met kommagetallen, zodat ook trage snelheden vloeiend lopen
    let hover = false;
    let visible = true;
    let holdUntil = 0; // even wachten na zelf scrollen
    let drag: { id: number; x: number; left: number; moved: boolean } | null = null;
    let justDragged = false;
    let raf = 0;
    let prev = 0;

    const half = () => track.scrollWidth / 2;
    const wrap = () => {
      const h = half();
      if (h <= 0) return;
      if (pos >= h) pos -= h;
      if (pos < 0) pos += h;
    };
    const apply = () => {
      el.scrollLeft = pos;
    };

    const tick = (now: number) => {
      const dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0;
      prev = now;
      if (!calm && visible && !hover && !drag && !pausedRef.current && now > holdUntil) {
        pos += (half() / duration) * dt;
        wrap();
        apply();
      }
      raf = requestAnimationFrame(tick);
    };

    // Zelf gescrold (trackpad, touch, toetsenbord): positie overnemen en even pauzeren
    const onScroll = () => {
      if (Math.abs(el.scrollLeft - pos) <= 1.5) return;
      pos = el.scrollLeft;
      const before = pos;
      wrap();
      if (pos !== before) apply();
      holdUntil = performance.now() + 1200;
    };
    const onEnter = () => (hover = true);
    const onLeave = () => (hover = false);
    const onTouch = () => (holdUntil = performance.now() + 2000);
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch' || e.button !== 0) return;
      drag = { id: e.pointerId, x: e.clientX, left: pos, moved: false };
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      if (!drag.moved) {
        if (Math.abs(e.clientX - drag.x) < 4) return;
        drag.moved = true;
        el.setPointerCapture(drag.id);
        el.classList.add('is-dragging');
      }
      pos = drag.left - (e.clientX - drag.x);
      wrap();
      apply();
    };
    const onUp = () => {
      if (!drag) return;
      justDragged = drag.moved;
      drag = null;
      el.classList.remove('is-dragging');
    };
    // Na slepen geen klik op de link eronder
    const onClick = (e: MouseEvent) => {
      if (!justDragged) return;
      e.preventDefault();
      e.stopPropagation();
      justDragged = false;
    };
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));

    io.observe(el);
    el.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('touchstart', onTouch, { passive: true });
    el.addEventListener('touchmove', onTouch, { passive: true });
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('click', onClick, true);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchstart', onTouch);
      el.removeEventListener('touchmove', onTouch);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, [duration]);

  return (
    <div ref={ref} className={`mq ${className}`}>
      <div className="mq__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
