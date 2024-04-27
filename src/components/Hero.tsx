import { useRef } from "react";
import DividerBottom from "./DividerBottom";
import Image from 'next/image'
import HeroImage from './images/hero-image.png'
import { TypeAnimation } from "react-type-animation";
import useSectionObserver from '@/hooks/useSectionObserver';
import AnimateDual from "./AnimateDual";

// Check out https://www.algolia.com/... I love their search bar


export default function Hero() {
    const ref = useSectionObserver('hero');

    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <section className="hero-container" id="about" ref={ref}>
            <div className="container">
                <div className="hero" ref={heroRef}>
                    <AnimateDual>
                        <div className="hero-image">
                            <Image
                                className="hero-image-headshot"
                                src={HeroImage}
                                alt={`headshot`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                        <div className="hero-text">
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
                    </AnimateDual>
                </div>
            </div>
            <DividerBottom theme="blue" />
        </section>
    )
}