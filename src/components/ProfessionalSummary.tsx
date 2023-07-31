import React, { useContext } from "react";
import Section from "./Section";
import Image from 'next/image'
import { CMSContext } from "@/context/CMSContext";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TypeAnimation } from 'react-type-animation';
import BorderIcon from "./BorderIcon";

export default function ProfessionalSummary(): JSX.Element {
    const { generalInformation: { name, aboutMe, aboutMeTitle } } = useContext(CMSContext);

    return (
        <div className="text-3xl py-12 lg:py-24 text-white bg-black relative">
            <div className="lg:container">
                <div className="flex flex-col lg:flex-row items-center">
                    <Image
                        className="rounded-full w-64 h-64 lg:w-64 lg:h-64 p-2 border-4 border-green"
                        src={'/headshot.png'}
                        alt={`headshot`}
                        width={300}
                        height={300}
                    />
                    <div className='flex flex-col w-full mt-6 lg:mt-0 font-bold text-sm lg:text-2xl ml-12'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "👋 Hi, I'm Austin.",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "👋 Hi, I'm a Software Engineer.",
                                1000,
                                "👋 Hi, I'm a Front-End Engineer.",
                                3000
                            ]}
                            wrapper="span"
                            preRenderFirstString={true}
                            speed={40}
                            style={{ fontSize: '1.5em', display: 'inline-block', marginBottom: '12px' }}
                            repeat={20}
                            className="typed-text"
                        />
                        <p className='font-bold text-rose-600 w-4/5 lg:w-full'>I enjoy building web applications for growth-stage companies.</p>
                        <p className='font-light text-green w-4/5 lg:w-full'>I currently work at <strong className="font-black">Vail Resorts</strong> as a <strong className="font-black">Senior Front-end Developer</strong> and earning my Master's Degree in Computer Science.</p>

                    </div>
                </div>
            </div>
            <div className="border-bottom absolute bottom-0 -mt-2" style={{marginBottom: '-6px'}}>
                <BorderIcon
                    className="text-green"
                    type="tree"
                />
            </div>
        </div>

    )

}