import React, { useContext } from "react";
import Section from "./Section";
import Image from 'next/image'
import { CMSContext } from "@/context/CMSContext";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function ProfessionalSummary(): JSX.Element {
    const { generalInformation : { name, aboutMe, aboutMeTitle } } = useContext(CMSContext);

    return (
        <Section
            title={aboutMeTitle}
        >
            <div className="p-4 lg:p-6 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4">
                    <Image
                        className="rounded-full w-64 h-64 lg:w-64 lg:h-64 mx-auto mb-4"
                        src={'/headshot.png'}
                        alt={`${name} headshot`}
                        width={300}
                        height={300}                  
                    />
                </div>
                <div className="w-full lg:w-3/4">
                    {
                        documentToReactComponents(aboutMe.json as any)
                    }
                </div>
            </div>
        </Section>
    )

}