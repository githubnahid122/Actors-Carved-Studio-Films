"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

/** Subtle fade/slide-up-on-scroll wrapper — the site's only motion primitive, by design. */
export function FadeIn({ children, delay = 0, className, as = "div" }: FadeInProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
