import { useLayoutEffect, useEffect, useRef, useState } from "react";
import DividerBottom from "./DividerBottom";
import Image from 'next/image'
import HeaderGrapic from './HeaderGraphic.png'
import HeroImage from './images/hero-image.png'
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";
import useSectionObserver from '@/hooks/useSectionObserver';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Check out https://www.algolia.com/... I love their search bar


export default function Hero() {
    const ref = useSectionObserver('hero');

    const heroRef = useRef<HTMLDivElement>(null);
    const leftItemRef = useRef(null);
    const rightItemRef = useRef(null);

    useLayoutEffect(() => {
        gsap.set(leftItemRef.current, { autoAlpha: 0, x: '-100%' });
        gsap.set(rightItemRef.current, { autoAlpha: 0, x: '100%' });


        // Fades navigation in
        let ctx = gsap.context(() => {
            gsap.to(leftItemRef.current, {
                autoAlpha: 1,
                x: '0%',
                scrollTrigger: {
                    trigger: leftItemRef.current,
                    start: 'top 80%',  // Start the animation when the top of the item hits 80% from the top of the viewport
                    end: 'top 20%',
                    scrub: true,
                }
            });

            gsap.to(rightItemRef.current, {
                autoAlpha: 1,
                x: '0%',
                scrollTrigger: {
                    trigger: rightItemRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                }
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);



    return (
        <section className="hero-container" id="about" ref={ref}>
            <div className="container">
                <div className="hero" ref={heroRef}>
                    <div className="hero-image" ref={leftItemRef}>
                        <Image
                            className="hero-image-headshot"
                            src={HeroImage}
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
                    <div className="hero-text" ref={rightItemRef}>
                        <h1>👋 Hi, I&apos;m <span className="hero-text-name">Austin</span>! I&apos;m a...</h1>
                        <TypeAnimation
                            sequence={[
                                "Front-end Engineer.",
                                2500,
                                "Full Stack Developer.",
                                // 2500,
                                // "Web App Builder.",
                                2500,
                                "13er Hiker.",
                                2500,
                                "Snowboarder.",
                                2500,
                                "Software Engineer.",
                                4000,
                            ]}
                            wrapper="h2"
                            preRenderFirstString={true}
                            speed={40}
                            repeat={20}
                            className="typed-text"
                        />
                        <p>Most of all, I love <strong>building</strong> web applications, <strong>solving</strong> complex problems and <strong>mentoring</strong> other devs in growth stage environments.</p>
                    </div>
                </div>
            </div>
            <DividerBottom theme="blue" />
        </section>
    )
}