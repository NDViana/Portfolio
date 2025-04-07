"use client";

import {useActiveSectionContext} from "@/context/active-section-context";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Image from "next/image";

export default function Projects() {
    const{ref, inView} = useInView();
    const {setActive} = useActiveSectionContext();

    useEffect(()=>
    {
        if (inView) {
            console.log("InView", inView);
            setActive("Projects");
        }
    }, [ inView, setActive]);

    return (
        <section className="sm:mb-40 text-center" ref= {ref} id="projects">
            <SectionHeading> My Projects </SectionHeading>
            <div>
                {
                    projectsData.map((project,index) => (
                        <React.Fragment key={index}>
                            <Project{...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
}
type ProjectProps = (typeof projectsData)[0];

function Project({title, description, tags, imageUrl}: ProjectProps) {
    return(
        <section className="group bg-gray-100 max-w-[42rem] rounded-lg border
    border-black/5 overflow-hidden relative sm:pr-8 sm:h-[25rem]
    mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10
      sm:max-w-[50%] flex flex-col h-full">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 mb-2">{description}</p>
                <ul className="flex flex-wrap mt-2 gap-2 sm:mt-auto mb-2">
                    {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3
              py-1 text-[0.7rem] uppercase
              tracking-wider text-white
              rounded-full font-medium"
                            key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <Image
                className="w-full h-64 mt-4 sm:mt-0
        sm:absolute sm:bottom-0 sm:-right-40 sm:w-[28.25rem] sm:h-[18rem]
        sm:rounded-t-lg sm:shadow-2xl
        transition
        sm:group-hover:-translate-x-3
        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2"
                src={imageUrl}
                alt="Projects I've worked on"
                quality={95}
            />
        </section>
    );
}