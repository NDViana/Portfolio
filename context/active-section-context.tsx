"use client";

import React, {useState, createContext, useContext} from "react";
import {links } from "@/lib/data"

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps =
{
    children: React.ReactNode
};
type ActiveSectionContextType ={
    active: SectionName;
    setActive: React.Dispatch<React.SetStateAction<SectionName>>;
}
export const ActiveSectionContext = createContext<ActiveSectionContextType|null>(null);

export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps)
{
    const [active,setActive] = useState<SectionName>("Home");

    return (
        <ActiveSectionContext.Provider value={{
            active,
            setActive,
        }}>{children}</ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext()
{
    const context = useContext(ActiveSectionContext);

    if(context ===null)
    {
        throw new Error ("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }
    return context;
}