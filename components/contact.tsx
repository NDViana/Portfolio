"use client";

import React, {useEffect} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";

export default function Contact() {
    const{ref, inView} = useInView();
    const { setActive, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActive("Contact");
        }
    }, [inView, setActive, timeOfLastClick]);

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-4 dark:text-black/80 text-sm sm:text-base">
                Please contact me directly at{" "}
                <a
                    className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors duration-200"
                    href="mailto:nathanielviana@gmail.com"
                >
                    nathanielviana@gmail.com
                </a>{" "}
                or through this form.
            </p>


            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }
                    if (data?.error) {
                        toast.error(data.error.message || "Failed to send email.");
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}