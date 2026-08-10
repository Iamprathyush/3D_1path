import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import FadeIn from "./FadeIn";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <FadeIn direction="left" duration={0.8} delay={0.05}>
          <p className="font-circular-web text-lg text-blue-50">
            Marketing works better when everything works together.
          </p>
        </FadeIn>
        <FadeIn direction="left" duration={0.9} delay={0.2}>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            We connect strategy, production, distribution, and performance into
            one campaign designed to build familiarity before your customer is
            ready to buy.
          </p>
        </FadeIn>
      </div>

      <FadeIn direction="up" duration={0.9} delay={0.05} amount={0.1}>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[85vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>Chosen Before You're Found.</>}
            description="We don't build around what you sell—we build around how your customers decide. From the first scroll to the final booking, we engineer trust for Restaurants, Real Estate, Med Spas, Events, and every local business where reputation is the real currency.

"
            isComingSoon
          />
        </BentoTilt>
      </FadeIn>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <FadeIn direction="left" duration={0.8} delay={0.05} amount={0.1} className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoTilt className="size-full">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>Restaurant Growth Campaign</>}
              description="One connected visual campaign built around the dining experience, repeated weekly across social, search, and paid."
              isComingSoon
            />
          </BentoTilt>
        </FadeIn>

        <FadeIn direction="right" duration={0.8} delay={0.1} amount={0.1} className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoTilt className="size-full">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>Real Estate Authority Campaign</>}
              description="An always-on agent brand layer beneath listing-level content, so every property adds to a single reputation."
              isComingSoon
            />
          </BentoTilt>
        </FadeIn>

        <FadeIn direction="left" duration={0.8} delay={0.15} amount={0.1} className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoTilt className="size-full">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>Hospitality Content System</>}
              description="A quarterly production model that produces a full season of on-brand content in a small number of shoot days."
              isComingSoon
            />
          </BentoTilt>
        </FadeIn>

        <FadeIn direction="up" duration={0.8} delay={0.1} amount={0.1} className="bento-tilt_2">
          <BentoTilt className="size-full">
            <div className="flex size-full flex-col justify-between bg-gray-400 p-5">
              <h1 className="bento-title special-font max-w-96 text-black">
                Publish something, hope it reaches someone, repeat.
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
        </FadeIn>

        <FadeIn direction="right" duration={0.8} delay={0.15} amount={0.1} className="bento-tilt_2">
          <BentoTilt className="size-full">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Features;
