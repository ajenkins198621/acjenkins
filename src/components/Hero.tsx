import { useLayoutEffect, useEffect,  useRef, useState } from "react";
import DividerBottom from "./DividerBottom";
import Image from 'next/image'
import HeaderGrapic from './HeaderGraphic.png'
import HeroImage from './images/hero-image.png'
import HeroImageV2 from './images/hero-image-1.png'
import HeroImageV3 from './images/hero-image-2.png'
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {

    return (
        <div className="hero-container">
            <div className="container">
                <div className="hero">
                    <div className="hero-image">
                        <Image
                            className="hero-image-headshot"
                            src={HeroImageV3}
                            alt={`headshot`}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}

                        />

                        {/* <ReactLogoSVG />
                        <TypeScriptLogoSVG />
                        <NodeLogoSVG />
                        <LaravelLogoSVG /> */}
                    </div>
                    <div className="hero-text">
                        <h1>👋 Hi, I&apos;m <span className="hero-text-name">Austin</span>! I&apos;m a...</h1>
                        <TypeAnimation
                            sequence={[
                                "Front-end Engineer.",
                                2500,
                                "Full Stack Engineer.",
                                2500,
                                "Web App Builder.",
                                2500,
                                "13er Hiker.",
                                2500,
                                "Snowboarder.",
                                4000,
                            ]}
                            wrapper="h2"
                            preRenderFirstString={true}
                            speed={40}
                            repeat={20}
                            className="typed-text"
                        />
                        <p>I love building web applications for growth stage companies.</p>
                    </div>
                </div>
            </div>
            <DividerBottom theme="blue" />
        </div>
    )
}