"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A penultimate-year student at the{" "}
        <span className="font-medium">University of New South Wales</span>, I
        have developed a deep passion for{" "}
        <span className="font-medium">full-stack web development</span>,{" "}
        <span className="font-medium">control systems and robotics</span>, and{" "}
        <span className="font-medium">embedded systems</span>. I am also adpet
        in <span className="font-medium">machine learning </span>, especially
        when applied to <span className="font-medium">data science</span>{" "}
        problems. Safe to say, I love any technical field that enables humans to
        be more efficient, and disciplines that continually evolve at the
        fringes of scientific understanding. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> that relates to
        any of the above disciplines.
      </p>

      <p>
        Outside of engineering, I enjoy{" "}
        <span className="font-medium">hiking</span>,{" "}
        <span className="font-medium">running with my labrador</span>, and{" "}
        <span className="font-medium">soaking in sunlight</span>. I also enjoy{" "}
        <span className="font-medium">reading</span>, especially about the{" "}
        <span className="font-medium">history of civilisations </span>and
        watching videos relating to{" "}
        <span className="font-medium">aviation</span>.
      </p>
    </motion.section>
  );
}
