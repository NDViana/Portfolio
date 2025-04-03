"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default  function Intro()
{
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className ='flex items-center justify-center'>
                <div className ='relative'>
                    <motion.div initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity:1}} transition={{ duration: 0.2, type: "spring", stiffness: 125, delay:0.1 }}>
                        <Image src={"/NVHeadshot.jpg"} alt ="Nathaniel's Portrait" width = "192" height = "192" quality="95" priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.20rem] border-white shadow-xl" />
                    </motion.div>
                </div>
            </div>
            <motion.p initial={{ opacity: 0, y:100 }} animate={{opacity: 1, y:0}}
                      className ="mb-10 font-medium !leading-[1.5] mt-4 px-4 text-2xl s,:text-4xl">
                Hello my name is
                <span className="font-bold">  Nathaniel.</span> I&apos;m a{" "}
                <span className ="font-bold"> student at RPI</span>. Since middle school I have had a passion for programming. I enjoy building{" "}
                <span className="italic"> sites & apps.</span> In my studies my focus is{" "}
                <span className="underline">AI & ML</span>.
            </motion.p>
        </section>
    )
}