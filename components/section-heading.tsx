import React from 'react'
type SectionHeadingProps ={
    children: React.ReactNode;
}
export default function SectionHeading({children}: SectionHeadingProps)
{
    return <h2 className={"text-3xl font-semibold capitalize mb-6" }>
        {children}
    </h2>
}