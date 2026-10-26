import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // stagger delay per character (seconds)
  duration?: number; // animation duration per character
  ease?: string | number[];
  once?: boolean; // only animate on first intersection
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0.04,
  duration = 0.6,
  ease = [0.22, 1, 0.36, 1],
  once = true,
  as: Tag = "span",
}) => {
  const chars = useMemo(() => text.split(""), [text]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: "120%",
      clipPath: "inset(0 0 100% 0)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration,
        ease: ease as any,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={charVariants}
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;
