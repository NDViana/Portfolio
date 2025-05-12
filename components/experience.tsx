"use client"

import { experience } from "@/lib/data";
import SectionHeading from "@/components/section-heading";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";

export default function Experience() {
    const{ref, inView} = useInView();
    const { setActive, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActive("Experience");
        }
    }, [inView, setActive, timeOfLastClick]);
    return (
        <section ref = {ref} className="relative py-20" id="experience">
            <SectionHeading >
                <div className="text-center">My experience</div>
            </SectionHeading>
            <div className="relative mx-auto max-w-5xl">
                {/* Vertical center line */}
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2" />

                <div className="space-y-20 mt-10">
                    {experience.map((item, index) => {
                        const Icon = item.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="relative flex w-full justify-between items-start"
                            >
                                {/* Left side */}
                                <div className={`w-5/12 ${isLeft ? "flex justify-end" : ""}`}>
                                    {isLeft && (
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500 mb-1">{item.year}</div>
                                            <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition w-full">
                                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                                <p className="text-sm text-gray-600">{item.location}</p>
                                                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Icon in center */}
                                <div className="z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full shadow mx-3">
                                    <Icon className="w-4 h-4 text-gray-600" />
                                </div>

                                {/* Right side */}
                                <div className={`w-5/12 ${!isLeft ? "flex justify-start" : ""}`}>
                                    {!isLeft && (
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">{item.year}</div>
                                            <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition w-full">
                                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                                <p className="text-sm text-gray-600">{item.location}</p>
                                                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
