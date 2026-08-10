import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    tag: 'Stage 1: The Foundation',
    title: 'Strategy First.',
    sub: 'Know your audience before you create.',
    body: 'Data defines the goal. We map your audience, position your brand, and uncover opportunities—so every asset has purpose from day one.',
    img: '/img/three1.jpeg',
    side: 'left',
    panelClass: 'ts-panel-1',
  },
  {
    tag: 'Stage 2: The Execution Engine',
    title: 'Create + Distribute.',
    sub: 'One motion from production to placement.',
    body: 'We handle photography, video, and ads—then deliver them across social, search, and web. Message consistency, everywhere.',
    img: '/img/three2.jpeg',
    side: 'right',
    panelClass: 'ts-panel-2',
  },
  {
    tag: 'Stage 3: The Optimization Loop',
    title: 'Refine with Data.',
    sub: "Keep what works. Cut what doesn't.",
    body: "We track performance, identify winning assets, and plan next month's production. Continuous improvement, campaign after campaign.",
    img: '/img/three3.jpeg',
    side: 'left',
    panelClass: 'ts-panel-3',
  },
];

export default function ThreeScroll() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // --- Build the master timeline ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',   // 2 extra viewports = 3 stages total
          pin: true,       // GSAP pin — immune to parent overflow:hidden
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Starting states
      gsap.set('.ts-img-wrapper', { x: '25vw', rotation: 0 });
      gsap.set('.ts-img-1', { opacity: 1 });
      gsap.set('.ts-img-2', { opacity: 0 });
      gsap.set('.ts-img-3', { opacity: 0 });
      gsap.set('.ts-panel-2', { opacity: 0, y: 24 });
      gsap.set('.ts-panel-3', { opacity: 0, y: 24 });

      // ── Stage 1 → 2 ──────────────────────────────────────────
      tl
        // Image rolls to the LEFT
        .to('.ts-img-wrapper', { x: '-25vw', rotation: -360, duration: 1, ease: 'none' }, 0)
        // Crossfade images
        .to('.ts-img-1', { opacity: 0, duration: 0.4, ease: 'none' }, 0.3)
        .to('.ts-img-2', { opacity: 1, duration: 0.4, ease: 'none' }, 0.3)
        // Text swap
        .to('.ts-panel-1', { opacity: 0, y: -20, duration: 0.25, ease: 'none' }, 0.2)
        .to('.ts-panel-2', { opacity: 1, y: 0,   duration: 0.25, ease: 'none' }, 0.45)

      // ── Stage 2 → 3 ──────────────────────────────────────────
        // Image rolls back to the RIGHT
        .to('.ts-img-wrapper', { x: '25vw', rotation: -720, duration: 1, ease: 'none' }, 1)
        // Crossfade images
        .to('.ts-img-2', { opacity: 0, duration: 0.4, ease: 'none' }, 1.3)
        .to('.ts-img-3', { opacity: 1, duration: 0.4, ease: 'none' }, 1.3)
        // Text swap
        .to('.ts-panel-2', { opacity: 0, y: -20, duration: 0.25, ease: 'none' }, 1.2)
        .to('.ts-panel-3', { opacity: 1, y: 0,   duration: 0.25, ease: 'none' }, 1.45);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="ts-wrapper">
      <style>{`
        .ts-wrapper {
          background: #050505;
          color: #fff;
          width: 100%;
          position: relative;
        }

        /* The pinned section — GSAP takes care of keeping it on screen */
        .ts-section {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* ── Image (center) ─────────────────────── */
        .ts-image-area {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 0;
        }

        .ts-img-wrapper {
          position: relative;
          width: 28vw;
          height: 68vh;
          will-change: transform;
        }

        .ts-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          will-change: opacity;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.7));
        }

        /* ── Text panels (overlay, z-index over image) ─── */
        .ts-panels {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          pointer-events: none;
        }

        .ts-panel {
          position: absolute;
          width: 36%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          top: 50%;
          transform: translateY(-50%);
          will-change: opacity, transform;
        }

        .ts-panel-left  { left: 5%;  text-align: left; }
        .ts-panel-right { right: 5%; text-align: right; align-items: flex-end; }
        .ts-panel-right .animated-title > div { justify-content: flex-end !important; }

        .ts-tag {
          font-family: 'General Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #0ae448;
          margin: 0;
        }

        .ts-sub {
          color: rgba(255,255,255,0.65);
          margin: 0;
          font-size: clamp(0.9rem, 1.3vw, 1.1rem);
          line-height: 1.45;
        }

        .ts-body {
          color: rgba(255,255,255,0.4);
          margin: 0;
          font-size: clamp(0.78rem, 1vw, 0.9rem);
          line-height: 1.7;
          max-width: 400px;
        }

        .ts-panel-right .ts-body { margin-left: auto; }
      `}</style>

      <section ref={sectionRef} className="ts-section">
        {/* ── Centre image (GSAP moves this) ── */}
        <div className="ts-image-area">
          <div className="ts-img-wrapper">
            <img src="/img/three1.jpeg" alt="Stage 1" className="ts-img ts-img-1" />
            <img src="/img/three2.jpeg" alt="Stage 2" className="ts-img ts-img-2" />
            <img src="/img/three3.jpeg" alt="Stage 3" className="ts-img ts-img-3" />
          </div>
        </div>

        {/* ── Text panels (GSAP fades these in/out) ── */}
        <div className="ts-panels text-justify">

          {/* Panel 1 — left */}
          <div className="ts-panel ts-panel-left ts-panel-1">
            <p className="ts-tag">{stages[0].tag}</p>
            <AnimatedTitle
              title={stages[0].title}
              containerClass="!text-white [&>div]:!justify-start [&>div]:!px-0 [&>div]:!flex-nowrap !gap-0"
            />
            <p className="special-font ts-sub">{stages[0].sub}</p>
            <p className="font-general ts-body">{stages[0].body}</p>
          </div>

          {/* Panel 2 — right */}
          <div className="ts-panel ts-panel-right ts-panel-2">
            <p className="ts-tag">{stages[1].tag}</p>
            <AnimatedTitle
              title={stages[1].title}
              containerClass="!text-white [&>div]:!justify-end [&>div]:!px-0 [&>div]:!flex-nowrap !gap-0"
            />
            <p className="special-font ts-sub">{stages[1].sub}</p>
            <p className="font-general ts-body">{stages[1].body}</p>
          </div>

          {/* Panel 3 — left */}
          <div className="ts-panel ts-panel-left ts-panel-3">
            <p className="ts-tag">{stages[2].tag}</p>
            <AnimatedTitle
              title={stages[2].title}
              containerClass="!text-white [&>div]:!justify-start [&>div]:!px-0 [&>div]:!flex-nowrap !gap-0"
            />
            <p className="special-font ts-sub">{stages[2].sub}</p>
            <p className="font-general ts-body">{stages[2].body}</p>
          </div>

        </div>
      </section>
    </div>
  );
}
