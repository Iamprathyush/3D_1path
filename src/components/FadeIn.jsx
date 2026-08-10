import { motion } from "framer-motion";

/**
 * FadeIn – reusable Framer Motion scroll-reveal wrapper.
 *
 * Props:
 *   direction: "up" | "down" | "left" | "right"  (default: "up")
 *   delay:     number (seconds, default 0)
 *   duration:  number (seconds, default 0.7)
 *   amount:    0–1 viewport threshold (default 0.15)
 *   once:      bool – animate only once (default false)
 *   className: extra classes for the wrapper
 */
const variants = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
};

const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.15,
  once = false,
  className = "",
  style = {},
}) => (
  <motion.div
    className={className}
    style={style}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={variants[direction] ?? variants.up}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
