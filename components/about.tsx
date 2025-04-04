"use client";

import React, {useEffect} from "react";
import {motion} from "framer-motion";
import SectionHeading from "@/components/section-heading";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";

export default function About() {
    const{ref, inView} = useInView();
    const {setActive} = useActiveSectionContext();

    useEffect(()=>
    {
        if (inView) {
            console.log("InView", inView);
            setActive("About");
        }
    }, [ inView, setActive]);


    return (
        <motion.section
            ref={ref}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-center sm:mb-40 scroll-mt-28"
            id="about"
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.175}}>

            <SectionHeading>About Me</SectionHeading>

            <p className="mb-4">
                After graduating from Lynbrook High School in Lynbrook, NY, I decided to turn my passion for programming into a career.
                I enrolled at <span className="font-semibold">Rensselaer Polytechnic Institute (RPI)</span> to deepen my knowledge and build a strong foundation in computer science.
                So far, my journey has been both challenging and rewarding, as I’ve explored key topics like <span className="font-semibold">data structures, algorithms, and software engineering principles</span>.
            </p>

            <p className="mb-4">
                My coursework has given me hands-on experience in <span className="font-semibold">project management and software documentation</span>, particularly through
                my work on PSoft Tools, an open-source project designed to help students grasp fundamental software engineering concepts.
                Beyond academics, I’ve developed a passion for <span className="font-semibold">mentorship and education</span>. As the Vice President of
                <span className="font-semibold"> Coding&&Community</span>, I help organize events and teach computer science fundamentals to students, working toward closing
                the gap in CS education opportunities.
            </p>

            <p className="mb-4">
                Outside of coding, I enjoy staying active. Whether it&#39;s <span className="font-semibold">lifting or playing sports like basketball and soccer</span>,
                I’m always looking for ways to push myself physically and mentally. Recently, I’ve been working on a <span className="font-semibold">weightlifting app</span> to
                monitor my progress and improve my workouts. When I’m not at the gym or working on projects, I love watching shows such as Dexter and playing games like Super Mario Maker 2.
            </p>
        </motion.section>
    );
}


