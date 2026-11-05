'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Eindeloze carrousel die traag vanzelf loopt en die je zelf kunt bewegen: horizontaal
 * scrollen met de trackpad, swipen op touch of slepen met de muis (met een beetje
 * uitloop). Beweegt met een transform, zodat ook een trage snelheid vloeiend loopt.
 * Stopt bij hover, tijdens slepen, met de pauzeknop, buiten beeld en bij reduced motion.
 * De inhoud staat er twee keer in; de kopie is verborgen voor schermlezers.
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

    let pos = 0;
    let half = track.scrollWidth / 2;
    let hover = false;
    let focused = false;
    let visible = true;
    let holdUntil = 0; // na zelf bewegen even wachten voor de band weer vanzelf loopt
    let velocity = 0; // uitloop na slepen of swipen (px per seconde)
    let drag: { id: number; x: number; y: number; start: number; moved: boolean; lastX: number; lastT: number } | null = null;
    let justDragged = false;
    let raf = 0;
    let prev = 0;

    const wrap = () => {
      if (half <= 0) return;
      pos = ((pos % half) + half) % half;
    };
    const render = () => {
      track.style.transform = `translate3d(${-pos}px,0,0)`;
    };
    const hold = (ms: number) => (holdUntil = performance.now() + ms);

    const tick = (now: number) => {
      const dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0;
      prev = now;
      if (!drag && Math.abs(velocity) > 5) {
        pos += velocity * dt;
        velocity *= Math.pow(0.04, dt); // zachte uitloop
        wrap();
        render();
      } else if (!calm && visible && !hover && !focused && !drag && !pausedRef.current && now > holdUntil) {
        pos += (half / duration) * dt;
        wrap();
        render();
      }
      raf = requestAnimationFrame(tick);
    };

    // Horizontaal scrollen met trackpad of shift+wiel; verticaal scrollen blijft de pagina
    const onWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!dx) return;
      e.preventDefault();
      velocity = 0;
      pos += dx;
      wrap();
      render();
      hold(1200);
    };
    const onEnter = () => (hover = true);
    const onLeave = () => (hover = false);
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      velocity = 0;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, start: pos, moved: false, lastX: e.clientX, lastT: performance.now() };
    };
    const onMove = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x;
      if (!drag.moved) {
        if (Math.abs(dx) < 6) return;
        // Op touch: eerst verticaal bewogen? Dan is het scrollen van de pagina
        if (Math.abs(e.clientY - drag.y) > Math.abs(dx)) {
          drag = null;
          return;
        }
        drag.moved = true;
        el.setPointerCapture(drag.id);
        el.classList.add('is-dragging');
      }
      const now = performance.now();
      const dtm = Math.max(1, now - drag.lastT);
      velocity = 0.8 * velocity + 0.2 * (-(e.clientX - drag.lastX) / dtm) * 1000;
      drag.lastX = e.clientX;
      drag.lastT = now;
      pos = drag.start - dx;
      wrap();
      render();
    };
    const onUp = () => {
      if (!drag) return;
      justDragged = drag.moved;
      if (!drag.moved) velocity = 0;
      drag = null;
      el.classList.remove('is-dragging');
      hold(1500);
    };
    // Na slepen geen klik op de link eronder
    const onClick = (e: MouseEvent) => {
      if (!justDragged) return;
      e.preventDefault();
      e.stopPropagation();
      justDragged = false;
    };
    // Toetsenbord: de gefocuste case in beeld schuiven en de band laten stilstaan
    const onFocusIn = (e: FocusEvent) => {
      focused = true;
      el.scrollLeft = 0;
      const t = e.target as HTMLElement;
      const box = el.getBoundingClientRect();
      const r = t.getBoundingClientRect();
      if (r.left < box.left || r.right > box.right) {
        pos += r.left - box.left - 24;
        wrap();
        render();
      }
    };
    const onFocusOut = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node)) focused = false;
    };
    const ro = new ResizeObserver(() => {
      half = track.scrollWidth / 2;
      wrap();
      render();
    });
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));

    ro.observe(track);
    io.observe(el);
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('click', onClick, true);
    el.addEventListener('focusin', onFocusIn);
    el.addEventListener('focusout', onFocusOut);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      el.removeEventListener('click', onClick, true);
      el.removeEventListener('focusin', onFocusIn);
      el.removeEventListener('focusout', onFocusOut);
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
