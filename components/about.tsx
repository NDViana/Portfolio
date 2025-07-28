"use client";

import React, {useEffect} from "react";
import {motion} from "framer-motion";
import SectionHeading from "@/components/section-heading";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";

export default function About() {
    const{ref, inView} = useInView();
    const { setActive, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActive("About");
        }
    }, [inView, setActive, timeOfLastClick]);


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
                I&#39;m a CS student at RPI with a focus on backend development and AI/ML. I enjoy building scalable APIs, messing around with ML models, and connecting classroom theory to real world examples.
            </p>

            <p className="mb-4">
                Outside of tech, I enjoy lifting and playing sports like basketball and soccer. That passion led me to develop a workout tracking app. This project that blends my love for fitness and coding by allowing me monitor and progress in my training.
            </p>

            <p className="mb-4">
                What keeps me hooked on coding is the problem solving aspect. It&#39;s not always easy and debugging can be frustrating and sleep depriving. But the satisfaction of cracking a tough problem makes it all worth it. That moment of clarity is what keeps me coming back.
            </p>

        </motion.section>
    );
}


