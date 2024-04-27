import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import NavigationLink from "./NavigationLink";
import { BsFillCloudDownloadFill, BsGithub, BsLinkedin } from "react-icons/bs";
import useScrollToSection from "@/hooks/useScrollToSection";
import { useActiveSection } from '@/context/ActiveSectionContext';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const { activeSection } = useActiveSection();

    const navContainerRef = useRef<HTMLDivElement>(null);
    const scrollToSection = useScrollToSection();

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');

        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        // Fades navigation in
        let ctx = gsap.context(() => {
            gsap.to(navContainerRef.current, {
                opacity: 1,
                duration: 4,
                position: 'sticky',
                ease: 'power2.out'
            });
        }, navContainerRef);
        return () => ctx.revert();
    }, []);

    const handleHover = (type: 'enter' | 'leave') => {
        const directions: {
            left: number;
            right: number;
        } = {
            left: type === 'enter' ? -10 : 0,
            right: type === 'enter' ? 10 : 0,
        }
        gsap.to('.navigation-logo-left-caret', { x: directions.left });
        gsap.to('.navigation-logo-right-caret', { x: directions.right });
    }

    const links: {
        label: string;
        href: string;
        activeSectionKey?: string;
        icon?: JSX.Element;
        target?: '_blank'
    }[] = [
            {
                label: 'About',
                href: '#about',
                activeSectionKey: 'hero',
            },
            {
                label: 'Projects',
                href: '#projects',
                activeSectionKey: 'currentProjects',
            },
            {
                label: 'Experience',
                href: '#experience',
                activeSectionKey: 'experience',
            },
            {
                label: 'Skills',
                href: '#skills',
                activeSectionKey: 'skills',
            },
            {
                label: 'Contact',
                href: '#contact',
                activeSectionKey: 'contact',
            },
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/austincjenkins/',
                icon: <BsLinkedin />,
                target: '_blank',

            },
            {
                label: 'GitHub',
                href: "https://github.com/ajenkins198621",
                icon: <BsGithub />,
                target: '_blank',

            },
            {
                label: 'Resume',
                href: "https://docs.google.com/document/d/1NUSrxPuiOLH8K0OAkDzdXK9eb25I1Zzr0g6teEKfnUg/edit?usp=sharing",
                icon: <BsFillCloudDownloadFill />,
                target: '_blank',
            }
        ];

    return (
        <div
            className="navigation-container"
            onMouseEnter={() => handleHover('enter')}
            onMouseLeave={() => handleHover('leave')}
            ref={navContainerRef}
        >
            <div className="container">
                <div className="navigation-shadow" />
                <nav className='navigation'>
                    <div className="navigation-logo">
                        <a href="#top">
                            <span className="navigation-logo-left-caret">&#60;</span>
                            <span className="navigation-logo-name">Austin Jenkins</span>
                            <span className="navigation-logo-right-caret">&#47;&#62;</span>
                        </a>
                    </div>
                    <ul className="desktop-navigation">
                        {
                            links.map(({ label, href, icon, target, activeSectionKey }, idx) => (
                                <li key={idx}>
                                    <NavigationLink
                                        label={label}
                                        href={href}
                                        icon={icon}
                                        target={target}
                                        className={activeSection === activeSectionKey ? 'active' : ''}
                                        onClick={() => scrollToSection(href)}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                    <button
                        className="mobile-navigation-hamburger-menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15H42.4688M9 25.3594H42.4688M9 35.7188H42.4688" stroke="#ECE7DF" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>
                    </button>
                </nav>
                <div
                    className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <nav className={`mobile-navigation${isMobileMenuOpen ? ' menu-active' : ''}`}>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mobile-navigation-close"
                    >
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 2.5625C10.5062 2.5625 2.5625 10.5062 2.5625 20.5C2.5625 30.4938 10.5062 38.4375 20.5 38.4375C30.4938 38.4375 38.4375 30.4938 38.4375 20.5C38.4375 10.5062 30.4938 2.5625 20.5 2.5625ZM27.4187 29.4688L20.5 22.55L13.5813 29.4688L11.5312 27.4187L18.45 20.5L11.5312 13.5813L13.5813 11.5312L20.5 18.45L27.4187 11.5312L29.4688 13.5813L22.55 20.5L29.4688 27.4187L27.4187 29.4688Z" fill="#ECE7DF" />
                        </svg>
                    </button>

                    <ul>
                        {
                            links.map(({ label, href }, idx) => (
                                <li key={idx}>
                                    <a
                                        href={href}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}