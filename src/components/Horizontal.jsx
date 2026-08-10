import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const textContent = "One clear path from overlooked to unforgettable.";

const Horizontal = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const charRefs = useRef([]);

  // Reset charRefs on every render to avoid stale references
  charRefs.current = [];

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const text = textRef.current;
      const chars = charRefs.current;

      const scrollTween = gsap.to(text, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          start: "center center",
          end: "+=1500px",
          scrub: true,
        },
      });

      chars.forEach((char) => {
        if (!char) return;
        gsap.from(char, {
          yPercent: "random(-200, 200)",
          rotation: "random(-20, 20)",
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "left 30%",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-black" ref={containerRef}>
      <section className="h-72 overflow-hidden flex items-center" ref={wrapperRef}>
        <div className="container">
          <h3 
            className="flex w-max whitespace-nowrap pl-[100vw] text-white special-font font-zentry uppercase heading-xl" 
            ref={textRef}
          >
            {textContent.split(" ").map((word, wordIndex) => (
              <div key={wordIndex} className="inline-block mr-4 md:mr-8">
                {word.split("").map((char, charIndex) => {
                  return (
                    <span
                      key={charIndex}
                      ref={(el) => {
                        if (el) charRefs.current.push(el);
                      }}
                      className="inline-block"
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            ))}
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Horizontal;
