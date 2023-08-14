import DividerBottom from "./DividerBottom";
import Image from 'next/image'
import HeaderGrapic from './HeaderGraphic.png'

export default function Hero() {

    return (
        <div className="hero-container">
            <div className="container">
                <div className="hero">
                    <div className="hero-image">
                        <Image
                            className="hero-image-headshot"
                            src={HeaderGrapic}
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
                        <h1>Hi, I&apos;m <span className="hero-text-name">Austin</span></h1>
                        <h2>Software Engineer</h2>
                        <p>I love building web applications for growth stage companies.</p>
                    </div>
                </div>
            </div>
            <DividerBottom />
        </div>
    )
}