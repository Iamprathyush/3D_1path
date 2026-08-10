import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const stopTimerRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Set initial position off-screen so it doesn't flash at the corner
    gsap.set([dot, circle], { x: -100, y: -100, xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot snaps instantly to cursor
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
        ease: "none",
      });

      // Circle follows with a smooth lag
      gsap.to(circle, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power3.out",
      });

      // Clear existing stop timer and reset
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = setTimeout(() => {
        // After 200ms of no movement, snap circle to dot
        gsap.to(circle, {
          x: mouseX,
          y: mouseY,
          duration: 0.35,
          ease: "back.out(2)",
        });
      }, 200);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(stopTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot — the actual cursor position */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-white"
        style={{ transform: "translate(-50%, -50%)", mixBlendMode: "difference" }}
      />
      {/* Circle — the follower */}
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border border-white"
        style={{ transform: "translate(-50%, -50%)", mixBlendMode: "difference" }}
      />
    </>
  );
};

export default CustomCursor;
