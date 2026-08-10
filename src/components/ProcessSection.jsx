import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    label: "Discovery and Brand Audit",
    body: "We learn the business, the customer, and how the brand currently shows up.",
  },
  {
    num: "02",
    label: "Campaign Strategy",
    body: "Positioning, messaging, content pillars, channels, and what the campaign must prove.",
  },
  {
    num: "03",
    label: "Creative Planning",
    body: "Concepts, shot lists, scripts, and a production plan mapped to the calendar.",
  },
  {
    num: "04",
    label: "Production",
    body: "Video and photography captured in efficient, well-directed shoot days.",
  },
  {
    num: "05",
    label: "Launch and Distribution",
    body: "Social, website, search, and paid media go live as one connected release.",
  },
  {
    num: "06",
    label: "Reporting and Optimization",
    body: "We review performance, refine creative, and plan the next cycle.",
  },
];

const ProcessSection = () => {
  const pinRef = useRef(null);
  const fillRef = useRef(null);
  const listItemRefs = useRef([]);
  const slideRefs = useRef([]);

  useGSAP(
    () => {
      const fill = fillRef.current;
      const listItems = listItemRefs.current;
      const slides = slideRefs.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=" + steps.length * 50 + "%",
          pin: true,
          scrub: true,
        },
      });

      // Init fill bar — starts at 1/n height
      gsap.set(fill, {
        scaleY: 1 / steps.length,
        transformOrigin: "top left",
      });

      // First item & slide visible by default
      gsap.set(listItems[0], { color: "#0ae448" });
      gsap.set(slides[0], { autoAlpha: 1 });

      steps.forEach((_, i) => {
        const prev = i - 1;
        if (prev >= 0) {
          tl.set(listItems[i], { color: "#0ae448" }, 0.5 * i)
            .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
            .set(listItems[prev], { color: "rgba(255,252,225,0.25)" }, "<")
            .to(slides[prev], { autoAlpha: 0, duration: 0.2 }, "<");
        }
      });

      tl.to(
        fill,
        {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration(),
        },
        0
      ).to({}, {}); // small pause so it doesn't unpin immediately
    },
    { scope: pinRef }
  );

  return (
    <>
      {/* Spacer section before */}
      <section className="w-full flex justify-center items-center bg-black" style={{ height: "10vh" }} />

      {/* Pin section */}
      <section
        ref={pinRef}
        className="w-full h-screen flex flex-col bg-black overflow-hidden"
        style={{ boxSizing: "border-box" }}
      >
        {/* Headline */}
        <div className="w-full flex justify-center px-4 pt-32 pb-6">
          <AnimatedTitle
            title="A clear process.<br />No disconnected marketing."
            containerClass="!text-white [&>div]:!justify-center [&>div]:!px-0"
          />
        </div>

        {/* Two-column body: list LEFT, slides RIGHT */}
        <div
          className="flex my-5 w-1/2  mx-auto px-4 md:px-10 relative"
          style={{ overflow: "hidden" }}
        >
          {/* Left: list */}
          <ul
            className="relative flex flex-col justify-center gap-4 pr-8 md:pr-12 list-none m-0 p-0 shrink-0"
            style={{ minWidth: 160 }}
          >
            {/* Green fill bar */}
            <div
              ref={fillRef}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 1,
                height: "100%",
                backgroundColor: "#0ae448",
                transformOrigin: "top left",
              }}
            />

            {steps.map((step, i) => (
              <li
                key={i}
                ref={(el) => (listItemRefs.current[i] = el)}
                style={{ color: "rgba(255,252,225,0.25)", listStyle: "none" }}
              >
                <span className="special-font font-black text-xl md:text-2xl leading-none select-none">
                  Step {step.num}
                </span>
              </li>
            ))}
          </ul>

          {/* Right: slides */}
          <div className="relative flex-1">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "1rem",
                  width: "clamp(240px, 90%, 420px)",
                  opacity: 0,
                  visibility: "hidden",
                  borderRadius: 16,
                  backgroundColor: "#111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "2rem 1.75rem",
                  boxShadow: "0 0 60px rgba(10,228,72,0.05)",
                }}
              >
                <p
                  className="font-general uppercase tracking-widest mb-2"
                  style={{ fontSize: 11, color: "#0ae448", letterSpacing: "0.18em" }}
                >
                  Step {step.num}
                </p>
                <h3
                  className="special-font font-black uppercase leading-tight mb-3"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "#fffce1" }}
                >
                  {step.label}
                </h3>
                <p
                  className="font-general leading-relaxed"
                  style={{ fontSize: "clamp(0.8rem, 1.3vw, 0.95rem)", color: "rgba(255,252,225,0.55)" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-black" style={{ height: "10vh" }} />
    </>
  );
};

export default ProcessSection;
