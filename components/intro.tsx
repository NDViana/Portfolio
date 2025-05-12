"use client";

import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import React, {useEffect} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useInView} from "react-intersection-observer";


export default  function Intro()
{
    const{ref, inView} = useInView();
    const {setActive, setTimeOfLastClick,timeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActive("Home");
        }
    }, [inView, setActive, timeOfLastClick]);
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" ref = {ref} id="home">
            <div className ='flex items-center justify-center'>
                <div className ='relative'>
                    <motion.div initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity:1}} transition={{ duration: 0.2, type: "spring", stiffness: 125, delay:0.1 }}>
                        <Image src={"/NVHeadshot.jpg"} alt ="Nathaniel's Portrait" width = "192" height = "192" quality="95" priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.20rem] border-white shadow-xl" />
                    </motion.div>
                </div>
            </div>
            <motion.h1 initial={{opacity: 0, y: 100}}
                      animate={{opacity: 1, y: 0}}
                      className="mb-10 font-medium !leading-[1.5] mt-4 px-4 text-2xl sm:text-4xl">
                Hello my name is
                <span className="font-bold">  Nathaniel.</span> I&apos;m a{" "}
                <span className="font-bold"> student at RPI</span>. Since middle school I have had a passion for
                programming. I enjoy building{" "}
                <span className="italic"> sites & apps.</span> In my studies my focus is{" "}
                <span className="underline">AI & ML</span>.
            </motion.h1>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.2, type: "spring", stiffness: 125, delay: 0.1}}>
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActive("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>
                <a className="bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outlined:none focus:scale-108 hover:scale-108 active:scale-105 transition cursor-pointer border border-black/10"
                   href="/Nathaniel_Viana_Resume.pdf" download={true}>
                    Download CV{" "}<HiDownload className="opacity-60 group-hover:translate-y-0.5 transition"/>
                </a>
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] rouned-full hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
                   href="https://www.linkedin.com/in/nathaniel-viana-16448726b/" target="_blank"
                   rel="noopener noreferrer">
                    <BsLinkedin/>
                </a>
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
                   href="https://github.com/NDViana" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}