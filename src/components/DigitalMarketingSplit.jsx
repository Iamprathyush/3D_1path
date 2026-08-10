import { motion } from "framer-motion";

const STATEMENTS = [
  {
    label: "Attention",
    copy: "Attention is earned in the first three seconds. We build campaigns that stop the scroll and hold it there.",
  },
  {
    label: "Voice",
    copy: "Every platform speaks a different language. We translate your brand into each one without losing its voice.",
  },
  {
    label: "Proof",
    copy: "Data tells us what worked. Instinct tells us what to try next. We use both, and we show our work.",
  },
];

// Split copy into words, animate word by word (mimics SplitText line-reveal)
const WordReveal = ({ text, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.03,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function DigitalMarketingSplit() {
  return (
    <section className="relative bg-black py-32 md:py-48">
      {/* Subtle noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://assets.codepen.io/16327/noise-e82662fe.png')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-28 px-6 md:gap-40 md:px-12">
        {/* Section label */}
        <motion.span
          className="text-center text-xs uppercase tracking-[0.35em] text-white/50"
          style={{ fontFamily: "'General Sans', sans-serif" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Digital Strategy
        </motion.span>

        {STATEMENTS.map((s, idx) => (
          <div key={s.label} className="dm-container">
            {/* Statement label */}
            <motion.span
              className="mb-6 block text-center text-xs uppercase tracking-[0.3em] text-white/40"
              style={{ fontFamily: "'General Sans', sans-serif" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              {s.label}
            </motion.span>

            {/* Statement copy — word-by-word reveal */}
            <h2
              className="mx-auto max-w-3xl text-center text-3xl leading-tight text-white md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <WordReveal text={s.copy} delay={0.1 + idx * 0.05} />
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
