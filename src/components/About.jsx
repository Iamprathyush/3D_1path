import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import FadeIn from "./FadeIn";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-10 flex flex-col items-center gap-5">
        <FadeIn direction="down" delay={0.05} duration={0.6}>
          <p className="font-general text-sm uppercase md:text-[10px]">
            Welcome to 1PathStudio
          </p>
        </FadeIn>

        <AnimatedTitle
          title="A<b> Clear</b> process.<br /> No disconecting <b>M</b>arketing."
          containerClass="mt-5 !text-black text-center"
        />

        <FadeIn direction="up" delay={0.2} duration={0.8} amount={0.3}>
          <div className="about-subtext">
            <p>Every engagement begins with understanding the business</p>
            <p className="text-gray-500">
              —not immediately producing content.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
