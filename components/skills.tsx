"use client";

import React, { useEffect, useState } from "react";
import { skillsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

export default function Skills() {
    const { ref, inView } = useInView();
    const { setActive } = useActiveSectionContext();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (inView) {
            setActive("Skills");
        }
    }, [inView, setActive]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = reverse ? prev - 1 : prev + 1;
                if (next >= skillsData.length || next < 0) {
                    setReverse(!reverse);
                    return reverse ? 1 : skillsData.length - 2;
                }
                return next;
            });
        }, 400); // Change this value to slow/speed up wave

        return () => clearInterval(interval);
    }, [reverse]);

    return (
        <motion.section
            ref={ref}
            className="max-w-[42rem] mx-auto text-center sm:mb-40 scroll-mt-28"
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeading>Skills</SectionHeading>

            <div className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden p-6 shadow-md mb-8">
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {skillsData.map((skill, index) => (
                        <Skill
                            key={index}
                            skill={skill}
                            isActive={index === currentIndex}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

type SkillProps = {
    skill: string;
    isActive: boolean;
};

function Skill({ skill, isActive }: SkillProps) {
    return (
        <motion.div
            className="px-3 py-2 flex justify-center items-center rounded-full
                      text-white shadow-md hover:shadow-lg
                      transition-all duration-300"
            initial={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            animate={isActive ? {
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
                backgroundColor: "rgba(240, 255, 240, 0.9)" // Option 1 (lightest)
            } : {
                y: 0,
                backgroundColor: "rgba(0,0,0,0.7)"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
            }}
        >
            <div className="text-[0.7rem] uppercase tracking-wider font-medium">{skill}</div>
        </motion.div>
    );
}