import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const SlidesSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".slide-panel");
      panels.pop(); // Remove the last panel so it just scrolls in normally without pinning

      panels.forEach((panel) => {
        gsap.to(panel, {
       
          scrollTrigger: {
            trigger: panel,
            start: "top top", // Pin when the panel hits the top of the viewport
            end: "+=100%", // Keep pinned for the height of the panel
            pinSpacing: false, // Do not add empty space below
            pin: true,
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  const sections = [
    {
      id: 1,
      title: "1- Campaign Strategy",
      subtitle:
        "Brand positioning, audience planning, content pillars, messaging, campaign concepts, and monthly direction.",
      img: "/img/about.webp",
      layout: "left-img",
      bg: "bg-white",
    },
    {
      id: 2,
      title: "2- Visual Production",
      subtitle:
        "Commercial videography, photography, short-form content, scripted videos, interviews, and location-based storytelling.",
      img: "/img/entrance.webp",
      layout: "right-img",
      bg: "bg-gray-200",
    },
    {
      id: 3,
      title: "3- Social Media and Content",
      subtitle:
        "Content calendars, Reels, captions, platform strategy, publishing direction, community engagement, and repurposing.",
      img: "/img/contact-1.webp",
      layout: "left-img",
      bg: "bg-white",
    },
    {
      id: 4,
      title: "4- Advertising and Visibility",
      subtitle:
        "Meta advertising, campaign creative, local search, SEO, landing pages, website strategy, and conversion-focused distribution.",
      img: "/img/swordman.webp",
      layout: "right-img",
      bg: "bg-gray-200",
    },
    {
      id: 5,
      title: "5- Reporting and Optimization",
      subtitle:
        "Performance reporting, creative analysis, campaign refinement, content recommendations, and next-step planning.",
      img: "/img/about.webp", // Reused since 4 images were provided
      layout: "left-img",
      bg: "bg-white",
    },
  ];

  return (
    <div className="slides-wrapper relative z-10 w-full bg-black bg-opacity-95" ref={containerRef}>
      {sections.map((sec) => (
        <section
          key={sec.id}
          className={`slide-panel w-full h-[100vh] flex justify-center items-center relative box-border overflow-hidden rounded-t-[30px] ${sec.bg}`}
        >
          <div className="slide-inner w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-5">
            
            {/* ROW 1: HEADLINE (Only on Section 1) */}
            {sec.id === 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full text-center md:text-left mb-6 md:mb-10"
              >
                <h1 className="special-font text-5xl md:text-6xl lg:text-7xl font-black uppercase text-black leading-[0.9]">
                  Everything your brand needs <br className="hidden md:block" /> 
                  <span className="text-gray-500">to become recognizable.</span>
                </h1>
              </motion.div>
            )}

            {/* ROW 2: CONTENT & IMG */}
            <div className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full ${sec.layout === "right-img" ? "md:flex-row-reverse" : ""}`}>
              {/* IMAGE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: sec.layout === "right-img" ? 50 : -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="w-full h-64 md:h-[55vh] object-cover rounded-[30px] shadow-2xl"
                />
              </motion.div>
              
              {/* TEXT CONTENT */}
              <motion.div 
                initial={{ opacity: 0, x: sec.layout === "right-img" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full md:w-1/2 flex flex-col items-start text-left shrink-0"
              >
                <div className="mb-3 w-full">
                  <h2 className="special-font text-lg md:text-2xl uppercase font-bold text-black mb-3">
                    {sec.title}
                  </h2>
                </div>
                <p className="font-general text-sm md:text-base text-gray-700 mb-6 max-w-md leading-relaxed">
                  {sec.subtitle}
                </p>
                
                {/* BUTTON */}
                <Button
                  id={`btn-${sec.id}`}
                  title="Explore"
                  leftIcon={<TiLocationArrow />}
                  containerClass="!bg-black !text-white flex items-center justify-center gap-2"
                />
              </motion.div>
            </div>
            
          </div>
        </section>
      ))}
    </div>
  );
};

export default SlidesSection;
